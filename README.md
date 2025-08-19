# Animeverse

**Animeverse** is a modern, full-stack web application designed for anime fans to manage, track, and explore their anime watchlist with an immersive, visually appealing interface.

Built with a focus on usability and scalability, Animeverse combines a pixel-art inspired design with robust authentication and database integration.

## Live: https://anime-verse-xi.vercel.app/

## ✨ Features

### 🔐 Authentication & User Management

- Email + password login via **Supabase Auth**
- Secure, persistent user sessions

### 📺 Anime Tracking

- Add, edit, and manage your anime watchlist
- Track progress, mark favorites, and categorize shows

### 🎨 Immersive Interface

- Pixel-art inspired animated background
- Responsive design optimized for both desktop and mobile

### 🗄️ Database Integration

- **Supabase** as the backend for user accounts and anime data persistence

### 🛠️ Extensible Architecture

- Built for future integration with APIs such as **AniList** or **Jikan**
- Ready for social features, statistics, and premium plans

---

## 🧑‍💻 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend / Auth / DB:** Supabase
- **Hosting:** _(Insert hosting choice, e.g., Vercel/Netlify)_

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn package manager
- A configured [Supabase](https://supabase.com/) project (Auth + Database)

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/animeverse.git
cd animeverse

```

Install dependencies:

```bash
npm install
# or
yarn install
```

Set up environment variables:

```bash
cp .env.example .env
```

Fill in your Supabase keys inside .env.

Start the development server:

```bash
npm run dev
```
