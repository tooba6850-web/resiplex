import { useFavorites } from "../context/FavoritesContext";
import { useToast } from "../context/ToastContext";
import { IconHeart } from "./icons";

export default function FavoriteButton({ slug, className = "" }) {
  const { isFavorite, toggle } = useFavorites();
  const { toast } = useToast();
  const active = isFavorite(slug);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(slug);
    toast(
      active
        ? "Property removed from your saved list."
        : "Property saved to your favorites.",
      "success"
    );
  };

  return (
    <button
      type="button"
      className={`fav-btn ${active ? "is-active" : ""} ${className}`.trim()}
      aria-pressed={active}
      aria-label={active ? "Remove property from favorites" : "Save property to favorites"}
      onClick={handleClick}
    >
      <IconHeart filled={active} />
    </button>
  );
}