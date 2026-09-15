import { useLanguage } from "../LanguageContext";
import "./About.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__art" aria-hidden="false">
          <img className="about__photo" src="/cars/about-photo.jpg" alt="Unique Car Rental team or car" />
        </div>
        <div className="about__copy">
          <h2>{t.about.heading}</h2>
          <p>{t.about.body1}</p>
          <p>{t.about.body2}</p>
        </div>
      </div>
    </section>
  );
}
