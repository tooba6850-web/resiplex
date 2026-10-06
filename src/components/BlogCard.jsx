import { Link } from "react-router-dom";
import "./BlogCard.css";
import Badge from "./Badge";
import { IconArrowRight, IconClock, IconCalendar } from "./icons";

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({ post, i = 0 }) {
  return (
    <article className="blog-card" data-reveal style={{ "--d": `${Math.min(i, 5) * 80}ms` }}>
      <Link to={`/blog/${post.slug}`} className="blog-card__media" aria-label={post.title}>
        <img src={post.image} alt="" loading="lazy" />
        <span className="blog-card__veil" />
        <Badge variant="gold" className="blog-card__badge">
          {post.category}
        </Badge>
      </Link>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>
            <IconCalendar /> {formatDate(post.date)}
          </span>
          <span>
            <IconClock /> {post.readTime} min
          </span>
        </div>
        <h3 className="blog-card__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="blog-card__more">
          Read Article <IconArrowRight />
        </Link>
      </div>
    </article>
  );
}