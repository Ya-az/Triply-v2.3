export const formHelpers = {
  booking: {
    destination: {
      label: 'الوجهة',
      placeholder: 'أين تريد السفر؟',
      helper: 'مثال: دبي، باريس، القاهرة، لندن',
    },
    startDate: {
      label: 'تاريخ البداية',
      placeholder: 'اختر التاريخ',
      helper: 'اختر التاريخ المفضل لبدء رحلتك',
    },
    endDate: {
      label: 'تاريخ النهاية',
      placeholder: 'اختر التاريخ',
      helper: 'اختر التاريخ المفضل لانتهاء رحلتك',
    },
    travelers: {
      label: 'عدد المسافرين',
      placeholder: 'كم شخص؟',
      helper: 'شاملاً جميع البالغين والأطفال',
    },
    budget: {
      label: 'الميزانية',
      helper: 'اختر الميزانية المناسبة لك',
      options: {
        economy: 'اقتصادي - الخيار الأنسب للميزانيات المحدودة',
        standard: 'قياسي - توازن بين السعر والجودة',
        premium: 'متميز - تجربة فاخرة ومميزة',
        luxury: 'فخم - أقصى درجات الرفاهية',
      },
    },
    services: {
      label: 'الخدمات الإضافية',
      helper: 'اختر الخدمات التي تحتاجها',
      options: {
        hotel: 'حجز فندق - نوفر أفضل الأسعار',
        flight: 'حجز طيران - رحلات مريحة وموثوقة',
        transport: 'مواصلات - نقل مريح من وإلى المطار',
        guide: 'مرشد سياحي - اكتشف المدينة مع خبير محلي',
      },
    },
    notes: {
      label: 'ملاحظات إضافية',
      placeholder: 'هل لديك أي متطلبات خاصة؟',
      helper: 'مثال: احتياجات طبية، تفضيلات غذائية، أنشطة معينة',
    },
  },
  contact: {
    name: {
      label: 'الاسم الكامل',
      placeholder: 'أدخل اسمك الكامل',
      helper: 'الاسم الأول والأخير',
    },
    email: {
      label: 'البريد الإلكتروني',
      placeholder: 'example@email.com',
      helper: 'سنستخدمه للرد عليك',
    },
    phone: {
      label: 'رقم الجوال',
      placeholder: '+966 5X XXX XXXX',
      helper: 'مثال: +966501234567',
    },
    subject: {
      label: 'الموضوع',
      placeholder: 'عن ماذا تريد الاستفسار؟',
      helper: 'مثال: استفسار عن رحلة، شكوى، اقتراح',
    },
    message: {
      label: 'الرسالة',
      placeholder: 'اكتب رسالتك هنا...',
      helper: 'سنرد خلال 24 ساعة كحد أقصى',
    },
  },
  auth: {
    email: {
      label: 'البريد الإلكتروني',
      placeholder: 'example@email.com',
      helper: 'استخدم بريد صحيح للتأكيد',
    },
    password: {
      label: 'كلمة المرور',
      placeholder: '••••••••',
      helper: 'يجب أن تكون 8 أحرف على الأقل',
      strengthHelper: {
        weak: 'ضعيفة - أضف أحرف كبيرة وأرقام',
        medium: 'متوسطة - أضف رموز خاصة (!@#$)',
        strong: 'قوية - كلمة مرور ممتازة',
      },
    },
    confirmPassword: {
      label: 'تأكيد كلمة المرور',
      placeholder: '••••••••',
      helper: 'يجب أن تطابق كلمة المرور أعلاه',
    },
    fullName: {
      label: 'الاسم الكامل',
      placeholder: 'أدخل اسمك الكامل',
      helper: 'الاسم الذي سيظهر في حسابك',
    },
  },
  validation: {
    required: 'هذا الحقل مطلوب',
    email: 'يرجى إدخال بريد إلكتروني صحيح',
    phone: 'يرجى إدخال رقم جوال صحيح',
    minLength: (min) => `يجب أن يكون ${min} أحرف على الأقل`,
    maxLength: (max) => `لا يمكن أن يتجاوز ${max} حرف`,
    match: 'الحقلان غير متطابقان',
    dateRange: 'تاريخ النهاية يجب أن يكون بعد تاريخ البداية',
    minDate: 'التاريخ يجب أن يكون في المستقبل',
  },
  success: {
    booking: 'تم إرسال طلب الحجز بنجاح! سنتواصل معك قريباً',
    contact: 'تم إرسال رسالتك بنجاح! سنرد خلال 24 ساعة',
    signup: 'تم إنشاء الحساب بنجاح! مرحباً بك في Triply',
    login: 'تم تسجيل الدخول بنجاح!',
  },
  loading: {
    booking: 'جاري إرسال طلب الحجز...',
    contact: 'جاري إرسال الرسالة...',
    signup: 'جاري إنشاء الحساب...',
    login: 'جاري تسجيل الدخول...',
  },
};
