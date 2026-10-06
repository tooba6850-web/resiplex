import "./About.css";
import Button from "../components/Button";
import { IconQuote } from "../components/icons";
import { PHILOSOPHY } from "../data/site";

export default function About() {
  return (
    <section className="about-band section">
      <div className="container about-band__inner">
        <span className="about-band__mark" aria-hidden="true">
          <IconQuote />
        </span>
        <h2 className="about-band__quote">{PHILOSOPHY.title}</h2>
        <p className="about-band__sub">
          Founded on a belief that the great houses of the world deserve better
          houses-of-purpose. Meet the people and principles behind RESIPLEX.
        </p>
        <Button to="/about" variant="primary" arrow>
          Our story
        </Button>
      </div>
    </section>
  );
}