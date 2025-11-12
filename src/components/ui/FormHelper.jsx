import PropTypes from 'prop-types';

function FormHelper({ text, className = '' }) {
  return (
    <p className={`text-xs text-triply-teal-dark/60 dark:text-dark-text-secondary mt-1 ${className}`}>
      {text}
    </p>
  );
}

FormHelper.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export { FormHelper };
