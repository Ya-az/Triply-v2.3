// خوارزمية الذكاء الاصطناعي لتحديد الوجهة المثالية
// كل إجابة تزيد احتمال وجهة معينة

export const destinations = {
  london: {
    name: 'لندن',
    flag: '🇬🇧',
    description: 'مدينة التاريخ والثقافة الأوروبية',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
    features: ['متاحف عالمية', 'معالم تاريخية', 'طقس معتدل', 'ثقافة أوروبية']
  },
  paris: {
    name: 'باريس',
    flag: '🇫🇷',
    description: 'مدينة الرومانسية والفن',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    features: ['فن وموضة', 'مطاعم راقية', 'معالم رومانسية', 'ثقافة فرنسية']
  },
  egypt: {
    name: 'مصر',
    flag: '🇪🇬',
    description: 'أرض الحضارة والتاريخ العريق',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800',
    features: ['آثار فرعونية', 'نيل كروز', 'تاريخ عريق', 'أسعار مناسبة']
  },
  turkey: {
    name: 'تركيا',
    flag: '🇹🇷',
    description: 'نقطة التقاء الشرق والغرب',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800',
    features: ['تراث إسلامي', 'تسوق متنوع', 'طبيعة خلابة', 'ثقافة مميزة']
  },
  dubai: {
    name: 'دبي',
    flag: '🇦🇪',
    description: 'مدينة الحداثة والفخامة',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    features: ['ناطحات سحاب', 'تسوق فاخر', 'ترفيه عائلي', 'حداثة وتطور']
  }
};

export const quizQuestions = [
  {
    id: 1,
    question: 'ما هو نوع الأجواء التي تفضلها في رحلتك؟',
    icon: '☀️',
    options: [
      {
        text: 'طقس معتدل وممطر أحياناً',
        scores: { london: 30, paris: 15, egypt: 5, turkey: 10, dubai: 5 }
      },
      {
        text: 'طقس رومانسي ومعتدل',
        scores: { london: 15, paris: 30, egypt: 5, turkey: 15, dubai: 5 }
      },
      {
        text: 'طقس حار ومشمس',
        scores: { london: 5, paris: 5, egypt: 30, turkey: 15, dubai: 30 }
      },
      {
        text: 'طقس متنوع (دافئ صيفاً، بارد شتاءً)',
        scores: { london: 10, paris: 15, egypt: 10, turkey: 30, dubai: 10 }
      }
    ]
  },
  {
    id: 2,
    question: 'ما هو النشاط الذي يجذبك أكثر؟',
    icon: '🎯',
    options: [
      {
        text: 'زيارة المتاحف والمعارض الفنية',
        scores: { london: 30, paris: 30, egypt: 15, turkey: 15, dubai: 10 }
      },
      {
        text: 'استكشاف الآثار والمعالم التاريخية',
        scores: { london: 20, paris: 20, egypt: 30, turkey: 25, dubai: 10 }
      },
      {
        text: 'التسوق في المولات الفاخرة',
        scores: { london: 15, paris: 25, egypt: 5, turkey: 20, dubai: 30 }
      },
      {
        text: 'الاستمتاع بالمدن الترفيهية والحدائق',
        scores: { london: 15, paris: 15, egypt: 10, turkey: 15, dubai: 30 }
      }
    ]
  },
  {
    id: 3,
    question: 'ما هي ميزانيتك التقريبية للرحلة (شامل كل شيء)؟',
    icon: '💰',
    options: [
      {
        text: 'اقتصادية (5,000 - 10,000 ريال)',
        scores: { london: 5, paris: 5, egypt: 30, turkey: 25, dubai: 15 }
      },
      {
        text: 'متوسطة (10,000 - 20,000 ريال)',
        scores: { london: 20, paris: 20, egypt: 20, turkey: 25, dubai: 20 }
      },
      {
        text: 'مريحة (20,000 - 35,000 ريال)',
        scores: { london: 25, paris: 25, egypt: 15, turkey: 20, dubai: 25 }
      },
      {
        text: 'فاخرة (أكثر من 35,000 ريال)',
        scores: { london: 25, paris: 30, egypt: 10, turkey: 15, dubai: 30 }
      }
    ]
  },
  {
    id: 4,
    question: 'ما نوع الطعام الذي تفضله؟',
    icon: '🍽️',
    options: [
      {
        text: 'الطعام الأوروبي الراقي',
        scores: { london: 30, paris: 30, egypt: 5, turkey: 10, dubai: 15 }
      },
      {
        text: 'المأكولات الشرقية والعربية',
        scores: { london: 5, paris: 5, egypt: 30, turkey: 25, dubai: 25 }
      },
      {
        text: 'المطبخ العالمي المتنوع',
        scores: { london: 25, paris: 25, egypt: 10, turkey: 20, dubai: 30 }
      },
      {
        text: 'الأكل المحلي التقليدي',
        scores: { london: 15, paris: 20, egypt: 25, turkey: 30, dubai: 15 }
      }
    ]
  },
  {
    id: 5,
    question: 'هل تفضل السفر للتعرف على ثقافات مختلفة؟',
    icon: '🌍',
    options: [
      {
        text: 'نعم، أحب الثقافة الأوروبية',
        scores: { london: 30, paris: 30, egypt: 5, turkey: 15, dubai: 10 }
      },
      {
        text: 'نعم، أحب الثقافة العربية والإسلامية',
        scores: { london: 5, paris: 5, egypt: 30, turkey: 30, dubai: 25 }
      },
      {
        text: 'أفضل الحداثة والتطور',
        scores: { london: 20, paris: 20, egypt: 5, turkey: 15, dubai: 30 }
      },
      {
        text: 'أريد مزيجاً بين التراث والحداثة',
        scores: { london: 20, paris: 20, egypt: 20, turkey: 30, dubai: 25 }
      }
    ]
  },
  {
    id: 6,
    question: 'ما هي مدة الرحلة المفضلة لديك؟',
    icon: '📅',
    options: [
      {
        text: 'قصيرة (3-5 أيام)',
        scores: { london: 15, paris: 15, egypt: 10, turkey: 15, dubai: 30 }
      },
      {
        text: 'متوسطة (5-7 أيام)',
        scores: { london: 25, paris: 25, egypt: 20, turkey: 25, dubai: 20 }
      },
      {
        text: 'طويلة (7-10 أيام)',
        scores: { london: 25, paris: 25, egypt: 30, turkey: 25, dubai: 15 }
      },
      {
        text: 'ممتدة (أكثر من 10 أيام)',
        scores: { london: 20, paris: 20, egypt: 30, turkey: 30, dubai: 10 }
      }
    ]
  },
  {
    id: 7,
    question: 'هل تسافر مع عائلة أم بمفردك أم مع الأصدقاء؟',
    icon: '👥',
    options: [
      {
        text: 'مع العائلة والأطفال',
        scores: { london: 20, paris: 15, egypt: 20, turkey: 25, dubai: 30 }
      },
      {
        text: 'رحلة رومانسية (ثنائية)',
        scores: { london: 25, paris: 30, egypt: 15, turkey: 25, dubai: 20 }
      },
      {
        text: 'مع الأصدقاء',
        scores: { london: 25, paris: 25, egypt: 20, turkey: 25, dubai: 25 }
      },
      {
        text: 'سفر فردي (استكشاف شخصي)',
        scores: { london: 25, paris: 25, egypt: 25, turkey: 20, dubai: 15 }
      }
    ]
  },
  {
    id: 8,
    question: 'ما مدى أهمية اللغة بالنسبة لك؟',
    icon: '🗣️',
    options: [
      {
        text: 'أفضل دولة يتحدثون الإنجليزية',
        scores: { london: 30, paris: 10, egypt: 15, turkey: 10, dubai: 25 }
      },
      {
        text: 'لا مشكلة مع اللغات الأجنبية',
        scores: { london: 20, paris: 30, egypt: 15, turkey: 20, dubai: 20 }
      },
      {
        text: 'أفضل دولة تتحدث العربية',
        scores: { london: 5, paris: 5, egypt: 30, turkey: 15, dubai: 30 }
      },
      {
        text: 'لا يهمني، استخدم المترجم',
        scores: { london: 20, paris: 25, egypt: 20, turkey: 25, dubai: 20 }
      }
    ]
  },
  {
    id: 9,
    question: 'ما هو أسلوب الإقامة المفضل؟',
    icon: '🏨',
    options: [
      {
        text: 'فنادق فاخرة وأنيقة',
        scores: { london: 25, paris: 30, egypt: 15, turkey: 20, dubai: 30 }
      },
      {
        text: 'فنادق تراثية وتقليدية',
        scores: { london: 20, paris: 20, egypt: 30, turkey: 30, dubai: 10 }
      },
      {
        text: 'فنادق حديثة ومريحة',
        scores: { london: 25, paris: 20, egypt: 15, turkey: 20, dubai: 30 }
      },
      {
        text: 'فنادق اقتصادية ونظيفة',
        scores: { london: 15, paris: 10, egypt: 30, turkey: 25, dubai: 15 }
      }
    ]
  },
  {
    id: 10,
    question: 'ما هو الشيء الأكثر أهمية في رحلتك؟',
    icon: '⭐',
    options: [
      {
        text: 'التجربة الثقافية والتعليمية',
        scores: { london: 30, paris: 30, egypt: 25, turkey: 25, dubai: 15 }
      },
      {
        text: 'الاسترخاء والراحة',
        scores: { london: 15, paris: 25, egypt: 20, turkey: 25, dubai: 30 }
      },
      {
        text: 'المغامرة والاستكشاف',
        scores: { london: 20, paris: 20, egypt: 30, turkey: 30, dubai: 20 }
      },
      {
        text: 'التسوق والترفيه',
        scores: { london: 20, paris: 25, egypt: 10, turkey: 20, dubai: 30 }
      }
    ]
  }
];

// دالة حساب النتائج
export function calculateDestination(answers) {
  const scores = {
    london: 0,
    paris: 0,
    egypt: 0,
    turkey: 0,
    dubai: 0
  };

  // جمع النقاط من كل إجابة
  answers.forEach((answer, index) => {
    const question = quizQuestions[index];
    const selectedOption = question.options[answer];
    
    Object.keys(selectedOption.scores).forEach(dest => {
      scores[dest] += selectedOption.scores[dest];
    });
  });

  // إيجاد أعلى نقاط
  let maxScore = 0;
  let topDestination = 'dubai';
  
  Object.keys(scores).forEach(dest => {
    if (scores[dest] > maxScore) {
      maxScore = scores[dest];
      topDestination = dest;
    }
  });

  // حساب النسب المئوية
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const percentages = {};
  
  Object.keys(scores).forEach(dest => {
    percentages[dest] = Math.round((scores[dest] / total) * 100);
  });

  return {
    destination: topDestination,
    scores,
    percentages,
    destinationData: destinations[topDestination]
  };
}
