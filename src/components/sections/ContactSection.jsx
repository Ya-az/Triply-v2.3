import { useState } from 'react';
import { GlassButton } from '../ui/GlassButton.jsx';
import { formHelpers } from '../../data/formHelpers.js';
import { FormHelper } from '../ui/FormHelper.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';

const initialForm = {
  name: '',
  email: '',
  message: ''
};

function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState(null);

  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.1 });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('success');
    setFormData(initialForm);
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-triply-accent/10 to-white dark:from-dark-bg dark:via-dark-surface/30 dark:to-dark-bg">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 right-10 h-96 w-96 rounded-full bg-triply-mint/20 dark:bg-triply-teal/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-triply-accent/20 dark:bg-triply-mint/10 blur-3xl" />
      </div>
      
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 text-right lg:grid-cols-[1.1fr,0.9fr] lg:gap-16">
        <div ref={infoRef} className={`space-y-6 ${infoVisible ? 'reveal-fade-right' : 'reveal'}`}>
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-triply-mint to-triply-teal dark:from-triply-teal dark:to-triply-mint px-5 py-2 text-sm font-semibold text-white shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            تواصل معنا
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-triply-dark dark:text-dark-text-primary">
            دعنا نخطط <span className="text-transparent bg-clip-text bg-gradient-to-l from-triply via-triply-teal to-triply-mint">رحلتك القادمة</span>
          </h2>
          <p className="max-w-xl text-base sm:text-lg leading-7 text-triply-slate/75 dark:text-dark-text-secondary">
            أخبرنا عن أهدافك واحتياجاتك وسيتواصل معك أحد مستشارينا خلال 24 ساعة لتصميم رحلة متكاملة تناسبك.
          </p>
          
          <div className="grid gap-5 pt-4">
            <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-dark-elevated border-2 border-triply-mint/40 dark:border-dark-border/50 shadow-lg hover:shadow-xl dark:shadow-soft-dark dark:hover:shadow-ambient-dark transition-all duration-300 hover:-translate-y-1 hover:border-triply dark:hover:border-triply-mint">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-triply-mint to-triply-teal flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-triply-dark dark:text-dark-text-primary mb-1 group-hover:text-triply dark:group-hover:text-triply-mint transition-colors">البريد الإلكتروني</h3>
                <a className="text-triply-slate/80 dark:text-dark-text-secondary hover:text-triply dark:hover:text-triply-mint transition-colors" href="mailto:contact@triply.com">
                  contact@triply.com
                </a>
              </div>
            </div>
            
            <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-dark-elevated border-2 border-triply-mint/40 dark:border-dark-border/50 shadow-lg hover:shadow-xl dark:shadow-soft-dark dark:hover:shadow-ambient-dark transition-all duration-300 hover:-translate-y-1 hover:border-triply dark:hover:border-triply-mint">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-triply-teal to-triply-accent flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-triply-dark dark:text-dark-text-primary mb-1 group-hover:text-triply dark:group-hover:text-triply-mint transition-colors">الهاتف</h3>
                <a className="text-triply-slate/80 dark:text-dark-text-secondary hover:text-triply dark:hover:text-triply-mint transition-colors" href="tel:+966501234567">
                  +966 50 123 4567
                </a>
              </div>
            </div>
            
            <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-dark-elevated border-2 border-triply-mint/40 dark:border-dark-border/50 shadow-lg hover:shadow-xl dark:shadow-soft-dark dark:hover:shadow-ambient-dark transition-all duration-300 hover:-translate-y-1 hover:border-triply dark:hover:border-triply-mint">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-triply-accent to-triply dark:bg-triply flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-triply-dark dark:text-dark-text-primary mb-1 group-hover:text-triply dark:group-hover:text-triply-mint transition-colors">العنوان</h3>
                <p className="text-triply-slate/80 dark:text-dark-text-secondary">الدمام - المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className={`relative overflow-hidden rounded-3xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:bg-dark-elevated shadow-2xl dark:shadow-ambient-dark p-8 sm:p-10 ${formVisible ? 'reveal-fade-left' : 'reveal'}`}>
          {/* Form decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-triply-mint/5 via-transparent to-triply-teal/5 dark:from-triply-teal/5 dark:to-triply-mint/5 pointer-events-none" />
          
          <div className="relative space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-2.5 text-sm">
                <span className="font-semibold text-triply-dark dark:text-dark-text-primary flex items-center gap-2">
                  <svg className="w-4 h-4 text-triply dark:text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  {formHelpers.contact.name.label}
                </span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:bg-dark-surface px-4 py-3 text-triply-dark dark:text-dark-text-primary shadow-md focus:border-triply dark:focus:border-triply-mint focus:ring-2 focus:ring-triply/20 dark:focus:ring-triply-mint/20 transition-all"
                  placeholder={formHelpers.contact.name.placeholder}
                  type="text"
                />
                <FormHelper text={formHelpers.contact.name.helper} />
              </label>
              
              <label className="flex flex-col gap-2.5 text-sm">
                <span className="font-semibold text-triply-dark dark:text-dark-text-primary flex items-center gap-2">
                  <svg className="w-4 h-4 text-triply dark:text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {formHelpers.contact.email.label}
                </span>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:bg-dark-surface px-4 py-3 text-triply-dark dark:text-dark-text-primary shadow-md focus:border-triply dark:focus:border-triply-mint focus:ring-2 focus:ring-triply/20 dark:focus:ring-triply-mint/20 transition-all"
                  placeholder={formHelpers.contact.email.placeholder}
                  type="email"
                />
                <FormHelper text={formHelpers.contact.email.helper} />
              </label>
            </div>
            
            <label className="flex flex-col gap-2.5 text-sm">
              <span className="font-semibold text-triply-dark dark:text-dark-text-primary flex items-center gap-2">
                <svg className="w-4 h-4 text-triply dark:text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                {formHelpers.contact.message.label}
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="rounded-2xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:bg-dark-surface px-4 py-3 text-triply-dark dark:text-dark-text-primary shadow-md focus:border-triply dark:focus:border-triply-mint focus:ring-2 focus:ring-triply/20 dark:focus:ring-triply-mint/20 transition-all resize-none"
                placeholder={formHelpers.contact.message.placeholder}
              />
              <FormHelper text={formHelpers.contact.message.helper} />
            </label>
            
            <GlassButton type="submit" variant="primary" className="w-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              أرسل الطلب
            </GlassButton>
            
            {status === 'success' ? (
              <div
                className="rounded-2xl border-2 border-triply-teal/40 dark:border-triply-teal/60 bg-gradient-to-r from-triply-mint/20 to-triply-teal/20 dark:from-triply-teal/20 dark:to-triply-mint/20 px-5 py-4 text-sm text-triply-dark dark:text-dark-text-primary shadow-lg flex items-center gap-3"
                role="status"
                aria-live="polite"
              >
                <svg className="w-5 h-5 text-triply-teal dark:text-triply-mint flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">شكرًا لتواصلك! سنعود إليك خلال 24 ساعة.</span>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

export { ContactSection };
