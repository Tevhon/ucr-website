import { useLanguage } from "../LanguageContext";
import "./WhyUs.css";

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="section section--paper why">
      <div className="container">
        <div className="section-head">
          <h2>{t.why.heading}</h2>
        </div>
        <div className="why__grid">
          {t.why.items.map((item) => (
            <div className="why__card" key={item.title}>
              <span className="why__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
