import { useLanguage } from "../LanguageContext";
import "./HowItWorks.css";

export default function HowItWorks() {
  const { t } = useLanguage();
  const steps = [
    { n: "01", title: t.how.step1Title, desc: t.how.step1Desc, icon: "🚗" },
    { n: "02", title: t.how.step2Title, desc: t.how.step2Desc, icon: "📅" },
    { n: "03", title: t.how.step3Title, desc: t.how.step3Desc, icon: "💬" },
    { n: "04", title: t.how.step4Title, desc: t.how.step4Desc, icon: "🛣️" },
  ];

  return (
    <section id="how" className="section how">
      <div className="container">
        <div className="section-head">
          <h2>{t.how.heading}</h2>
        </div>

        <div className="how__grid">
          {steps.map((step) => (
            <div className="how__step" key={step.n}>
              <span className="how__num">{step.n}</span>
              <span className="how__icon" aria-hidden="true">
                {step.icon}
              </span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
