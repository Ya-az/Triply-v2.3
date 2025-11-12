import { services } from '../../data/services.js';
import { Card } from '../ui/Card.jsx';
import { useStaggeredReveal } from '../../hooks/useScrollReveal.js';

function ServicesSection() {
  const { ref: sectionRef, visibleItems } = useStaggeredReveal(services.length, { 
    threshold: 0.1,
    staggerDelay: 150
  });

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-triply-sand/20 to-white dark:from-dark-bg dark:via-dark-surface/50 dark:to-dark-bg">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20" aria-hidden="true">
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-triply-mint/40 dark:bg-triply-teal/30 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-triply-accent/30 dark:bg-triply-mint/20 blur-3xl" />
      </div>
      
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 text-right">
        <div className="space-y-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-triply-mint to-triply-teal dark:from-triply-teal dark:to-triply-mint px-5 py-2 text-sm font-semibold text-white shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            خدمات Triply المتكاملة
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
            <span className="text-triply-dark dark:text-dark-text-primary">كل تفاصيل الرحلة</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-triply via-triply-teal to-triply-mint">في مكان واحد</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-7 text-triply-slate/75 dark:text-dark-text-secondary">
            نؤمن بأن الرحلات الناجحة تبدأ من تخطيط دقيق. لذلك قمنا بتطوير مجموعة خدمات تغطي كل مرحلة من مراحل
            رحلتك مع فريق متخصص وخبرات عميقة في عالم السفر.
          </p>
        </div>
        <div ref={sectionRef} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={visibleItems.has(index) ? 'reveal-fade-up' : 'reveal'}
            >
              <Card heading={service.title} description={service.description} icon={service.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ServicesSection };
