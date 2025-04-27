# Simple SPA Frontend - ADV JS Project

This is the **frontend** of the Simple SPA project for the Advanced JavaScript course (EPITA).  
It is built with **Next.js 14**, styled with **TailwindCSS**, and deployed on **Netlify**.

## Live Website

- Frontend (Netlify): [https://s4-advjs-project.netlify.app/](https://s4-advjs-project.netlify.app/)

## Tech Stack

- Next.js 14
- React
- TailwindCSS
- TypeScript
- Shadcn UI components
- Netlify (hosting)

## Features

- User Sign Up
- User Login
- Protected Dashboard
- Dynamic Display of User Information
- Create Product
- View all published Products on Home Page
- Responsive Design
- LocalStorage for user session management

## Setup Instructions

1. Clone the repository:

git clone https://github.com/callanicha/S4-advjs-loginProject.git
cd S4-advjs-loginProject

2. Install dependencies:

npm install

3. Create .env.local file:

NEXT_PUBLIC_API_URL=https://s4-advjs-backend.onrender.com

4. Run the development server:

npm run dev

5. Open http://localhost:3000 to view the app.

## Deployment

Frontend is automatically deployed to Netlify.

Environment variable NEXT_PUBLIC_API_URL is configured in Netlify dashboard.