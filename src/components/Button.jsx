import { Link } from "react-router-dom";
import { IconArrowRight } from "./icons";

export default function Button({
  to,
  href,
  type = "button",
  variant = "primary",
  size = "default",
  arrow = false,
  className = "",
  children,
  ...rest
}) {
  const classes = [
    "btn",
    `btn--${variant}`,
    size !== "default" ? `btn--${size}` : "",
    arrow ? "btn--arrow" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="btn__arrow">
          <IconArrowRight />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}