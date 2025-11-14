import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, google } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email required' }), { status: 400 });
    }

    const file = path.join(process.cwd(), 'app', 'data', 'users.json');
    const text = await fs.readFile(file, 'utf8');
    const users = JSON.parse(text || '[]');

    // if google signup and user exists, return it
    let existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      // update name if passed
      if (name) existing.name = name;
      existing.lastSeen = new Date().toISOString();
      await fs.writeFile(file, JSON.stringify(users, null, 2));
      const { password: _p, ...safe } = existing;
      return new Response(JSON.stringify(safe), { status: 200 });
    }

    // create new user
    const id = Date.now().toString();
    const newUser = {
      id,
      name: name || email.split('@')[0],
      email,
      password: password || null,
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
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
