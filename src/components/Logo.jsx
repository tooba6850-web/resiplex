import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo({ onClick, className = "" }) {
  return (
    <Link to="/" className={`logo ${className}`.trim()} aria-label="RESIPLEX — home" onClick={onClick}>
      <span className="logo__mark" aria-hidden="true">
        <span className="logo__gem" />
      </span>
      <span className="logo__word">RESIPLEX</span>
    </Link>
  );
}