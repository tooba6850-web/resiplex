import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "./Logo";
import Button from "./Button";
import { IconInstagram, IconFacebook, IconLinkedIn, IconArrowRight, IconMail, IconPhone, IconPin } from "./icons";
import { BRAND, NAV_LINKS } from "../data/site";
import { useToast } from "../context/ToastContext";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About RESIPLEX", to: "/about" },
      { label: "Our Approach", to: "/about#approach" },
      { label: "Contact", to: "/contact" },
      { label: "List Your Property", to: "/list-property" },
    ],
  },
  {
    title: "Properties",
    links: [
      { label: "All Properties", to: "/properties" },
      { label: "Luxury Homes", to: "/properties?type=Luxury+Home" },
      { label: "Villas", to: "/properties?type=Villa" },
      { label: "Penthouses", to: "/properties?type=Penthouse" },
      { label: "For Rent", to: "/properties?status=rent" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Dubai", to: "/locations/dubai" },
      { label: "Karachi", to: "/locations/karachi" },
      { label: "London", to: "/locations/london" },
      { label: "New York", to: "/locations/new-york" },
      { label: "Miami", to: "/locations/miami" },
      { label: "Toronto", to: "/locations/toronto" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", to: "/blog" },
      { label: "Market Outlook", to: "/blog" },
      { label: "Buying Guide", to: "/blog" },
      { label: "Saved Homes", to: "/favorites" },
      { label: "Privacy Policy", to: "/about" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();

  const subscribe = (e) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    if (!ok) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setEmail("");
    toast("Welcome to RESIPLEX — your first briefing arrives shortly.");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p className="footer__blurb">
              Your trusted partner in finding, buying, and selling homes. We make real estate simple.
            </p>
            <div className="footer__social">
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="RESIPLEX on Instagram">
                <IconInstagram />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="RESIPLEX on Facebook">
                <IconFacebook />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="RESIPLEX on LinkedIn">
                <IconLinkedIn />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav className="footer__col" key={col.title} aria-label={col.title}>
              <h4 className="footer__title">{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <Link to={link.to} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="footer__col footer__col--news">
            <h4 className="footer__title">Newsletter</h4>
            <p className="footer__news-text">
              Stay up to date with the latest housing trends and market insights.
            </p>
            <form className="footer__news" onSubmit={subscribe} noValidate>
              <label className="sr-label" htmlFor="newsletter-email">
                Email address
              </label>
              <div className="footer__news-row">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                />
                <button type="submit" className="footer__news-btn" aria-label="Subscribe">
                  <IconArrowRight />
                </button>
              </div>
              {error ? <p className="footer__news-error">{error}</p> : null}
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 RESIPLEX. All rights reserved.</p>
          <div className="footer__meta">
            <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`}>
              <IconPhone /> {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`}>
              <IconMail /> {BRAND.email}
            </a>
            <span>
              <IconPin /> {BRAND.address}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}