import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import "./Reviews.css";

// Clearly marked SAMPLE reviews for development — replace with real
// customer reviews once the business shares them. Do not present these
// as verified Google reviews.
const SAMPLE_REVIEWS = [
  {
    name: "Rahul S.",
    rating: 5,
    trip: "Swift · Local rental",
    text: "Booking was quick and the car was clean and ready on time. Easy WhatsApp process.",
  },
  {
    name: "Priya K.",
    rating: 5,
    trip: "Thar · Weekend outstation",
    text: "Took the Thar for a weekend trip out of Kharar. Smooth pickup and clear pricing.",
  },
  {
    name: "Aman G.",
    rating: 4,
    trip: "Creta · With driver",
    text: "Driver was polite and the car was comfortable. Would rent again for family trips.",
  },
];

export default function Reviews() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const go = (delta) => {
    setIndex((i) => (i + delta + SAMPLE_REVIEWS.length) % SAMPLE_REVIEWS.length);
  };

  const review = SAMPLE_REVIEWS[index];

  return (
    <section id="reviews" className="section section--paper reviews">
      <div className="container">
        <div className="section-head">
          <h2>{t.reviews.heading}</h2>
          <p>{t.reviews.subtitle}</p>
        </div>

        <div className="reviews__carousel">
          <button className="reviews__nav" onClick={() => go(-1)} aria-label="Previous review">
            ‹
          </button>

          <div className="reviews__card">
            {/* <span className="reviews__tag">{t.reviews.placeholderTag}</span>/ */}
            <div className="reviews__stars" aria-label={`${review.rating} out of 5 stars`}>
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p className="reviews__text">{review.text}</p>
            <div className="reviews__meta">
              <strong>{review.name}</strong>
              <span>{review.trip}</span>
            </div>
          </div>

          <button className="reviews__nav" onClick={() => go(1)} aria-label="Next review">
            ›
          </button>
        </div>

        <div className="reviews__dots">
          {SAMPLE_REVIEWS.map((r, i) => (
            <button
              key={r.name}
              className={`reviews__dot ${i === index ? "is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
