import PropTypes from 'prop-types';

const LogoWrapper = ({ children, className = '' }) => (
  <div
    className={`flex h-8 items-center justify-center rounded-md bg-white/85 px-2 shadow-sm ring-1 ring-black/5 dark:bg-white/90 ${className}`}
  >
    {children}
  </div>
);

LogoWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const VisaLogo = () => (
  <LogoWrapper>
    <svg viewBox="0 0 100 32" className="h-6 w-auto" aria-hidden="true">
      <rect width="100" height="32" rx="6" fill="#1a1f71" />
      <text
        x="50"
        y="21"
        textAnchor="middle"
        fontFamily="'Segoe UI', sans-serif"
        fontWeight="700"
        fontSize="17"
        fill="#ffffff"
      >
        VISA
      </text>
    </svg>
  </LogoWrapper>
);

const MadaLogo = () => (
  <LogoWrapper>
    <svg viewBox="0 0 120 32" className="h-6 w-auto" aria-hidden="true">
      <rect width="120" height="32" rx="6" fill="#ffffff" />
      <rect x="10" y="9" width="30" height="14" rx="4" fill="#00aa95" />
      <rect x="44" y="9" width="30" height="14" rx="4" fill="#0060aa" />
      <text
        x="90"
        y="21"
        textAnchor="middle"
        fontFamily="'Cairo', sans-serif"
        fontSize="14"
        fill="#222f3e"
      >
        مدى
      </text>
    </svg>
  </LogoWrapper>
);

const ApplePayLogo = () => (
  <LogoWrapper>
    <svg viewBox="0 0 120 32" className="h-6 w-auto" aria-hidden="true">
      <rect width="120" height="32" rx="6" fill="#000000" />
      <path
        d="M24.5 13.5c0-2.6 2.1-4.7 4.7-4.7 0 .2.1.5.1.7-.6.4-1.3 1.1-1.5 1.9-.4 1.2.2 2.5 1.1 3.2-.5 1.2-1.7 2-3 2-1.9 0-3.4-1.6-3.4-3.6zm6.2-4.5c.5-.3 1.2-.5 1.8-.5-.2.6-.6 1.1-1.2 1.5-.4.3-1 .6-1.6.7.2-.7.5-1.2 1-1.7zm11.2 4.4c0-2.2 1.6-3.7 3.6-3.7 1 0 1.7.4 2.2.9l-.7 1.1c-.4-.4-.9-.6-1.4-.6-1.2 0-2 1-2 2.3 0 1.3.8 2.3 2.1 2.3.5 0 1.1-.2 1.5-.5v-1.1h-1.7v-1.2h3.2v2.9c-.7.7-1.7 1.2-2.9 1.2-2.1 0-3.9-1.5-3.9-3.6zm11 .1c0-2.4 1.4-3.7 3-3.7 1 0 1.6.4 2 .9v-3.3h1.7v9.6h-1.6l-.1-.8c-.5.6-1.2.9-2 .9-1.7.1-3-1.3-3-3.6zm5-.1c0-1.5-.7-2.4-1.8-2.4s-1.8.9-1.8 2.4.7 2.4 1.8 2.4 1.8-.9 1.8-2.4zm5.8-3.4h1.6l2.5 6.1 2.5-6.1h1.7l-3.5 8h-1.2zm10.1 0h1.6v8h-1.6zm3.6 0h1.6v4.7c0 1 .5 1.6 1.4 1.6s1.3-.5 1.6-1.3v-5h1.6v5.2c0 2-1.2 3.1-3 3.1-1.5 0-2.5-.7-2.9-1.8l-.1.2h-.1z"
        fill="#ffffff"
      />
    </svg>
  </LogoWrapper>
);

const StcPayLogo = () => (
  <LogoWrapper>
    <svg viewBox="0 0 120 32" className="h-6 w-auto" aria-hidden="true">
      <rect width="120" height="32" rx="6" fill="#4f0f8d" />
      <text
        x="32"
        y="21"
        textAnchor="middle"
        fontFamily="'Cairo', sans-serif"
        fontWeight="600"
        fontSize="14"
        fill="#ffffff"
      >
        stc
      </text>
      <text
        x="78"
        y="21"
        textAnchor="middle"
        fontFamily="'Cairo', sans-serif"
        fontWeight="600"
        fontSize="14"
        fill="#18c48f"
      >
        pay
      </text>
    </svg>
  </LogoWrapper>
);

export { VisaLogo, MadaLogo, ApplePayLogo, StcPayLogo };
