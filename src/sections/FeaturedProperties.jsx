import "./FeaturedProperties.css";
import SectionHeading from "../components/SectionHeading";
import { PropertyGrid } from "../components/PropertyGrid";
import Button from "../components/Button";
import { PROPERTIES, featuredProperties } from "../data/properties";

export default function FeaturedProperties() {
  const list = featuredProperties(PROPERTIES).slice(0, 6);

  return (
    <section className="section" id="featured">
      <div className="container">
        <div className="section-head">
          <SectionHeading
            eyebrow="The Portfolio"
            title="Signature residences"
            lead="A curated selection of our latest private listings — each inspected, titled and priced by a senior advisor."
          />
          <Button to="/properties" variant="outline" arrow>
            View all properties
          </Button>
        </div>

        <PropertyGrid properties={list} />
      </div>
    </section>
  );
}