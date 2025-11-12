import { useState, useEffect } from 'react';
import { testimonials } from '../../data/testimonials.js';

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user manually changes
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      goToNext();
    }
    if (touchStart - touchEnd < -75) {
      // Swiped right
      goToPrevious();
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-triply-sand/20 dark:bg-dark-surface/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 text-right">
        <div className="space-y-4 text-center">
          <span className="heading-gradient text-sm font-medium">آراء العملاء</span>
          <h2 className="font-display text-3xl text-triply-dark dark:text-dark-text-primary md:text-4xl">قصص نجاح من شركائنا ورواد الأعمال</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonials Slider */}
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <article 
                  key={testimonial.name} 
                  className="min-w-full px-4"
                  aria-hidden={index !== currentIndex}
                >
                  <div className="glass-panel mx-auto max-w-3xl flex flex-col gap-6 p-8 md:p-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-triply-teal/20 dark:bg-triply-mint/20 text-xl font-semibold text-triply-dark dark:text-dark-text-primary">
                          {testimonial.avatar}
                        </span>
                        <div>
                          <p className="font-semibold text-lg text-triply-dark dark:text-dark-text-primary">{testimonial.name}</p>
                          <p className="text-sm text-triply-slate/70 dark:text-dark-text-secondary">{testimonial.role}</p>
                        </div>
                      </div>
                      <svg viewBox="0 0 24 24" className="h-8 w-8 flex-shrink-0 text-triply-accent dark:text-triply-accentLight opacity-50" fill="currentColor" aria-hidden="true">
                        <path d="M7.17 12.162c1.146.338 1.934 1.216 1.934 2.52 0 1.762-1.48 3.318-3.386 3.318-1.81 0-3.179-1.334-3.179-3.216 0-3.91 2.928-7.047 6.54-7.658l.455 1.318c-1.94.603-3.197 2.009-3.364 3.718Zm9.89 0c1.146.338 1.934 1.216 1.934 2.52 0 1.762-1.48 3.318-3.386 3.318-1.81 0-3.179-1.334-3.179-3.216 0-3.91 2.928-7.047 6.54-7.658l.455 1.318c-1.94.603-3.197 2.009-3.364 3.718Z" />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg leading-8 text-triply-slate/80 dark:text-dark-text-secondary">
                      {testimonial.quote}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-4 md:-translate-x-12 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white dark:bg-dark-elevated border-2 border-triply-mint/40 dark:border-dark-border text-triply-dark dark:text-dark-text-primary shadow-lg hover:bg-triply-mint/20 dark:hover:bg-dark-surface hover:scale-110 transition-all duration-200 z-10"
            aria-label="الشهادة السابقة"
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-4 md:translate-x-12 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white dark:bg-dark-elevated border-2 border-triply-mint/40 dark:border-dark-border text-triply-dark dark:text-dark-text-primary shadow-lg hover:bg-triply-mint/20 dark:hover:bg-dark-surface hover:scale-110 transition-all duration-200 z-10"
            aria-label="الشهادة التالية"
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-triply dark:bg-triply-mint'
                  : 'w-2 bg-triply-mint/40 dark:bg-dark-border hover:bg-triply-mint/60 dark:hover:bg-dark-border/80'
              }`}
              aria-label={`انتقل إلى الشهادة ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-triply-slate/60 dark:text-dark-text-secondary hover:text-triply dark:hover:text-triply-mint transition-colors"
          >
            {isAutoPlaying ? '⏸ إيقاف التشغيل التلقائي' : '▶ تشغيل تلقائي'}
          </button>
        </div>
      </div>
    </section>
  );
}

export { TestimonialsSection };
