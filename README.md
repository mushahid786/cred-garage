This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


# 🚗 CRED Garage – Rewards Dashboard

A modern, responsive dashboard built using **Next.js**, **Tailwind CSS**, and **ShadCN UI**. This app simulates a CRED-like experience to showcase user profile summary, reward points, benefits, and theme toggling with animated charts and smooth UI interactions.

---

## 🚀 Live Demo

🔗 [View Live on Vercel](https://cred-garage-five.vercel.app/)

---

## 🧠 Tech Stack

- **Next.js** 15 (App Router)
- **React** 19
- **Tailwind CSS** 3.4
- **Framer Motion** – for smooth UI animations
- **Recharts** – for interactive charts
- **ShadCN UI** – modern components & accessibility
- **Lucide Icons** – clean icons
- **Context API** – for global theme and sidebar state

---

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/mushahid786/cred-garage.git
   cd cred-garage



🧩 Features Overview
✅ Responsive Dashboard Layout

Sticky header, collapsible sidebar on mobile

🌙 Dark/Light Theme Toggle

Persists across sessions using localStorage

📊 Interactive Charts

Pie chart (Reward Points), Linear chart (Optional)

🪪 User Profile Summary

Display key metrics like active status, level, etc.

💰 Benefit Grid

Shows perks in a responsive card grid

🔓 Authentication Placeholder

CTA button to simulate login from landing page

📱 Mobile-friendly UI

Hamburger menu, smooth transitions


Folder Structure

├── components/
│   ├── Sidebar.js
│   ├── RewardsChart.js
│   ├── ThemeToggle.js
│   └── ...
├── context/
│   └── ThemeContext.js
├── pages/
│   ├── index.js (Landing Page)
│   └── dashboard/
│       ├── index.js
│       ├── profile
│       │   └──index.js   
│       ├── reward
│       │   └──index.js  
│       └── benefit
│           └──index.js  
├── public/
│   └── screenshots/
│   └── loomVideo/
├── styles/
│   └── globals.css
└── README.md


