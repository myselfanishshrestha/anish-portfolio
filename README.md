# Anish Shrestha — Software Engineer Portfolio

Personal portfolio website showcasing software engineering projects, technical skills, background, and experience. Built with a modern, high-performance web stack featuring React 19, TanStack Start & Router, and Tailwind CSS v4.

**Live Website**: [https://anishshrestha-portfolio.bettercallsaul9841.workers.dev](https://anishshrestha-portfolio.bettercallsaul9841.workers.dev)

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Full-Stack / Routing**: [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & modern OKLCH color palettes
- **Components**: [Radix UI Primitives](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## Project Structure

```text
├── public/                 # Static assets, favicon, and downloadable resume
├── src/
│   ├── assets/             # Images and local media
│   ├── components/
│   │   ├── sections/       # Portfolio sections (Hero, About, Skills, Projects, Experience, Contact)
│   │   ├── ui/             # Accessible UI components (e.g., Sheet / mobile drawer)
│   │   ├── Navbar.tsx      # Navigation header & mobile responsive menu
│   │   └── Footer.tsx      # Footer with quick links and copyright
│   ├── lib/                # Utility helpers (clsx, tailwind-merge)
│   ├── routes/             # TanStack Router file-based routes
│   ├── server.ts           # Server entry point for SSR
│   └── styles.css          # Design tokens and Tailwind CSS theme
├── package.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or newer) and **npm** or **bun** installed.

### Installation

```bash
# Clone repository
git clone https://github.com/your-username/anish-portfolio.git

# Navigate to project directory
cd anish-portfolio

# Install dependencies
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

To build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Contact

- **Email**: [myselfshresthaanish@gmail.com](mailto:myselfshresthaanish@gmail.com)
- **Location**: Kathmandu, Nepal
- **Phone**: +977 9860989161
