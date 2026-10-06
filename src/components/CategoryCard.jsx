import { Link } from "react-router-dom";
import "./CategoryCard.css";
import Badge from "./Badge";
import { IconArrowRight } from "./icons";

export default function CategoryCard({ category, count, i = 0 }) {
  return (
    <article className="cat-card" data-reveal style={{ "--d": `${Math.min(i, 5) * 90}ms` }}>
      <Link to={`/properties?type=${encodeURIComponent(category.name)}`} className="cat-card__link">
        <img src={category.image} alt={category.name} loading="lazy" />
        <span className="cat-card__veil" />
        <span className="cat-card__inner">
          <Badge variant="gold">{count} Listing{count === 1 ? "" : "s"}</Badge>
          <span className="cat-card__title">{category.name}</span>
          <span className="cat-card__cta">
            Explore <IconArrowRight />
          </span>
        </span>
      </Link>
    </article>
  );
}