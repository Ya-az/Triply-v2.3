import { useState, useEffect, useMemo, useRef } from 'react';
import { destinations } from '../data/destinations.js';
import { services } from '../data/services.js';

function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState(() => [
    {
      id: 'welcome',
      sender: 'bot',
      text: 'أهلاً بك في Triply! كيف أقدر أساعدك اليوم؟ اسألني عن الوجهات، الأسعار، أو خطوات الحجز.'
    }
  ]);
  const chatBodyRef = useRef(null);

  const arabicDigits = '٠١٢٣٤٥٦٧٨٩';
  const convertEasternDigits = (value) =>
    value.replace(/[٠-٩]/g, (digit) => String(arabicDigits.indexOf(digit)));

  const normalizeInput = (value) => convertEasternDigits(value).toLowerCase();

  const tokenize = (value) =>
    value
      .replace(/[^\p{L}\p{N}\s]+/gu, ' ')
      .split(/\s+/)
      .filter(Boolean);

  const extractNumber = (text, pattern) => {
    const match = text.match(pattern);
    if (!match) return null;
    const numericPortion = match[1]?.replace(/[^0-9]/g, '');
    return numericPortion ? Number.parseInt(numericPortion, 10) : null;
  };

  const formatInsights = (items) => (items.length ? `\n${items.map((item) => `- ${item}`).join('\n')}` : '');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show button after scrolling down 300px
      if (currentScrollY > 300) {
        // Hide on scroll up, show on scroll down
        if (currentScrollY > lastScrollY) {
          setIsVisible(true);
        } else if (currentScrollY < lastScrollY - 50) {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const destinationKeywords = useMemo(() => {
    const synonymMap = {
      'لندن - المملكة المتحدة': ['london', 'uk', 'انجلترا', 'المملكة المتحدة'],
      'باريس - فرنسا': ['paris', 'france', 'فرنسا'],
      'القاهرة - مصر': ['cairo', 'egypt', 'مصر'],
      'إسطنبول - تركيا': ['istanbul', 'turkey', 'تركيا'],
      'دبي - الإمارات العربية المتحدة': ['dubai', 'uae', 'الامارات', 'الإمارات']
    };

    return destinations.map((destination) => {
      const city = destination.name.split(' - ')[0].toLowerCase();
      const country = destination.name.toLowerCase();
      const extras = synonymMap[destination.name] ?? [];
      return { destination, keywords: [city, country, ...extras.map((term) => term.toLowerCase())] };
    });
  }, []);

  const servicesSummary = useMemo(
    () => services.map((item) => `• ${item.title}: ${item.description}`).join('\n'),
    []
  );

  const intentResponses = useMemo(() => [
    {
      triggers: ['مين', 'من انتم', 'من تكونون', 'شركتكم', 'triply', 'وش تقدمون', 'خدمتكم', 'services'],
      reply:
        'Triply مختصة بتجارب سفر مخصصة للشركات والعائلات. الخدمات الرئيسية:\n' +
        servicesSummary +
        '\nنقدر نمزج بين أكثر من خدمة حسب أهداف الرحلة.'
    },
    {
      triggers: ['جدول', 'خط سير', 'برنامج', 'itinerary', 'plan'],
      reply:
        'نبني برنامج رحلات متكامل يشمل الاجتماعات، الأنشطة، والوقت الحر. شاركني الوجهة وعدد الأيام وخيارات المزانية وابني لك جدول أولي في دقائق.'
    },
    {
      triggers: ['تواصل', 'بشري', 'مستشار', 'agent', 'call', 'اتصال', 'support'],
      reply:
        'أكيد، أقدر أربطك بمستشار سفر بشري. اكتب لي الوقت المناسب للتواصل أو أرسل رقمك وننسق اتصال مباشر.'
    },
    {
      triggers: ['عرض', 'quote', 'عرض سعر', 'proposal', 'باقة'],
      reply:
        'لتحضير عرض سعر مفصل أحتاج الوجهة، عدد المسافرين، وتواريخ مبدئية. زوّدني بهذه التفاصيل وأرسل لك باقة خلال ساعات العمل.'
    }
  ], [servicesSummary]);

  const topicBank = useMemo(
    () => [
      {
        topic: 'الفنادق والإقامة',
        keywords: ['فندق', 'فنادق', 'hotel', 'إقامة', 'اقامة', 'سكن', 'منتجع', 'شقة'],
        response:
          'بالنسبة للإقامة نختار لك فنادق ومنتجعات مصنّفة حسب ميزانيتك، مع خيارات غرف اجتماعات وخدمات أعمال عند الحاجة.'
      },
      {
        topic: 'تذاكر الطيران',
        keywords: ['طيران', 'تذكرة', 'تذاكر', 'رحلة جوية', 'flight', 'airport', 'مطار'],
        response:
          'نقدر نرتب تذاكر الطيران مع اختيار الدرجات المناسبة وجدولة الرحلات بحيث تناسب جدول أعمالك بالكامل.'
      },
      {
        topic: 'التأشيرات',
        keywords: ['تأشيرة', 'فيزا', 'visa', 'دخول', 'متطلبات'],
        response:
          'بالنسبة للتأشيرات نوفر لك قائمة المتطلبات الرسمية وننسق مع شركائنا لتجهيز الطلبات بسرعة.'
      },
      {
        topic: 'سياسة الإلغاء',
        keywords: ['إلغاء', 'cancel', 'سياسة', 'refund', 'استرجاع'],
        response:
          'سياسة الإلغاء تعتمد على مزود الخدمة والوقت المتبقي على السفر، لكننا ندير التغيير والإلغاء بالنيابة عنك ونوفر لك بدائل مناسبة.'
      },
      {
        topic: 'الرحلات العائلية',
        keywords: ['عائلة', 'عائلي', 'family', 'أطفال', 'kids'],
        response:
          'للرحلات العائلية نوفر أنشطة تناسب الأعمار المختلفة مع خدمات رعاية أطفال وخيارات غرف متصلة أو أجنحة واسعة.'
      },
      {
        topic: 'الرحلات المؤسسية',
        keywords: ['شركة', 'شركات', 'corporate', 'عمل', 'فريق', 'offsite', 'ورشة'],
        response:
          'للشركات نخصص برامج offsite، كورسات تطوير فرق العمل، وقاعات اجتماعات مجهزة بالكامل مع دعم لوجستي متواصل.'
      },
      {
        topic: 'الرحلات الفاخرة',
        keywords: ['فاخرة', 'luxury', 'vip', 'خاصة', '5 نجوم', 'خمس نجوم'],
        response:
          'للتجارب الفاخرة نرتب طيران بدرجات عليا، سائقين خاصين، وجلسات خاصة في المطاعم والمعالم.'
      },
      {
        topic: 'الرحلات الاقتصادية',
        keywords: ['اقتصادي', 'اقتصادية', 'budget', 'رخيصة', 'أوفر'],
        response:
          'نقدر نجهز باقات اقتصادية توازن بين التكلفة وجودة التجربة، مع خيارات سكن ونقل مناسبة.'
      }
    ],
    []
  );

  const smallTalkRules = useMemo(
    () => [
      {
        triggers: ['شكرا', 'يعطيك', 'thank', 'thx', 'thanks', 'ممتاز', 'great'],
        reply: 'العفو! إذا احتجت أي شيء إضافي أنا حاضر.'
      },
      {
        triggers: ['ما شاء الله', 'جميل', 'رائع', 'واو', 'perfect', 'nice'],
        reply: 'سعيد إن التجربة أعجبتك! نكمل التخطيط؟'
      },
      {
        triggers: ['السلام عليكم', 'وعليكم السلام', 'صباح', 'مساء'],
        reply: 'وعليكم السلام ورحمة الله، أهلاً وسهلاً! كيف أقدر أساعدك اليوم؟'
      }
    ],
    []
  );

  const generateBotResponse = (rawMessage) => {
    const normalized = normalizeInput(rawMessage.trim());

    if (!normalized) {
      return 'ممكن تعيد صياغة سؤالك؟';
    }

    const greetings = ['مرحبا', 'مرحبه', 'اهلا', 'هلا', 'السلام', 'مرحبا triply', 'hello', 'hi', 'welcome'];
    if (greetings.some((term) => normalized.startsWith(term) || normalized.includes(`${term} `))) {
      return 'يا هلا بك! تقدر تسألني عن الوجهات، الأسعار، أو أساعدك بخطوات الحجز.';
    }

    const matchedSmallTalk = smallTalkRules.find((rule) =>
      rule.triggers.some((trigger) => normalized.includes(trigger))
    );
    if (matchedSmallTalk) {
      return matchedSmallTalk.reply;
    }

    const groupSize = extractNumber(
      normalized,
      /(\d+)\s*(?:شخص|اشخاص|أشخاص|افراد|أفراد|people|travellers|traveler|ضيوف)/
    );
    const tripDuration = extractNumber(normalized, /(\d+)\s*(?:يوم|ايام|أيام|day|ليله|ليالي|night)/);
    const budgetAmount = extractNumber(normalized, /(\d+(?:[\.,]\d+)?)\s*(?:ريال|sar|rs|رس)/);

    const insights = [];
    if (groupSize) {
      insights.push(`نسق الخطط لعدد ${groupSize} مشارك بسهولة، ونقسّمهم على حسب الاهتمامات.`);
    }
    if (tripDuration) {
      insights.push(`المدة ${tripDuration} أيام تتيح دمج أنشطة صباحية ومسائية متوازنة.`);
    }
    if (budgetAmount) {
      insights.push(`نراعي ميزانية تقريبية تبلغ ${budgetAmount.toLocaleString('ar-EG')} ريال ونقترح باقات مناسبة.`);
    }

    const matchedDestination = destinationKeywords.find((entry) =>
      entry.keywords.some((keyword) => keyword && normalized.includes(keyword))
    );

    if (matchedDestination) {
      const { destination } = matchedDestination;
      const destinationSummary =
        `وجهة ${destination.name} خيار رائع! ${destination.description}\n• المدة المقترحة: ${destination.duration}\n• التكلفة التقريبية: ${destination.price}` +
        formatInsights(insights);

      return (
        destinationSummary +
        '\n\nخطوات مقترحة:\n- اكتب "حجز" لو تبي أرسل استمارة الحجز السريعة\n- اكتب "بدائل" لو تبي اقتراح وجهات مشابهة\n- اكتب "تفاصيل الفنادق" لو تبي خيارات الإقامة'
      );
    }

    const matchedIntent = intentResponses.find((intent) =>
      intent.triggers.some((trigger) => normalized.includes(trigger))
    );
    if (matchedIntent) {
      return matchedIntent.reply;
    }

    const bookingTriggers = ['حجز', 'book', 'booking', 'reserve', 'reservation', 'موعد'];
    if (bookingTriggers.some((term) => normalized.includes(term))) {
      return (
        'حاضر. لإتمام الحجز أحتاج الوجهة، التاريخ المبدئي، وعدد المسافرين. إذا كل شيء جاهز أرسل لك الرابط المباشر لاستمارة الحجز أو أحدد لك مكالمة مع المستشار.' +
        formatInsights(insights)
      );
    }

    const paymentTriggers = ['دفع', 'pay', 'payment', 'بطاقة', 'تحويل', 'فاتورة'];
    if (paymentTriggers.some((term) => normalized.includes(term))) {
      return (
        'طرق الدفع المتاحة تشمل التحويل البنكي، بطاقات الفيزا والماستر، وخيار دفعة أولى مع جدولة للباقي في الرحلات الطويلة.' +
        '\nاختر الطريقة المفضلة وسأرتب لك الفاتورة فور تثبيت الخطة.'
      );
    }

    if (insights.length) {
      return (
        'جميل، وصلتني بعض التفاصيل. خبرني عن الوجهة أو نوع الرحلة عشان أبني لك الخطة الأنسب.' +
        formatInsights(insights)
      );
    }

    const tokens = tokenize(normalized);
    const scoredTopic = topicBank
      .map((entry) => ({
        ...entry,
        score: entry.keywords.reduce(
          (score, keyword) => (tokens.some((token) => token.includes(keyword)) ? score + 1 : score),
          0
        )
      }))
      .sort((a, b) => b.score - a.score)[0];

    if (scoredTopic && scoredTopic.score > 0) {
      return `${scoredTopic.response}\nحاب تعرف أكثر عن ${scoredTopic.topic} أو تحب أرسل لك خيارات إضافية؟`;
    }

    if (tokens.length >= 3) {
      return (
        'أحاول أفهم سؤالك بالتحديد. شاركني واحدة من هذه التفاصيل لو تقدر:\n- الوجهة أو نوع الرحلة\n- عدد الأشخاص أو مدة الرحلة\n- الميزانية التقريبية أو الخدمة اللي تهمك\nوبعدها أعطيك إجابة أدق.'
      );
    }

    return 'ممكن توضح أكثر سؤالك؟ مثلاً: "أبغى رحلة عائلية اقتصادية" أو "ما هي متطلبات سفر لندن؟"';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: generateBotResponse(trimmed)
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 450);
  };

  const handleToggleChat = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setIsVisible(true);
    }
  };

  const handleClick = () => {
    handleToggleChat();
  };

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-50 flex flex-col items-start gap-4">
      {isOpen && (
        <div
          className={`w-72 sm:w-80 overflow-hidden rounded-3xl border border-triply-mint/40 bg-white/90 backdrop-blur-lg text-triply-slate shadow-[0_24px_70px_-30px_rgba(17,94,89,0.8)] transition-all duration-300 ease-out dark:bg-slate-900/95 dark:border-triply-teal/40 ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex items-center justify-between bg-gradient-to-r from-triply-mint/80 via-white to-triply-sand/70 px-4 py-3 dark:from-triply-teal/50 dark:via-slate-900/90 dark:to-triply-sand/30">
            <div className="space-y-0.5">
              <p className="font-semibold text-sm sm:text-base">Triply AI</p>
              <p className="text-xs text-triply-slate/70 dark:text-triply-sand/80">مستعد للإجابة على أسئلتك في أي وقت</p>
            </div>
            <button
              type="button"
              onClick={handleToggleChat}
              className="rounded-full p-1.5 text-triply-slate/70 transition hover:bg-white/70 hover:text-triply-teal dark:hover:bg-triply-teal/20"
              aria-label="إغلاق المحادثة"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={chatBodyRef} className="max-h-80 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm backdrop-blur-sm ${
                    message.sender === 'user'
                      ? 'bg-triply-teal text-white'
                      : 'bg-triply-sand/80 text-triply-slate dark:bg-slate-800/80 dark:text-triply-sand'
                  }`}
                >
                  {message.text.split('\n').map((segment, index) => (
                    <span key={index} className="block">
                      {segment}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-triply-mint/30 bg-white/40 px-3 py-3 dark:bg-slate-900/80 dark:border-triply-teal/30">
            <div className="flex items-center gap-2 rounded-2xl bg-white/90 px-2 py-1 dark:bg-slate-800/80">
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="اكتب سؤالك هنا..."
                className="w-full bg-transparent px-2 py-2 text-sm outline-none placeholder:text-triply-slate/40 dark:text-triply-sand"
                aria-label="اكتب رسالة إلى مساعد Triply"
              />
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-triply-teal to-triply-mint text-white shadow-sm transition hover:scale-105"
                aria-label="إرسال الرسالة"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l16 8-16 8 4-8-4-8z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={handleClick}
        className={`relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-triply-teal to-triply-mint text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-triply-teal/40 ${
          isOpen || isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
        aria-label={isOpen ? 'إخفاء مساعد Triply' : 'فتح مساعد Triply'}
      >
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12c0 4.418-4.03 8-9 8-1.153 0-2.26-.203-3.284-.574L3 20l1.704-4.26C4.26 14.74 4 13.888 4 13c0-4.418 4.03-8 9-8s8 3.582 8 8z"
          />
          <circle cx="9" cy="11" r="1" fill="currentColor" />
          <circle cx="15" cy="11" r="1" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 15s1 .75 2.5.75S14.5 15 14.5 15" />
        </svg>
        {!isOpen && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-3xl bg-triply-teal/40" />
        )}
      </button>
    </div>
  );
}

export { FloatingActionButton };
