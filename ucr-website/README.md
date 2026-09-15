# Unique Car Rental (UCR) — Website

A React + Vite frontend for Unique Car Rental (Kharar, Punjab). No backend, no database, no login — this is a car showcase + WhatsApp enquiry site.

## Tech stack
- React
- Plain CSS (one `.css` file per component)
- Vite as the dev/build tool (no Next.js, no TypeScript, no Tailwind)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── components/       # Navbar, Hero, Fleet, CarCard, CarModal, BookingForm,
│                      # HowItWorks, WhyUs, About, Reviews, FAQ, Legal,
│                      # Contact, Footer, MobileBar, Logo — each with its own .css
├── data/
│   ├── cars.js        # Fleet data + the displayPrice() masking rule
│   └── translations.js# English / Hindi copy
├── hooks/
│   └── useReveal.js    # scroll-reveal intersection observer hook
├── utils/
│   └── whatsapp.js     # wa.me link + message builders
├── LanguageContext.jsx # EN/HI toggle, persisted to localStorage
├── App.jsx
├── main.jsx
└── index.css           # design tokens + shared styles
```

## Things to plug in before going live

1. **Car photos** — drop real photos into `public/cars/` using the filenames
   already referenced in `src/data/cars.js` (e.g. `public/cars/swift.jpg`).
   Until then, cards show a simple car-emoji placeholder.
2. **Fuel type / CNG / transmission / seats / AC** in `src/data/cars.js` are
   editable placeholders — confirm the real specs per car.
3. **Reviews** in `src/components/Reviews.jsx` are clearly marked sample
   reviews — replace with real customer reviews once available.
4. **Terms / fuel policy / late fees / deposit** in `src/components/Legal.jsx`
   are marked as editable placeholders — fill in the business's real policy
   text once confirmed.
5. **WhatsApp number** lives in `src/utils/whatsapp.js` if it ever needs to
   change.

## Price display rule

Prices ≤ ₹3000 show exactly (e.g. `₹2500/day`). Prices above ₹3000 have their
first digit masked (e.g. `₹3600` → `₹X600/day`) via `displayPrice()` in
`src/data/cars.js` — the real numeric price always stays in the data, only
the display string is masked.
