import { useLanguage } from "../LanguageContext";
import { openWhatsApp } from "../utils/whatsapp";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__tags">{t.hero.tags}</p>
          <h1 className="hero__title">
            {t.hero.title} <span className="hero__title-emoji">🚗</span>
          </h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <p className="hero__price">{t.hero.startingFrom}</p>

          <div className="hero__actions">
            <a href="#booking" className="btn btn-primary">
              {t.hero.bookBtn}
            </a>
            <button
              className="btn btn-outline"
              onClick={() =>
                openWhatsApp("Hi Unique Car Rental 👋\n\nI'd like to know more about your cars.")
              }
            >
              {t.hero.whatsappBtn}
            </button>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="hero__art-blob" />
          <img className="hero__car" src="./public/cars/hero__car.jpg" alt="" />
          <svg
            // className="hero__car"
            // viewBox="0 0 520 260"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="260" cy="228" rx="210" ry="16" fill="#17160f" opacity="0.08" />
            <path
              d="M60 165 C55 130 90 100 140 96 L175 93 C195 65 230 46 270 46 L330 46 C370 46 400 70 412 100 L430 102 C465 106 492 132 492 165 L492 182 C492 190 485 197 476 197 H452 C446 214 428 226 408 226 C388 226 371 214 365 197 H215 C209 214 191 226 171 226 C151 226 133 214 128 197 H76 C67 197 60 190 60 181 Z"
              fill="#ffc93c"
            />
            <path
              d="M175 93 L200 100 C215 78 240 66 268 66 L326 66 C356 66 380 84 392 102 L235 102 C240 98 246 96 253 95 Z"
              fill="#17160f"
              opacity="0.9"
            />
            <rect x="255" y="80" width="70" height="24" rx="4" fill="#fef6df" opacity="0.85" />
            <circle cx="171" cy="197" r="30" fill="#17160f" />
            <circle cx="171" cy="197" r="13" fill="#fef6df" />
            <circle cx="408" cy="197" r="30" fill="#17160f" />
            <circle cx="408" cy="197" r="13" fill="#fef6df" />
            <rect x="80" y="140" width="26" height="10" rx="3" fill="#17160f" opacity="0.7" />
            <rect x="440" y="140" width="20" height="8" rx="3" fill="#17160f" opacity="0.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
