import PropTypes from 'prop-types';
import clsx from 'clsx';

function Card({ heading, description, icon, className, children }) {
  return (
    <div
      className={clsx(
        'group relative overflow-hidden rounded-2xl border-2 border-triply-mint/30 dark:border-dark-border/40 bg-white dark:bg-dark-elevated backdrop-blur-xl p-6 text-right shadow-lg hover:shadow-2xl dark:shadow-soft-dark dark:hover:shadow-ambient-dark transition-all duration-300 hover:-translate-y-2 hover:border-triply dark:hover:border-triply-mint',
        className
      )}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-triply-mint/5 via-transparent to-triply-teal/5 dark:from-triply-teal/10 dark:to-triply-mint/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <div className="relative z-10 flex h-full flex-col gap-4">
        {icon ? (
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-triply-mint to-triply-teal dark:from-triply-teal dark:to-triply-mint text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            {icon}
          </div>
        ) : null}
        {heading ? (
          <h3 className="font-display text-xl font-bold text-triply-dark dark:text-dark-text-primary group-hover:text-triply dark:group-hover:text-triply-mint transition-colors">
            {heading}
          </h3>
        ) : null}
        {description ? (
          <p className="text-sm leading-7 text-triply-slate/80 dark:text-dark-text-secondary">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node
};

export { Card };
