import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import "./Legal.css";

const TERMS_ITEMS_EN = [
  { title: "Eligibility", body: "Self-drive rentals require the renter to be 18 years or older with a valid driving licence." },
  { title: "Documents", body: "A valid Driving Licence, Aadhaar or other valid ID, and Student ID (where applicable) must be presented at pickup." },
  { title: "Rental duration", body: "The minimum rental duration is 12 hours. Longer durations and outstation trips can be arranged on request." },
  { title: "Pickup & return", body: "Cars are handed over and returned in the condition and time confirmed at booking. Delays should be communicated in advance." },
  { title: "Fuel policy", body: "[Editable placeholder] Fuel policy (e.g. same-to-same) to be confirmed by the business." },
  { title: "Late return", body: "[Editable placeholder] Late return charges, if any, to be confirmed by the business." },
  { title: "Damage & accidents", body: "[Editable placeholder] Damage and accident handling procedure to be confirmed by the business." },
  { title: "Traffic fines", body: "[Editable placeholder] Responsibility for traffic fines during the rental period to be confirmed by the business." },
  { title: "Cancellation", body: "See the Cancellation Policy below." },
  { title: "Payment & security deposit", body: "[Editable placeholder] Payment terms and security deposit amount to be confirmed by the business." },
  { title: "Outstation usage", body: "Outstation trips are permitted with prior confirmation of the route and duration." },
  { title: "Driver requirements", body: "[Editable placeholder] Requirements for driver-assisted rentals to be confirmed by the business." },
  { title: "Prohibited usage", body: "Vehicles may not be used for illegal activities, racing, or sub-renting to a third party." },
];

const TERMS_ITEMS_HI = [
  { title: "पात्रता", body: "सेल्फ-ड्राइव किराए के लिए किराएदार की आयु 18 वर्ष या उससे अधिक होनी चाहिए और उसके पास वैध ड्राइविंग लाइसेंस होना चाहिए।" },
  { title: "दस्तावेज़", body: "पिकअप के समय एक वैध ड्राइविंग लाइसेंस, आधार या अन्य वैध आईडी, और (लागू होने पर) स्टूडेंट आईडी दिखानी होगी।" },
  { title: "किराया अवधि", body: "न्यूनतम किराया अवधि 12 घंटे है। लंबी अवधि और आउटस्टेशन यात्राओं की व्यवस्था अनुरोध पर की जा सकती है।" },
  { title: "पिकअप और वापसी", body: "बुकिंग के समय पुष्टि की गई स्थिति और समय पर कारें सौंपी और वापस की जाती हैं। देरी की जानकारी पहले से दी जानी चाहिए।" },
  { title: "ईंधन नीति", body: "[संपादन योग्य प्लेसहोल्डर] ईंधन नीति की पुष्टि व्यवसाय द्वारा की जाएगी।" },
  { title: "देरी से वापसी", body: "[संपादन योग्य प्लेसहोल्डर] देरी से वापसी शुल्क, यदि कोई हो, व्यवसाय द्वारा पुष्टि किया जाएगा।" },
  { title: "क्षति और दुर्घटना", body: "[संपादन योग्य प्लेसहोल्डर] क्षति और दुर्घटना प्रबंधन प्रक्रिया व्यवसाय द्वारा पुष्टि की जाएगी।" },
  { title: "ट्रैफ़िक जुर्माना", body: "[संपादन योग्य प्लेसहोल्डर] किराए की अवधि के दौरान ट्रैफ़िक जुर्माने की ज़िम्मेदारी व्यवसाय द्वारा पुष्टि की जाएगी।" },
  { title: "रद्दीकरण", body: "नीचे रद्दीकरण नीति देखें।" },
  { title: "भुगतान व सुरक्षा जमा", body: "[संपादन योग्य प्लेसहोल्डर] भुगतान की शर्तें और सुरक्षा जमा राशि व्यवसाय द्वारा पुष्टि की जाएगी।" },
  { title: "आउटस्टेशन उपयोग", body: "मार्ग और अवधि की पूर्व पुष्टि के साथ आउटस्टेशन यात्राओं की अनुमति है।" },
  { title: "ड्राइवर आवश्यकताएं", body: "[संपादन योग्य प्लेसहोल्डर] ड्राइवर सहित किराए की आवश्यकताएं व्यवसाय द्वारा पुष्टि की जाएंगी।" },
  { title: "निषिद्ध उपयोग", body: "वाहनों का उपयोग अवैध गतिविधियों, रेसिंग, या किसी तीसरे पक्ष को उप-किराए पर देने के लिए नहीं किया जा सकता।" },
];

export default function Legal() {
  const { t, lang } = useLanguage();
  const [tab, setTab] = useState("terms");
  const termsItems = lang === "hi" ? TERMS_ITEMS_HI : TERMS_ITEMS_EN;

  return (
    <section id="legal" className="section legal">
      <div className="container">
        <div className="legal__tabs" role="tablist">
          <button
            role="tab"
            aria-selected={tab === "terms"}
            className={tab === "terms" ? "is-active" : ""}
            onClick={() => setTab("terms")}
          >
            {t.footer.terms}
          </button>
          <button
            role="tab"
            aria-selected={tab === "privacy"}
            className={tab === "privacy" ? "is-active" : ""}
            onClick={() => setTab("privacy")}
          >
            {t.footer.privacy}
          </button>
          <button
            role="tab"
            aria-selected={tab === "cancellation"}
            className={tab === "cancellation" ? "is-active" : ""}
            onClick={() => setTab("cancellation")}
          >
            {t.footer.cancellation}
          </button>
        </div>

        <div className="legal__panel">
          {tab === "terms" && (
            <div>
              <h2>{t.terms.heading}</h2>
              <p className="legal__note">{t.terms.note}</p>
              <dl className="legal__list">
                {termsItems.map((item) => (
                  <div key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {tab === "privacy" && (
            <div>
              <h2>{t.privacy.heading}</h2>
              <p className="legal__note">{t.privacy.body}</p>
            </div>
          )}

          {tab === "cancellation" && (
            <div>
              <h2>{t.cancellation.heading}</h2>
              <p className="legal__note">{t.cancellation.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
