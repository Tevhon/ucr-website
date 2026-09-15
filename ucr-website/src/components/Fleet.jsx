import { useMemo, useState } from "react";
import cars from "../data/cars";
import CarCard from "./CarCard";
import CarModal from "./CarModal";
import { useLanguage } from "../LanguageContext";
import "./Fleet.css";

const SEAT_OPTIONS = [...new Set(cars.map((c) => c.seats))].sort((a, b) => a - b);

export default function Fleet({ onBookCar }) {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [fuelFilter, setFuelFilter] = useState("all");
  const [cngOnly, setCngOnly] = useState(false);
  const [seatsFilter, setSeatsFilter] = useState("all");
  const [activeCar, setActiveCar] = useState(null);

  const fuelOptions = useMemo(() => [...new Set(cars.map((c) => c.fuelType))], []);

  const filteredCars = useMemo(() => {
    let list = cars.filter((car) => {
      const matchesQuery = car.name.toLowerCase().includes(query.trim().toLowerCase());
      const matchesFuel = fuelFilter === "all" || car.fuelType === fuelFilter;
      const matchesCng = !cngOnly || car.cng;
      const matchesSeats = seatsFilter === "all" || car.seats === Number(seatsFilter);
      return matchesQuery && matchesFuel && matchesCng && matchesSeats;
    });

    if (sortBy === "price-low") {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (sortBy === "popular") {
      list = [...list].sort((a, b) => Number(b.popular) - Number(a.popular));
    }

    return list;
  }, [query, sortBy, fuelFilter, cngOnly, seatsFilter]);

  return (
    <section id="fleet" className="section fleet">
      <div className="container">
        <div className="section-head">
          <h2>{t.fleet.heading}</h2>
          <p>{t.fleet.subtitle}</p>
        </div>

        <div className="fleet__controls">
          <div className="fleet__search">
            <span aria-hidden="true">🔍</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.fleet.searchPlaceholder}
              aria-label={t.fleet.searchPlaceholder}
            />
          </div>

          <div className="fleet__filters">
            <label className="fleet__filter">
              <span className="visually-hidden">{t.fleet.sortLabel}</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} aria-label={t.fleet.sortLabel}>
                <option value="popular">{t.fleet.sortPopular}</option>
                <option value="price-low">{t.fleet.sortPriceLow}</option>
                <option value="price-high">{t.fleet.sortPriceHigh}</option>
              </select>
            </label>

            <label className="fleet__filter">
              <span className="visually-hidden">{t.fleet.filterFuel}</span>
              <select
                value={fuelFilter}
                onChange={(e) => setFuelFilter(e.target.value)}
                aria-label={t.fleet.filterFuel}
              >
                <option value="all">{t.fleet.filterFuel}: {t.fleet.filterAll}</option>
                {fuelOptions.map((fuel) => (
                  <option key={fuel} value={fuel}>
                    {fuel}
                  </option>
                ))}
              </select>
            </label>

            <label className="fleet__filter">
              <span className="visually-hidden">{t.fleet.filterSeats}</span>
              <select
                value={seatsFilter}
                onChange={(e) => setSeatsFilter(e.target.value)}
                aria-label={t.fleet.filterSeats}
              >
                <option value="all">{t.fleet.filterSeats}: {t.fleet.filterAll}</option>
                {SEAT_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s} {t.car.seats}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              className={`fleet__chip ${cngOnly ? "is-active" : ""}`}
              onClick={() => setCngOnly((v) => !v)}
              aria-pressed={cngOnly}
            >
              {t.fleet.filterCng}
            </button>
          </div>
        </div>

        {filteredCars.length === 0 ? (
          <p className="fleet__empty">{t.fleet.noResults}</p>
        ) : (
          <div className="fleet__grid">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} onViewDetails={setActiveCar} onBookNow={onBookCar} />
            ))}
          </div>
        )}
      </div>

      {activeCar && (
        <CarModal
          car={activeCar}
          onClose={() => setActiveCar(null)}
          onBookNow={(car) => {
            setActiveCar(null);
            onBookCar(car);
          }}
        />
      )}
    </section>
  );
}
