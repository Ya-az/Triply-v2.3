import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { formatDualCurrency } from '../data/currencyRates.js';

function PaymentSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addBooking } = useAuth();
  const bookingData = location.state;
  const [showQR, setShowQR] = useState(false);
  const [invoiceId] = useState(() => 
    'INV-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase()
  );
  const [bookingNumber] = useState(() => 
    'BK-' + Math.random().toString(36).substr(2, 9).toUpperCase()
  );

  useEffect(() => {
    if (!bookingData) {
      navigate('/');
      return;
    }

    // Save booking to user profile - فقط مرة واحدة
    if (bookingData && !bookingData.saved) {
      console.log('💾 Saving booking for the first time...');
      const savedBooking = addBooking({
        ...bookingData,
        invoiceId,
        bookingNumber
      });
      
      // Update location state to prevent duplicate saves
      window.history.replaceState(
        { ...bookingData, saved: true, id: savedBooking.id, invoiceId, bookingNumber },
        ''
      );
    } else if (bookingData?.saved) {
      console.log('✅ Booking already saved, skipping...');
    }
    
    // إظهار QR Code تلقائياً بعد 2 ثانية
    const timer = setTimeout(() => {
      setShowQR(true);
    }, 2000);
    
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // تشغيل مرة واحدة فقط عند mount

  if (!bookingData) {
    return null;
  }
  
  // بيانات QR Code - رابط للفاتورة
  const baseUrl = window.location.origin + window.location.pathname.split('#')[0];
  const invoiceUrl = `${baseUrl}#/invoice/${invoiceId}`;
  const qrData = invoiceUrl;

  return (
    <div className="min-h-screen bg-gradient-to-br from-triply-mint/20 via-white to-triply-teal/20 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full bg-white dark:bg-dark-surface rounded-3xl shadow-2xl p-8 md:p-12 border border-triply-mint/30 dark:border-dark-border animate-scaleIn">
        {/* أيقونة النجاح */}
        <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* العنوان */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-triply-dark dark:text-dark-text-primary mb-3">
          تم الدفع بنجاح! 🎉
        </h1>

        <p className="text-center text-triply-dark/70 dark:text-dark-text-secondary mb-8">
          تم تأكيد حجزك وإرسال التفاصيل إلى بريدك الإلكتروني
        </p>

        {/* تفاصيل الحجز */}
        <div className="bg-gradient-to-br from-triply-mint/10 to-triply-teal/10 dark:from-triply-teal/5 dark:to-triply-mint/5 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-triply-dark dark:text-dark-text-primary mb-4">
            تفاصيل الحجز 📋
          </h2>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-triply-dark/70 dark:text-dark-text-secondary">رقم الحجز:</span>
              <span className="font-mono font-bold text-triply-teal dark:text-triply-mint text-base">
                #{bookingNumber}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-triply-dark/70 dark:text-dark-text-secondary">الوجهة:</span>
              <span className="font-semibold text-triply-dark dark:text-dark-text-primary">
                {bookingData.destination}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-triply-dark/70 dark:text-dark-text-secondary">الفئة:</span>
              <span className="font-semibold text-triply-dark dark:text-dark-text-primary">
                {bookingData.category}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-triply-dark/70 dark:text-dark-text-secondary">عدد الأيام:</span>
              <span className="font-semibold text-triply-dark dark:text-dark-text-primary">
                {bookingData.days} يوم
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-triply-dark/70 dark:text-dark-text-secondary">تاريخ الحجز:</span>
              <span className="font-semibold text-triply-dark dark:text-dark-text-primary">
                {new Date().toLocaleDateString('ar-SA')}
              </span>
            </div>

            <div className="border-t border-triply-mint/30 dark:border-dark-border pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-triply-dark dark:text-dark-text-primary">المبلغ المدفوع:</span>
                <div className="text-left">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {bookingData.totalCost?.toLocaleString() || '0'} ر.س 🇸🇦
                  </div>
                  {(() => {
                    const dualCurrency = formatDualCurrency(bookingData.totalCost || 0, bookingData.destination);
                    return dualCurrency.secondary && (
                      <div className="text-base font-semibold text-triply dark:text-triply-mint mt-1">
                        ≈ {dualCurrency.secondary}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* معلومات إضافية */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4 mb-8 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <span className="text-2xl">📧</span>
            <div className="flex-1">
              <h3 className="font-bold text-triply-dark dark:text-dark-text-primary mb-1">
                تحقق من بريدك الإلكتروني
              </h3>
              <p className="text-sm text-triply-dark/70 dark:text-dark-text-secondary">
                تم إرسال تأكيد الحجز مع كافة التفاصيل إلى بريدك الإلكتروني
              </p>
            </div>
          </div>
        </div>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-triply-teal to-triply-mint text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
          >
            العودة للرئيسية 🏠
          </button>
          
          <button
            onClick={() => window.print()}
            className="flex-1 px-6 py-3 bg-white dark:bg-dark-bg border-2 border-triply-teal text-triply-teal dark:text-triply-mint font-bold rounded-xl hover:bg-triply-mint/10 dark:hover:bg-triply-teal/10 transition-all"
          >
            طباعة التأكيد 🖨️
          </button>
        </div>

        {/* زر عرض QR Code */}
        <button
          onClick={() => setShowQR(!showQR)}
          className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
        >
          {showQR ? 'إخفاء QR Code 🔒' : 'عرض QR Code 📱'}
        </button>

        {/* QR Code Section */}
        {showQR && (
          <div className="mt-6 p-6 bg-white dark:bg-dark-bg rounded-2xl border-2 border-purple-500 dark:border-purple-400 shadow-xl animate-fadeIn">
            <h3 className="text-xl font-bold text-center text-triply-dark dark:text-dark-text-primary mb-4">
              كود الحجز (QR Code) 📱
            </h3>
            
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-2xl shadow-lg" id="qr-code-container">
                <QRCodeCanvas
                  value={qrData}
                  size={256}
                  level="H"
                  includeMargin={true}
                  bgColor="#ffffff"
                  fgColor="#0f5b4a"
                />
              </div>
            </div>

            <p className="text-sm text-center text-triply-dark/70 dark:text-dark-text-secondary mb-4">
              امسح الكود لعرض الفاتورة الكاملة ومشاركتها
            </p>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => {
                  navigate('/invoice/' + invoiceId, { 
                    state: { bookingData: { ...bookingData, bookingNumber }, invoiceId }
                  });
                }}
                className="px-4 py-3 bg-gradient-to-r from-triply-teal to-triply-mint text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                عرض الفاتورة 📄
              </button>

              <button
                onClick={async () => {
                  try {
                    if (navigator.share) {
                      await navigator.share({
                        title: `فاتورة Triply - ${bookingData.destination}`,
                        text: `رقم الحجز: ${bookingNumber}\nالوجهة: ${bookingData.destination}`,
                        url: invoiceUrl
                      });
                    } else {
                      await navigator.clipboard.writeText(invoiceUrl);
                      alert('تم نسخ رابط الفاتورة!');
                    }
                  } catch (err) {
                    console.error('Error sharing:', err);
                  }
                }}
                className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                مشاركة 📤
              </button>

              <button
                onClick={() => {
                  const canvas = document.querySelector('#qr-code-container canvas');
                  const url = canvas.toDataURL();
                  const link = document.createElement('a');
                  link.download = `triply-invoice-${invoiceId}.png`;
                  link.href = url;
                  link.click();
                }}
                className="px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                تحميل 💾
              </button>
            </div>

            {/* زر عرض الحجوزات */}
            <div className="mt-6">
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full px-6 py-4 bg-gradient-to-r from-triply to-triply-teal text-white font-bold rounded-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>عرض جميع الحجوزات</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="animate-bounce">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* رسالة خدمة العملاء */}
        <div className="mt-8 text-center text-sm text-triply-dark/60 dark:text-dark-text-secondary">
          <p>لأي استفسار، تواصل مع خدمة العملاء على واتساب</p>
          <a 
            href="https://wa.me/966500000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-triply-teal dark:text-triply-mint font-semibold hover:underline inline-flex items-center gap-1 mt-1"
          >
            <span>📱</span>
            <span>966500000000+</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;
