import "./PropertyGrid.css";
import "./FavoriteButton.css";
import PropertyCard from "./PropertyCard";
import { useReveal } from "../hooks/useReveal";

export function PropertyGrid({ properties, className = "" }) {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className={`prop-grid ${className}`.trim()}>
      {properties.map((property, i) => (
        <PropertyCard key={property.slug} property={property} i={i} />
      ))}
    </div>
  );
}

export function PropertyList({ properties }) {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="prop-list">
      {properties.map((property, i) => (
        <PropertyCard key={property.slug} property={property} i={i} />
      ))}
    </div>
  );
}