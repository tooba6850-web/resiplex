import { Link } from "react-router-dom";
import "./PropertyCard.css";
import Badge from "./Badge";
import FavoriteButton from "./FavoriteButton";
import { IconPin, IconBed, IconBath, IconArea } from "./icons";
import { formatPrice, formatArea, cityName, statusLabel } from "../data/properties";

export default function PropertyCard({ property, i = 0 }) {
  return (
    <article className="prop-card" data-reveal style={{ "--d": `${Math.min(i, 5) * 70}ms` }}>
      <div className="prop-card__media">
        <Link to={`/properties/${property.slug}`} className="prop-card__link" aria-label={`View ${property.name}`}>
          <img src={property.image} alt={`${property.name} in ${cityName(property.city)}`} loading="lazy" />
        </Link>
        <div className="prop-card__badges">
          <Badge variant={property.status === "rent" ? "rent" : "solid"}>
            {statusLabel(property)}
          </Badge>
          {property.newListing ? <Badge variant="gold">New</Badge> : null}
        </div>
        <FavoriteButton className="prop-card__fav" slug={property.slug} />
      </div>

      <div className="prop-card__body">
        <p className="prop-card__price">{formatPrice(property.price, property.period)}</p>
        <h3 className="prop-card__name">
          <Link to={`/properties/${property.slug}`}>{property.name}</Link>
        </h3>
        <p className="prop-card__place">
          <IconPin />
          <span>
            {property.area}, {cityName(property.city)}
          </span>
        </p>
        <div className="prop-card__meta">
          <span>
            <IconBed />
            {property.beds} Beds
          </span>
          <span>
            <IconBath />
            {property.baths} Baths
          </span>
          <span>
            <IconArea />
            {formatArea(property.sqft)}
          </span>
        </div>
      </div>
    </article>
  );
}