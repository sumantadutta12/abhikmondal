(function ($) {
  "use strict";

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const brandSwitch = $(".brand-switch");
  const siteLoader = $(".site-loader");

  if (siteLoader.length) {
    $("body").addClass("loader-active");
    $(window).on("load", function () {
      setTimeout(function () {
        siteLoader.addClass("is-hidden");
        $("body").removeClass("loader-active");
      }, 450);
    });
  }

  if (brandSwitch.length) {
    setInterval(function () {
      brandSwitch.toggleClass("show-yuva");
    }, 5000);
  }

  $(".navbar .nav-link").each(function () {
    const href = $(this).attr("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      $(this).addClass("active");
    }
  });

  $("a[href^='#']").on("click", function (event) {
    const target = $($(this).attr("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: target.offset().top - 82 }, 650);
    }
  });

  $(".navbar-nav .nav-link").on("click", function () {
    const menu = $("#mainNavbar");
    if (menu.hasClass("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu[0]).hide();
    }
  });

  const journeyButtons = $(".journey-year-nav button");

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.vision": "Vision",
      "nav.social": "Social Work",
      "nav.gallery": "Gallery",
      "nav.events": "Events",
      "nav.news": "Press",
      "nav.contact": "Contact",
      "hero.kicker": "Leadership for Asansol",
      "hero.name": "Abhik Kumar Mondal",
      "hero.role": "Yuva Morcha President, Asansol",
      "hero.tagline": "Youth Power, Nation First",
      "hero.desc": "A youth-focused leadership platform for public service, social awareness, and strong grassroots organization.",
      "hero.slide2.title": "Serving People On The Ground",
      "hero.slide2.subtitle": "Social work, awareness, and community support",
      "hero.slide2.tagline": "Listen. Act. Deliver.",
      "hero.slide2.desc": "Working closely with citizens for cleanliness drives, blood donation camps, and help for needy families.",
      "hero.slide2.primary": "View Social Work",
      "hero.slide2.secondary": "Open Gallery",
      "hero.slide3.title": "Building A Strong Youth Network",
      "hero.slide3.subtitle": "Organization strength from booth to community",
      "hero.slide3.tagline": "Empower. Organize. Lead.",
      "hero.slide3.desc": "Creating opportunities for young people to participate in leadership, service, and development-focused action.",
      "hero.slide3.primary": "Vision & Mission",
      "hero.slide3.secondary": "Latest Events",
      "hero.slide4.title": "Development With Responsibility",
      "hero.slide4.subtitle": "Clean society, aware citizens, stronger Asansol",
      "hero.slide4.tagline": "Service Before Self",
      "hero.slide4.desc": "A disciplined public mission for civic responsibility, education awareness, and development-oriented teamwork.",
      "hero.slide4.primary": "About Abhik",
      "hero.slide4.secondary": "Contact Team",
      "hero.slide5.title": "Join With The Movement",
      "hero.slide5.subtitle": "Volunteer, participate, and share public issues",
      "hero.slide5.tagline": "Together For Asansol",
      "hero.slide5.desc": "Connect with the team for social initiatives, public programs, youth campaigns, and community service.",
      "hero.slide5.secondary": "News Updates",
      "cta.join": "Join With Us",
      "cta.activities": "View Activities",
      "cta.readMore": "Read More",
      "cta.gallery": "View Gallery",
      "about.eyebrow": "About Leadership",
      "about.heading": "A committed youth leader focused on public service and grassroots strength.",
      "about.p1": "Abhik Kumar Mondal works with a people-first approach to empower youth, support social awareness, encourage development, and strengthen organization across Asansol.",
      "about.p2": "His leadership focuses on public service, disciplined youth participation, clean civic action, and responsive support for local communities.",
      "about.cta": "Read More About Abhik",
      "journey.heading": "Political & Social Journey 2016-2026",
      "social.eyebrow": "Social Work",
      "social.heading": "Service That Creates Real Impact",
      "social.desc": "From emergency support to long-term awareness, every initiative is focused on people, dignity, youth participation, and a stronger Asansol.",
      "social.featureTag": "People First Mission",
      "social.featureTitle": "Standing beside citizens through organized service.",
      "social.featureText": "Coordinating volunteers, local teams, and youth workers for timely help, awareness, and community development.",
      "social.cta": "Explore Work",
      "gallery.eyebrow": "Gallery",
      "gallery.heading": "Gallery Images",
      "gallery.desc": "Powerful moments from public programs, youth activities, social work, and grassroots connect.",
      "gallery.cta": "Open Gallery"
    },
    bn: {
      "nav.home": "হোম",
      "nav.about": "পরিচিতি",
      "nav.vision": "লক্ষ্য",
      "nav.social": "সামাজিক কাজ",
      "nav.gallery": "গ্যালারি",
      "nav.events": "ইভেন্ট",
      "nav.news": "প্রেস",
      "nav.contact": "যোগাযোগ",
      "hero.kicker": "আসানসোলের নেতৃত্ব",
      "hero.name": "অভিক কুমার মণ্ডল",
      "hero.role": "যুব মোর্চা সভাপতি, আসানসোল",
      "hero.tagline": "যুব শক্তি, দেশ প্রথম",
      "hero.desc": "জনসেবা, সামাজিক সচেতনতা এবং শক্তিশালী তৃণমূল সংগঠনের জন্য যুবকেন্দ্রিক নেতৃত্বের মঞ্চ।",
      "cta.join": "আমাদের সঙ্গে যোগ দিন",
      "cta.activities": "কার্যক্রম দেখুন",
      "cta.readMore": "আরও পড়ুন",
      "cta.gallery": "গ্যালারি দেখুন",
      "about.eyebrow": "নেতৃত্ব পরিচিতি",
      "about.heading": "জনসেবা ও তৃণমূল শক্তির জন্য নিবেদিত যুব নেতৃত্ব।",
      "about.p1": "অভিক কুমার মণ্ডল যুবশক্তিকে এগিয়ে নেওয়া, সামাজিক সচেতনতা বৃদ্ধি, উন্নয়ন এবং আসানসোলে সংগঠন শক্তিশালী করার জন্য মানুষের পাশে থেকে কাজ করেন।",
      "about.p2": "তার নেতৃত্বের মূল লক্ষ্য জনসেবা, শৃঙ্খলাবদ্ধ যুব অংশগ্রহণ, পরিচ্ছন্ন নাগরিক উদ্যোগ এবং স্থানীয় মানুষের পাশে থাকা।",
      "about.cta": "অভিক সম্পর্কে আরও জানুন",
      "journey.heading": "রাজনৈতিক ও সামাজিক যাত্রা ২০১৬-২০২৬",
      "social.eyebrow": "সামাজিক কাজ",
      "social.heading": "মানুষের জন্য কার্যকর সেবা",
      "social.desc": "জরুরি সহায়তা থেকে দীর্ঘমেয়াদি সচেতনতা পর্যন্ত, প্রতিটি উদ্যোগ মানুষের মর্যাদা, যুব অংশগ্রহণ এবং শক্তিশালী আসানসোলকে কেন্দ্র করে।",
      "social.featureTag": "মানুষ প্রথম মিশন",
      "social.featureTitle": "সংগঠিত সেবার মাধ্যমে মানুষের পাশে থাকা।",
      "social.featureText": "সময়মতো সাহায্য, সচেতনতা এবং সমাজ উন্নয়নের জন্য স্বেচ্ছাসেবক, স্থানীয় দল ও যুবকর্মীদের সমন্বয় করা।",
      "social.cta": "কাজ দেখুন",
      "gallery.eyebrow": "গ্যালারি",
      "gallery.heading": "গ্যালারি ছবি",
      "gallery.desc": "জনসভা, যুব কার্যক্রম, সামাজিক কাজ এবং তৃণমূল সংযোগের শক্তিশালী মুহূর্ত।",
      "gallery.cta": "গ্যালারি খুলুন"
    },
    hi: {
      "nav.home": "होम",
      "nav.about": "परिचय",
      "nav.vision": "विजन",
      "nav.social": "सामाजिक कार्य",
      "nav.gallery": "गैलरी",
      "nav.events": "कार्यक्रम",
      "nav.news": "प्रेस",
      "nav.contact": "संपर्क",
      "hero.kicker": "आसनसोल के लिए नेतृत्व",
      "hero.name": "अभिक कुमार मंडल",
      "hero.role": "युवा मोर्चा अध्यक्ष, आसनसोल",
      "hero.tagline": "युवा शक्ति, राष्ट्र प्रथम",
      "hero.desc": "जनसेवा, सामाजिक जागरूकता और मजबूत जमीनी संगठन के लिए युवा-केंद्रित नेतृत्व मंच।",
      "cta.join": "हमसे जुड़ें",
      "cta.activities": "गतिविधियां देखें",
      "cta.readMore": "और पढ़ें",
      "cta.gallery": "गैलरी देखें",
      "about.eyebrow": "नेतृत्व परिचय",
      "about.heading": "जनसेवा और जमीनी मजबूती पर केंद्रित समर्पित युवा नेतृत्व।",
      "about.p1": "अभिक कुमार मंडल युवाओं को सशक्त करने, सामाजिक जागरूकता बढ़ाने, विकास को प्रोत्साहित करने और आसनसोल में संगठन को मजबूत करने के लिए लोगों के साथ काम करते हैं।",
      "about.p2": "उनका नेतृत्व जनसेवा, अनुशासित युवा भागीदारी, स्वच्छ नागरिक कार्य और स्थानीय समुदायों के प्रति उत्तरदायी सहयोग पर केंद्रित है।",
      "about.cta": "अभिक के बारे में और पढ़ें",
      "journey.heading": "राजनीतिक और सामाजिक यात्रा 2016-2026",
      "social.eyebrow": "सामाजिक कार्य",
      "social.heading": "ऐसी सेवा जो वास्तविक प्रभाव बनाती है",
      "social.desc": "आपात सहायता से लेकर दीर्घकालिक जागरूकता तक, हर पहल लोगों, सम्मान, युवा भागीदारी और मजबूत आसनसोल पर केंद्रित है।",
      "social.featureTag": "लोग पहले मिशन",
      "social.featureTitle": "संगठित सेवा के माध्यम से नागरिकों के साथ खड़े रहना।",
      "social.featureText": "समय पर सहायता, जागरूकता और सामुदायिक विकास के लिए स्वयंसेवकों, स्थानीय टीमों और युवा कार्यकर्ताओं का समन्वय।",
      "social.cta": "कार्य देखें",
      "gallery.eyebrow": "गैलरी",
      "gallery.heading": "गैलरी चित्र",
      "gallery.desc": "जन कार्यक्रमों, युवा गतिविधियों, सामाजिक कार्य और जमीनी संपर्क के प्रभावशाली क्षण।",
      "gallery.cta": "गैलरी खोलें"
    }
  };

  const journeyTranslations = {
    en: {
      2016: ["Beginning", "Started Public Service Journey", "Started working closely with local youth, citizens, and community groups with a focus on social awareness, public support, and disciplined service."],
      2018: ["Grassroots Connect", "Strengthened Local Youth Network", "Expanded youth participation through meetings, awareness activities, volunteer coordination, and local issue-based work across Asansol."],
      2020: ["Service First", "Focused Community Support", "Worked on public help initiatives, support for needy families, health awareness, and responsible civic participation during difficult times."],
      2022: ["Organization", "Built Stronger Booth-Level Presence", "Focused on disciplined organization building, team development, public outreach, and strengthening grassroots structure."],
      2024: ["Leadership", "Yuva Morcha President, Asansol", "Continued leading youth-focused activities for development, awareness, public service, and nation-first organizational values."],
      2026: ["Future Mission", "Expanding Service & Youth Leadership", "Moving forward with stronger youth engagement, wider public service programs, community development initiatives, and a focused mission for Asansol."]
    },
    bn: {
      2016: ["শুরু", "জনসেবার যাত্রা শুরু", "স্থানীয় যুবসমাজ, নাগরিক এবং কমিউনিটি দলের সঙ্গে সামাজিক সচেতনতা, জনসহায়তা এবং শৃঙ্খলাবদ্ধ সেবার লক্ষ্য নিয়ে কাজ শুরু।"],
      2018: ["তৃণমূল সংযোগ", "স্থানীয় যুব নেটওয়ার্ক শক্তিশালীকরণ", "সভা, সচেতনতা কার্যক্রম, স্বেচ্ছাসেবী সমন্বয় এবং স্থানীয় বিষয়ভিত্তিক কাজের মাধ্যমে যুব অংশগ্রহণ বৃদ্ধি।"],
      2020: ["সেবা প্রথম", "কমিউনিটি সহায়তায় বিশেষ গুরুত্ব", "কঠিন সময়ে জনসহায়তা, দরিদ্র পরিবারের পাশে থাকা, স্বাস্থ্য সচেতনতা এবং দায়িত্বশীল নাগরিক অংশগ্রহণে কাজ।"],
      2022: ["সংগঠন", "বুথ স্তরে শক্তিশালী উপস্থিতি", "শৃঙ্খলাবদ্ধ সংগঠন গঠন, দল উন্নয়ন, জনসংযোগ এবং তৃণমূল কাঠামো শক্তিশালী করার উপর জোর।"],
      2024: ["নেতৃত্ব", "যুব মোর্চা সভাপতি, আসানসোল", "উন্নয়ন, সচেতনতা, জনসেবা এবং দেশ-প্রথম সংগঠনমূল্য নিয়ে যুবকেন্দ্রিক কার্যক্রমে নেতৃত্ব।"],
      2026: ["ভবিষ্যৎ লক্ষ্য", "সেবা ও যুব নেতৃত্বের বিস্তার", "আরও শক্তিশালী যুব অংশগ্রহণ, বৃহত্তর জনসেবা কর্মসূচি, সমাজ উন্নয়ন উদ্যোগ এবং আসানসোলের জন্য কেন্দ্রিক লক্ষ্য নিয়ে এগিয়ে চলা।"]
    },
    hi: {
      2016: ["शुरुआत", "जनसेवा यात्रा की शुरुआत", "सामाजिक जागरूकता, जनसहयोग और अनुशासित सेवा पर ध्यान देते हुए स्थानीय युवाओं, नागरिकों और समुदायों के साथ काम शुरू किया।"],
      2018: ["जमीनी संपर्क", "स्थानीय युवा नेटवर्क को मजबूत किया", "बैठकों, जागरूकता गतिविधियों, स्वयंसेवक समन्वय और स्थानीय मुद्दों पर काम के माध्यम से युवा भागीदारी बढ़ाई।"],
      2020: ["सेवा प्रथम", "सामुदायिक सहायता पर ध्यान", "कठिन समय में जनसहायता, जरूरतमंद परिवारों का सहयोग, स्वास्थ्य जागरूकता और जिम्मेदार नागरिक भागीदारी पर काम किया।"],
      2022: ["संगठन", "बूथ स्तर की उपस्थिति मजबूत की", "अनुशासित संगठन निर्माण, टीम विकास, जनसंपर्क और जमीनी ढांचे को मजबूत करने पर ध्यान दिया।"],
      2024: ["नेतृत्व", "युवा मोर्चा अध्यक्ष, आसनसोल", "विकास, जागरूकता, जनसेवा और राष्ट्र-प्रथम संगठन मूल्यों के साथ युवा-केंद्रित गतिविधियों का नेतृत्व जारी रखा।"],
      2026: ["भविष्य मिशन", "सेवा और युवा नेतृत्व का विस्तार", "मजबूत युवा भागीदारी, व्यापक जनसेवा कार्यक्रमों, सामुदायिक विकास और आसनसोल के लिए केंद्रित मिशन के साथ आगे बढ़ना।"]
    }
  };

  let currentLang = localStorage.getItem("siteLang") || "en";
  const languageLabels = {
    en: "English",
    bn: "Bangla",
    hi: "Hindi"
  };
  const languageShortLabels = {
    en: "EN",
    bn: "BN",
    hi: "HI"
  };

  const cleanTranslations = {
    bn: {
      "nav.home": "হোম",
      "nav.about": "পরিচিতি",
      "nav.vision": "লক্ষ্য",
      "nav.social": "সামাজিক কাজ",
      "nav.gallery": "গ্যালারি",
      "nav.events": "ইভেন্ট",
      "nav.news": "প্রেস",
      "nav.contact": "যোগাযোগ",
      "hero.kicker": "আসানসোলের নেতৃত্ব",
      "hero.name": "অভিক কুমার মন্ডল",
      "hero.role": "যুব মোর্চা সভাপতি, আসানসোল",
      "hero.tagline": "যুব শক্তি, দেশ আগে",
      "hero.desc": "জনসেবা, সামাজিক সচেতনতা এবং শক্তিশালী তৃণমূল সংগঠনের জন্য যুব-কেন্দ্রিক নেতৃত্বের প্ল্যাটফর্ম।",
      "hero.slide2.title": "মাটির মানুষের পাশে সেবা",
      "hero.slide2.subtitle": "সামাজিক কাজ, সচেতনতা এবং কমিউনিটি সাপোর্ট",
      "hero.slide2.tagline": "শুনুন। কাজ করুন। পৌঁছে দিন।",
      "hero.slide2.desc": "পরিচ্ছন্নতা অভিযান, রক্তদান শিবির এবং অসহায় পরিবারের সহায়তায় নাগরিকদের সঙ্গে সরাসরি কাজ।",
      "hero.slide2.primary": "সামাজিক কাজ দেখুন",
      "hero.slide2.secondary": "গ্যালারি খুলুন",
      "hero.slide3.title": "শক্তিশালী যুব নেটওয়ার্ক গড়ে তোলা",
      "hero.slide3.subtitle": "বুথ থেকে কমিউনিটি পর্যন্ত সংগঠনের শক্তি",
      "hero.slide3.tagline": "ক্ষমতায়ন। সংগঠন। নেতৃত্ব।",
      "hero.slide3.desc": "যুব সমাজকে নেতৃত্ব, সেবা এবং উন্নয়নমুখী কাজে অংশগ্রহণের সুযোগ তৈরি করা।",
      "hero.slide3.primary": "ভিশন ও মিশন",
      "hero.slide3.secondary": "সাম্প্রতিক ইভেন্ট",
      "hero.slide4.title": "দায়িত্বের সঙ্গে উন্নয়ন",
      "hero.slide4.subtitle": "পরিচ্ছন্ন সমাজ, সচেতন নাগরিক, শক্তিশালী আসানসোল",
      "hero.slide4.tagline": "নিজের আগে সেবা",
      "hero.slide4.desc": "নাগরিক দায়িত্ব, শিক্ষা সচেতনতা এবং উন্নয়নমুখী দলগত কাজের জন্য শৃঙ্খলাবদ্ধ জনমিশন।",
      "hero.slide4.primary": "অভিক সম্পর্কে",
      "hero.slide4.secondary": "টিমের সঙ্গে যোগাযোগ",
      "hero.slide5.title": "আন্দোলনের সঙ্গে যুক্ত হন",
      "hero.slide5.subtitle": "স্বেচ্ছাসেবক হোন, অংশ নিন এবং জনসমস্যা জানান",
      "hero.slide5.tagline": "আসানসোলের জন্য একসঙ্গে",
      "hero.slide5.desc": "সামাজিক উদ্যোগ, জন-প্রোগ্রাম, যুব প্রচার এবং কমিউনিটি সেবার জন্য টিমের সঙ্গে যুক্ত হন।",
      "hero.slide5.secondary": "খবর আপডেট",
      "cta.join": "আমাদের সঙ্গে যোগ দিন",
      "cta.activities": "কার্যক্রম দেখুন",
      "cta.readMore": "আরও পড়ুন",
      "cta.gallery": "গ্যালারি দেখুন",
      "about.eyebrow": "নেতৃত্ব পরিচিতি",
      "about.heading": "জনসেবা ও তৃণমূল শক্তির জন্য নিবেদিত যুব নেতৃত্ব।",
      "about.p1": "অভিক কুমার মন্ডল যুবসমাজকে এগিয়ে নেওয়া, সামাজিক সচেতনতা বৃদ্ধি, উন্নয়নকে উৎসাহ দেওয়া এবং আসানসোলে সংগঠনকে শক্তিশালী করার লক্ষ্যে মানুষের পাশে থেকে কাজ করেন।",
      "about.p2": "তার নেতৃত্বের মূল লক্ষ্য জনসেবা, শৃঙ্খলাবদ্ধ যুব অংশগ্রহণ, পরিচ্ছন্ন নাগরিক উদ্যোগ এবং স্থানীয় মানুষের পাশে থাকা।",
      "about.cta": "অভিক সম্পর্কে আরও জানুন",
      "journey.heading": "রাজনৈতিক ও সামাজিক যাত্রা ২০১৬-২০২৬",
      "social.eyebrow": "সামাজিক কাজ",
      "social.heading": "বাস্তব প্রভাব তৈরি করা সেবা",
      "social.desc": "জরুরি সহায়তা থেকে দীর্ঘমেয়াদি সচেতনতা পর্যন্ত, প্রতিটি উদ্যোগ মানুষ, মর্যাদা, যুব অংশগ্রহণ এবং শক্তিশালী আসানসোলকে কেন্দ্র করে।",
      "social.featureTag": "মানুষ আগে মিশন",
      "social.featureTitle": "সংগঠিত সেবার মাধ্যমে নাগরিকদের পাশে থাকা।",
      "social.featureText": "সময়মতো সাহায্য, সচেতনতা এবং সমাজ উন্নয়নের জন্য স্বেচ্ছাসেবক, স্থানীয় দল ও যুবকর্মীদের সমন্বয় করা।",
      "social.cta": "কাজ দেখুন",
      "gallery.eyebrow": "গ্যালারি",
      "gallery.heading": "গ্যালারি ছবি",
      "gallery.desc": "জনসভা, যুব কার্যক্রম, সামাজিক কাজ এবং তৃণমূল সংযোগের শক্তিশালী মুহূর্ত।",
      "gallery.cta": "গ্যালারি খুলুন"
    },
    hi: {
      "nav.home": "होम",
      "nav.about": "परिचय",
      "nav.vision": "लक्ष्य",
      "nav.social": "सामाजिक कार्य",
      "nav.gallery": "गैलरी",
      "nav.events": "इवेंट",
      "nav.news": "प्रेस",
      "nav.contact": "संपर्क",
      "hero.kicker": "आसनसोल के लिए नेतृत्व",
      "hero.name": "अभिक कुमार मंडल",
      "hero.role": "युवा मोर्चा अध्यक्ष, आसनसोल",
      "hero.tagline": "युवा शक्ति, राष्ट्र पहले",
      "hero.desc": "जनसेवा, सामाजिक जागरूकता और मजबूत जमीनी संगठन के लिए युवा-केंद्रित नेतृत्व मंच।",
      "hero.slide2.title": "जमीन पर लोगों की सेवा",
      "hero.slide2.subtitle": "सामाजिक कार्य, जागरूकता और सामुदायिक सहयोग",
      "hero.slide2.tagline": "सुनें। काम करें। पहुंचाएं।",
      "hero.slide2.desc": "स्वच्छता अभियान, रक्तदान शिविर और जरूरतमंद परिवारों की मदद के लिए नागरिकों के साथ मिलकर काम।",
      "hero.slide2.primary": "सामाजिक कार्य देखें",
      "hero.slide2.secondary": "गैलरी खोलें",
      "hero.slide3.title": "मजबूत युवा नेटवर्क का निर्माण",
      "hero.slide3.subtitle": "बूथ से समुदाय तक संगठन की शक्ति",
      "hero.slide3.tagline": "सशक्त करें। संगठित करें। नेतृत्व करें।",
      "hero.slide3.desc": "युवाओं को नेतृत्व, सेवा और विकास-केंद्रित कार्यों में भाग लेने के अवसर देना।",
      "hero.slide3.primary": "विजन और मिशन",
      "hero.slide3.secondary": "नवीनतम इवेंट",
      "hero.slide4.title": "जिम्मेदारी के साथ विकास",
      "hero.slide4.subtitle": "स्वच्छ समाज, जागरूक नागरिक, मजबूत आसनसोल",
      "hero.slide4.tagline": "स्वयं से पहले सेवा",
      "hero.slide4.desc": "नागरिक जिम्मेदारी, शिक्षा जागरूकता और विकासमुखी टीमवर्क के लिए अनुशासित जनमिशन।",
      "hero.slide4.primary": "अभिक के बारे में",
      "hero.slide4.secondary": "टीम से संपर्क करें",
      "hero.slide5.title": "आंदोलन से जुड़ें",
      "hero.slide5.subtitle": "स्वयंसेवक बनें, भाग लें और जनसमस्याएं साझा करें",
      "hero.slide5.tagline": "आसनसोल के लिए साथ मिलकर",
      "hero.slide5.desc": "सामाजिक पहल, जन कार्यक्रम, युवा अभियान और सामुदायिक सेवा के लिए टीम से जुड़ें।",
      "hero.slide5.secondary": "खबर अपडेट",
      "cta.join": "हमसे जुड़ें",
      "cta.activities": "गतिविधियां देखें",
      "cta.readMore": "और पढ़ें",
      "cta.gallery": "गैलरी देखें",
      "about.eyebrow": "नेतृत्व परिचय",
      "about.heading": "जनसेवा और जमीनी मजबूती पर केंद्रित समर्पित युवा नेतृत्व।",
      "about.p1": "अभिक कुमार मंडल युवाओं को सशक्त करने, सामाजिक जागरूकता बढ़ाने, विकास को प्रोत्साहित करने और आसनसोल में संगठन को मजबूत करने के लिए लोगों के साथ काम करते हैं।",
      "about.p2": "उनका नेतृत्व जनसेवा, अनुशासित युवा भागीदारी, स्वच्छ नागरिक कार्य और स्थानीय समुदायों के प्रति उत्तरदायी सहयोग पर केंद्रित है।",
      "about.cta": "अभिक के बारे में और पढ़ें",
      "journey.heading": "राजनीतिक और सामाजिक यात्रा 2016-2026",
      "social.eyebrow": "सामाजिक कार्य",
      "social.heading": "ऐसी सेवा जो वास्तविक प्रभाव बनाती है",
      "social.desc": "आपात सहायता से लेकर लंबे समय की जागरूकता तक, हर पहल लोगों, सम्मान, युवा भागीदारी और मजबूत आसनसोल पर केंद्रित है।",
      "social.featureTag": "लोग पहले मिशन",
      "social.featureTitle": "संगठित सेवा के माध्यम से नागरिकों के साथ खड़े रहना।",
      "social.featureText": "समय पर सहायता, जागरूकता और सामुदायिक विकास के लिए स्वयंसेवकों, स्थानीय टीमों और युवा कार्यकर्ताओं का समन्वय।",
      "social.cta": "कार्य देखें",
      "gallery.eyebrow": "गैलरी",
      "gallery.heading": "गैलरी चित्र",
      "gallery.desc": "जन कार्यक्रमों, युवा गतिविधियों, सामाजिक कार्य और जमीनी संपर्क के प्रभावशाली क्षण।",
      "gallery.cta": "गैलरी खोलें"
    }
  };

  const cleanJourneyTranslations = {
    bn: {
      2016: ["শুরু", "জনসেবার যাত্রা শুরু", "সামাজিক সচেতনতা, জনসহায়তা এবং শৃঙ্খলাবদ্ধ সেবার লক্ষ্য নিয়ে স্থানীয় যুবসমাজ, নাগরিক এবং কমিউনিটি দলের সঙ্গে কাজ শুরু।"],
      2018: ["তৃণমূল সংযোগ", "স্থানীয় যুব নেটওয়ার্ক শক্তিশালীকরণ", "সভা, সচেতনতা কার্যক্রম, স্বেচ্ছাসেবী সমন্বয় এবং স্থানীয় বিষয়ভিত্তিক কাজের মাধ্যমে যুব অংশগ্রহণ বৃদ্ধি।"],
      2020: ["সেবা প্রথম", "কমিউনিটি সহায়তায় বিশেষ গুরুত্ব", "কঠিন সময়ে জনসহায়তা, দরিদ্র পরিবারের পাশে থাকা, স্বাস্থ্য সচেতনতা এবং দায়িত্বশীল নাগরিক অংশগ্রহণে কাজ।"],
      2022: ["সংগঠন", "বুথ স্তরে শক্তিশালী উপস্থিতি", "শৃঙ্খলাবদ্ধ সংগঠন গঠন, দল উন্নয়ন, জনসংযোগ এবং তৃণমূল কাঠামো শক্তিশালী করার উপর জোর।"],
      2024: ["নেতৃত্ব", "যুব মোর্চা সভাপতি, আসানসোল", "উন্নয়ন, সচেতনতা, জনসেবা এবং দেশ-আগে সংগঠনমূল্য নিয়ে যুবকেন্দ্রিক কার্যক্রমে নেতৃত্ব।"],
      2026: ["ভবিষ্যৎ লক্ষ্য", "সেবা ও যুব নেতৃত্বের বিস্তার", "আরও শক্তিশালী যুব অংশগ্রহণ, বৃহত্তর জনসেবা কর্মসূচি, সমাজ উন্নয়ন উদ্যোগ এবং আসানসোলের জন্য কেন্দ্রিক লক্ষ্য নিয়ে এগিয়ে চলা।"]
    },
    hi: {
      2016: ["शुरुआत", "जनसेवा यात्रा की शुरुआत", "सामाजिक जागरूकता, जनसहयोग और अनुशासित सेवा पर ध्यान देते हुए स्थानीय युवाओं, नागरिकों और समुदायों के साथ काम शुरू किया।"],
      2018: ["जमीनी संपर्क", "स्थानीय युवा नेटवर्क को मजबूत किया", "बैठकों, जागरूकता गतिविधियों, स्वयंसेवक समन्वय और स्थानीय मुद्दों पर काम के माध्यम से युवा भागीदारी बढ़ाई।"],
      2020: ["सेवा प्रथम", "सामुदायिक सहायता पर ध्यान", "कठिन समय में जनसहायता, जरूरतमंद परिवारों का सहयोग, स्वास्थ्य जागरूकता और जिम्मेदार नागरिक भागीदारी पर काम किया।"],
      2022: ["संगठन", "बूथ स्तर की उपस्थिति मजबूत की", "अनुशासित संगठन निर्माण, टीम विकास, जनसंपर्क और जमीनी ढांचे को मजबूत करने पर ध्यान दिया।"],
      2024: ["नेतृत्व", "युवा मोर्चा अध्यक्ष, आसनसोल", "विकास, जागरूकता, जनसेवा और राष्ट्र-प्रथम संगठन मूल्यों के साथ युवा-केंद्रित गतिविधियों का नेतृत्व जारी रखा।"],
      2026: ["भविष्य मिशन", "सेवा और युवा नेतृत्व का विस्तार", "मजबूत युवा भागीदारी, व्यापक जनसेवा कार्यक्रमों, सामुदायिक विकास और आसनसोल के लिए केंद्रित मिशन के साथ आगे बढ़ना।"]
    }
  };

  const originalTextNodes = new WeakMap();
  const translatableAttributes = ["placeholder", "aria-label", "alt", "data-caption"];
  const staticTextTranslations = {
    bn: {
      "Home": "হোম",
      "About": "সম্পর্কে",
      "Social Work": "সামাজিক কাজ",
      "Gallery": "গ্যালারি",
      "Press": "প্রেস",
      "Contact": "যোগাযোগ",
      "Vision & Mission": "ভিশন ও মিশন",
      "Quick Links": "দ্রুত লিংক",
      "Abhik Kumar Mondal": "অভিক কুমার মন্ডল",
      "Yuva Morcha President, Asansol": "যুব মোর্চা সভাপতি, আসানসোল",
      "Asansol, West Bengal, India": "আসানসোল, পশ্চিমবঙ্গ, ভারত",
      "Asansol, West Bengal": "আসানসোল, পশ্চিমবঙ্গ",
      "Join With Us": "আমাদের সঙ্গে যোগ দিন",
      "View Gallery": "গ্যালারি দেখুন",
      "Open Gallery": "গ্যালারি খুলুন",
      "View Social Work": "সামাজিক কাজ দেখুন",
      "View Activities": "কার্যক্রম দেখুন",
      "Read More": "আরও পড়ুন",
      "Read More About Abhik": "অভিক সম্পর্কে আরও জানুন",
      "Connect With Team": "টিমের সঙ্গে যোগাযোগ করুন",
      "Contact Team": "টিমের সঙ্গে যোগাযোগ",
      "About Leadership": "নেতৃত্ব সম্পর্কে",
      "Profile": "প্রোফাইল",
      "Core Focus": "মূল লক্ষ্য",
      "Leadership Priorities": "নেতৃত্বের অগ্রাধিকার",
      "Journey": "যাত্রা",
      "Political & Social Journey 2016-2026": "রাজনৈতিক ও সামাজিক যাত্রা ২০১৬-২০২৬",
      "Social Updates": "সামাজিক আপডেট",
      "Latest Social Updates": "সর্বশেষ সামাজিক আপডেট",
      "Gallery Images": "গ্যালারি ছবি",
      "Service That Creates Real Impact": "বাস্তব প্রভাব তৈরি করা সেবা",
      "People First Mission": "মানুষ আগে মিশন",
      "Explore Work": "কাজ দেখুন",
      "Blood Donation Camps": "রক্তদান শিবির",
      "Cleanliness Drives": "পরিচ্ছন্নতা অভিযান",
      "Awareness Campaigns": "সচেতনতা অভিযান",
      "Support For Needy": "প্রয়োজনে সহায়তা",
      "Youth Engagement": "যুব সম্পৃক্ততা",
      "Community Development": "কমিউনিটি উন্নয়ন",
      "Youth Connect": "যুব সংযোগ",
      "Public Service": "জনসেবা",
      "Social Awareness": "সামাজিক সচেতনতা",
      "Nation First": "দেশ আগে",
      "Youth Leadership": "যুব নেতৃত্ব",
      "Press Coverage & Public Updates": "প্রেস কভারেজ ও জন আপডেট",
      "Latest Press Highlights": "সর্বশেষ প্রেস হাইলাইট",
      "Press Resources": "প্রেস রিসোর্স",
      "BJP Yuva Morcha Work On The Ground": "মাঠপর্যায়ে বিজেপি যুব মোর্চার কাজ",
      "Service Areas": "সেবার ক্ষেত্র",
      "How We Work": "আমরা কীভাবে কাজ করি",
      "Youth Power, Nation First": "যুব শক্তি, দেশ আগে",
      "Mission for Asansol": "আসানসোলের জন্য মিশন",
      "Contact Details": "যোগাযোগের তথ্য",
      "Send Message": "বার্তা পাঠান",
      "Submit Message": "বার্তা জমা দিন"
    },
    hi: {
      "Home": "होम",
      "About": "परिचय",
      "Social Work": "सामाजिक कार्य",
      "Gallery": "गैलरी",
      "Press": "प्रेस",
      "Contact": "संपर्क",
      "Vision & Mission": "विजन और मिशन",
      "Quick Links": "त्वरित लिंक",
      "Abhik Kumar Mondal": "अभिक कुमार मंडल",
      "Yuva Morcha President, Asansol": "युवा मोर्चा अध्यक्ष, आसनसोल",
      "Asansol, West Bengal, India": "आसनसोल, पश्चिम बंगाल, भारत",
      "Asansol, West Bengal": "आसनसोल, पश्चिम बंगाल",
      "Join With Us": "हमसे जुड़ें",
      "View Gallery": "गैलरी देखें",
      "Open Gallery": "गैलरी खोलें",
      "View Social Work": "सामाजिक कार्य देखें",
      "View Activities": "गतिविधियां देखें",
      "Read More": "और पढ़ें",
      "Read More About Abhik": "अभिक के बारे में और पढ़ें",
      "Connect With Team": "टीम से जुड़ें",
      "Contact Team": "टीम से संपर्क करें",
      "About Leadership": "नेतृत्व परिचय",
      "Profile": "प्रोफाइल",
      "Core Focus": "मुख्य फोकस",
      "Leadership Priorities": "नेतृत्व प्राथमिकताएं",
      "Journey": "यात्रा",
      "Political & Social Journey 2016-2026": "राजनीतिक और सामाजिक यात्रा 2016-2026",
      "Social Updates": "सोशल अपडेट",
      "Latest Social Updates": "नवीनतम सोशल अपडेट",
      "Gallery Images": "गैलरी चित्र",
      "Service That Creates Real Impact": "ऐसी सेवा जो वास्तविक प्रभाव बनाती है",
      "People First Mission": "लोग पहले मिशन",
      "Explore Work": "कार्य देखें",
      "Blood Donation Camps": "रक्तदान शिविर",
      "Cleanliness Drives": "स्वच्छता अभियान",
      "Awareness Campaigns": "जागरूकता अभियान",
      "Support For Needy": "जरूरतमंदों की सहायता",
      "Youth Engagement": "युवा सहभागिता",
      "Community Development": "सामुदायिक विकास",
      "Youth Connect": "युवा संपर्क",
      "Public Service": "जनसेवा",
      "Social Awareness": "सामाजिक जागरूकता",
      "Nation First": "राष्ट्र पहले",
      "Youth Leadership": "युवा नेतृत्व",
      "Press Coverage & Public Updates": "प्रेस कवरेज और सार्वजनिक अपडेट",
      "Latest Press Highlights": "नवीनतम प्रेस हाइलाइट्स",
      "Press Resources": "प्रेस संसाधन",
      "BJP Yuva Morcha Work On The Ground": "मैदान में भाजपा युवा मोर्चा का काम",
      "Service Areas": "सेवा क्षेत्र",
      "How We Work": "हम कैसे काम करते हैं",
      "Youth Power, Nation First": "युवा शक्ति, राष्ट्र प्रथम",
      "Mission for Asansol": "आसनसोल के लिए मिशन",
      "Contact Details": "संपर्क विवरण",
      "Send Message": "संदेश भेजें",
      "Submit Message": "संदेश जमा करें"
    }
  };

  const extraStaticTextTranslations = {
    bn: {
      "Select Language": "ভাষা নির্বাচন করুন",
      "Toggle navigation": "মেনু খুলুন",
      "Mobile quick navigation": "মোবাইল দ্রুত নেভিগেশন",
      "Connect With The Team": "টিমের সঙ্গে যোগাযোগ করুন",
      "Send a message, share a public issue, volunteer for activities, or invite the team for a community initiative.": "বার্তা পাঠান, জনসমস্যা জানান, কার্যক্রমে স্বেচ্ছাসেবক হন বা কমিউনিটি উদ্যোগে টিমকে আমন্ত্রণ জানান।",
      "Email": "ইমেইল",
      "Address": "ঠিকানা",
      "Social Media": "সোশ্যাল মিডিয়া",
      "Your Name": "আপনার নাম",
      "Email Address": "ইমেইল ঠিকানা",
      "Purpose": "উদ্দেশ্য",
      "Invite for Event": "ইভেন্টে আমন্ত্রণ",
      "Public Issue": "জনসমস্যা",
      "General Message": "সাধারণ বার্তা",
      "Write your message": "আপনার বার্তা লিখুন",
      "Google Map Placeholder": "গুগল ম্যাপ প্লেসহোল্ডার",
      "Embed the official Google Map iframe here.": "এখানে অফিসিয়াল Google Map iframe বসান।",
      "Events": "ইভেন্ট",
      "Upcoming & Recent Events": "আসন্ন ও সাম্প্রতিক ইভেন্ট",
      "Event cards with dates, locations, and public activity details for Asansol.": "আসানসোলের তারিখ, স্থান এবং জন কার্যক্রমের বিবরণসহ ইভেন্ট কার্ড।",
      "Youth Leadership Meeting": "যুব নেতৃত্ব সভা",
      "Cleanliness Drive": "পরিচ্ছন্নতা অভিযান",
      "Public Awareness Camp": "জনসচেতনতা শিবির",
      "Blood Donation Initiative": "রক্তদান উদ্যোগ",
      "Vision & Mission": "ভিশন ও মিশন",
      "A clear agenda for youth empowerment, social service, awareness, clean development, and strong organization building.": "যুব ক্ষমতায়ন, সামাজিক সেবা, সচেতনতা, পরিচ্ছন্ন উন্নয়ন এবং শক্তিশালী সংগঠন গঠনের স্পষ্ট লক্ষ্য।",
      "Youth Empowerment": "যুব ক্ষমতায়ন",
      "Create platforms where young citizens can learn, lead, volunteer, and contribute to public development.": "যেখানে তরুণ নাগরিকরা শিখতে, নেতৃত্ব দিতে, স্বেচ্ছাসেবা করতে এবং জন উন্নয়নে অবদান রাখতে পারে এমন প্ল্যাটফর্ম তৈরি করা।",
      "Social Service": "সামাজিক সেবা",
      "Organize practical service initiatives that directly support people in difficult situations.": "কঠিন পরিস্থিতিতে মানুষের সরাসরি সহায়তায় বাস্তব সেবা উদ্যোগ সংগঠিত করা।",
      "Clean Developed Society": "পরিচ্ছন্ন উন্নত সমাজ",
      "Encourage cleanliness, discipline, civic awareness, and development-focused public participation.": "পরিচ্ছন্নতা, শৃঙ্খলা, নাগরিক সচেতনতা এবং উন্নয়নমুখী জন অংশগ্রহণকে উৎসাহিত করা।",
      "Education & Awareness": "শিক্ষা ও সচেতনতা",
      "Promote awareness on health, education, rights, duties, and community responsibility.": "স্বাস্থ্য, শিক্ষা, অধিকার, কর্তব্য এবং কমিউনিটি দায়িত্ব সম্পর্কে সচেতনতা বাড়ানো।",
      "Nation-First Ideology": "দেশ-প্রথম আদর্শ",
      "Strengthen national pride, cultural values, constitutional responsibility, and service to Bharat.": "জাতীয় গর্ব, সাংস্কৃতিক মূল্যবোধ, সাংবিধানিক দায়িত্ব এবং ভারতসেবাকে শক্তিশালী করা।",
      "Organization Building": "সংগঠন গঠন",
      "Develop disciplined booth-level and ward-level teams that remain connected with people.": "মানুষের সঙ্গে যুক্ত থাকা শৃঙ্খলাবদ্ধ বুথ ও ওয়ার্ড স্তরের দল গড়ে তোলা।",
      "Listen": "শোনা",
      "Understand public needs through direct contact.": "সরাসরি যোগাযোগের মাধ্যমে মানুষের প্রয়োজন বোঝা।",
      "Organize": "সংগঠিত করা",
      "Mobilize youth teams and local volunteers.": "যুব দল ও স্থানীয় স্বেচ্ছাসেবকদের সক্রিয় করা।",
      "Serve": "সেবা করা",
      "Deliver practical help and social awareness.": "বাস্তব সহায়তা ও সামাজিক সচেতনতা পৌঁছে দেওয়া।",
      "Community Outreach": "কমিউনিটি সংযোগ",
      "Organization Connect": "সংগঠন সংযোগ",
      "Grassroots Campaign": "তৃণমূল প্রচার",
      "Leadership Identity": "নেতৃত্ব পরিচয়",
      "Public Activity": "জন কার্যক্রম",
      "Community Program": "কমিউনিটি প্রোগ্রাম",
      "Leadership Program": "নেতৃত্ব প্রোগ্রাম",
      "Organization Work": "সংগঠনের কাজ",
      "Copyright © 2026 Abhik Kumar Mondal. All Rights Reserved.": "কপিরাইট © ২০২৬ অভিক কুমার মন্ডল। সর্বস্বত্ব সংরক্ষিত।"
    },
    hi: {
      "Select Language": "भाषा चुनें",
      "Toggle navigation": "मेनू खोलें",
      "Mobile quick navigation": "मोबाइल त्वरित नेविगेशन",
      "Connect With The Team": "टीम से संपर्क करें",
      "Send a message, share a public issue, volunteer for activities, or invite the team for a community initiative.": "संदेश भेजें, जन समस्या साझा करें, गतिविधियों में स्वयंसेवक बनें या सामुदायिक पहल के लिए टीम को आमंत्रित करें।",
      "Email": "ईमेल",
      "Address": "पता",
      "Social Media": "सोशल मीडिया",
      "Your Name": "आपका नाम",
      "Email Address": "ईमेल पता",
      "Purpose": "उद्देश्य",
      "Invite for Event": "इवेंट के लिए आमंत्रण",
      "Public Issue": "जन समस्या",
      "General Message": "सामान्य संदेश",
      "Write your message": "अपना संदेश लिखें",
      "Google Map Placeholder": "गूगल मैप प्लेसहोल्डर",
      "Embed the official Google Map iframe here.": "यहां आधिकारिक Google Map iframe जोड़ें।",
      "Events": "इवेंट",
      "Upcoming & Recent Events": "आगामी और हाल के इवेंट",
      "Event cards with dates, locations, and public activity details for Asansol.": "आसनसोल के लिए तारीख, स्थान और जन गतिविधि विवरण वाले इवेंट कार्ड।",
      "Youth Leadership Meeting": "युवा नेतृत्व बैठक",
      "Cleanliness Drive": "स्वच्छता अभियान",
      "Public Awareness Camp": "जन जागरूकता शिविर",
      "Blood Donation Initiative": "रक्तदान पहल",
      "Vision & Mission": "विजन और मिशन",
      "A clear agenda for youth empowerment, social service, awareness, clean development, and strong organization building.": "युवा सशक्तिकरण, सामाजिक सेवा, जागरूकता, स्वच्छ विकास और मजबूत संगठन निर्माण का स्पष्ट एजेंडा।",
      "Youth Empowerment": "युवा सशक्तिकरण",
      "Create platforms where young citizens can learn, lead, volunteer, and contribute to public development.": "ऐसे मंच बनाना जहां युवा नागरिक सीख सकें, नेतृत्व कर सकें, स्वयंसेवा कर सकें और जन विकास में योगदान दे सकें।",
      "Social Service": "सामाजिक सेवा",
      "Organize practical service initiatives that directly support people in difficult situations.": "कठिन परिस्थितियों में लोगों को सीधे सहयोग देने वाली व्यावहारिक सेवा पहल आयोजित करना।",
      "Clean Developed Society": "स्वच्छ विकसित समाज",
      "Encourage cleanliness, discipline, civic awareness, and development-focused public participation.": "स्वच्छता, अनुशासन, नागरिक जागरूकता और विकास-केंद्रित जन भागीदारी को प्रोत्साहित करना।",
      "Education & Awareness": "शिक्षा और जागरूकता",
      "Promote awareness on health, education, rights, duties, and community responsibility.": "स्वास्थ्य, शिक्षा, अधिकार, कर्तव्य और सामुदायिक जिम्मेदारी पर जागरूकता बढ़ाना।",
      "Nation-First Ideology": "राष्ट्र-प्रथम विचारधारा",
      "Strengthen national pride, cultural values, constitutional responsibility, and service to Bharat.": "राष्ट्रीय गौरव, सांस्कृतिक मूल्यों, संवैधानिक जिम्मेदारी और भारत सेवा को मजबूत करना।",
      "Organization Building": "संगठन निर्माण",
      "Develop disciplined booth-level and ward-level teams that remain connected with people.": "लोगों से जुड़े रहने वाली अनुशासित बूथ और वार्ड स्तर की टीमों का विकास करना।",
      "Listen": "सुनना",
      "Understand public needs through direct contact.": "सीधे संपर्क से जनता की जरूरतों को समझना।",
      "Organize": "संगठित करना",
      "Mobilize youth teams and local volunteers.": "युवा टीमों और स्थानीय स्वयंसेवकों को सक्रिय करना।",
      "Serve": "सेवा करना",
      "Deliver practical help and social awareness.": "व्यावहारिक सहायता और सामाजिक जागरूकता पहुंचाना।",
      "Community Outreach": "सामुदायिक संपर्क",
      "Organization Connect": "संगठन संपर्क",
      "Grassroots Campaign": "जमीनी अभियान",
      "Leadership Identity": "नेतृत्व पहचान",
      "Public Activity": "जन गतिविधि",
      "Community Program": "सामुदायिक कार्यक्रम",
      "Leadership Program": "नेतृत्व कार्यक्रम",
      "Organization Work": "संगठन कार्य",
      "Copyright © 2026 Abhik Kumar Mondal. All Rights Reserved.": "कॉपीराइट © 2026 अभिक कुमार मंडल। सर्वाधिकार सुरक्षित।"
    }
  };

  function collectOriginalTextNodes() {
    $("body").find("*").addBack().contents().filter(function () {
      return this.nodeType === 3 && this.nodeValue.trim().length > 1;
    }).each(function () {
      const parent = this.parentElement;
      if (!parent || $(parent).closest("script, style, select, textarea, .language-switcher").length) {
        return;
      }
      if (!originalTextNodes.has(this)) {
        originalTextNodes.set(this, this.nodeValue.trim());
      }
    });

    $("[placeholder], [aria-label], [alt], [data-caption]").each(function () {
      const element = $(this);
      translatableAttributes.forEach(function (attribute) {
        const value = element.attr(attribute);
        if (value && !element.data("original-" + attribute)) {
          element.data("original-" + attribute, value.trim());
        }
      });
    });

    $("select:not(#languageSelect) option").each(function () {
      const option = $(this);
      if (!option.data("original-text")) {
        option.data("original-text", option.text().trim());
      }
    });
  }

  function translateStaticText(lang) {
    const dictionary = {
      ...(staticTextTranslations[lang] || {}),
      ...(extraStaticTextTranslations[lang] || {})
    };
    $("body").find("*").addBack().contents().filter(function () {
      return this.nodeType === 3 && this.nodeValue.trim().length > 1;
    }).each(function () {
      const parent = this.parentElement;
      if (!parent || $(parent).closest("script, style, select, textarea, .language-switcher").length) {
        return;
      }
      const original = originalTextNodes.get(this) || this.nodeValue.trim();
      const leading = this.nodeValue.match(/^\s*/)[0];
      const trailing = this.nodeValue.match(/\s*$/)[0];
      this.nodeValue = leading + (lang === "en" ? original : (dictionary[original] || original)) + trailing;
    });

    $("[placeholder], [aria-label], [alt], [data-caption]").each(function () {
      const element = $(this);
      translatableAttributes.forEach(function (attribute) {
        const original = element.data("original-" + attribute);
        if (!original) {
          return;
        }
        element.attr(attribute, lang === "en" ? original : (dictionary[original] || original));
      });
    });

    $("select:not(#languageSelect) option").each(function () {
      const option = $(this);
      const original = option.data("original-text");
      if (original) {
        option.text(lang === "en" ? original : (dictionary[original] || original));
      }
    });
  }

  function applyLanguage(lang) {
    const dictionary = translations[lang] || translations.en;
    const cleanDictionary = cleanTranslations[lang] || {};
    $("[data-i18n]").each(function () {
      const key = $(this).data("i18n");
      if (cleanDictionary[key] || dictionary[key]) {
        $(this).text(cleanDictionary[key] || dictionary[key]);
      }
    });
    $("#languageSelect").val(lang);
    const label = window.matchMedia("(max-width: 575.98px)").matches
      ? (languageShortLabels[lang] || languageShortLabels.en)
      : (languageLabels[lang] || languageLabels.en);
    $(".language-current span").text(label);
    $(".language-option").each(function () {
      const isActive = $(this).data("lang") === lang;
      $(this).toggleClass("active", isActive).attr("aria-selected", isActive ? "true" : "false");
    });
    translateStaticText(lang);
    $("html").attr("lang", lang === "bn" ? "bn" : lang === "hi" ? "hi" : "en");
    localStorage.setItem("siteLang", lang);
    currentLang = lang;
    if (journeyButtons.length) {
      setJourney(journeyButtons.index(journeyButtons.filter(".active")), true);
    }
  }

  $("#languageSelect").on("change", function () {
    applyLanguage($(this).val());
  });

  $(".language-current").on("click", function (event) {
    event.stopPropagation();
    const switcher = $(this).closest(".language-switcher");
    const isOpen = switcher.toggleClass("open").hasClass("open");
    $(this).attr("aria-expanded", isOpen ? "true" : "false");
  });

  $(".language-option").on("click", function (event) {
    event.stopPropagation();
    const lang = $(this).data("lang");
    applyLanguage(lang);
    $(".language-switcher").removeClass("open");
    $(".language-current").attr("aria-expanded", "false");
  });

  $(document).on("click", function () {
    $(".language-switcher").removeClass("open");
    $(".language-current").attr("aria-expanded", "false");
  });

  if ($(".language-switcher").length) {
    collectOriginalTextNodes();
    applyLanguage(localStorage.getItem("siteLang") || "en");
    $(window).on("resize", function () {
      const label = window.matchMedia("(max-width: 575.98px)").matches
        ? (languageShortLabels[currentLang] || languageShortLabels.en)
        : (languageLabels[currentLang] || languageLabels.en);
      $(".language-current span").text(label);
    });
  }

  const mobileNavbar = $("#mainNavbar");
  if (mobileNavbar.length) {
    if (!mobileNavbar.find(".navbar-drawer-social").length) {
      mobileNavbar.append(
        '<div class="navbar-drawer-social" aria-label="Social links">' +
          '<span>Follow Us</span>' +
          '<div>' +
            '<a href="https://www.facebook.com/prince.abhik.58" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>' +
            '<a href="javascript:void(0)" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>' +
            '<a href="javascript:void(0)" aria-label="X"><i class="fa-brands fa-x-twitter"></i></a>' +
          '</div>' +
        '</div>'
      );
    }

    mobileNavbar.on("show.bs.collapse", function () {
      $(this).removeClass("drawer-closing");
      $("body").addClass("nav-drawer-open");
    });

    mobileNavbar.on("hide.bs.collapse", function () {
      $(this).addClass("drawer-closing");
    });

    mobileNavbar.on("hidden.bs.collapse", function () {
      $(this).removeClass("drawer-closing");
      $("body").removeClass("nav-drawer-open");
    });

    mobileNavbar.find(".nav-link").on("click", function () {
      const collapseInstance = bootstrap.Collapse.getOrCreateInstance(mobileNavbar[0], { toggle: false });
      collapseInstance.hide();
    });

    $(document).on("click", function (event) {
      if (!mobileNavbar.hasClass("show")) {
        return;
      }
      const target = $(event.target);
      if (target.closest("#mainNavbar, .navbar-toggler").length) {
        return;
      }
      const collapseInstance = bootstrap.Collapse.getOrCreateInstance(mobileNavbar[0], { toggle: false });
      collapseInstance.hide();
    });
  }

  function revealOnScroll() {
    const windowBottom = $(window).scrollTop() + $(window).height() * 0.88;
    $(".reveal").each(function () {
      if ($(this).offset().top < windowBottom) {
        $(this).addClass("visible");
      }
    });
  }

  revealOnScroll();
  $(window).on("scroll resize", revealOnScroll);

  if ($.fn.slick && $(".banner-slider").length) {
    $(".banner-slider").slick({
      autoplay: true,
      autoplaySpeed: 3200,
      arrows: true,
      dots: true,
      fade: true,
      speed: 800,
      pauseOnHover: false,
      pauseOnFocus: true,
      adaptiveHeight: false
    });
  }

  if ($.fn.slick && $(".press-slider").length) {
    $(".press-slider").slick({
      autoplay: true,
      autoplaySpeed: 3600,
      arrows: true,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      speed: 650,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    });
  }

  $(".about-image-slider").each(function () {
    const slides = $(this).find(".about-main-img");
    let currentSlide = 0;

    if (slides.length < 2) {
      return;
    }

    setInterval(function () {
      slides.eq(currentSlide).removeClass("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides.eq(currentSlide).addClass("active");
    }, 3000);
  });

  function setJourney(index, skipActiveUpdate) {
    if (!journeyButtons.length) {
      return;
    }

    const safeIndex = (index + journeyButtons.length) % journeyButtons.length;
    const button = journeyButtons.eq(safeIndex);
    const image = $("#journeyImage");

    if (!skipActiveUpdate) {
      journeyButtons.removeClass("active").attr("aria-selected", "false");
      button.addClass("active").attr("aria-selected", "true");
    }

    image.css("opacity", 0);
    setTimeout(function () {
      const year = button.data("year");
      const journeyDictionary = cleanJourneyTranslations[currentLang] || journeyTranslations[currentLang] || journeyTranslations.en;
      const translatedJourney = journeyDictionary[year];
      image.attr("src", button.data("image"));
      image.attr("alt", translatedJourney ? translatedJourney[1] : button.data("title"));
      $("#journeyYear").text(year);
      $("#journeyTag").text(translatedJourney ? translatedJourney[0] : button.data("tag"));
      $("#journeyTitle").text(translatedJourney ? translatedJourney[1] : button.data("title"));
      $("#journeyText").text(translatedJourney ? translatedJourney[2] : button.data("text"));
      image.css("opacity", 1);
    }, 160);
  }

  journeyButtons.on("click", function () {
    setJourney(journeyButtons.index(this));
  });

  $(".journey-prev").on("click", function () {
    setJourney(journeyButtons.index(journeyButtons.filter(".active")) - 1);
  });

  $(".journey-next").on("click", function () {
    setJourney(journeyButtons.index(journeyButtons.filter(".active")) + 1);
  });

  if (window.Fancybox) {
    Fancybox.bind("[data-fancybox]", {
      Thumbs: false,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"]
        }
      }
    });
  }

  $("#contactForm").on("submit", function (event) {
    event.preventDefault();
    const alertBox = $("#formAlert");
    alertBox
      .removeClass("d-none alert-danger")
      .addClass("alert-success")
      .text("Thank you. Your message has been prepared for the team.");
    this.reset();
  });

  const sosPanel = $(".sos-panel");
  const sosMessage = $("#sosMessage");
  const sosStatus = $("#sosStatus");
  const sosTeamEmail = $("#sosTeamEmail");
  const sosTeamCall = $("#sosTeamCall");
  const sosTeamSms = $("#sosTeamSms");
  const sosTeamWhatsApp = $("#sosTeamWhatsApp");
  const teamEmail = sosPanel.data("team-email") || "abhikmondalbjp@gmail.com";
  const teamPhone = String(sosPanel.data("team-phone") || "").replace(/[^\d+]/g, "");
  const whatsappPhone = teamPhone.replace(/^\+/, "");
  let sosLocationWatchId = null;

  function setSosTeamLinks(message) {
    const encodedSubject = encodeURIComponent("Emergency Help Request");
    const encodedMessage = encodeURIComponent(message);
    sosTeamEmail.attr("href", `mailto:${teamEmail}?subject=${encodedSubject}&body=${encodedMessage}`);

    if (teamPhone) {
      sosTeamCall.attr("href", `tel:${teamPhone}`).attr("aria-disabled", "false");
      sosTeamSms.attr("href", `sms:${teamPhone}?body=${encodedMessage}`).attr("aria-disabled", "false");
      sosTeamWhatsApp
        .attr("href", `https://wa.me/${whatsappPhone}?text=${encodedMessage}`)
        .attr("target", "_blank")
        .attr("rel", "noopener")
        .attr("aria-disabled", "false");
    }
  }

  function buildSosMessage(position) {
    if (!position) {
      return [
        "SOS: Emergency help needed.",
        "A woman/girl may be in danger and needs immediate support.",
        "Live Location: Waiting for location permission.",
        `Updated: ${new Date().toLocaleString()}`,
        "Please contact back and coordinate help urgently.",
        "If this is life-threatening, emergency services should be contacted first."
      ].join("\n");
    }

    const locationLine = `Live Location: https://www.google.com/maps?q=${position.coords.latitude.toFixed(6)},${position.coords.longitude.toFixed(6)}`;
    const accuracyLine = position && position.coords.accuracy
      ? `Accuracy: about ${Math.round(position.coords.accuracy)} meters`
      : "";
    const updatedLine = `Updated: ${new Date().toLocaleString()}`;
    return [
      "SOS: Emergency help needed.",
      "A woman/girl may be in danger and needs immediate support.",
      locationLine,
      accuracyLine,
      updatedLine,
      "Please contact back and coordinate help urgently.",
      "If this is life-threatening, emergency services should be contacted first."
    ].filter(Boolean).join("\n");
  }

  function updateSosShareMessage(position, statusText) {
    const message = buildSosMessage(position);
    sosMessage.val(message);
    setSosTeamLinks(message);
    sosStatus.text(statusText);
  }

  if (sosPanel.length) {
    if (teamPhone) {
      sosTeamCall.attr("href", `tel:${teamPhone}`).attr("aria-disabled", "false");
    }
  }

  $("#sosPanicButton").on("click", function () {
    if (!sosPanel.length) {
      return;
    }

    sosMessage.val("");
    sosStatus.text("Getting live location. Please allow browser location permission.");

    if (!navigator.geolocation) {
      updateSosShareMessage(null, "Location not supported. SOS message is ready without live location.");
      return;
    }

    if (window.isSecureContext === false) {
      sosStatus.text("Location needs HTTPS. Open the live HTTPS website, then tap SOS again.");
      return;
    }

    sosStatus.text("Allow browser location. Then WhatsApp, SMS, and email will include map location.");
    navigator.geolocation.getCurrentPosition(
      function (position) {
        updateSosShareMessage(position, "Location added. Tap WhatsApp, SMS, or Message Team to send.");

        if (navigator.geolocation.watchPosition && sosLocationWatchId === null) {
          sosLocationWatchId = navigator.geolocation.watchPosition(
            function (livePosition) {
              updateSosShareMessage(livePosition, "Latest location updated in WhatsApp, SMS, and email links.");
            },
            function (error) {
              const lastLocationMessage = "Last SOS location is still ready.";
              if (error.code === error.PERMISSION_DENIED) {
                sosStatus.text("Location permission was blocked. Enable site location permission and tap SOS again.");
                return;
              }
              if (error.code === error.POSITION_UNAVAILABLE) {
                sosStatus.text("Location unavailable now. " + lastLocationMessage);
                return;
              }
              if (error.code === error.TIMEOUT) {
                sosStatus.text("Location update timed out. " + lastLocationMessage);
                return;
              }
              sosStatus.text("Live location stopped. " + lastLocationMessage);
            },
            {
              enableHighAccuracy: true,
              timeout: 12000,
              maximumAge: 0
            }
          );
        }
      },
      function (error) {
        if (error.code === error.PERMISSION_DENIED) {
          sosStatus.text("Location permission blocked. Allow this site in browser settings, then tap SOS again.");
          return;
        }
        if (error.code === error.POSITION_UNAVAILABLE) {
          sosStatus.text("Location unavailable. Move to open network/GPS area and tap SOS again.");
          return;
        }
        if (error.code === error.TIMEOUT) {
          sosStatus.text("Location timed out. Tap SOS again or send message without location.");
          return;
        }
        sosStatus.text("Location not added. SOS message is ready without location.");
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      }
    );
  });

  $(".sos-action").on("click", function (event) {
    if ($(this).attr("aria-disabled") === "true") {
      event.preventDefault();
      sosStatus.text("Tap SOS and allow location first. Then WhatsApp, SMS, and email will include live location.");
    }
  });

  $("#sosCopyMessage").on("click", async function () {
    const text = sosMessage.val().trim() || buildSosMessage(null);
    sosMessage.val(text);
    setSosTeamLinks(text);

    try {
      await navigator.clipboard.writeText(text);
      sosStatus.text("SOS message copied.");
    } catch (error) {
      sosMessage.trigger("select");
      sosStatus.text("Select and copy the SOS message.");
    }
  });
})(jQuery);
