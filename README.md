# Phạm Huyền Đức — Developer Portfolio

Personal portfolio website for **Phạm Huyền Đức** (Fullstack Web & Mobile Developer), live at [aboutmedev.online](https://www.aboutmedev.online).

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack), React 19, TypeScript
- **Styling & UI**: Tailwind CSS v4, `next-themes` (light/dark mode), Radix UI, Lucide Icons
- **Internationalization**: `next-intl` (`vn` / `en`)
- **Contact Form**: [Resend](https://resend.com/) via `/api/contact`
- **Analytics**: Google Analytics 4 (`@next/third-parties/google`) with production-only custom event tracking (`download_cv`, `project_click`, `language_switch`, `theme_switch`)
- **Code Quality**: [Biome](https://biomejs.dev/)

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Configure environment variables**

   Copy `.env.example` to `.env` and fill in your values:

   ```bash
   cp .env.example .env
   ```

   | Variable | Scope | Description |
   | --- | --- | --- |
   | `RESEND_API_KEY` | Server | Resend API key for sending contact form emails |
   | `RESEND_TO_EMAIL` | Server | Destination email address for contact submissions |
   | `NEXT_PUBLIC_GA_ID` | Client (Public) | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) |

3. **Run the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Next.js development server |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run Biome lint and format checks |
| `pnpm format` | Format files with Biome |

## Project Structure

```text
├── messages/               # Translation files (en.json, vn.json)
├── public/                 # Static assets & downloadable CV PDF
└── src/
    ├── app/
    │   ├── [lang]/         # Localized pages (vn, en)
    │   ├── api/contact/    # Contact form API endpoint (Resend)
    │   └── layout.tsx      # Root layout, theme provider & GA4
    ├── components/
    │   ├── layout/         # Navbar
    │   ├── sections/       # Hero, Skills, Experience, Projects, Contact
    │   └── ui/             # Reusable UI primitives
    ├── hooks/              # Custom React hooks
    ├── i18n/               # next-intl routing & navigation config
    ├── interfaces/         # TypeScript interfaces
    └── lib/                # Utilities & GA4 event helper
```

## Deployment

Configured for deployment on [Vercel](https://vercel.com/):

- Add `RESEND_API_KEY` and `RESEND_TO_EMAIL` as **Secret** environment variables.
- Add `NEXT_PUBLIC_GA_ID` as a **Config** environment variable for **Production**.
