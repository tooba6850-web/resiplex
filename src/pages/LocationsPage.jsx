import "./LocationsPage.css";
import PageHeader from "../components/PageHeader";
import LocationCard from "../components/LocationCard";
import { LOCATIONS } from "../data/locations";
import { PROPERTIES } from "../data/properties";
import { HERO_BACKDROP } from "../data/site";

export default function LocationsPage() {
  const markets = LOCATIONS.map((l) => {
    const cityProps = PROPERTIES.filter((p) => p.city === l.slug);
    const sales = cityProps.filter((p) => p.status === "sale");
    const avg = sales.length
      ? Math.round(sales.reduce((acc, p) => acc + p.price, 0) / sales.length)
      : 0;
    return { ...l, count: cityProps.length, avgPrice: avg };
  });

  return (
    <div className="page">
      <PageHeader
        image={HERO_BACKDROP[4]}
        eyebrow="Prime Markets"
        title={
          <>
            Locations<em>.</em>
          </>
        }
        lead="Six cities where we hold a permanent desk, deep street-level knowledge and the keys to the residences that rarely reach public listings."
      />

      <section className="section">
        <div className="container">
          <div className="locpage__grid">
            {markets.map((l, i) => (
              <LocationCard key={l.slug} location={l} count={l.count} avgPrice={l.avgPrice} i={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}