import "./LatestProperties.css";
import SectionHeading from "../components/SectionHeading";
import { PropertyGrid } from "../components/PropertyGrid";
import Button from "../components/Button";
import { PROPERTIES, latestProperties } from "../data/properties";

export default function LatestProperties() {
  const list = latestProperties(PROPERTIES, 6);

  return (
    <section className="section section--alt">
      <div className="container">
        <div className="section-head">
          <SectionHeading
            eyebrow="Just Listed"
            title="New to the market"
            lead="Freshly signed mandates and brand-new arrivals — updated daily by our desk teams in six cities."
          />
          <Button to="/properties" variant="outline" arrow>
            Explore all listings
          </Button>
        </div>

        <PropertyGrid properties={list} />
      </div>
    </section>
  );
}