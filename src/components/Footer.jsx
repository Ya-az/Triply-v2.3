import { BrandLogo } from './BrandLogo.jsx';
import { GlassButton } from './ui/GlassButton.jsx';
import { resourceLinks, socialLinks, supportLinks } from '../data/footerLinks.js';

const iconMap = {
  twitter: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
};

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-br from-triply-dark via-triply-dark to-triply/90 dark:from-dark-elevated dark:via-dark-surface dark:to-dark-bg text-white dark:text-dark-text-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-triply-mint/30 dark:bg-triply-teal/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-80 w-80 rounded-full bg-triply-accent/30 dark:bg-triply-mint/20 blur-3xl" />
      </div>
      
      {/* Top decorative line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-triply-mint to-transparent dark:from-transparent dark:via-triply-teal dark:to-transparent" />
      
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-6">
            <BrandLogo showText size="lg" />
            
            <p className="text-sm leading-6 text-white/75 dark:text-dark-text-secondary max-w-xs">
              رحلات متكاملة بتجربة تعليمية تفاعلية ترتقي بمسارك المهني والسياحي.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 dark:border-dark-border/50 bg-white/10 dark:bg-dark-surface/40 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
                <svg className="w-3.5 h-3.5 text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                إصدار 3.0.0
              </div>
              <GlassButton variant="accent" size="sm" className="shadow-lg">
                احجز ميثاق الرحلة
              </GlassButton>
            </div>
            
            <div>
              <h5 className="text-xs font-semibold text-white/60 dark:text-dark-text-secondary uppercase tracking-wide mb-3">تابعنا</h5>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-white/20 dark:border-dark-border/40 bg-white/5 dark:bg-dark-surface/40 text-white dark:text-dark-text-primary transition-all hover:border-triply-mint dark:hover:border-triply-teal hover:bg-triply-mint/20 dark:hover:bg-triply-teal/30 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                    aria-label={link.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-triply-mint/0 to-triply-teal/0 group-hover:from-triply-mint/10 group-hover:to-triply-teal/10 transition-all" />
                    <span className="relative group-hover:scale-110 transition-transform">{iconMap[link.icon]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold text-white dark:text-dark-text-primary uppercase tracking-wide flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-triply-mint to-triply-teal" />
              المصادر
            </h4>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a className="group inline-flex items-center gap-2 text-white/75 dark:text-dark-text-secondary transition-all hover:text-white dark:hover:text-dark-text-primary hover:translate-x-1" href={link.href}>
                    <svg className="w-3.5 h-3.5 text-triply-mint dark:text-triply-teal opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold text-white dark:text-dark-text-primary uppercase tracking-wide flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-triply-teal to-triply-accent" />
              روابط سريعة
            </h4>
            <ul className="space-y-3 text-sm">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a className="group inline-flex items-center gap-2 text-white/75 dark:text-dark-text-secondary transition-all hover:text-white dark:hover:text-dark-text-primary hover:translate-x-1" href={link.href}>
                    <svg className="w-3.5 h-3.5 text-triply-mint dark:text-triply-teal opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold text-white dark:text-dark-text-primary uppercase tracking-wide flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-triply-accent to-triply" />
              تواصل معنا
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/75 dark:text-dark-text-secondary group">
                <svg className="w-5 h-5 text-triply-mint dark:text-triply-teal flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:contact@triply.com" className="hover:text-white dark:hover:text-dark-text-primary transition-colors">contact@triply.com</a>
              </li>
              <li className="flex items-start gap-3 text-white/75 dark:text-dark-text-secondary group">
                <svg className="w-5 h-5 text-triply-mint dark:text-triply-teal flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+966501234567" className="hover:text-white dark:hover:text-dark-text-primary transition-colors">+966 50 123 4567</a>
              </li>
              <li className="flex items-start gap-3 text-white/75 dark:text-dark-text-secondary group">
                <svg className="w-5 h-5 text-triply-mint dark:text-triply-teal flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>الدمام - المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t-2 border-white/10 dark:border-dark-border/30 pt-8 text-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-white/70 dark:text-dark-text-secondary flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              © {new Date().getFullYear()} Triply. جميع الحقوق محفوظة.
            </p>
            <p className="text-white/70 dark:text-dark-text-secondary flex items-center gap-2">
              صنع بحب في المملكة العربية السعودية
              <span className="text-red-400 animate-pulse">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
