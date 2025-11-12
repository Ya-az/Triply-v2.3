import { useStaggeredReveal } from '../../hooks/useScrollReveal.js';
import { HashLink } from 'react-router-hash-link';

function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'اختر وجهتك',
      description: 'تصفح مجموعة واسعة من الوجهات السياحية المميزة واختر الأنسب لك'
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'صمم رحلتك',
      description: 'اختر الخدمات والميزانية المناسبة واحصل على عرض مخصص لاحتياجاتك'
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'احجز وانطلق',
      description: 'أكمل الحجز بسهولة وأمان واستمتع برحلة لا تُنسى مع Triply'
    }
  ];

  const { ref: stepsRef, visibleItems } = useStaggeredReveal(steps.length, {
    threshold: 0.2,
    staggerDelay: 200
  });

  return (
    <section id="how-it-works" className="section-padding relative bg-gradient-to-b from-white via-triply-mint/5 to-white dark:from-dark-bg dark:via-dark-surface/30 dark:to-dark-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -right-32 top-20 w-64 h-64 bg-triply-mint/10 dark:bg-triply-teal/5 rounded-full blur-3xl" />
        <div className="absolute -left-32 bottom-20 w-64 h-64 bg-triply-accent/10 dark:bg-triply-mint/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-right">
        <div className="mb-12 space-y-4 text-center">
          <span className="heading-gradient text-xs sm:text-sm font-medium">كيف يعمل Triply</span>
          <h2 className="font-display text-2xl sm:text-3xl text-triply-dark dark:text-dark-text-primary md:text-4xl">
            ثلاث خطوات بسيطة لرحلة أحلامك
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 text-triply-slate/75 dark:text-dark-text-secondary px-4">
            نجعل تخطيط رحلتك سهلاً وممتعاً من خلال عملية بسيطة ومباشرة
          </p>
        </div>

        <div ref={stepsRef} className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`group relative ${visibleItems.has(index) ? 'reveal-fade-up' : 'reveal'}`}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -left-4 w-8 h-0.5 bg-gradient-to-l from-triply-mint to-triply-teal dark:from-triply-teal dark:to-triply-mint opacity-30" />
              )}

              <div className="card-surface relative overflow-hidden p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-2">
                {/* Step number badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-triply-mint/20 dark:bg-triply-teal/20 text-xs sm:text-sm font-bold text-triply dark:text-triply-mint">
                  {step.id}
                </div>

                {/* Icon */}
                <div className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-triply-mint/40 to-triply-teal/40 dark:from-triply-teal/30 dark:to-triply-mint/30 text-triply dark:text-triply-mint shadow-glow dark:shadow-glow-dark transition-all duration-300 group-hover:scale-110">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2 sm:mb-3 font-display text-lg sm:text-xl font-semibold text-triply-dark dark:text-dark-text-primary">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-triply-slate/75 dark:text-dark-text-secondary">
                  {step.description}
                </p>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-triply-mint via-triply-teal to-triply-accent dark:from-triply-teal dark:via-triply-mint dark:to-triply-accentLight opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          <HashLink
            smooth
            to="/#booking"
            className="inline-flex items-center gap-2 rounded-xl bg-triply dark:bg-triply-teal px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-white dark:text-triply-dark font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            ابدأ رحلتك الآن
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </HashLink>
        </div>
      </div>
    </section>
  );
}

export { HowItWorksSection };
