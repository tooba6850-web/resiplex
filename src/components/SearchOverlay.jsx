import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchOverlay.css";
import { IconSearch, IconClose, IconArrowRight } from "./icons";
import { IconPin, IconBed, IconBath } from "./icons";
import { PROPERTIES, formatPrice, cityName, statusLabel } from "../data/properties";

export default function SearchOverlay({ open, onClose }) {
  const nav = useNavigate();
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      window.setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PROPERTIES.filter((p) =>
      [p.name, p.area, p.city, p.type, p.neighborhood, statusLabel(p), cityName(p.city)]
        .join(" ")
        .toLowerCase()
        .includes(q)
    ).slice(0, 6);
  }, [query]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    onClose();
    nav(`/properties?keyword=${encodeURIComponent(query.trim())}`);
  };

  const goProperty = (slug) => {
    onClose();
    nav(`/properties/${slug}`);
  };

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search properties">
      <button type="button" className="search-overlay__close" aria-label="Close search" onClick={onClose}>
        <IconClose />
      </button>

      <div className="search-overlay__inner container">
        <form className="search-overlay__form" onSubmit={submit}>
          <span className="search-overlay__icon" aria-hidden="true">
            <IconSearch />
          </span>
          <input
            ref={inputRef}
            type="search"
            placeholder="Search by city, address or type…"
            aria-label="Search properties"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-overlay__go" aria-label="Submit search">
            <IconArrowRight />
          </button>
        </form>

        <div className="search-overlay__results">
          {query.trim() === "" ? (
            <p className="search-overlay__hint">
              Try “Dubai”, “Penthouse”, “Mayfair” or “Miami”.
            </p>
          ) : results.length === 0 ? (
            <div className="search-overlay__empty">
              <p>No homes match “{query}”.</p>
              <p className="search-overlay__empty-sub">
                Browse the full portfolio instead.
              </p>
              <button
                type="button"
                className="btn btn--outline btn--sm"
                onClick={() => nav("/properties")}
              >
                All Properties
              </button>
            </div>
          ) : (
            <ul className="search-overlay__list">
              {results.map((p) => (
                <li key={p.slug}>
                  <button type="button" className="search-overlay__result" onClick={() => goProperty(p.slug)}>
                    <img src={p.image} alt="" loading="lazy" />
                    <span className="search-overlay__info">
                      <span className="search-overlay__name">{p.name}</span>
                      <span className="search-overlay__place">
                        <IconPin /> {cityName(p.city)}
                      </span>
                    </span>
                    <span className="search-overlay__meta">
                      <span>
                        <IconBed /> {p.beds}
                      </span>
                      <span>
                        <IconBath /> {p.baths}
                      </span>
                    </span>
                    <span className="search-overlay__price">
                      {formatPrice(p.price, p.period)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}