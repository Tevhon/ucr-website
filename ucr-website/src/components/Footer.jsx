import Logo from "./Logo";
import { useLanguage } from "../LanguageContext";
import { DISPLAY_PHONE } from "../utils/whatsapp";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo variant="light" />
          <p>Unique Car Rental</p>
        </div>

        <div className="footer__col">
          <h4>{t.footer.quickLinks}</h4>
          <a href="#home">{t.nav.home}</a>
          <a href="#fleet">{t.nav.cars}</a>
          <a href="#how">{t.nav.how}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#reviews">{t.nav.reviews}</a>
          <a href="#faq">{t.nav.faq}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>

        <div className="footer__col">
          <h4>{t.footer.services}</h4>
          <span>{t.services.selfDrive}</span>
          <span>{t.services.withDriver}</span>
          <span>{t.services.local}</span>
          <span>{t.services.outstation}</span>
        </div>

        <div className="footer__col">
          <h4>{t.footer.contact}</h4>
          <a href={`tel:${DISPLAY_PHONE}`}>{DISPLAY_PHONE}</a>
          <span>Kharar, Punjab</span>
        </div>

        <div className="footer__col">
          <h4>{t.footer.legal}</h4>
          <a href="#legal">{t.footer.terms}</a>
          <a href="#legal">{t.footer.privacy}</a>
          <a href="#legal">{t.footer.cancellation}</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
