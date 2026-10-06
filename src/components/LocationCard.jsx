import { Link } from "react-router-dom";
import "./LocationCard.css";
import { IconArrowRight, IconPin } from "./icons";
import { formatPrice } from "../data/properties";

export default function LocationCard({
  location,
  count,
  avgPrice,
  i = 0,
}) {
  return (
    <article className="loc-card" data-reveal style={{ "--d": `${Math.min(i, 5) * 90}ms` }}>
      <Link to={`/locations/${location.slug}`} className="loc-card__link" aria-label={`Explore ${location.name}`}>
        <img src={location.image} alt={location.area || location.name} loading="lazy" />
        <span className="loc-card__veil" />
        <span className="loc-card__meta">
          <span className="loc-card__count">
            {count} {count === 1 ? "Property" : "Properties"}
          </span>
          <span className="loc-card__mark">
            <IconArrowRight />
          </span>
        </span>
      </Link>
      <div className="loc-card__body">
        <h3 className="loc-card__name">{location.name}</h3>
        <p className="loc-card__sub">{location.country}</p>
        <p className="loc-card__avg">
          <IconPin />
          From {formatPrice(avgPrice)}
        </p>
      </div>
    </article>
  );
}