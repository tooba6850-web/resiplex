import "./Pagination.css";
import { IconChevronLeft, IconChevronRight } from "./icons";

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        className="pagination__btn"
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
      >
        <IconChevronLeft />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          className={`pagination__num ${p === page ? "is-active" : ""}`.trim()}
          aria-label={`Page ${p}`}
          aria-current={p === page ? "page" : undefined}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        className="pagination__btn"
        aria-label="Next page"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
      >
        <IconChevronRight />
      </button>
    </nav>
  );
}