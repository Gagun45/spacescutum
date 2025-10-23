# TODO App

**This TODO App is live** and available to use online at: https://spacescutum.vercel.app/

A simple and responsive TODO application built with **React**, **Redux Toolkit**, **TypeScript**, and **Tailwind CSS (shadcn UI)**.  
Supports localStorage persistence, API fetching, filtering, sorting, pagination, and light/dark/system themes.



---

## Features

- Add, edit, and delete tasks
- Mark tasks as completed / uncompleted
- Persist todos in **localStorage**
- Fetch sample todos from `jsonplaceholder.typicode.com`
- Filter todos by:
  - Search query
  - Completed / uncompleted status
- Sort todos by:
  - Title
  - Creation date
  - Ascending / descending order
- Pagination support (`showOnPage`, `currentPage`)
- Editable task titles with inline edit mode
- Responsive design with **light, dark, and system theme modes**
- Shadcn UI components for consistent styling
- Fully typed with **TypeScript**

---

## Tech Stack

- **React** — frontend library
- **Redux Toolkit** — state management
- **TypeScript** — static typing
- **Tailwind CSS + shadcn UI** — design system
- **Vite** — development and build tool
- **jsonplaceholder API** — sample todos

---

## Installation

```bash
# Clone the repo
git clone https://github.com/Gagun45/spacescutum.git
cd spacescutum

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev

```

Open http://localhost:5173 in your browser.

## Folder Structure
      src/
        ├─ components/        # Reusable UI components
        ├─ hooks/             # React hooks used across the app
        ├─ redux/             # Redux slices and store setup
        ├─ lib/               # Helper functions, types
        ├─ App.tsx            # Root app component
        ├─ index.css          # Global styles
        └─ main.tsx           # Entry point
