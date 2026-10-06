import "./PropertyCategories.css";
import SectionHeading from "../components/SectionHeading";
import CategoryCard from "../components/CategoryCard";
import { PROPERTIES, IMG } from "../data/properties";

const TYPES = [
  { name: "Luxury Home", image: IMG.grand },
  { name: "Modern Apartment", image: IMG.marina },
  { name: "Villa", image: IMG.palm },
  { name: "Penthouse", image: IMG.skyline },
];

export default function PropertyCategories() {
  const types = TYPES.map((t) => ({
    ...t,
    count: PROPERTIES.filter((p) => p.type === t.name).length,
  }));

  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHeading
          eyebrow="Browse The Portfolio"
          title="Residences by type"
          lead="Four ways to live exceptionally — explore the full catalogue through the category that suits your life."
          align="center"
        />

        <div className="cat-grid">
          {types.map((t, i) => (
            <CategoryCard key={t.name} category={t} count={t.count} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}