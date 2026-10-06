import "./CTA.css";
import Button from "../components/Button";

export default function CTA() {
  return (
    <section className="cta section">
      <div className="container cta__inner">
        <div>
          <p className="eyebrow">Sell. Let. Wise-advice.</p>
          <h2 className="cta__title">
            Have a residence <em>the world would</em> want?
          </h2>
        </div>
        <div className="cta__actions">
          <Button to="/list-property" variant="gold" size="lg" arrow>
            List with RESIPLEX
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Ask us anything
          </Button>
        </div>
      </div>
    </section>
  );
}