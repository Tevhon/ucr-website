import { useLanguage } from "../LanguageContext";
import { openWhatsApp, DISPLAY_PHONE } from "../utils/whatsapp";
import "./MobileBar.css";

export default function MobileBar() {
  const { t } = useLanguage();

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mobile-bar" role="navigation" aria-label="Quick actions">
      <a className="mobile-bar__btn" href={`tel:${DISPLAY_PHONE}`}>
        <span aria-hidden="true">📞</span>
        <span>{t.mobileBar.call}</span>
      </a>
      <button
        className="mobile-bar__btn"
        onClick={() =>
          openWhatsApp("Hi Unique Car Rental 👋\n\nI'd like to know more about your cars.")
        }
      >
        <span aria-hidden="true">💬</span>
        <span>{t.mobileBar.whatsapp}</span>
      </button>
      <button className="mobile-bar__btn mobile-bar__btn--primary" onClick={scrollToBooking}>
        <span aria-hidden="true">🚗</span>
        <span>{t.mobileBar.book}</span>
      </button>
    </div>
  );
}
