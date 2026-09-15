import { useLanguage } from "../LanguageContext";
import { openWhatsApp, DISPLAY_PHONE } from "../utils/whatsapp";
import "./Contact.css";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <h2>{t.contact.heading}</h2>
        <p className="contact__name">Unique Car Rental</p>
        <p className="contact__location">Kharar, Punjab</p>
        <p className="contact__phone">{DISPLAY_PHONE}</p>

        <div className="contact__actions">
          <a className="btn btn-outline" href={`tel:${DISPLAY_PHONE}`}>
            📞 {t.contact.callBtn}
          </a>
          <button
            className="btn btn-primary"
            onClick={() =>
              openWhatsApp("Hi Unique Car Rental 👋\n\nI'd like to know more about your cars.")
            }
          >
            💬 {t.contact.whatsappBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
