/**
 * قسم BookingSection - قسم الحجز السريع
 * يوفر نموذج حجز أولي مع:
 * - اختيار الوجهة
 * - اختيار الخدمات
 * - تحديد الميزانية
 * - حفظ التفضيلات في localStorage
 */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlassButton } from '../ui/GlassButton.jsx';
import { FeedbackToast } from '../ui/FeedbackToast.jsx';
import { bookingServices, budgetLevels, bookingDestinations, destinationMapping } from '../../data/bookingOptions.js';
import { formHelpers } from '../../data/formHelpers.js';
import { FormHelper } from '../ui/FormHelper.jsx';
import { BookingProgressIndicator } from '../BookingProgressIndicator.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { travelCosts } from '../../data/travelCosts.js';
import { currencyRates } from '../../data/currencyRates.js';

const STORAGE_KEY = 'triply-booking-preferences';

function BookingSection() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [userBudget, setUserBudget] = useState('');
  
  // الخدمات المختارة (خدمة واحدة من كل نوع)
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [hasSavedPreferences, setHasSavedPreferences] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return;
      }
      const parsed = JSON.parse(stored);
      if (parsed.destination) {
        setSelectedDestination(parsed.destination);
      }
      if (Array.isArray(parsed.services)) {
        setSelectedServices(parsed.services);
      }
      if (parsed.budget) {
        setSelectedBudget(parsed.budget);
      }
      setHasSavedPreferences(true);
      setFeedback({ message: 'تم استرجاع تفضيلات الحجز المحفوظة', variant: 'info' });
    } catch (error) {
      console.error('Failed to restore booking preferences', error);
    }
  }, []);

  useEffect(() => {
    const snapshot = {
      destination: selectedDestination,
      services: selectedServices,
      budget: selectedBudget
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    if (selectedDestination || selectedServices.length > 0 || selectedBudget) {
      setHasSavedPreferences(true);
    }

    // Update progress step based on form completion
    if (selectedDestination) {
      setCurrentStep(2);
      if ((selectedServices.length > 0 || selectedBudget)) {
        setCurrentStep(3);
      }
    } else {
      setCurrentStep(1);
    }
  }, [selectedDestination, selectedServices, selectedBudget]);

  // حساب التكلفة الإجمالية للخدمات المختارة
  const calculateTotalCost = () => {
    let total = 0;
    if (selectedFlight) {
      const flight = JSON.parse(selectedFlight);
      total += flight.price;
    }
    if (selectedHotel) {
      const hotel = JSON.parse(selectedHotel);
      total += hotel.price;
    }
    if (selectedRestaurant) {
      const restaurant = JSON.parse(selectedRestaurant);
      total += restaurant.price;
    }
    if (selectedActivity) {
      const activity = JSON.parse(selectedActivity);
      total += activity.price;
    }
    return total;
  };

  // دالة لتحويل السعر لعملة الدولة
  const convertCurrency = (sarPrice) => {
    if (!selectedDestination) return { sar: sarPrice, local: sarPrice, currency: 'ريال', symbol: 'ریال', flag: '🇸🇦' };
    
    const destKey = destinationMapping[selectedDestination];
    const currencyInfo = currencyRates[destKey] || currencyRates[selectedDestination];
    
    if (!currencyInfo) {
      return { sar: sarPrice, local: sarPrice, currency: 'ريال', symbol: 'ريال', flag: '🇸🇦' };
    }
    
    const localPrice = (sarPrice * currencyInfo.rate).toFixed(2);
    return {
      sar: sarPrice,
      local: localPrice,
      currency: currencyInfo.currency,
      symbol: currencyInfo.symbol,
      flag: currencyInfo.flag
    };
  };
  
  // الحصول على البيانات بناءً على الوجهة والفئة المختارة
  const getAvailableOptions = () => {
    if (!selectedDestination || !selectedBudget) {
      return { flights: [], hotels: [], restaurants: [], activities: [] };
    }
    
    const destinationKey = destinationMapping[selectedDestination];
    const cityData = travelCosts[destinationKey];
    
    if (!cityData) {
      return { flights: [], hotels: [], restaurants: [], activities: [] };
    }
    
    return {
      flights: cityData.flights || [],
      hotels: cityData.hotels?.[selectedBudget] || [],
      restaurants: cityData.restaurants?.[selectedBudget] || [],
      activities: cityData.activities?.filter(act => act.category === selectedBudget) || []
    };
  };
  
  const availableOptions = getAvailableOptions();

  const toggleService = (serviceId) => {
    const service = bookingServices.find(s => s.id === serviceId);
    const currentTotal = calculateTotalCost();
    const budgetLimit = parseFloat(userBudget) || Infinity;

    // إذا كانت الخدمة مختارة بالفعل، اسمح بإلغائها
    if (selectedServices.includes(serviceId)) {
      setSelectedServices((prev) => prev.filter((id) => id !== serviceId));
      return;
    }

    // تحقق من الميزانية قبل إضافة خدمة جديدة
    const newTotal = currentTotal + (service?.estimatedCost || 0);
    if (userBudget && newTotal > budgetLimit) {
      setFeedback({
        message: `⚠️ لا يمكن إضافة هذه الخدمة! المجموع (${newTotal.toLocaleString()} ريال) سيتجاوز ميزانيتك (${budgetLimit.toLocaleString()} ريال)`,
        variant: 'error'
      });
      return;
    }

    setSelectedServices((prev) => [...prev, serviceId]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setFeedback({
        message: `تم استلام طلب الحجز لرحلتك إلى ${selectedDestination} وسنتواصل معك خلال ساعات`,
        variant: 'success'
      });
    }, 1200);
  };

  const handleGetPriceQuote = () => {
    // تحويل اسم الوجهة العربي إلى المفتاح الانجليزي
    const destinationKey = destinationMapping[selectedDestination] || 'london';
    
    // حفظ البيانات قبل الانتقال
    const snapshot = {
      destination: selectedDestination,
      destinationKey: destinationKey,
      services: selectedServices,
      budget: selectedBudget,
      userBudget: userBudget,
      // حفظ الخدمات المختارة
      selectedFlight: selectedFlight,
      selectedHotel: selectedHotel,
      selectedRestaurant: selectedRestaurant,
      selectedActivity: selectedActivity
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    
    // التوجيه للصفحة مع معلمات URL (المفتاح الانجليزي والميزانية)
    const params = new URLSearchParams();
    if (destinationKey) {
      params.append('destination', destinationKey);
    }
    if (selectedBudget) {
      params.append('category', selectedBudget);
    }
    if (userBudget) {
      params.append('budget', userBudget);
    }
    const queryString = params.toString();
    navigate(`/booking-details${queryString ? '?' + queryString : ''}`);
  };

  const handleSavePreferences = () => {
    const snapshot = {
      destination: selectedDestination,
      services: selectedServices,
      budget: selectedBudget
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    setHasSavedPreferences(true);
    setFeedback({ message: 'تم حفظ اختيارك، يمكنك استرجاعه لاحقاً', variant: 'success' });
  };

  const handleRestorePreferences = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setFeedback({ message: 'لا توجد اختيارات محفوظة للاسترجاع حالياً', variant: 'info' });
        return;
      }
      const parsed = JSON.parse(stored);
      setSelectedDestination(parsed.destination ?? '');
      setSelectedServices(Array.isArray(parsed.services) ? parsed.services : []);
      setSelectedBudget(parsed.budget ?? '');
      setFeedback({ message: 'تم تطبيق آخر اختياراتك المحفوظة', variant: 'success' });
    } catch (error) {
      console.error('Failed to restore booking preferences', error);
      setFeedback({ message: 'حدث خطأ أثناء استرجاع البيانات', variant: 'error' });
    }
  };

  return (
    <section id="booking" className="section-padding relative overflow-hidden bg-gradient-to-b from-triply-sand/20 via-white to-triply-mint/10 dark:from-dark-bg dark:via-dark-surface/50 dark:to-dark-elevated">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-triply-mint/30 dark:bg-triply-teal/20 blur-3xl" />
        <div className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-triply-accent/20 dark:bg-triply-mint/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-right">
        <div ref={headerRef} className={`mb-12 space-y-4 text-center ${headerVisible ? 'reveal-fade-down' : 'reveal'}`}>
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-triply-mint to-triply-teal dark:from-triply-teal dark:to-triply-mint px-5 py-2 text-sm font-semibold text-white shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            احجز رحلتك المخصصة
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-triply-dark dark:text-dark-text-primary md:text-5xl leading-tight">
            صمم رحلتك بنفسك <span className="text-transparent bg-clip-text bg-gradient-to-l from-triply via-triply-teal to-triply-mint">واختر الخدمات المناسبة</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-7 text-triply-slate/75 dark:text-dark-text-secondary">
            اختر الوجهة والخدمات التي تحتاجها، وحدد ميزانيتك، ودعنا نخطط لك رحلة مثالية تناسب احتياجاتك
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <GlassButton
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleSavePreferences}
              disabled={!selectedDestination && selectedServices.length === 0 && !selectedBudget}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
              </svg>
              حفظ اختياراتي
            </GlassButton>
            <GlassButton
              type="button"
              variant="accent"
              size="sm"
              onClick={handleRestorePreferences}
              disabled={!hasSavedPreferences}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              استرجاع الاختيار
            </GlassButton>
          </div>

          {/* Progress Indicator */}
          <BookingProgressIndicator currentStep={currentStep} />
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`space-y-8 rounded-3xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white/95 dark:bg-dark-elevated/80 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300 ${formVisible ? 'reveal-scale' : 'reveal'}`}
        >
          <FeedbackToast
            message={feedback?.message}
            variant={feedback?.variant}
            className="mb-4"
            onDismiss={() => setFeedback(null)}
          />
          {/* الخطوة 1: إدخال الميزانية واختيار الوجهة */}
          <div className="space-y-6 p-6 rounded-2xl bg-gradient-to-br from-triply-mint/5 to-triply-teal/5 dark:from-triply-teal/10 dark:to-triply-mint/5 border-2 border-triply-mint/30 dark:border-triply-teal/30">
            <div className="flex items-center gap-3 pb-3 border-b-2 border-triply-mint/20 dark:border-triply-teal/20">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-triply to-triply-teal text-white font-bold text-lg shadow-lg">1</span>
              <h3 className="text-xl font-bold text-triply-dark dark:text-dark-text-primary">حدد ميزانيتك واختر الوجهة</h3>
            </div>

            {/* إدخال الميزانية */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-base font-bold text-triply-dark dark:text-dark-text-primary">
                <svg className="w-5 h-5 text-triply dark:text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                الميزانية المتاحة (ريال سعودي)
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={userBudget}
                  onChange={(e) => setUserBudget(e.target.value)}
                  placeholder="مثال: 5000"
                  min="0"
                  step="100"
                  className="w-full rounded-xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:bg-dark-surface px-5 py-4 text-right text-lg font-semibold text-triply-dark dark:text-dark-text-primary placeholder:text-triply-slate/40 dark:placeholder:text-dark-text-secondary/40 shadow-md transition-all duration-200 hover:border-triply dark:hover:border-triply-mint focus:border-triply dark:focus:border-triply-mint focus:outline-none focus:ring-4 focus:ring-triply/10 dark:focus:ring-triply-mint/20"
                />
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-triply-slate/60 dark:text-dark-text-secondary font-medium">ريال</span>
              </div>
              <FormHelper text="حدد الميزانية الإجمالية المتاحة لرحلتك. لن يمكنك تجاوز هذا المبلغ عند اختيار الخدمات." />
              
              {/* عرض الميزانية المتبقية */}
              {userBudget && (
                <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-triply/10 to-triply-teal/10 dark:from-triply-teal/20 dark:to-triply-mint/10 border border-triply-mint/30 dark:border-triply-teal/30">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-triply-dark dark:text-dark-text-primary">الميزانية المحددة:</span>
                    <span className="text-lg font-bold text-triply dark:text-triply-mint">{parseFloat(userBudget).toLocaleString()} ريال</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="font-semibold text-triply-dark dark:text-dark-text-primary">المبلغ المستخدم:</span>
                    <span className="text-lg font-bold text-triply-accent dark:text-triply-accentLight">{calculateTotalCost().toLocaleString()} ريال</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2 pt-2 border-t border-triply-mint/20 dark:border-triply-teal/20">
                    <span className="font-semibold text-triply-dark dark:text-dark-text-primary">المتبقي:</span>
                    <span className={`text-lg font-bold ${(parseFloat(userBudget) - calculateTotalCost()) >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                      {(parseFloat(userBudget) - calculateTotalCost()).toLocaleString()} ريال
                    </span>
                  </div>
                  {/* شريط تقدم الميزانية */}
                  <div className="mt-3 h-3 bg-triply-sand/30 dark:bg-dark-surface/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        (calculateTotalCost() / parseFloat(userBudget)) * 100 > 90 
                          ? 'bg-gradient-to-r from-red-500 to-red-600' 
                          : (calculateTotalCost() / parseFloat(userBudget)) * 100 > 70 
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                          : 'bg-gradient-to-r from-triply to-triply-teal'
                      }`}
                      style={{ width: `${Math.min((calculateTotalCost() / parseFloat(userBudget)) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* اختيار الوجهة */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-base font-bold text-triply-dark dark:text-dark-text-primary">
                <svg className="w-5 h-5 text-triply dark:text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {formHelpers.booking.destination.label}
              </label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full rounded-xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:!bg-dark-surface px-5 py-4 pr-12 text-right text-base font-medium text-triply-dark dark:!text-dark-text-primary shadow-md transition-all duration-200 hover:border-triply dark:hover:border-triply-mint focus:border-triply dark:focus:border-triply-mint focus:bg-white dark:focus:!bg-dark-surface focus:outline-none focus:ring-4 focus:ring-triply/10 dark:focus:ring-triply-mint/20 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%230f5b4a%22%20d%3D%22M6%208L0%200h12z%22%2F%3E%3C%2Fsvg%3E')] dark:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%2371d4c1%22%20d%3D%22M6%208L0%200h12z%22%2F%3E%3C%2Fsvg%3E')] bg-[position:left_1.25rem_center] bg-no-repeat"
              required
              style={{ colorScheme: 'dark' }}
            >
              <option value="" className="bg-white dark:bg-dark-surface text-triply-dark dark:text-dark-text-primary">{formHelpers.booking.destination.placeholder}</option>
              {bookingDestinations.map((dest) => (
                <option key={dest} value={dest} className="bg-white dark:bg-dark-surface text-triply-dark dark:text-dark-text-primary">
                  {dest}
                </option>
              ))}
            </select>
            <FormHelper text={formHelpers.booking.destination.helper} />
            </div>
          </div>

          {/* اختيار الفئة */}
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-lg font-bold text-triply-dark dark:text-dark-text-primary">
              <svg className="w-6 h-6 text-triply dark:text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              {formHelpers.booking.budget.label}
            </label>
            <FormHelper text={formHelpers.booking.budget.helper} />
            <div className="grid gap-4 sm:grid-cols-3">
              {budgetLevels.map((budget) => (
                <button
                  key={budget.id}
                  type="button"
                  onClick={() => setSelectedBudget(budget.id)}
                  className={`group relative rounded-xl border-2 p-6 text-center transition-all duration-300 overflow-hidden ${
                    selectedBudget === budget.id
                      ? 'border-triply dark:border-triply-mint bg-gradient-to-br from-triply/10 to-triply-mint/10 dark:from-triply-mint/20 dark:to-triply-teal/10 shadow-xl scale-[1.05]'
                      : 'border-triply-mint/40 dark:border-dark-border/50 bg-gradient-to-br from-triply-sand/5 to-white dark:from-dark-surface/30 dark:to-dark-elevated/40 hover:border-triply dark:hover:border-triply-teal hover:shadow-lg hover:scale-[1.03]'
                  }`}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  
                  <div className="relative z-10 mb-3 text-xl font-bold text-triply-dark dark:text-dark-text-primary">{budget.name}</div>
                  <div className="relative z-10 text-xs leading-relaxed text-triply-slate/70 dark:text-dark-text-secondary">{budget.description}</div>
                  {selectedBudget === budget.id && (
                    <div className="relative z-10 mt-3">
                      <svg className="w-8 h-8 mx-auto text-triply dark:text-triply-mint animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* اختيار الخدمات */}
          {selectedDestination && selectedBudget && (
            <div className="space-y-4 animate-fade-in">
              <label className="flex items-center gap-2 text-lg font-bold text-triply-dark dark:text-dark-text-primary">
                <svg className="w-6 h-6 text-triply dark:text-triply-mint" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                اختر الخدمات
              </label>
              <FormHelper text="اختر الخدمات التي تناسب رحلتك (اختياري)" />
              
              <div className="grid gap-4 sm:grid-cols-2">
                {/* طيران */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-triply-dark dark:text-dark-text-primary">
                    ✈️ الطيران
                  </label>
                  <select
                    value={selectedFlight || ''}
                    onChange={(e) => setSelectedFlight(e.target.value || null)}
                    className="w-full rounded-xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:bg-dark-elevated p-3 text-triply-dark dark:text-dark-text-primary focus:border-triply dark:focus:border-triply-mint focus:outline-none transition-all"
                  >
                    <option value="">لا أريد</option>
                    {getAvailableOptions().flights.map((flight, idx) => (
                      <option key={idx} value={JSON.stringify(flight)}>
                        {flight.name} - {flight.price.toLocaleString()} ريال
                      </option>
                    ))}
                  </select>
                </div>

                {/* فندق */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-triply-dark dark:text-dark-text-primary">
                    🏨 الفندق
                  </label>
                  <select
                    value={selectedHotel || ''}
                    onChange={(e) => setSelectedHotel(e.target.value || null)}
                    className="w-full rounded-xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:bg-dark-elevated p-3 text-triply-dark dark:text-dark-text-primary focus:border-triply dark:focus:border-triply-mint focus:outline-none transition-all"
                  >
                    <option value="">لا أريد</option>
                    {getAvailableOptions().hotels.map((hotel, idx) => (
                      <option key={idx} value={JSON.stringify(hotel)}>
                        {hotel.name} - {hotel.price.toLocaleString()} ريال/ليلة
                      </option>
                    ))}
                  </select>
                </div>

                {/* مطعم */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-triply-dark dark:text-dark-text-primary">
                    🍽️ المطعم
                  </label>
                  <select
                    value={selectedRestaurant || ''}
                    onChange={(e) => setSelectedRestaurant(e.target.value || null)}
                    className="w-full rounded-xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:bg-dark-elevated p-3 text-triply-dark dark:text-dark-text-primary focus:border-triply dark:focus:border-triply-mint focus:outline-none transition-all"
                  >
                    <option value="">لا أريد</option>
                    {getAvailableOptions().restaurants.map((restaurant, idx) => (
                      <option key={idx} value={JSON.stringify(restaurant)}>
                        {restaurant.name} - {restaurant.price.toLocaleString()} ريال/وجبة
                      </option>
                    ))}
                  </select>
                </div>

                {/* نشاط */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-triply-dark dark:text-dark-text-primary">
                    🎯 النشاط
                  </label>
                  <select
                    value={selectedActivity || ''}
                    onChange={(e) => setSelectedActivity(e.target.value || null)}
                    className="w-full rounded-xl border-2 border-triply-mint/40 dark:border-dark-border/50 bg-white dark:bg-dark-elevated p-3 text-triply-dark dark:text-dark-text-primary focus:border-triply dark:focus:border-triply-mint focus:outline-none transition-all"
                  >
                    <option value="">لا أريد</option>
                    {getAvailableOptions().activities.map((activity, idx) => (
                      <option key={idx} value={JSON.stringify(activity)}>
                        {activity.name} - {activity.price.toLocaleString()} ريال
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* عرض التكلفة الإجمالية */}
              {(selectedFlight || selectedHotel || selectedRestaurant || selectedActivity) && (() => {
                const totalCost = calculateTotalCost();
                const converted = convertCurrency(totalCost);
                return (
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-triply/10 to-triply-mint/10 dark:from-triply-mint/20 dark:to-triply-teal/10 border-2 border-triply dark:border-triply-mint">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-triply-dark dark:text-dark-text-primary">التكلفة الإجمالية:</span>
                      <div className="text-left">
                        <div className="text-xl font-bold text-triply dark:text-triply-mint">
                          {totalCost.toLocaleString()} ريال 🇸🇦
                        </div>
                        {converted.currency !== 'ريال' && (
                          <div className="text-sm text-triply-dark/70 dark:text-dark-text-secondary mt-1">
                            {converted.flag} {Number(converted.local).toLocaleString()} {converted.symbol}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* تفاصيل الخدمات المختارة */}
                    <div className="mt-3 pt-3 border-t border-triply/20 dark:border-triply-mint/20 space-y-2 text-sm">
                      {selectedFlight && (
                        <div className="flex justify-between items-center">
                          <span className="text-triply-dark/70 dark:text-dark-text-secondary">✈️ الطيران:</span>
                          <span className="font-semibold text-triply-dark dark:text-dark-text-primary">{JSON.parse(selectedFlight).price.toLocaleString()} ريال</span>
                        </div>
                      )}
                      {selectedHotel && (
                        <div className="flex justify-between items-center">
                          <span className="text-triply-dark/70 dark:text-dark-text-secondary">🏨 الفندق:</span>
                          <span className="font-semibold text-triply-dark dark:text-dark-text-primary">{JSON.parse(selectedHotel).price.toLocaleString()} ريال/ليلة</span>
                        </div>
                      )}
                      {selectedRestaurant && (
                        <div className="flex justify-between items-center">
                          <span className="text-triply-dark/70 dark:text-dark-text-secondary">🍽️ المطعم:</span>
                          <span className="font-semibold text-triply-dark dark:text-dark-text-primary">{JSON.parse(selectedRestaurant).price.toLocaleString()} ريال/وجبة</span>
                        </div>
                      )}
                      {selectedActivity && (
                        <div className="flex justify-between items-center">
                          <span className="text-triply-dark/70 dark:text-dark-text-secondary">🎯 النشاط:</span>
                          <span className="font-semibold text-triply-dark dark:text-dark-text-primary">{JSON.parse(selectedActivity).price.toLocaleString()} ريال</span>
                        </div>
                      )}
                    </div>
                    
                    {userBudget && parseFloat(userBudget) > 0 && totalCost > parseFloat(userBudget) && (
                      <div className="mt-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                        <p className="text-sm text-red-600 dark:text-red-400">
                          ⚠️ التكلفة تتجاوز الميزانية المحددة ({parseFloat(userBudget).toLocaleString()} ريال)
                        </p>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </form>

        {/* ملخص الاختيار */}
        {(selectedDestination || selectedServices.length > 0 || selectedBudget) && (
          <div className="mt-8 rounded-2xl border-2 border-triply/30 dark:border-triply-mint/40 bg-gradient-to-br from-triply-sand/40 via-triply-mint/10 to-white dark:from-triply-teal/20 dark:via-dark-elevated/80 dark:to-dark-surface/60 backdrop-blur-sm p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-triply to-triply-teal dark:from-triply-mint dark:to-triply-teal shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-triply-dark dark:text-dark-text-primary">ملخص اختيارك</h3>
            </div>
            <div className="space-y-3 text-sm sm:text-base">
              {selectedDestination && (
                <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white dark:bg-dark-elevated border-2 border-triply-mint/40 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-triply dark:text-triply-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-triply-dark dark:text-dark-text-primary">الوجهة:</strong>
                    <span className="mr-2 font-semibold text-triply dark:text-triply-mint">{selectedDestination}</span>
                  </div>
                </div>
              )}
              {selectedServices.length > 0 && (
                <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white dark:bg-dark-elevated border-2 border-triply-mint/40 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-triply dark:text-triply-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-triply-dark dark:text-dark-text-primary">الخدمات:</strong>
                    <span className="mr-2 font-semibold text-triply dark:text-triply-mint">
                      {selectedServices.map((id) => bookingServices.find((s) => s.id === id)?.name).join(' • ')}
                    </span>
                  </div>
                </div>
              )}
              {selectedBudget && (
                <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-white dark:bg-dark-elevated border-2 border-triply-mint/40 dark:border-dark-border/40 shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 text-triply dark:text-triply-mint flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-triply-dark dark:text-dark-text-primary">الميزانية:</strong>
                    <span className="mr-2 font-semibold text-triply dark:text-triply-mint">{budgetLevels.find((b) => b.id === selectedBudget)?.name}</span>
                  </div>
                </div>
              )}
            </div>

            {/* زر الانتقال لصفحة الأسعار المفصلة */}
            <div className="mt-6 pt-6 border-t-2 border-triply-mint/30 dark:border-triply-teal/30">
              <GlassButton
                type="button"
                variant="primary"
                size="lg"
                onClick={handleGetPriceQuote}
                className="w-full"
                disabled={!selectedDestination}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  احجز الآن واحصل على عرض سعر مفصّل
                </div>
              </GlassButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export { BookingSection };
