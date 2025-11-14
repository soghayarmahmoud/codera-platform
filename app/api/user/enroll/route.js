import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, course } = body;
    if (!email || !course) return new Response(JSON.stringify({ error: 'Missing email or course' }), { status: 400 });

    const file = path.join(process.cwd(), 'app', 'data', 'users.json');
    const text = await fs.readFile(file, 'utf8');
    const users = JSON.parse(text || '[]');

    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });

    user.enrolledCourses = user.enrolledCourses || [];
    const exists = user.enrolledCourses.find(c => c.slug === course.slug);
    if (!exists) {
      // initialize progress fields
      user.enrolledCourses.push({ ...course, progress: 0 });
      // reward initial stars
      user.stars = (user.stars || 0) + 5;
    }

    await fs.writeFile(file, JSON.stringify(users, null, 2));
    const { password: _pw, ...safe } = user;
    return new Response(JSON.stringify(safe), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
