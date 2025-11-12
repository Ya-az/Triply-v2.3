// ملف بيانات الأسعار لمشروع Triply
// الأسعار بالريال السعودي (SAR) مستخرجة من Travel Cost Report
// ملاحظة: أسعار الطيران مضبوطة انطلاقاً من مطار الدمام DMM كمرجع افتراضي
export const DEFAULT_ORIGIN = 'DMM';

export const travelCosts = {
  london: {
    // 🏨 الفنادق في لندن (4 خيارات لكل فئة) - الأسعار لليلة الواحدة
    hotels: {
      budget: [
        { id: 'lon-hotel-b1', name: 'Premier Inn London', price: 350, stars: 3, location: 'Westminster' },
        { id: 'lon-hotel-b2', name: 'Travelodge Central', price: 380, stars: 3, location: 'Kings Cross' },
        { id: 'lon-hotel-b3', name: 'Hub by Premier Inn', price: 420, stars: 3, location: 'Covent Garden' },
        { id: 'lon-hotel-b4', name: 'Ibis London City', price: 450, stars: 3, location: 'Shoreditch' }
      ],
      midRange: [
        { id: 'lon-hotel-m1', name: 'Hilton London Metropole', price: 750, stars: 4, location: 'Paddington' },
        { id: 'lon-hotel-m2', name: 'Marriott County Hall', price: 850, stars: 4, location: 'South Bank' },
        { id: 'lon-hotel-m3', name: 'Crowne Plaza London', price: 950, stars: 4, location: 'Kensington' },
        { id: 'lon-hotel-m4', name: 'Novotel Tower Bridge', price: 1050, stars: 4, location: 'Tower Bridge' }
      ],
      luxury: [
        { id: 'lon-hotel-l1', name: 'The Ritz London', price: 1800, stars: 5, location: 'Piccadilly' },
        { id: 'lon-hotel-l2', name: 'Shangri-La The Shard', price: 2100, stars: 5, location: 'London Bridge' },
        { id: 'lon-hotel-l3', name: 'Claridge\'s Mayfair', price: 2400, stars: 5, location: 'Mayfair' },
        { id: 'lon-hotel-l4', name: 'The Savoy', price: 2800, stars: 5, location: 'Strand' }
      ]
    },

    // 🍽️ المطاعم في لندن (10 خيارات لكل فئة) - السعر لوجبة واحدة
    restaurants: {
      budget: [
        { id: 'lon-rest-b1', name: 'Nando\'s Peri-Peri', price: 110, cuisine: 'برتغالي', location: 'Oxford Street' },
        { id: 'lon-rest-b2', name: 'Wagamama', price: 115, cuisine: 'آسيوي', location: 'Covent Garden' },
        { id: 'lon-rest-b3', name: 'Leon Fast Food', price: 120, cuisine: 'صحي سريع', location: 'Liverpool Street' },
        { id: 'lon-rest-b4', name: 'Pret A Manger', price: 125, cuisine: 'ساندويتشات', location: 'Piccadilly' },
        { id: 'lon-rest-b5', name: 'Five Guys Burgers', price: 130, cuisine: 'برغر', location: 'Leicester Square' },
        { id: 'lon-rest-b6', name: 'Pizza Express', price: 135, cuisine: 'إيطالي', location: 'Soho' },
        { id: 'lon-rest-b7', name: 'Zizzi Italian', price: 140, cuisine: 'إيطالي', location: 'Camden' },
        { id: 'lon-rest-b8', name: 'Honest Burgers', price: 145, cuisine: 'برغر', location: 'Brixton' },
        { id: 'lon-rest-b9', name: 'The Breakfast Club', price: 150, cuisine: 'إفطار', location: 'Shoreditch' },
        { id: 'lon-rest-b10', name: 'Busaba Thai', price: 155, cuisine: 'تايلندي', location: 'Westfield' }
      ],
      midRange: [
        { id: 'lon-rest-m1', name: 'Dishoom Bombay', price: 280, cuisine: 'هندي', location: 'Shoreditch' },
        { id: 'lon-rest-m2', name: 'Flat Iron Steak', price: 300, cuisine: 'ستيك هاوس', location: 'Covent Garden' },
        { id: 'lon-rest-m3', name: 'Gaucho Argentinian', price: 320, cuisine: 'أرجنتيني', location: 'Piccadilly' },
        { id: 'lon-rest-m4', name: 'Côte Brasserie', price: 340, cuisine: 'فرنسي', location: 'Marylebone' },
        { id: 'lon-rest-m5', name: 'Hawksmoor Steakhouse', price: 360, cuisine: 'ستيك', location: 'Guildhall' },
        { id: 'lon-rest-m6', name: 'The Ivy Market Grill', price: 380, cuisine: 'بريطاني عصري', location: 'Covent Garden' },
        { id: 'lon-rest-m7', name: 'Sketch Gallery', price: 400, cuisine: 'فرنسي راقي', location: 'Mayfair' },
        { id: 'lon-rest-m8', name: 'Aqua Shard', price: 420, cuisine: 'بريطاني معاصر', location: 'The Shard' },
        { id: 'lon-rest-m9', name: 'Chiltern Firehouse', price: 440, cuisine: 'أمريكي راقي', location: 'Marylebone' },
        { id: 'lon-rest-m10', name: 'Sexy Fish', price: 460, cuisine: 'مأكولات بحرية', location: 'Mayfair' }
      ],
      luxury: [
        { id: 'lon-rest-l1', name: 'Gordon Ramsay Restaurant', price: 600, cuisine: 'فرنسي راقي', location: 'Chelsea', michelin: 3 },
        { id: 'lon-rest-l2', name: 'Alain Ducasse at The Dorchester', price: 650, cuisine: 'فرنسي', location: 'Mayfair', michelin: 3 },
        { id: 'lon-rest-l3', name: 'Core by Clare Smyth', price: 680, cuisine: 'بريطاني حديث', location: 'Notting Hill', michelin: 3 },
        { id: 'lon-rest-l4', name: 'Dinner by Heston Blumenthal', price: 700, cuisine: 'بريطاني تاريخي', location: 'Knightsbridge', michelin: 2 },
        { id: 'lon-rest-l5', name: 'The Ledbury', price: 730, cuisine: 'أوروبي حديث', location: 'Notting Hill', michelin: 2 },
        { id: 'lon-rest-l6', name: 'Restaurant Story', price: 750, cuisine: 'بريطاني مبتكر', location: 'Bermondsey', michelin: 2 },
        { id: 'lon-rest-l7', name: 'Pollen Street Social', price: 780, cuisine: 'أوروبي معاصر', location: 'Mayfair', michelin: 1 },
        { id: 'lon-rest-l8', name: 'Hélène Darroze at The Connaught', price: 800, cuisine: 'فرنسي', location: 'Mayfair', michelin: 2 },
        { id: 'lon-rest-l9', name: 'Club Gascon', price: 830, cuisine: 'فرنسي إقليمي', location: 'Smithfield', michelin: 1 },
        { id: 'lon-rest-l10', name: 'Umu Japanese', price: 850, cuisine: 'ياباني راقي', location: 'Mayfair', michelin: 2 }
      ]
    },

    // 🎡 الأنشطة والجولات في لندن (10 خيارات مقسمة على الفئات)
    activities: [
      { id: 'lon-act-1', name: 'British Museum', price: 0, category: 'budget', duration: '3 ساعات', description: 'متحف عالمي مجاني' },
      { id: 'lon-act-2', name: 'National Gallery', price: 0, category: 'budget', duration: '2-3 ساعات', description: 'معرض فني مجاني' },
      { id: 'lon-act-3', name: 'Hyde Park Walking Tour', price: 25, category: 'budget', duration: '2 ساعة', description: 'جولة مشي في الحديقة' },
      { id: 'lon-act-4', name: 'Tower of London', price: 120, category: 'midRange', duration: '3 ساعات', description: 'قلعة تاريخية + جواهر التاج' },
      { id: 'lon-act-5', name: 'London Eye', price: 150, category: 'midRange', duration: '45 دقيقة', description: 'عجلة لندن الشهيرة' },
      { id: 'lon-act-6', name: 'Westminster Abbey', price: 100, category: 'midRange', duration: '2 ساعة', description: 'كنيسة تاريخية' },
      { id: 'lon-act-7', name: 'Warner Bros Studio Tour (Harry Potter)', price: 200, category: 'midRange', duration: '4 ساعات', description: 'جولة استوديوهات هاري بوتر' },
      { id: 'lon-act-8', name: 'Thames River Luxury Cruise with Dinner', price: 350, category: 'luxury', duration: '3 ساعات', description: 'رحلة نهرية فاخرة + عشاء' },
      { id: 'lon-act-9', name: 'Private Royal London Tour', price: 450, category: 'luxury', duration: '5 ساعات', description: 'جولة خاصة في لندن الملكية' },
      { id: 'lon-act-10', name: 'Helicopter Tour over London', price: 600, category: 'luxury', duration: '30 دقيقة', description: 'جولة هليكوبتر فوق لندن' }
    ],

    // ✈️ رحلات الطيران من/إلى لندن (ذهاب وعودة) — من الدمام DMM إلى لندن (LHR)
    flights: [
      { id: 'lon-flight-1', origin: 'DMM', route: 'DMM-LHR', airline: 'الخطوط السعودية - اقتصادية', price: 3200, category: 'budget', class: 'Economy', baggage: '23 كجم', meals: 'قياسية' },
      { id: 'lon-flight-2', origin: 'DMM', route: 'DMM-LHR', airline: 'الاتحاد للطيران - درجة الأعمال', price: 12000, category: 'midRange', class: 'Business', baggage: '32 كجم', meals: 'مميزة', lounge: true },
      { id: 'lon-flight-3', origin: 'DMM', route: 'DMM-LHR', airline: 'طيران الإمارات - الدرجة الأولى', price: 24000, category: 'luxury', class: 'First Class', baggage: '50 كجم', meals: 'فاخرة', lounge: true, chauffeur: true }
    ]
  },

  paris: {
    // 🏨 الفنادق في باريس (4 خيارات لكل فئة) - الأسعار لليلة الواحدة
    hotels: {
      budget: [
        { id: 'par-hotel-b1', name: 'Ibis Paris Bastille', price: 300, stars: 3, location: 'Bastille' },
        { id: 'par-hotel-b2', name: 'B&B Hotel Paris 17', price: 330, stars: 3, location: 'Batignolles' },
        { id: 'par-hotel-b3', name: 'Campanile Paris Est', price: 360, stars: 3, location: 'Porte de Bagnolet' },
        { id: 'par-hotel-b4', name: 'Hotel de France Invalides', price: 400, stars: 3, location: 'Invalides' }
      ],
      midRange: [
        { id: 'par-hotel-m1', name: 'Citadines Montmartre', price: 700, stars: 4, location: 'Montmartre' },
        { id: 'par-hotel-m2', name: 'Novotel Paris Centre Gare Montparnasse', price: 800, stars: 4, location: 'Montparnasse' },
        { id: 'par-hotel-m3', name: 'Mercure Paris Opera', price: 900, stars: 4, location: 'Opera' },
        { id: 'par-hotel-m4', name: 'Le Pavillon des Lettres', price: 1000, stars: 4, location: 'Champs-Élysées' }
      ],
      luxury: [
        { id: 'par-hotel-l1', name: 'Hotel Plaza Athénée', price: 1900, stars: 5, location: 'Avenue Montaigne' },
        { id: 'par-hotel-l2', name: 'Le Meurice', price: 2100, stars: 5, location: 'Rue de Rivoli' },
        { id: 'par-hotel-l3', name: 'Hôtel Ritz Paris', price: 2300, stars: 5, location: 'Place Vendôme' },
        { id: 'par-hotel-l4', name: 'Four Seasons George V', price: 2500, stars: 5, location: 'Avenue George V' }
      ]
    },

    // 🍽️ المطاعم في باريس (10 خيارات لكل فئة) - السعر لوجبة واحدة
    restaurants: {
      budget: [
        { id: 'par-rest-b1', name: 'Breizh Café', price: 95, cuisine: 'كريب بريتوني', location: 'Marais' },
        { id: 'par-rest-b2', name: 'L\'As du Fallafel', price: 100, cuisine: 'شرق أوسطي', location: 'Marais' },
        { id: 'par-rest-b3', name: 'Bouillon Chartier', price: 105, cuisine: 'فرنسي تقليدي', location: 'Grands Boulevards' },
        { id: 'par-rest-b4', name: 'Café de Flore', price: 110, cuisine: 'مقهى باريسي', location: 'Saint-Germain' },
        { id: 'par-rest-b5', name: 'Chez Gladines', price: 120, cuisine: 'باسكي فرنسي', location: 'Butte-aux-Cailles' },
        { id: 'par-rest-b6', name: 'Pink Mamma', price: 130, cuisine: 'إيطالي', location: 'Pigalle' },
        { id: 'par-rest-b7', name: 'Bouillon Pigalle', price: 135, cuisine: 'فرنسي اقتصادي', location: 'Pigalle' },
        { id: 'par-rest-b8', name: 'Le Relais de l\'Entrecôte', price: 140, cuisine: 'ستيك فرنسي', location: 'Saint-Germain' },
        { id: 'par-rest-b9', name: 'Blend Hamburger', price: 145, cuisine: 'برغر', location: 'Marais' },
        { id: 'par-rest-b10', name: 'Café des Musées', price: 150, cuisine: 'بيسترو فرنسي', location: 'Marais' }
      ],
      midRange: [
        { id: 'par-rest-m1', name: 'Le Comptoir du Relais', price: 250, cuisine: 'بيسترو فرنسي', location: 'Saint-Germain' },
        { id: 'par-rest-m2', name: 'Septime', price: 270, cuisine: 'فرنسي حديث', location: 'Charonne' },
        { id: 'par-rest-m3', name: 'Frenchie', price: 290, cuisine: 'فرنسي معاصر', location: 'Sentier' },
        { id: 'par-rest-m4', name: 'Le Chateaubriand', price: 310, cuisine: 'فرنسي مبتكر', location: 'Belleville' },
        { id: 'par-rest-m5', name: 'Bistrot Paul Bert', price: 330, cuisine: 'بيسترو كلاسيكي', location: 'Bastille' },
        { id: 'par-rest-m6', name: 'L\'Ami Jean', price: 350, cuisine: 'باسكي فرنسي', location: 'Invalides' },
        { id: 'par-rest-m7', name: 'Le Dôme', price: 370, cuisine: 'مأكولات بحرية', location: 'Montparnasse' },
        { id: 'par-rest-m8', name: 'Le Jules Verne (Eiffel Tower)', price: 390, cuisine: 'فرنسي راقي', location: 'Tour Eiffel' },
        { id: 'par-rest-m9', name: 'Lasserre', price: 410, cuisine: 'فرنسي كلاسيكي', location: 'Champs-Élysées' },
        { id: 'par-rest-m10', name: 'Le Cinq', price: 430, cuisine: 'فرنسي فاخر', location: 'George V' }
      ],
      luxury: [
        { id: 'par-rest-l1', name: 'Alain Ducasse au Plaza Athénée', price: 650, cuisine: 'فرنسي راقي', location: 'Avenue Montaigne', michelin: 3 },
        { id: 'par-rest-l2', name: 'L\'Ambroisie', price: 680, cuisine: 'فرنسي كلاسيكي', location: 'Place des Vosges', michelin: 3 },
        { id: 'par-rest-l3', name: 'Arpège', price: 700, cuisine: 'فرنسي نباتي راقي', location: 'Invalides', michelin: 3 },
        { id: 'par-rest-l4', name: 'Le Pré Catelan', price: 730, cuisine: 'فرنسي راقي', location: 'Bois de Boulogne', michelin: 3 },
        { id: 'par-rest-l5', name: 'Pierre Gagnaire', price: 750, cuisine: 'فرنسي مبتكر', location: 'Champs-Élysées', michelin: 3 },
        { id: 'par-rest-l6', name: 'Le Meurice Alain Ducasse', price: 780, cuisine: 'فرنسي قصري', location: 'Tuileries', michelin: 2 },
        { id: 'par-rest-l7', name: 'Guy Savoy', price: 800, cuisine: 'فرنسي معاصر', location: 'Monnaie de Paris', michelin: 3 },
        { id: 'par-rest-l8', name: 'Epicure (Le Bristol)', price: 830, cuisine: 'فرنسي راقي', location: 'Faubourg Saint-Honoré', michelin: 3 },
        { id: 'par-rest-l9', name: 'Pavillon Ledoyen', price: 850, cuisine: 'فرنسي تاريخي', location: 'Champs-Élysées', michelin: 3 },
        { id: 'par-rest-l10', name: 'Kei', price: 900, cuisine: 'فرنسي-ياباني', location: 'Louvre', michelin: 3 }
      ]
    },

    // 🎡 الأنشطة والجولات في باريس (10 خيارات مقسمة على الفئات)
    activities: [
      { id: 'par-act-1', name: 'Louvre Museum', price: 65, category: 'budget', duration: '3-4 ساعات', description: 'متحف اللوفر - الموناليزا' },
      { id: 'par-act-2', name: 'Notre-Dame Cathedral (Exterior)', price: 0, category: 'budget', duration: '1 ساعة', description: 'كاتدرائية نوتردام من الخارج' },
      { id: 'par-act-3', name: 'Sacré-Cœur Basilica', price: 30, category: 'budget', duration: '2 ساعة', description: 'بازيليك القلب المقدس' },
      { id: 'par-act-4', name: 'Eiffel Tower (2nd Floor)', price: 85, category: 'midRange', duration: '2 ساعة', description: 'برج إيفل - الطابق الثاني' },
      { id: 'par-act-5', name: 'Versailles Palace & Gardens', price: 150, category: 'midRange', duration: '5 ساعات', description: 'قصر فيرساي والحدائق' },
      { id: 'par-act-6', name: 'Seine River Cruise', price: 80, category: 'midRange', duration: '1.5 ساعة', description: 'رحلة نهرية في السين' },
      { id: 'par-act-7', name: 'Arc de Triomphe + Champs-Élysées Walk', price: 50, category: 'midRange', duration: '2 ساعة', description: 'قوس النصر والشانزليزيه' },
      { id: 'par-act-8', name: 'Moulin Rouge Cabaret Show with Champagne', price: 450, category: 'luxury', duration: '3 ساعات', description: 'عرض مولان روج + شامبانيا' },
      { id: 'par-act-9', name: 'Private Louvre Tour with Expert Guide', price: 550, category: 'luxury', duration: '3 ساعات', description: 'جولة خاصة في اللوفر' },
      { id: 'par-act-10', name: 'Hot Air Balloon over Versailles', price: 700, category: 'luxury', duration: '1 ساعة', description: 'منطاد فوق فيرساي' }
    ],

    // ✈️ رحلات الطيران من/إلى باريس (ذهاب وعودة) — من الدمام DMM إلى باريس (CDG)
    flights: [
      { id: 'par-flight-1', origin: 'DMM', route: 'DMM-CDG', airline: 'الخطوط السعودية - اقتصادية', price: 3000, category: 'budget', class: 'Economy', baggage: '23 كجم', meals: 'قياسية' },
      { id: 'par-flight-2', origin: 'DMM', route: 'DMM-CDG', airline: 'Air France - درجة الأعمال', price: 11500, category: 'midRange', class: 'Business', baggage: '32 كجم', meals: 'مميزة', lounge: true },
      { id: 'par-flight-3', origin: 'DMM', route: 'DMM-CDG', airline: 'طيران الإمارات - الدرجة الأولى', price: 23000, category: 'luxury', class: 'First Class', baggage: '50 كجم', meals: 'فاخرة', lounge: true, chauffeur: true }
    ]
  },

  turkey: {
    // 🏨 الفنادق في إسطنبول (4 خيارات لكل فئة) - الأسعار لليلة الواحدة
    hotels: {
      budget: [
        { id: 'tur-hotel-b1', name: 'Ramada Istanbul Taksim', price: 200, stars: 3, location: 'Taksim' },
        { id: 'tur-hotel-b2', name: 'Grand Yavuz Hotel', price: 230, stars: 3, location: 'Sultanahmet' },
        { id: 'tur-hotel-b3', name: 'Best Western Citadel', price: 260, stars: 3, location: 'Beyoglu' },
        { id: 'tur-hotel-b4', name: 'Ramada Encore', price: 290, stars: 3, location: 'Sisli' }
      ],
      midRange: [
        { id: 'tur-hotel-m1', name: 'Hilton Istanbul Bosphorus', price: 450, stars: 4, location: 'Besiktas' },
        { id: 'tur-hotel-m2', name: 'Swissotel The Bosphorus', price: 520, stars: 4, location: 'Macka' },
        { id: 'tur-hotel-m3', name: 'Radisson Blu Bosphorus', price: 580, stars: 4, location: 'Ortakoy' },
        { id: 'tur-hotel-m4', name: 'Marriott Istanbul Asia', price: 650, stars: 4, location: 'Kadikoy' }
      ],
      luxury: [
        { id: 'tur-hotel-l1', name: 'Four Seasons Sultanahmet', price: 1200, stars: 5, location: 'Sultanahmet' },
        { id: 'tur-hotel-l2', name: 'Ciragan Palace Kempinski', price: 1500, stars: 5, location: 'Besiktas' },
        { id: 'tur-hotel-l3', name: 'The Ritz-Carlton Istanbul', price: 1700, stars: 5, location: 'Sisli' },
        { id: 'tur-hotel-l4', name: 'Raffles Istanbul', price: 1900, stars: 5, location: 'Zorlu Center' }
      ]
    },

    // 🍽️ المطاعم في إسطنبول (10 خيارات لكل فئة)
    restaurants: {
      budget: [
        { id: 'tur-rest-b1', name: 'Sultanahmet Köftecisi', price: 40, cuisine: 'تركي تقليدي', location: 'Sultanahmet' },
        { id: 'tur-rest-b2', name: 'Hafiz Mustafa', price: 45, cuisine: 'حلويات تركية', location: 'Eminönü' },
        { id: 'tur-rest-b3', name: 'Tarihi Karaköy Balıkçısı', price: 50, cuisine: 'مأكولات بحرية', location: 'Karakoy' },
        { id: 'tur-rest-b4', name: 'Çiya Sofrası', price: 55, cuisine: 'تركي أناضولي', location: 'Kadikoy' },
        { id: 'tur-rest-b5', name: 'Dürümzade', price: 60, cuisine: 'دونر كباب', location: 'Beyoglu' },
        { id: 'tur-rest-b6', name: 'Hamdi Restaurant', price: 65, cuisine: 'كباب تركي', location: 'Eminönü' },
        { id: 'tur-rest-b7', name: 'Pandeli Restaurant', price: 70, cuisine: 'تركي عثماني', location: 'Spice Bazaar' },
        { id: 'tur-rest-b8', name: 'Karaköy Lokantası', price: 75, cuisine: 'تركي معاصر', location: 'Karakoy' },
        { id: 'tur-rest-b9', name: 'Çiçek Pasajı Restaurants', price: 80, cuisine: 'ميزة تركي', location: 'Istiklal' },
        { id: 'tur-rest-b10', name: 'Sehzade Erzurum Cağ Kebabı', price: 80, cuisine: 'كباب أرضروم', location: 'Fatih' }
      ],
      midRange: [
        { id: 'tur-rest-m1', name: 'Mikla Restaurant', price: 120, cuisine: 'تركي حديث', location: 'Beyoglu' },
        { id: 'tur-rest-m2', name: 'Nusr-Et Steakhouse', price: 130, cuisine: 'ستيك هاوس', location: 'Etiler' },
        { id: 'tur-rest-m3', name: '360 Istanbul', price: 140, cuisine: 'عالمي', location: 'Beyoglu' },
        { id: 'tur-rest-m4', name: 'Sunset Grill & Bar', price: 150, cuisine: 'عالمي راقي', location: 'Ulus' },
        { id: 'tur-rest-m5', name: 'Ulus 29', price: 170, cuisine: 'تركي معاصر', location: 'Ulus' },
        { id: 'tur-rest-m6', name: 'Vogue Restaurant', price: 180, cuisine: 'إيطالي راقي', location: 'Besiktas' },
        { id: 'tur-rest-m7', name: 'Tugra Restaurant', price: 190, cuisine: 'عثماني فاخر', location: 'Ciragan Palace' },
        { id: 'tur-rest-m8', name: 'Aqua Restaurant', price: 200, cuisine: 'مأكولات بحرية', location: 'Four Seasons' },
        { id: 'tur-rest-m9', name: 'Nicole Restaurant', price: 210, cuisine: 'فرنسي-تركي', location: 'Tomtom' },
        { id: 'tur-rest-m10', name: 'Feriye Palace', price: 220, cuisine: 'عثماني ملكي', location: 'Ortakoy' }
      ],
      luxury: [
        { id: 'tur-rest-l1', name: 'Turk Fatih Tutak', price: 350, cuisine: 'تركي مبتكر', location: 'Bomonti', michelin: 2 },
        { id: 'tur-rest-l2', name: 'Arkestra', price: 400, cuisine: 'تركي حديث', location: 'Galatasaray', michelin: 1 },
        { id: 'tur-rest-l3', name: 'Neolokal', price: 450, cuisine: 'تركي أناضولي', location: 'Karakoy', michelin: 1 },
        { id: 'tur-rest-l4', name: 'Mikla (Tasting Menu)', price: 500, cuisine: 'تركي اسكندنافي', location: 'Beyoglu' },
        { id: 'tur-rest-l5', name: 'Sankai by Nagaya', price: 550, cuisine: 'ياباني راقي', location: 'Etiler' },
        { id: 'tur-rest-l6', name: 'Yeni Lokanta', price: 600, cuisine: 'تركي معاصر', location: 'Beyoglu' },
        { id: 'tur-rest-l7', name: 'Gallada Restaurant', price: 650, cuisine: 'تركي راقي', location: 'Galata Tower' },
        { id: 'tur-rest-l8', name: 'Sunset Grill & Bar (Premium)', price: 700, cuisine: 'عالمي فاخر', location: 'Ulus' },
        { id: 'tur-rest-l9', name: 'The House Café Bosphorus', price: 750, cuisine: 'عالمي راقي', location: 'Ortakoy' },
        { id: 'tur-rest-l10', name: '29 Restaurant (Private Dining)', price: 800, cuisine: 'تركي فاخر', location: 'Ulus' }
      ]
    },

    // 🎡 الأنشطة والجولات في إسطنبول (10 خيارات)
    activities: [
      { id: 'tur-act-1', name: 'Hagia Sophia Museum', price: 36, category: 'budget', duration: '2 ساعة', description: 'آيا صوفيا التاريخية' },
      { id: 'tur-act-2', name: 'Blue Mosque', price: 0, category: 'budget', duration: '1 ساعة', description: 'المسجد الأزرق - مجاني' },
      { id: 'tur-act-3', name: 'Grand Bazaar Tour', price: 25, category: 'budget', duration: '2 ساعة', description: 'جولة في البازار الكبير' },
      { id: 'tur-act-4', name: 'Topkapi Palace', price: 135, category: 'midRange', duration: '3 ساعات', description: 'قصر توب كابي' },
      { id: 'tur-act-5', name: 'Bosphorus Cruise', price: 100, category: 'midRange', duration: '2 ساعة', description: 'رحلة بحرية في البوسفور' },
      { id: 'tur-act-6', name: 'Dolmabahce Palace', price: 120, category: 'midRange', duration: '2 ساعة', description: 'قصر دولما باهتشه' },
      { id: 'tur-act-7', name: 'Turkish Bath (Hamam) Experience', price: 138, category: 'midRange', duration: '1.5 ساعة', description: 'تجربة الحمام التركي' },
      { id: 'tur-act-8', name: 'Whirling Dervishes Show', price: 200, category: 'luxury', duration: '1.5 ساعة', description: 'عرض الدراويش المولوية' },
      { id: 'tur-act-9', name: 'Private Bosphorus Yacht Tour', price: 500, category: 'luxury', duration: '4 ساعات', description: 'جولة يخت خاصة في البوسفور' },
      { id: 'tur-act-10', name: 'Helicopter Tour over Istanbul', price: 650, category: 'luxury', duration: '30 دقيقة', description: 'جولة هليكوبتر فوق إسطنبول' }
    ],

    // ✈️ رحلات الطيران من/إلى إسطنبول (ذهاب وعودة) — من الدمام DMM إلى إسطنبول (IST)
    flights: [
      { id: 'tur-flight-1', origin: 'DMM', route: 'DMM-IST', airline: 'الخطوط السعودية - اقتصادية', price: 1200, category: 'budget', class: 'Economy', baggage: '23 كجم', meals: 'قياسية' },
      { id: 'tur-flight-2', origin: 'DMM', route: 'DMM-IST', airline: 'الخطوط التركية - درجة الأعمال', price: 4200, category: 'midRange', class: 'Business', baggage: '32 كجم', meals: 'مميزة', lounge: true },
      { id: 'tur-flight-3', origin: 'DMM', route: 'DMM-IST', airline: 'طيران الإمارات - الدرجة الأولى', price: 8000, category: 'luxury', class: 'First Class', baggage: '50 كجم', meals: 'فاخرة', lounge: true, chauffeur: true }
    ]
  },

  dubai: {
    // 🏨 الفنادق في دبي (4 خيارات لكل فئة) - الأسعار لليلة الواحدة
    hotels: {
      budget: [
        { id: 'dub-hotel-b1', name: 'Ibis Dubai Al Barsha', price: 220, stars: 3, location: 'Al Barsha' },
        { id: 'dub-hotel-b2', name: 'Premier Inn Dubai Ibn Battuta', price: 250, stars: 3, location: 'Ibn Battuta' },
        { id: 'dub-hotel-b3', name: 'Rove Downtown', price: 280, stars: 3, location: 'Downtown' },
        { id: 'dub-hotel-b4', name: 'City Max Bur Dubai', price: 310, stars: 3, location: 'Bur Dubai' }
      ],
      midRange: [
        { id: 'dub-hotel-m1', name: 'Hilton Dubai Jumeirah', price: 550, stars: 4, location: 'Jumeirah Beach' },
        { id: 'dub-hotel-m2', name: 'Marriott Al Jaddaf', price: 650, stars: 4, location: 'Al Jaddaf' },
        { id: 'dub-hotel-m3', name: 'Radisson Blu Dubai Marina', price: 750, stars: 4, location: 'Dubai Marina' },
        { id: 'dub-hotel-m4', name: 'JW Marriott Marquis', price: 850, stars: 4, location: 'Business Bay' }
      ],
      luxury: [
        { id: 'dub-hotel-l1', name: 'Burj Al Arab Jumeirah', price: 4500, stars: 5, location: 'Jumeirah Beach' },
        { id: 'dub-hotel-l2', name: 'Atlantis The Palm', price: 2800, stars: 5, location: 'Palm Jumeirah' },
        { id: 'dub-hotel-l3', name: 'Armani Hotel Dubai', price: 3200, stars: 5, location: 'Burj Khalifa' },
        { id: 'dub-hotel-l4', name: 'One&Only The Palm', price: 3800, stars: 5, location: 'Palm Jumeirah' }
      ]
    },

    // 🍽️ المطاعم في دبي (10 خيارات لكل فئة)
    restaurants: {
      budget: [
        { id: 'dub-rest-b1', name: 'Al Mallah', price: 85, cuisine: 'لبناني', location: 'Al Dhiyafa' },
        { id: 'dub-rest-b2', name: 'Ravi Restaurant', price: 90, cuisine: 'باكستاني', location: 'Satwa' },
        { id: 'dub-rest-b3', name: 'Bu Qtair', price: 95, cuisine: 'مأكولات بحرية', location: 'Umm Suqeim' },
        { id: 'dub-rest-b4', name: 'Arabian Tea House', price: 100, cuisine: 'إماراتي تقليدي', location: 'Al Fahidi' },
        { id: 'dub-rest-b5', name: 'Operation: Falafel', price: 105, cuisine: 'شرق أوسطي', location: 'JBR' },
        { id: 'dub-rest-b6', name: 'Zaroob', price: 110, cuisine: 'شارع عربي', location: 'City Walk' },
        { id: 'dub-rest-b7', name: 'Logma', price: 115, cuisine: 'إماراتي عصري', location: 'BoxPark' },
        { id: 'dub-rest-b8', name: 'Salt', price: 120, cuisine: 'برغر', location: 'Kite Beach' },
        { id: 'dub-rest-b9', name: 'Allo Beirut', price: 125, cuisine: 'لبناني', location: 'JBR' },
        { id: 'dub-rest-b10', name: 'Catch 22', price: 130, cuisine: 'مأكولات بحرية', location: 'Marina' }
      ],
      midRange: [
        { id: 'dub-rest-m1', name: 'Pierchic', price: 220, cuisine: 'مأكولات بحرية', location: 'Madinat Jumeirah' },
        { id: 'dub-rest-m2', name: 'Nusr-Et Dubai', price: 240, cuisine: 'ستيك هاوس', location: 'Four Seasons' },
        { id: 'dub-rest-m3', name: 'Zuma Dubai', price: 260, cuisine: 'ياباني معاصر', location: 'DIFC' },
        { id: 'dub-rest-m4', name: 'La Petite Maison', price: 280, cuisine: 'فرنسي نيس', location: 'DIFC' },
        { id: 'dub-rest-m5', name: 'Thiptara', price: 300, cuisine: 'تايلندي راقي', location: 'Palace Downtown' },
        { id: 'dub-rest-m6', name: 'CÉ LA VI', price: 320, cuisine: 'آسيوي فاخر', location: 'Address Sky View' },
        { id: 'dub-rest-m7', name: 'Nobu Dubai', price: 340, cuisine: 'ياباني بيروفي', location: 'Atlantis' },
        { id: 'dub-rest-m8', name: 'Armani/Ristorante', price: 360, cuisine: 'إيطالي راقي', location: 'Armani Hotel' },
        { id: 'dub-rest-m9', name: 'Al Mahara', price: 380, cuisine: 'مأكولات بحرية فاخرة', location: 'Burj Al Arab' },
        { id: 'dub-rest-m10', name: 'Ossiano', price: 400, cuisine: 'مأكولات بحرية راقية', location: 'Atlantis' }
      ],
      luxury: [
        { id: 'dub-rest-l1', name: 'At.mosphere (Burj Khalifa)', price: 900, cuisine: 'أوروبي راقي', location: 'Burj Khalifa Level 122' },
        { id: 'dub-rest-l2', name: 'Nathan Outlaw at Al Mahara', price: 950, cuisine: 'مأكولات بحرية ميشلان', location: 'Burj Al Arab' },
        { id: 'dub-rest-l3', name: 'Stay by Yannick Alléno', price: 1000, cuisine: 'فرنسي ميشلان', location: 'One&Only The Palm' },
        { id: 'dub-rest-l4', name: '101 Dining Lounge', price: 1050, cuisine: 'عالمي فاخر', location: 'One&Only The Palm' },
        { id: 'dub-rest-l5', name: 'Dinner by Heston Blumenthal', price: 1100, cuisine: 'بريطاني تاريخي', location: 'Atlantis' },
        { id: 'dub-rest-l6', name: 'Tasca by José Avillez', price: 1150, cuisine: 'برتغالي ميشلان', location: 'Mandarin Oriental' },
        { id: 'dub-rest-l7', name: 'Torno Subito', price: 1200, cuisine: 'إيطالي ميشلان', location: 'W Dubai' },
        { id: 'dub-rest-l8', name: 'Trèsind Studio', price: 1250, cuisine: 'هندي معاصر', location: 'DIFC', michelin: 1 },
        { id: 'dub-rest-l9', name: 'Il Ristorante Niko Romito', price: 1300, cuisine: 'إيطالي ميشلان', location: 'Bulgari Resort', michelin: 1 },
        { id: 'dub-rest-l10', name: 'Hōseki', price: 1350, cuisine: 'ياباني ميشلان', location: 'Bulgari Resort', michelin: 1 }
      ]
    },

    // 🎡 الأنشطة والجولات في دبي (10 خيارات)
    activities: [
      { id: 'dub-act-1', name: 'Dubai Mall + Dubai Fountain Show', price: 0, category: 'budget', duration: '2 ساعة', description: 'دبي مول ونافورة دبي - مجاني' },
      { id: 'dub-act-2', name: 'Jumeirah Beach Walk', price: 0, category: 'budget', duration: '2 ساعة', description: 'المشي على شاطئ جميرا' },
      { id: 'dub-act-3', name: 'Gold Souk & Spice Souk Tour', price: 48, category: 'budget', duration: '2 ساعة', description: 'جولة في سوق الذهب والتوابل' },
      { id: 'dub-act-4', name: 'Burj Khalifa (124th Floor)', price: 183, category: 'midRange', duration: '1.5 ساعة', description: 'برج خليفة - الطابق 124' },
      { id: 'dub-act-5', name: 'Dubai Aquarium & Underwater Zoo', price: 135, category: 'midRange', duration: '2 ساعة', description: 'أكواريوم دبي وحديقة الحيوانات' },
      { id: 'dub-act-6', name: 'Desert Safari with BBQ Dinner', price: 267, category: 'midRange', duration: '6 ساعات', description: 'سفاري صحراوية مع عشاء' },
      { id: 'dub-act-7', name: 'Dubai Frame', price: 71, category: 'midRange', duration: '1 ساعة', description: 'إطار دبي' },
      { id: 'dub-act-8', name: 'Private Yacht Charter (4 hours)', price: 750, category: 'luxury', duration: '4 ساعات', description: 'استئجار يخت خاص' },
      { id: 'dub-act-9', name: 'Helicopter Tour over Dubai', price: 800, category: 'luxury', duration: '25 دقيقة', description: 'جولة هليكوبتر فوق دبي' },
      { id: 'dub-act-10', name: 'Seaplane Flight & Palm Tour', price: 900, category: 'luxury', duration: '40 دقيقة', description: 'رحلة طائرة مائية فوق النخلة' }
    ],

    // ✈️ رحلات الطيران من/إلى دبي (ذهاب وعودة) — من الدمام DMM إلى دبي (DXB)
    flights: [
      { id: 'dub-flight-1', origin: 'DMM', route: 'DMM-DXB', airline: 'فلاي دبي - اقتصادية', price: 600, category: 'budget', class: 'Economy', baggage: '20 كجم', meals: 'قياسية' },
      { id: 'dub-flight-2', origin: 'DMM', route: 'DMM-DXB', airline: 'طيران الإمارات - درجة الأعمال', price: 3000, category: 'midRange', class: 'Business', baggage: '40 كجم', meals: 'مميزة', lounge: true },
      { id: 'dub-flight-3', origin: 'DMM', route: 'DMM-DXB', airline: 'طيران الإمارات - الدرجة الأولى', price: 7500, category: 'luxury', class: 'First Class', baggage: '50 كجم', meals: 'فاخرة', lounge: true, chauffeur: true }
    ]
  },

  egypt: {
    // 🏨 الفنادق في القاهرة (4 خيارات لكل فئة) - الأسعار لليلة الواحدة
    hotels: {
      budget: [
        { id: 'egy-hotel-b1', name: 'Steigenberger Hotel Tahrir', price: 180, stars: 3, location: 'Downtown Cairo' },
        { id: 'egy-hotel-b2', name: 'Pyramisa Hotel Cairo', price: 210, stars: 3, location: 'Giza' },
        { id: 'egy-hotel-b3', name: 'Le Passage Cairo Hotel', price: 240, stars: 3, location: 'Zamalek' },
        { id: 'egy-hotel-b4', name: 'Cairo Khan Hotel', price: 270, stars: 3, location: 'Khan El Khalili' }
      ],
      midRange: [
        { id: 'egy-hotel-m1', name: 'Marriott Mena House', price: 450, stars: 4, location: 'Giza Pyramids' },
        { id: 'egy-hotel-m2', name: 'Kempinski Nile Hotel', price: 520, stars: 4, location: 'Garden City' },
        { id: 'egy-hotel-m3', name: 'InterContinental Citystars', price: 580, stars: 4, location: 'Heliopolis' },
        { id: 'egy-hotel-m4', name: 'Fairmont Nile City', price: 650, stars: 4, location: 'Nile Corniche' }
      ],
      luxury: [
        { id: 'egy-hotel-l1', name: 'Four Seasons Nile Plaza', price: 1000, stars: 5, location: 'Garden City' },
        { id: 'egy-hotel-l2', name: 'Four Seasons First Residence', price: 1200, stars: 5, location: 'Giza' },
        { id: 'egy-hotel-l3', name: 'The Nile Ritz-Carlton', price: 1400, stars: 5, location: 'Tahrir Square' },
        { id: 'egy-hotel-l4', name: 'Sofitel Cairo Nile El Gezirah', price: 1600, stars: 5, location: 'Zamalek' }
      ]
    },

    // 🍽️ المطاعم في القاهرة (10 خيارات لكل فئة)
    restaurants: {
      budget: [
        { id: 'egy-rest-b1', name: 'Abou Tarek', price: 20, cuisine: 'كشري مصري', location: 'Downtown' },
        { id: 'egy-rest-b2', name: 'Felfela', price: 25, cuisine: 'مصري تقليدي', location: 'Tahrir' },
        { id: 'egy-rest-b3', name: 'Koshary El Tahrir', price: 25, cuisine: 'كشري', location: 'Dokki' },
        { id: 'egy-rest-b4', name: 'Al Dahan', price: 30, cuisine: 'مشويات مصرية', location: 'Mohandiseen' },
        { id: 'egy-rest-b5', name: 'El Abd Pastry', price: 35, cuisine: 'معجنات وحلويات', location: 'Talaat Harb' },
        { id: 'egy-rest-b6', name: 'Gad Restaurants', price: 35, cuisine: 'مصري سريع', location: 'Multiple' },
        { id: 'egy-rest-b7', name: 'Kazaz', price: 40, cuisine: 'فول وطعمية', location: 'Zamalek' },
        { id: 'egy-rest-b8', name: 'Zooba', price: 45, cuisine: 'مصري عصري', location: 'Zamalek' },
        { id: 'egy-rest-b9', name: 'Al Omda', price: 45, cuisine: 'مشويات', location: 'Mohandiseen' },
        { id: 'egy-rest-b10', name: 'Sobhy Kaber', price: 50, cuisine: 'حمام وفراخ', location: 'Dokki' }
      ],
      midRange: [
        { id: 'egy-rest-m1', name: 'Sequoia', price: 100, cuisine: 'متوسطي', location: 'Zamalek' },
        { id: 'egy-rest-m2', name: 'Osmanly Restaurant', price: 110, cuisine: 'عثماني تركي', location: 'Fairmont' },
        { id: 'egy-rest-m3', name: 'Makani', price: 120, cuisine: 'مصري فاخر', location: 'Zamalek' },
        { id: 'egy-rest-m4', name: 'Birdcage', price: 130, cuisine: 'تايلندي', location: 'Zamalek' },
        { id: 'egy-rest-m5', name: 'Kazoku', price: 140, cuisine: 'ياباني', location: 'Maadi' },
        { id: 'egy-rest-m6', name: 'LPM Dubai', price: 150, cuisine: 'فرنسي نيس', location: 'Four Seasons' },
        { id: 'egy-rest-m7', name: 'Pier 88', price: 150, cuisine: 'مأكولات بحرية', location: 'Maadi' },
        { id: 'egy-rest-m8', name: 'Sabaya', price: 160, cuisine: 'لبناني راقي', location: 'Semiramis' },
        { id: 'egy-rest-m9', name: 'Tabla Luna', price: 160, cuisine: 'لاتيني', location: 'Zamalek' },
        { id: 'egy-rest-m10', name: 'Naguib Mahfouz Café', price: 160, cuisine: 'مصري تراثي', location: 'Khan El Khalili' }
      ],
      luxury: [
        { id: 'egy-rest-l1', name: 'Zitouni', price: 240, cuisine: 'مصري راقي', location: 'Four Seasons' },
        { id: 'egy-rest-l2', name: 'Le Deck', price: 280, cuisine: 'فرنسي متوسطي', location: 'Four Seasons' },
        { id: 'egy-rest-l3', name: 'Kempinski Grill', price: 320, cuisine: 'ستيك هاوس', location: 'Kempinski Nile' },
        { id: 'egy-rest-l4', name: 'NOX', price: 360, cuisine: 'أوروبي معاصر', location: 'Fairmont' },
        { id: 'egy-rest-l5', name: '139 Pavilion', price: 400, cuisine: 'عالمي فاخر', location: 'Marriott Mena House' },
        { id: 'egy-rest-l6', name: 'The Blue Restaurant', price: 440, cuisine: 'مأكولات بحرية فاخرة', location: 'Nile Ritz-Carlton' },
        { id: 'egy-rest-l7', name: 'Asia Bar', price: 460, cuisine: 'آسيوي فاخر', location: 'Kempinski' },
        { id: 'egy-rest-l8', name: 'Le Steak', price: 480, cuisine: 'ستيك فرنسي', location: 'Four Seasons' },
        { id: 'egy-rest-l9', name: 'Ruby Tuesday (Premium)', price: 500, cuisine: 'أمريكي راقي', location: 'Citystars' },
        { id: 'egy-rest-l10', name: 'Private Nile Cruise Dining', price: 520, cuisine: 'عالمي فاخر', location: 'Nile Cruise' }
      ]
    },

    // 🎡 الأنشطة والجولات في القاهرة (10 خيارات)
    activities: [
      { id: 'egy-act-1', name: 'Egyptian Museum', price: 25, category: 'budget', duration: '3 ساعات', description: 'المتحف المصري - توت عنخ آمون' },
      { id: 'egy-act-2', name: 'Khan El Khalili Bazaar', price: 0, category: 'budget', duration: '2 ساعة', description: 'سوق خان الخليلي التاريخي' },
      { id: 'egy-act-3', name: 'Al-Azhar Mosque Tour', price: 15, category: 'budget', duration: '1 ساعة', description: 'جامع الأزهر الشريف' },
      { id: 'egy-act-4', name: 'Giza Pyramids & Sphinx', price: 100, category: 'midRange', duration: '4 ساعات', description: 'أهرامات الجيزة وأبو الهول' },
      { id: 'egy-act-5', name: 'Nile Felucca Ride', price: 80, category: 'midRange', duration: '1.5 ساعة', description: 'رحلة فلوكة في النيل' },
      { id: 'egy-act-6', name: 'Citadel of Saladin & Alabaster Mosque', price: 90, category: 'midRange', duration: '2 ساعة', description: 'قلعة صلاح الدين ومسجد محمد علي' },
      { id: 'egy-act-7', name: 'Sound & Light Show at Pyramids', price: 120, category: 'midRange', duration: '1.5 ساعة', description: 'عرض الصوت والضوء عند الأهرامات' },
      { id: 'egy-act-8', name: 'Luxury Nile Dinner Cruise', price: 300, category: 'luxury', duration: '3 ساعات', description: 'عشاء فاخر على النيل' },
      { id: 'egy-act-9', name: 'Private Tour: Pyramids, Sakkara & Memphis', price: 450, category: 'luxury', duration: '8 ساعات', description: 'جولة خاصة شاملة للأهرامات وسقارة وممفيس' },
      { id: 'egy-act-10', name: 'Hot Air Balloon over Luxor Temples', price: 500, category: 'luxury', duration: '4 ساعات', description: 'منطاد فوق معابد الأقصر (رحلة يوم واحد)' }
    ],

    // ✈️ رحلات الطيران من/إلى القاهرة (ذهاب وعودة) — من الدمام DMM إلى القاهرة (CAI)
    flights: [
      { id: 'egy-flight-1', origin: 'DMM', route: 'DMM-CAI', airline: 'مصر للطيران - اقتصادية', price: 800, category: 'budget', class: 'Economy', baggage: '23 كجم', meals: 'قياسية' },
      { id: 'egy-flight-2', origin: 'DMM', route: 'DMM-CAI', airline: 'الخطوط السعودية - درجة الأعمال', price: 2200, category: 'midRange', class: 'Business', baggage: '32 كجم', meals: 'مميزة', lounge: true },
      { id: 'egy-flight-3', origin: 'DMM', route: 'DMM-CAI', airline: 'طيران الإمارات - الدرجة الأولى', price: 7000, category: 'luxury', class: 'First Class', baggage: '50 كجم', meals: 'فاخرة', lounge: true, chauffeur: true }
    ]
  }
};

// دالة مساعدة لحساب إجمالي التكلفة
export const calculateTotalCost = (destination, category, days, selectedServices) => {
  if (!destination || !category || days < 1) return 0;

  const cityData = travelCosts[destination];
  if (!cityData) return 0;

  let total = 0;

  // الطيران (مرة واحدة فقط)
  if (selectedServices.flight) {
    const flight = cityData.flights.find(f => f.category === category);
    total += flight?.price || 0;
  }

  // الفندق (يومي)
  if (selectedServices.hotel && selectedServices.hotelChoice) {
    const hotel = cityData.hotels[category]?.find(h => h.id === selectedServices.hotelChoice);
    total += (hotel?.price || 0) * days;
  }

  // المطاعم (حسب الاختيار)
  if (selectedServices.restaurants && selectedServices.restaurantChoices?.length > 0) {
    selectedServices.restaurantChoices.forEach(restId => {
      const restaurant = cityData.restaurants[category]?.find(r => r.id === restId);
      total += restaurant?.price || 0;
    });
  }

  // الأنشطة (حسب الاختيار)
  if (selectedServices.activities && selectedServices.activityChoices?.length > 0) {
    selectedServices.activityChoices.forEach(actId => {
      const activity = cityData.activities.find(a => a.id === actId);
      total += activity?.price || 0;
    });
  }

  return total;
};

// دالة لحساب عدد الأيام بين تاريخين
export const calculateDays = (arrivalDate, departureDate) => {
  if (!arrivalDate || !departureDate) return 0;
  const arrival = new Date(arrivalDate);
  const departure = new Date(departureDate);
  const diffTime = Math.abs(departure - arrival);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays || 1;
};
