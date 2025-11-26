export const bookingServices = [
  { 
    id: 'flight', 
    name: 'حجز طيران', 
    icon: '✈️',
    estimatedCost: 1500
  },
  { 
    id: 'hotel', 
    name: 'حجز فنادق', 
    icon: '🏨',
    estimatedCost: 2000
  },
  { 
    id: 'restaurant', 
    name: 'حجز مطاعم', 
    icon: '🍽️',
    estimatedCost: 500
  },
  { 
    id: 'activities', 
    name: 'أنشطة وجولات', 
    icon: '🎯',
    estimatedCost: 1000
  }
];

export const budgetLevels = [
  { id: 'budget', name: 'اقتصادي', description: 'خيارات موفرة ومريحة', color: 'triply-teal' },
  { id: 'midRange', name: 'متوسط', description: 'توازن بين السعر والجودة', color: 'triply' },
  { id: 'luxury', name: 'فاخر', description: 'تجربة راقية ومميزة', color: 'triply-accent' }
];

// تحويل أسماء الوجهات العربية إلى مفاتيح انجليزية
export const destinationMapping = {
  'لندن - المملكة المتحدة': 'london',
  'باريس - فرنسا': 'paris',
  'القاهرة - مصر': 'cairo',
  'إسطنبول - تركيا': 'istanbul',
  'دبي - الإمارات العربية المتحدة': 'dubai'
};

export const bookingDestinations = [
  'لندن - المملكة المتحدة',
  'باريس - فرنسا',
  'القاهرة - مصر',
  'إسطنبول - تركيا',
  'دبي - الإمارات العربية المتحدة'
];
