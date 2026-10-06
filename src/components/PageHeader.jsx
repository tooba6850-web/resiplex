import "./PageHeader.css";
import { HERO_BACKDROP } from "../data/site";

export default function PageHeader({ eyebrow, title, lead, children, image }) {
  const bgImage = image || HERO_BACKDROP[1];
  
  return (
    <header className="pagehead" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="pagehead__veil"></div>
      <div className="container pagehead__inner">
        <span className="pagehead__line" aria-hidden="true" />
        <div className="pagehead__grid">
          <div data-reveal>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1 className="pagehead__title">{title}</h1>
          </div>
          {lead ? (
            <p className="pagehead__lead" data-reveal style={{ "--d": "120ms" }}>
              {lead}
            </p>
          ) : null}
        </div>
        {children ? <div className="pagehead__extra">{children}</div> : null}
      </div>
    </header>
  );
}