import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import { HERO_BACKDROP } from "../data/site";
import { LOCATION_OPTIONS, TYPE_OPTIONS, PRICE_OPTIONS, BED_OPTIONS } from "../data/properties";
import { IconSearch, IconArrowDown } from "../components/icons";
import { prefersReducedMotion, scrollToId } from "../utils/scroll";

const initial = {
  location: "",
  type: "",
  price: "",
  beds: "",
};

export default function Hero() {
  const nav = useNavigate();
  const [filters, setFilters] = useState(initial);
  const [image, setImage] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = window.setInterval(() => {
      setImage((i) => (i + 1) % HERO_BACKDROP.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([k, v]) => {
      if (v) params.set(k, v);
    });
    const qs = params.toString();
    nav(qs ? `/properties?${qs}` : "/properties");
  };

  return (
    <section className="hero" aria-label="Find exceptional homes">
      <div className="hero__backdrop" aria-hidden="true">
        {HERO_BACKDROP.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={i === image ? "is-active" : ""}
          />
        ))}
        <div className="hero__veil" />
        <div className="hero__veil--bottom" />
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow" data-reveal>
          RESIPLEX — Your Real Estate Partner
        </p>
        <h1 className="hero__title" data-reveal>
          Find your
          <br />
          <em>perfect</em> home.
        </h1>
        <p className="hero__sub" data-reveal style={{ "--d": "120ms" }}>
          Discover the best properties, read neighborhood insights, and connect with local experts to find the place you'll love.
        </p>

        <form className="hero__search" onSubmit={submit} data-reveal style={{ "--d": "220ms" }}>
          <label className="hero__field">
            <span className="hero__field-label">Location</span>
            <select
              aria-label="Location"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            >
              {LOCATION_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <label className="hero__field">
            <span className="hero__field-label">Type</span>
            <select
              aria-label="Property type"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              {TYPE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <label className="hero__field">
            <span className="hero__field-label">Budget</span>
            <select
              aria-label="Budget"
              value={filters.price}
              onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            >
              {PRICE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <label className="hero__field">
            <span className="hero__field-label">Bedrooms</span>
            <select
              aria-label="Bedrooms"
              value={filters.beds}
              onChange={(e) => setFilters({ ...filters, beds: e.target.value })}
            >
              {BED_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <button type="submit" className="hero__search-btn" aria-label="Search homes">
            <span className="hero__search-btn-label">Search</span>
            <IconSearch />
          </button>
        </form>
      </div>

      <button
        type="button"
        className="hero__scroll"
        aria-label="Scroll down"
        onClick={() => scrollToId("#featured")}
      >
        <IconArrowDown />
        <span>Explore</span>
      </button>
    </section>
  );
}