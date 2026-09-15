import { useEffect, useState } from "react";
import cars from "../data/cars";
import { useLanguage } from "../LanguageContext";
import { openWhatsApp, buildBookingMessage } from "../utils/whatsapp";
import "./BookingForm.css";

const emptyForm = {
  name: "",
  phone: "",
  car: "",
  rentalType: "Self Drive",
  pickupDate: "",
  pickupTime: "",
  returnDate: "",
  returnTime: "",
  pickupLocation: "",
  dlConfirm: false,
  idConfirm: false,
  studentConfirm: false,
  message: "",
};

export default function BookingForm({ presetCar, onConsumePreset }) {
  const { t } = useLanguage();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetCar) {
      setForm((f) => ({ ...f, car: presetCar.name }));
      onConsumePreset?.();
    }
  }, [presetCar, onConsumePreset]);

  const update = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = t.booking.required;
    if (!/^\d{10}$/.test(form.phone.trim())) next.phone = t.booking.invalidPhone;
    if (!form.car) next.car = t.booking.selectCarError;
    if (!form.pickupDate) next.pickupDate = t.booking.required;
    if (!form.pickupTime) next.pickupTime = t.booking.required;
    if (!form.returnDate) next.returnDate = t.booking.required;
    if (!form.returnTime) next.returnTime = t.booking.required;
    if (!form.pickupLocation.trim()) next.pickupLocation = t.booking.required;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    const d = new Date(`${isoDate}T00:00:00`);
    if (Number.isNaN(d.getTime())) return isoDate;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildBookingMessage({
      ...form,
      pickupDate: formatDate(form.pickupDate),
      returnDate: formatDate(form.returnDate),
    });
    openWhatsApp(message);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section section--paper booking">
      <div className="container">
        <div className="section-head">
          <h2>{t.booking.heading}</h2>
          <p>{t.booking.subtitle}</p>
        </div>

        <form className="booking__form" onSubmit={handleSubmit} noValidate>
          <div className="booking__grid">
            <div className="field">
              <label htmlFor="bf-name">{t.booking.fullName}</label>
              <input id="bf-name" type="text" value={form.name} onChange={update("name")} />
              {errors.name && <span className="field__error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="bf-phone">{t.booking.phone}</label>
              <input
                id="bf-phone"
                type="tel"
                inputMode="numeric"
                value={form.phone}
                onChange={update("phone")}
                placeholder="98XXXXXXXX"
              />
              {errors.phone && <span className="field__error">{errors.phone}</span>}
            </div>

            <div className="field">
              <label htmlFor="bf-car">{t.booking.selectedCar}</label>
              <select id="bf-car" value={form.car} onChange={update("car")}>
                <option value="">—</option>
                {cars.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              {errors.car && <span className="field__error">{errors.car}</span>}
            </div>

            <div className="field">
              <span className="field__label">{t.booking.rentalType}</span>
              <div className="booking__radio-row">
                <label>
                  <input
                    type="radio"
                    name="rentalType"
                    value="Self Drive"
                    checked={form.rentalType === "Self Drive"}
                    onChange={update("rentalType")}
                  />
                  {t.booking.selfDrive}
                </label>
                <label>
                  <input
                    type="radio"
                    name="rentalType"
                    value="With Driver"
                    checked={form.rentalType === "With Driver"}
                    onChange={update("rentalType")}
                  />
                  {t.booking.withDriver}
                </label>
              </div>
            </div>

            <div className="field">
              <label htmlFor="bf-pickup-date">{t.booking.pickupDate}</label>
              <input id="bf-pickup-date" type="date" value={form.pickupDate} onChange={update("pickupDate")} />
              {errors.pickupDate && <span className="field__error">{errors.pickupDate}</span>}
            </div>

            <div className="field">
              <label htmlFor="bf-pickup-time">{t.booking.pickupTime}</label>
              <input id="bf-pickup-time" type="time" value={form.pickupTime} onChange={update("pickupTime")} />
              {errors.pickupTime && <span className="field__error">{errors.pickupTime}</span>}
            </div>

            <div className="field">
              <label htmlFor="bf-return-date">{t.booking.returnDate}</label>
              <input id="bf-return-date" type="date" value={form.returnDate} onChange={update("returnDate")} />
              {errors.returnDate && <span className="field__error">{errors.returnDate}</span>}
            </div>

            <div className="field">
              <label htmlFor="bf-return-time">{t.booking.returnTime}</label>
              <input id="bf-return-time" type="time" value={form.returnTime} onChange={update("returnTime")} />
              {errors.returnTime && <span className="field__error">{errors.returnTime}</span>}
            </div>

            <div className="field field--full">
              <label htmlFor="bf-location">{t.booking.pickupLocation}</label>
              <input
                id="bf-location"
                type="text"
                value={form.pickupLocation}
                onChange={update("pickupLocation")}
                placeholder="Kharar / Mohali / ..."
              />
              {errors.pickupLocation && <span className="field__error">{errors.pickupLocation}</span>}
            </div>
          </div>

          <div className="booking__checks">
            <label>
              <input type="checkbox" checked={form.dlConfirm} onChange={update("dlConfirm")} />
              {t.booking.dlConfirm}
            </label>
            <label>
              <input type="checkbox" checked={form.idConfirm} onChange={update("idConfirm")} />
              {t.booking.idConfirm}
            </label>
            <label>
              <input type="checkbox" checked={form.studentConfirm} onChange={update("studentConfirm")} />
              {t.booking.studentConfirm}
            </label>
          </div>

          <div className="field field--full">
            <label htmlFor="bf-message">{t.booking.message}</label>
            <textarea id="bf-message" rows={3} value={form.message} onChange={update("message")} />
          </div>

          <button type="submit" className="btn btn-primary booking__submit">
            {t.booking.submit}
          </button>

          {submitted && <p className="booking__success">✅ WhatsApp opened in a new tab.</p>}
        </form>
      </div>
    </section>
  );
}
