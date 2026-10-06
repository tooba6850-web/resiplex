import { useFavorites } from "../context/FavoritesContext";
import { PROPERTIES } from "../data/properties";
import PageHeader from "../components/PageHeader";
import { PropertyGrid } from "../components/PropertyGrid";
import Button from "../components/Button";
import { IconHeart } from "../components/icons";
import { HERO_BACKDROP } from "../data/site";

export default function FavoritesPage() {
  const { favorites, count } = useFavorites();
  
  // Filter all properties to find the ones in the favorites list
  const favoriteProperties = PROPERTIES.filter((p) => favorites.includes(p.slug));

  return (
    <div className="page">
      <PageHeader 
        image={HERO_BACKDROP[2]} 
        eyebrow="Your Portfolio" 
        title="Saved Properties" 
        lead="Review your curated list of residences. We are ready when you are." 
      />

      <section className="section props">
        <div className="container">
          <div className="props__toolbar" style={{ marginBottom: "2rem" }}>
            <p className="props__count">
              {count} {count === 1 ? "residence" : "residences"} saved
            </p>
          </div>

          {count === 0 ? (
            <div className="props__empty" data-reveal>
              <span className="props__empty-icon" style={{ opacity: 0.5 }}>
                <IconHeart />
              </span>
              <h3>No residences saved yet</h3>
              <p>
                As you explore the portfolio, click the heart icon on any property to save it here for easy review later.
              </p>
              <div className="props__empty-actions">
                <Button variant="gold" to="/properties">
                  Explore properties
                </Button>
              </div>
            </div>
          ) : (
            <PropertyGrid properties={favoriteProperties} />
          )}
        </div>
      </section>
    </div>
  );
}
