import clsx from 'clsx';
import PropTypes from 'prop-types';

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-triply-accent dark:focus-visible:ring-triply-mint disabled:cursor-not-allowed disabled:transition-none';

const variants = {
  primary:
    'bg-triply text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:bg-triply/60 disabled:text-white/80 dark:bg-triply-teal dark:hover:bg-triply dark:disabled:bg-triply-teal/60',
  secondary:
    'bg-triply-teal text-white shadow-lg hover:bg-triply hover:shadow-xl disabled:bg-triply-teal/65 disabled:text-white/85 dark:bg-triply-mint dark:text-triply-dark dark:hover:bg-triply-light dark:shadow-glow-dark dark:disabled:bg-triply-mint/60',
  accent:
    'bg-triply-accent text-white shadow-lg hover:bg-triply-accent/90 hover:shadow-xl disabled:bg-triply-accent/65 disabled:text-white/85 dark:bg-triply-accentLight dark:hover:bg-triply-accent dark:shadow-glow-dark',
  glass:
    'bg-triply/90 text-white backdrop-blur-sm border border-triply-mint/30 hover:bg-triply hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:bg-triply/50 disabled:text-white/80 dark:bg-dark-elevated/40 dark:border-dark-border/50 dark:text-dark-text-primary dark:hover:bg-dark-elevated dark:disabled:bg-dark-elevated/20',
  outline:
    'bg-transparent border-2 border-triply text-triply hover:bg-triply hover:text-white disabled:border-triply/50 disabled:text-triply/60 disabled:bg-transparent dark:border-triply-mint dark:text-triply-mint dark:hover:bg-triply-mint dark:hover:text-triply-dark dark:disabled:border-triply-mint/50 dark:disabled:text-triply-mint/60'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

function GlassButton({
  label,
  variant = 'glass',
  size = 'md',
  onClick,
  className,
  children,
  type = 'button',
  disabled = false,
  isLoading = false,
  ...props
}) {
  const classes = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    isLoading && 'cursor-wait opacity-80',
    className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={classes}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span
          className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-transparent"
          aria-hidden="true"
        />
      ) : null}
      {children || label}
    </button>
  );
}

GlassButton.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'accent', 'glass', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool
};

export { GlassButton };
