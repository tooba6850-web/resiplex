import "./Locations.css";
import SectionHeading from "../components/SectionHeading";
import LocationCard from "../components/LocationCard";
import { LOCATIONS } from "../data/locations";
import { PROPERTIES } from "../data/properties";

export default function Locations() {
  const markets = LOCATIONS.map((l) => {
    const cityProps = PROPERTIES.filter((p) => p.city === l.slug);
    const sales = cityProps.filter((p) => p.status === "sale");
    const avg = sales.length
      ? Math.round(sales.reduce((acc, p) => acc + p.price, 0) / sales.length)
      : 0;
    return { ...l, count: cityProps.length, avgPrice: avg };
  });

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Prime Markets"
          title="Six cities. One standard."
          lead="Where we buy, sell and hold. Each market is led by a resident director with deep local feet on the street."
          align="center"
        />

        <div className="loc-grid">
          {markets.map((l, i) => (
            <LocationCard key={l.slug} location={l} count={l.count} avgPrice={l.avgPrice} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}