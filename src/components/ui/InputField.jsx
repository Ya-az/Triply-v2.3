import PropTypes from 'prop-types';

function InputField({
  label,
  type = 'text',
  placeholder,
  name,
  value,
  onChange,
  required = false,
  icon,
  error
}) {
  const errorId = error ? `${name}-error` : undefined;
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-triply-dark dark:text-dark-text-primary">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-triply-slate/60 dark:text-dark-text-muted">
            {icon}
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId}
          className={`w-full rounded-xl border-2 border-triply-mint/30 dark:border-dark-border/40 bg-white dark:bg-dark-elevated/60 px-4 py-3 text-triply-dark dark:text-dark-text-primary placeholder-triply-slate/50 dark:placeholder-dark-text-muted backdrop-blur-sm transition-all duration-200 focus:border-triply dark:focus:border-triply-mint focus:bg-white dark:focus:bg-dark-elevated/80 focus:outline-none focus:ring-2 focus:ring-triply/10 dark:focus:ring-triply-mint/20 ${
            icon ? 'pr-12' : ''
          } ${error ? 'border-red-400 dark:border-red-400/60 focus:border-red-500 dark:focus:border-red-400 focus:ring-red-200/40 dark:focus:ring-red-400/30' : ''}`}
        />
      </div>
      {error ? (
        <p id={errorId} className="text-xs text-red-600 dark:text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  icon: PropTypes.node,
  error: PropTypes.string
};

export { InputField };
