import { destinations } from '../../data/destinations.js';
import { useStaggeredReveal } from '../../hooks/useScrollReveal.js';

function DestinationsSection() {
  const { ref: sectionRef, visibleItems } = useStaggeredReveal(destinations.length, {
    threshold: 0.1,
    staggerDelay: 120
  });

  return (
    <section id="destinations" className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-triply-sand/20 to-white dark:from-dark-bg dark:via-dark-surface/40 dark:to-dark-bg">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-triply-accent/20 dark:bg-triply-mint/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-triply-teal/20 dark:bg-triply-teal/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 text-right">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-triply-mint to-triply-teal dark:from-triply-teal dark:to-triply-mint px-5 py-2 text-sm font-semibold text-white shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            وجهات مختارة بعناية
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-triply-dark dark:text-dark-text-primary md:text-5xl">
            مسارات <span className="text-transparent bg-clip-text bg-gradient-to-l from-triply via-triply-teal to-triply-mint">حصرية</span> تلهم الفرق والأفراد
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-7 text-triply-slate/75 dark:text-dark-text-secondary">
            يقدم Triply مجموعة وجهات عالمية مصممة لتناسب أهدافك الشخصية أو المؤسسية، مع تنوع بين الثقافة، المغامرة،
            والرفاهية.
          </p>
        </div>
        <div ref={sectionRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <article
              key={destination.name}
              className={`group relative overflow-hidden rounded-2xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:bg-dark-elevated shadow-lg hover:shadow-2xl dark:shadow-soft-dark dark:hover:shadow-ambient-dark transition-all duration-300 hover:-translate-y-2 hover:border-triply dark:hover:border-triply-mint ${visibleItems.has(index) ? 'reveal-scale' : 'reveal'}`}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:rotate-1"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-triply-dark/70 via-triply-dark/20 to-transparent" />
                <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 dark:bg-dark-elevated/95 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-triply-dark dark:text-dark-text-primary shadow-lg">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {destination.duration}
                </span>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="font-display text-xl font-bold text-triply-dark dark:text-dark-text-primary group-hover:text-triply dark:group-hover:text-triply-mint transition-colors">
                  {destination.name}
                </h3>
                <p className="text-sm leading-6 text-triply-slate/75 dark:text-dark-text-secondary">
                  {destination.description}
                </p>
                {destination.price && (
                  <div className="flex items-center justify-between pt-2 border-t border-triply-mint/30 dark:border-dark-border/30">
                    <span className="text-xs text-triply-slate/60 dark:text-dark-text-secondary">التكلفة المتوقعة</span>
                    <span className="font-display text-lg font-bold text-triply dark:text-triply-mint">{destination.price}</span>
                  </div>
                )}
              </div>
              
              {/* Decorative bottom gradient */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-triply-mint via-triply-teal to-triply-accent dark:from-triply-teal dark:via-triply-mint dark:to-triply-accentLight opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { DestinationsSection };
