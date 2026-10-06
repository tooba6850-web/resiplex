import "./WhyResiplex.css";
import Button from "../components/Button";
import { IconCheck, IconSparkle } from "../components/icons";
import { PHILOSOPHY, STATS } from "../data/site";

export default function WhyResiplex() {
  return (
    <section className="section why">
      <div className="container why__grid">
        <div className="why__text" data-reveal>
          <p className="eyebrow">{PHILOSOPHY.eyebrow}</p>
          <h2 className="section-title">{PHILOSOPHY.title}</h2>
          <p className="why__body">{PHILOSOPHY.text}</p>

          <ul className="why__points">
            {PHILOSOPHY.points.map((point) => (
              <li key={point}>
                <span className="why__check">
                  <IconCheck />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="why__actions">
            <Button to="/about" variant="outline">
              About RESIPLEX
            </Button>
            <Button to="/contact" variant="ghost">
              Talk to an advisor
            </Button>
          </div>
        </div>

        <div className="why__stats" data-reveal style={{ "--d": "140ms" }}>
          <span className="why__stats-head">
            <IconSparkle /> The record, in numbers
          </span>
          <div className="stats-grid">
            {STATS.map((s) => (
              <div className="stat-card" key={s.label}>
                <p className="stat-card__value">
                  {s.value}
                  <span>{s.suffix}</span>
                </p>
                <p className="stat-card__label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}