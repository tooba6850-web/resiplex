import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "./Logo";
import { NAV_LINKS, BRAND } from "../data/site";
import { IconMenu, IconClose, IconSearch, IconHeart } from "./icons";
import { useFavorites } from "../context/FavoritesContext";

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { count } = useFavorites();
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`.trim()}>
      <div className="nav__inner container">
        <Logo onClick={closeMenu} />

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__icon"
            aria-label="Toggle theme"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

          <button
            type="button"
            className="nav__icon"
            aria-label="Search properties"
            onClick={() => onOpenSearch?.()}
          >
            <IconSearch />
          </button>

          <NavLink
            to="/favorites"
            className={({ isActive }) => `nav__icon nav__fav ${isActive ? "is-active" : ""}`}
            aria-label={`Favorites${count ? `, ${count} saved` : ""}`}
          >
            <IconHeart filled={count > 0} />
            {count > 0 ? <span className="nav__count">{count}</span> : null}
          </NavLink>

          <NavLink to="/list-property" className="btn btn--outline btn--sm nav__cta">
            List Property
          </NavLink>

          <button
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div className={`nav__panel ${open ? "is-open" : ""}`.trim()} aria-hidden={!open}>
        <div className="nav__panel-inner container">
          <nav className="nav__panel-links" aria-label="Mobile">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className="nav__panel-link"
                style={{ "--i": i }}
                onClick={closeMenu}
              >
                <span className="nav__panel-index">0{i + 1}</span>
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/favorites" className="nav__panel-link" style={{ "--i": 5 }} onClick={closeMenu}>
              <span className="nav__panel-index">06</span>
              Favorites {count > 0 ? `(${count})` : ""}
            </NavLink>
            <NavLink
              to="/list-property"
              className="nav__panel-link"
              style={{ "--i": 6 }}
              onClick={closeMenu}
            >
              <span className="nav__panel-index">07</span>
              List Your Property
            </NavLink>
          </nav>

          <div className="nav__panel-foot">
            <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`}>{BRAND.phone}</a>
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          </div>
        </div>
      </div>
    </header>
  );
}