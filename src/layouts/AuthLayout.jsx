import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext.jsx';
import ThemeToggle from '../components/ui/ThemeToggle.jsx';
import { BrandLogo } from '../components/BrandLogo.jsx';

function AuthLayout({ children }) {
  const { theme } = useTheme();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-triply-sand/30 via-white to-triply-mint/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-6 py-12">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c5b4310_1px,transparent_1px),linear-gradient(to_bottom,#0c5b4310_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1f8f8015_1px,transparent_1px),linear-gradient(to_bottom,#1f8f8015_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_110%)]" />

      {/* Floating orbs animation */}
      <div className="absolute inset-0 overflow-hidden opacity-40 dark:opacity-30" aria-hidden="true">
        <div className="absolute -left-40 top-32 h-72 w-72 animate-float-slow rounded-full bg-gradient-to-br from-triply-mint to-triply-teal blur-3xl" style={{ animationDelay: '0s' }} />
        <div className="absolute -right-40 bottom-32 h-80 w-80 animate-float-slow rounded-full bg-gradient-to-br from-triply-accent to-triply-sand blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute left-1/3 top-1/4 h-64 w-64 animate-float-slow rounded-full bg-gradient-to-br from-triply-teal/50 to-triply-mint/50 blur-3xl" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md animate-fadeInUp">
        {/* Logo with pulse */}
        <div className="mb-8 flex justify-center">
          <Link to="/" className="group relative flex flex-col items-center gap-3">
            <div className="absolute inset-0 -z-10 animate-pulse-slow rounded-full bg-triply-teal/20 blur-2xl dark:bg-triply-mint/20" />
            <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <BrandLogo showText size="lg" />
            </div>
          </Link>
        </div>

        {/* Card with glassmorphism */}
        <div className="group relative rounded-3xl border border-triply-mint/40 bg-white/90 p-8 shadow-[0_8px_30px_rgb(12,91,67,0.12)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_8px_40px_rgb(12,91,67,0.18)] dark:border-triply-teal/30 dark:bg-slate-900/90 dark:shadow-[0_8px_30px_rgb(31,143,128,0.15)] md:p-10">
          {/* Shimmer effect on hover */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -inset-full animate-shimmer bg-gradient-to-r from-transparent via-triply-mint/10 to-transparent dark:via-triply-teal/20" />
          </div>
          
          {children}
        </div>

        {/* Footer text */}
        <p className="mt-6 text-center text-sm text-triply-slate/60 dark:text-slate-400">
          © 2025 Triply. جميع الحقوق محفوظة
        </p>
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export { AuthLayout };
