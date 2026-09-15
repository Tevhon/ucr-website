import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import "./FAQ.css";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? -1 : i));

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-head">
          <h2>{t.faq.heading}</h2>
        </div>

        <div className="faq__list">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={item.q}>
                <button
                  className="faq__question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="faq__answer"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
