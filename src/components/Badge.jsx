export default function Badge({ variant = "line", icon: Icon = null, className = "", children, ...rest }) {
  return (
    <span className={`badge badge--${variant} ${className}`.trim()} {...rest}>
      {Icon ? <Icon /> : null}
      {children}
    </span>
  );
}