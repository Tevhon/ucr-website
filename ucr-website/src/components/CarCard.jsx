import { displayPrice, isPriceExact } from "../data/cars";
import { useLanguage } from "../LanguageContext";
import "./CarCard.css";

export default function CarCard({ car, onViewDetails, onBookNow }) {
  const { t } = useLanguage();
  const exact = isPriceExact(car.price);

  return (
    <article className="car-card">
      <div className="car-card__image-wrap">
        {car.popular && <span className="car-card__badge">{t.fleet.popularBadge}</span>}
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling.style.display = "flex";
          }}
        />
        <div className="car-card__image-fallback" aria-hidden="true">
          🚗
        </div>
      </div>

      <div className="car-card__body">
        <div className="car-card__top">
          <h3>{car.name}</h3>
          <span className="car-card__price">{displayPrice(car.price)}</span>
        </div>

        <ul className="car-card__specs">
          <li>{car.fuelType}</li>
          <li>{car.transmission}</li>
          <li>
            {car.seats} {t.car.seats}
          </li>
          {car.cng && <li>{t.car.cng}</li>}
        </ul>

        <div className="car-card__actions">
          <button className="btn btn-ghost btn-sm" onClick={() => onViewDetails(car)}>
            {t.fleet.viewDetails}
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => onBookNow(car)}>
            {exact ? t.fleet.bookNow : t.fleet.getExactPrice}
          </button>
        </div>
      </div>
    </article>
  );
}
