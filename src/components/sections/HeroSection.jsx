import { GlassButton } from '../ui/GlassButton.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

function HeroSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="hero" className="relative overflow-hidden bg-hero-gradient dark:bg-gradient-to-br dark:from-dark-bg dark:via-dark-surface dark:to-dark-elevated">
      <div className="absolute inset-0 opacity-40 dark:opacity-20" aria-hidden="true">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-triply-mint/50 dark:bg-triply-teal/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-triply-accent/50 dark:bg-triply-mint/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-triply-teal/30 dark:bg-triply-accent/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-right text-white dark:text-dark-text-primary md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-[1.2fr,1fr]">
          <div ref={contentRef} className={`space-y-6 ${contentVisible ? 'reveal-fade-up' : 'reveal'}`}>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-white/20 to-white/10 dark:from-dark-elevated/70 dark:to-dark-elevated/50 backdrop-blur-sm border border-white/30 dark:border-dark-border/50 px-5 py-2 text-sm font-semibold shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              أحدث الحلول الذكية للسفر
            </span>
            <h1 className="font-display text-3xl leading-snug sm:text-4xl md:text-5xl">
              رحلات متكاملة تبدأ من <span className="text-transparent bg-clip-text bg-gradient-to-l from-triply-mint via-triply-sand to-white dark:from-triply-teal dark:via-triply-mint dark:to-triply-sand">فكرة</span> وتصل إلى تجربة لا تُنسى
            </h1>
            <p className="max-w-xl text-sm sm:text-base leading-7 sm:leading-8 text-white/80 dark:text-dark-text-secondary">
              Triply توفر لك تخطيطاً ذكياً للرحلة من اختيار الوجهة وحتى عودة المسافرين. فريق متخصص، محتوى عربي ثري،
              ودعم فوري على مدار الساعة.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-end gap-3 sm:gap-4">
              <a href="#booking" className="w-full sm:w-auto">
                <GlassButton variant="primary" size="lg" className="w-full sm:w-auto">
                  احجز استشارتك المجانية
                </GlassButton>
              </a>
              <a href="#services" className="w-full sm:w-auto">
                <GlassButton variant="glass" size="lg" className="w-full sm:w-auto">
                  تعرف على المنصة
                </GlassButton>
              </a>
            </div>
            <dl ref={statsRef} className={`mt-8 grid grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm text-white/80 dark:text-dark-text-secondary md:grid-cols-4 ${statsVisible ? 'reveal-fade-up' : 'reveal'}`}>
              <div>
                <dt className="font-semibold text-white dark:text-dark-text-primary text-sm sm:text-base">+1200 رحلة</dt>
                <dd className="text-xs sm:text-sm">منذ 2019</dd>
              </div>
              <div>
                <dt className="font-semibold text-white dark:text-dark-text-primary text-sm sm:text-base">+300 شريك</dt>
                <dd className="text-xs sm:text-sm">فنادق وطيران</dd>
              </div>
              <div>
                <dt className="font-semibold text-white dark:text-dark-text-primary text-sm sm:text-base">+95% رضا</dt>
                <dd className="text-xs sm:text-sm">تقييم 4.9/5</dd>
              </div>
              <div>
                <dt className="font-semibold text-white dark:text-dark-text-primary text-sm sm:text-base">24/7 دعم</dt>
                <dd className="text-xs sm:text-sm">مستشار رحلات</dd>
              </div>
            </dl>
          </div>
          <div className="glass-panel relative hidden h-full flex-col justify-center gap-6 rounded-3xl bg-white/80 dark:bg-dark-elevated/60 p-8 text-triply-dark dark:text-dark-text-primary shadow-ambient dark:shadow-ambient-dark md:flex">
            <h2 className="mb-2 text-lg font-semibold">مسارات مميزة</h2>
            <div className="space-y-5 text-sm">
              <div className="rounded-2xl border border-triply-mint/40 dark:border-triply-teal/40 bg-triply-mint/15 dark:bg-triply-teal/20 p-4">
                <p className="font-semibold">دبي - الإمارات</p>
                <span className="text-triply-slate/70 dark:text-dark-text-secondary">7 أيام • رحلة رفاهية • تجارب فاخرة</span>
              </div>
              <div className="rounded-2xl border border-triply-accent/40 dark:border-triply-accentLight/40 bg-triply-accent/10 dark:bg-triply-accent/20 p-4">
                <p className="font-semibold">القاهرة - مصر</p>
                <span className="text-triply-slate/70 dark:text-dark-text-secondary">4 أيام • جولات تاريخية • أهرامات الجيزة</span>
              </div>
              <div className="rounded-2xl border border-triply-teal/40 dark:border-triply-mint/40 bg-triply-teal/10 dark:bg-triply-mint/15 p-4">
                <p className="font-semibold">لندن - بريطانيا</p>
                <span className="text-triply-slate/70 dark:text-dark-text-secondary">5 أيام • معالم سياحية • مرشد عربي</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
