import "./Logo.css";

export default function Logo({ variant = "dark", size = "md" }) {
  const isLight = variant === "light";
  return (
    <span className={`logo logo--${size} ${isLight ? "logo--light" : ""}`}>
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="1em" height="1em">
          <rect x="1" y="1" width="38" height="38" rx="11" className="logo__badge" />
          <path
            d="M10 24.5 C10 21.5 12 19.5 14.7 19.2 L16.6 19 C17.1 17.4 18.6 15.5 21 15.5 L24.5 15.5 C26.6 15.5 28.3 16.9 28.9 19 L29.6 19.1 C31.6 19.4 33 21 33 23 V25.2 C33 25.9 32.4 26.5 31.7 26.5 H30.4 C30.1 27.9 28.8 29 27.2 29 C25.6 29 24.3 27.9 24 26.5 H18 C17.7 27.9 16.4 29 14.8 29 C13.2 29 11.9 27.9 11.6 26.5 H10.8 C10.3 26.5 10 26.1 10 25.6 Z"
            className="logo__car"
          />
          <circle cx="14.8" cy="26.5" r="1.9" className="logo__wheel" />
          <circle cx="27.2" cy="26.5" r="1.9" className="logo__wheel" />
        </svg>
      </span>
      <span className="logo__text">
        <strong>UCR</strong>
      </span>
    </span>
  );
}
