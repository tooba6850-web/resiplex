export function Field({ label, htmlFor, required = false, error = "", children, className = "" }) {
  return (
    <div className={`field ${error ? "field--error" : ""} ${className}`.trim()}>
      {label ? (
        <label className="field__label" htmlFor={htmlFor}>
          <span>
            {label} {required ? <span className="field__req">*</span> : null}
          </span>
        </label>
      ) : null}
      <div className="field__control">{children}</div>
      {error ? <p className="field__error">{error}</p> : null}
    </div>
  );
}

export function Input({ ...props }) {
  return <input {...props} />;
}

export function Select({ children, ...props }) {
  return <select {...props}>{children}</select>;
}

export function Textarea({ rows = 5, ...props }) {
  return <textarea rows={rows} {...props} />;
}