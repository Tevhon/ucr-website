import { useEffect, useRef } from "react";
import { displayPrice, isPriceExact } from "../data/cars";
import { useLanguage } from "../LanguageContext";
import { openWhatsApp, buildQuickCarMessage } from "../utils/whatsapp";
import "./CarModal.css";

export default function CarModal({ car, onClose, onBookNow }) {
  const { t } = useLanguage();
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!car) return null;

  const exact = isPriceExact(car.price);

  return (
    <div className="car-modal__overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="car-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="car-modal-title"
        ref={dialogRef}
        tabIndex={-1}
      >
        <button className="car-modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="car-modal__image">
          <img
            src={car.image}
            alt={car.name}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
          <div className="car-modal__image-fallback" aria-hidden="true">
            🚗
          </div>
        </div>

        <div className="car-modal__body">
          <h3 id="car-modal-title">{car.name}</h3>
          <p className="car-modal__price">{displayPrice(car.price)}</p>

          <dl className="car-modal__specs">
            <div>
              <dt>{t.car.fuel}</dt>
              <dd>{car.fuelType}</dd>
            </div>
            <div>
              <dt>{t.car.cng}</dt>
              <dd>{car.cng ? t.car.yes : t.car.no}</dd>
            </div>
            <div>
              <dt>{t.car.transmission}</dt>
              <dd>{car.transmission}</dd>
            </div>
            <div>
              <dt>{t.car.seats}</dt>
              <dd>{car.seats}</dd>
            </div>
            <div>
              <dt>{t.car.ac}</dt>
              <dd>{car.ac ? t.car.yes : t.car.no}</dd>
            </div>
          </dl>

          <p className="car-modal__duration">{t.car.duration}</p>

          <div className="car-modal__actions">
            <button className="btn btn-primary btn-block" onClick={() => onBookNow(car)}>
              {t.car.bookThis}
            </button>
            <button
              className="btn btn-outline btn-block"
              onClick={() => openWhatsApp(buildQuickCarMessage(car.name))}
            >
              {t.car.askWhatsapp}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
