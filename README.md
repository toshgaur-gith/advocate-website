# Premium Advocate & Legal Consultant Website

Static, production-ready Next.js 15 website for a premium black-and-gold advocate / legal consultant brand.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Swiper.js
- Vercel-ready static pages

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Vercel Deployment

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Keep the default framework preset as `Next.js`.
4. Build command: `npm run build`.
5. Output directory: `.next`.
6. Deploy.

No environment variables are required.

## Content Updates

Core website content is data-driven in `data/site.ts`.

Hero banners are intentionally simple to replace:

```ts
export const heroSlides = [
  {
    image: "https://images.unsplash.com/...",
    title: "Defending Rights. Delivering Justice.",
    subtitle: "Strategic legal representation...",
    primaryCta: "Chat on WhatsApp",
    secondaryCta: "Book Consultation"
  }
];
```

For local images, add optimized `.webp` files under `public/images` and update the image URL, for example:

```ts
image: "/images/banner1.webp"
```

## Performance Notes

- Uses `next/image` with AVIF/WebP support.
- Only interactive sections are client components.
- Fonts use `next/font` with `display: swap`.
- Sliders are isolated to relevant sections.
- Mobile bottom CTA is lightweight and fixed for conversion.

## Legal Disclaimer

The footer includes the Bar Council of India disclaimer required for advocate websites. Review final wording with the advocate before production launch.
