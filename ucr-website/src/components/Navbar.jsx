import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLanguage } from "../LanguageContext";
import "./Navbar.css";

const NAV_ITEMS = [
  { key: "home", href: "#home" },
  { key: "cars", href: "#fleet" },
  { key: "how", href: "#how" },
  { key: "about", href: "#about" },
  { key: "reviews", href: "#reviews" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={handleLinkClick} aria-label="Unique Car Rental home">
          <Logo />
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.key} href={item.href}>
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="lang-switch"
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "is-active" : ""}>English</span>
            <span className="lang-switch__sep">|</span>
            <span className={lang === "hi" ? "is-active" : ""}>हिन्दी</span>
          </button>
          <a href="#booking" className="btn btn-primary btn-sm navbar__cta">
            {t.nav.book}
          </a>
          <button
            className={`navbar__burger ${open ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.key} href={item.href} onClick={handleLinkClick}>
              {t.nav[item.key]}
            </a>
          ))}
          <a href="#booking" className="btn btn-primary btn-block" onClick={handleLinkClick}>
            {t.nav.book}
          </a>
        </nav>
      </div>
    </header>
  );
}
