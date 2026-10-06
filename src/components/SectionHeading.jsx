import "./SectionHeading.css";

export default function SectionHeading({
  eyebrow = "",
  title = "",
  lead = "",
  align = "left",
  action = null,
  className = "",
}) {
  return (
    <div
      className={`heading heading--${align} ${className}`.trim()}
      data-reveal
    >
      {eyebrow ? <span className="eyebrow eyebrow--center-on">{eyebrow}</span> : null}
      {title ? <h2 className="section-title">{title}</h2> : null}
      {lead ? <p className="section-lead heading__lead">{lead}</p> : null}
      {action ? <div className="heading__action">{action}</div> : null}
    </div>
  );
}