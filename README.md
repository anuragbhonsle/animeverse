<a href="https://git.io/typing-svg"> <img src="https://readme-typing-svg.herokuapp.com?font=Inter&size=40&duration=4000&pause=3000&color=8B5CF6&width=700&height=60&lines=Animeverse" /> </a>

**Animeverse** is a modern, full-stack web application designed for anime fans to manage, track, and explore their anime watchlist with an immersive, pixel-art inspired interface.

Built with a focus on usability and scalability, Animeverse combines a nostalgic 8-bit aesthetic with robust authentication and database integration.

## Live demo: [animeverse-app.vercel.app](https://animeverse-app.vercel.app/)

## Features

- **Watchlist tracking** — add, edit, and manage your anime list
- **Progress tracking** — track episodes watched, mark favorites, and categorize shows
- **Authentication** — secure email + password login with persistent sessions
- **Pixel-art UI** — animated, retro-inspired background with a responsive layout
- **Database-backed** — all accounts and watchlist data persisted in Supabase
- **Extensible core** — built for future AniList / Jikan API integration, social features, and stats

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend / Auth / DB:** Supabase
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- A configured [Supabase](https://supabase.com/) project (Auth + Database)

### Installation

```bash
git clone https://github.com/anuragbhonsle/animeverse
cd animeverse
```

```bash
npm install
# or
yarn install
```

### Environment Variables

```bash
cp .env.example .env
```

Fill in your Supabase keys inside `.env`.

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

```
├── src/
│   ├── pages/              # Watchlist, login, and profile views
│   ├── components/         # UI components (cards, nav, pixel background)
│   ├── lib/                # Supabase client and helpers
│   └── styles/             # Tailwind config and theme
└── public/                 # Static assets
```

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a PR or an issue.

## License

Distributed under the MIT License. See `LICENSE` for more information.