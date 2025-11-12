import PropTypes from 'prop-types';
import clsx from 'clsx';

const variants = {
  success: 'from-triply-mint/60 to-triply-teal/60 text-triply-dark border-triply-mint/60 dark:from-triply-teal/50 dark:to-triply-mint/50 dark:text-dark-text-primary dark:border-triply-mint/50',
  error: 'from-red-200/60 to-red-300/60 text-red-900 border-red-300/70 dark:from-red-400/40 dark:to-red-500/40 dark:text-red-100 dark:border-red-400/60',
  info: 'from-blue-200/60 to-blue-300/60 text-blue-900 border-blue-300/70 dark:from-blue-400/40 dark:to-blue-500/40 dark:text-blue-100 dark:border-blue-400/60'
};

function FeedbackToast({ message, variant = 'success', onDismiss, className }) {
  if (!message) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={clsx(
        'relative overflow-hidden rounded-2xl border bg-gradient-to-br py-4 shadow-lg shadow-black/5',
        onDismiss ? 'pl-20 pr-4' : 'px-4',
        variants[variant],
        className
      )}
    >
      <div className="text-sm font-medium leading-6">{message}</div>
      {onDismiss ? (
        <button
          type="button"
          onClick={onDismiss}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg border border-current px-3 py-1.5 text-xs font-bold transition hover:opacity-80 hover:scale-105"
        >
          ✕
        </button>
      ) : null}
    </div>
  );
}

FeedbackToast.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'error', 'info']),
  onDismiss: PropTypes.func,
  className: PropTypes.string
};

export { FeedbackToast };
