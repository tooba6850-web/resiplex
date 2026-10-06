import "./AgentCard.css";
import { IconMail, IconPhone } from "./icons";

export default function AgentCard({ agent, children }) {
  const first = agent.name.split(" ")[0];

  return (
    <aside className="agent-card">
      <div className="agent-card__top">
        <img src={agent.image} alt={agent.name} loading="lazy" />
        <div>
          <span className="agent-card__label">Your advisor</span>
          <h3 className="agent-card__name">{agent.name}</h3>
          <p className="agent-card__role">{agent.role}</p>
        </div>
      </div>

      <div className="agent-card__contact">
        <a href={`mailto:${agent.email}`}>
          <IconMail /> {agent.email}
        </a>
        <a href={`tel:${agent.phone.replace(/\s/g, "")}`}>
          <IconPhone /> {agent.phone}
        </a>
      </div>

      {children ? <div className="agent-card__actions">{children}</div> : null}
    </aside>
  );
}