import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password, google } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email required' }), { status: 400 });
    }

    const file = path.join(process.cwd(), 'app', 'data', 'users.json');
    const text = await fs.readFile(file, 'utf8');
    const users = JSON.parse(text || '[]');

    let user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      if (google) {
        // create a new user for google
        const id = Date.now().toString();
        const newUser = {
          id,
          name: email.split('@')[0],
          email,
          password: null,
          stars: 0,
          lastSeen: new Date().toISOString(),
          achievements: [],
          solvedProblems: 0,
          enrolledCourses: []
        };
        users.push(newUser);
        await fs.writeFile(file, JSON.stringify(users, null, 2));
        const { password: _pw, ...safe } = newUser;
        return new Response(JSON.stringify(safe), { status: 201 });
      }
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    if (!google) {
      // naive password compare (temp DB)
      if (!user.password || user.password !== password) {
        return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
      }
    }

    user.lastSeen = new Date().toISOString();
    await fs.writeFile(file, JSON.stringify(users, null, 2));
    const { password: _pw, ...safe } = user;
    return new Response(JSON.stringify(safe), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
