import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { 
      id: 1, 
      value: 1200, 
      suffix: '+', 
      label: 'رحلة ناجحة',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      )
    },
    { 
      id: 2, 
      value: 5000, 
      suffix: '+', 
      label: 'عميل سعيد',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
        </svg>
      )
    },
    { 
      id: 3, 
      value: 300, 
      suffix: '+', 
      label: 'شريك عالمي',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      )
    },
    { 
      id: 4, 
      value: 95, 
      suffix: '%', 
      label: 'رضا العملاء',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-triply via-triply-teal to-triply-dark dark:from-dark-bg dark:via-dark-surface dark:to-dark-elevated"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-10 right-20 w-32 h-32 bg-white dark:bg-triply-mint rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-white dark:bg-triply-mint rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-white dark:text-dark-text-primary md:text-4xl mb-3 sm:mb-4">
            أرقامنا تتحدث عن نفسها
          </h2>
          <p className="text-white/80 dark:text-dark-text-secondary text-sm sm:text-base leading-6 sm:leading-7 px-4">
            نفخر بثقة عملائنا وشركائنا حول العالم
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, isVisible, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.round(increment * currentStep), stat.value));

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, stat.value, delay]);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white/10 dark:bg-dark-elevated/40 backdrop-blur-md border border-white/20 dark:border-dark-border/30 p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 dark:hover:bg-dark-elevated/60 hover:shadow-2xl"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.6s ease-out ${delay}ms`
      }}
    >
      {/* Icon */}
      <div className="mb-3 sm:mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 dark:bg-dark-elevated/60 text-white group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>

      {/* Animated Number */}
      <div className="mb-2 font-display text-3xl sm:text-4xl font-bold text-white dark:text-dark-text-primary md:text-5xl">
        {count.toLocaleString('ar-SA')}
        <span className="text-triply-accentLight dark:text-triply-mint">{stat.suffix}</span>
      </div>

      {/* Label */}
      <p className="text-xs sm:text-sm font-medium text-white/80 dark:text-dark-text-secondary">
        {stat.label}
      </p>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-triply-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

StatCard.propTypes = {
  stat: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    suffix: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired
  }).isRequired,
  isVisible: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired
};

export { StatsSection };
