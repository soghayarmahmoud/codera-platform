
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# 🧠 Codera — Learn to Code the Smart Way

> **An interactive programming education platform** built for learners who want to go beyond theory.  
> Codera combines tutorials, coding playgrounds, and gamified learning to make programming engaging, practical, and fun.

---

## 🚀 Vision
Codera aims to become the **next-generation W3Schools**, helping developers learn by doing — with real-time feedback, progress tracking, and a growing library of tutorials across major programming languages.

---

## ✨ Features

- 🧩 **Interactive Tutorials** — Learn step-by-step with runnable code examples.
- 🧠 **Smart Practice** — Quizzes and coding exercises with instant feedback.
- 🎮 **Gamification** — Earn XP, unlock badges, and climb the leaderboard.
- 📊 **Progress Tracking** — Save your learning journey and pick up where you left off.
- 🔐 **User Accounts** — Secure login and personalized dashboard.
- 🧑‍🏫 **Admin Panel** — Manage courses, lessons, and exercises.
- 🌐 **Multi-language Support** — Start with HTML, CSS, JavaScript, and Python (more coming soon!).

---

## 🏗️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | Next.js / React + Tailwind CSS + Monaco Editor |
| **Backend** | Node.js (NestJS / Express) + PostgreSQL + Redis |
| **Auth** | JWT / OAuth (Google, GitHub) |
| **Sandbox** | Dockerized code runner or Judge0 API |
| **Infra** | Vercel + Render / Railway + AWS S3 |
| **Mobile (Future)** | Flutter or React Native |

---

## 🧭 Roadmap (MVP)

- [x] Project setup and design system  
- [x] Auth system (register, login, profile)  
- [x] Tutorials & lessons model  
- [ ] Code runner (sandbox)  
- [ ] Quiz and exercises module  
- [ ] Gamification (XP, levels, badges)  
- [ ] Leaderboard  
- [ ] Admin dashboard  
- [ ] Beta release 🚀  

---

## 🧑‍💻 Getting Started (Development)

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/codera-platform.git
cd codera-platform
```
### 2️⃣ Install dependencies
```bash
npm install
# or
yarn install
```
###  Run development server
```bash
npm run dev

```
### 🧩 Folder Structure
```bash
codera-platform/
├── frontend/        # Next.js / React client
├── backend/         # API (NestJS or Express)
├── docs/            # Documentation
├── .env.example
└── README.md
```
### 🥇 Gamification System (Preview)

| Action                 | XP Earned |
| ---------------------- | --------- |
| Complete a lesson      | +10 XP    |
| Pass a quiz            | +50 XP    |
| Solve coding challenge | +100 XP   |
| Daily streak           | +5 XP     |


