(function ($) {
  "use strict";

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const brandSwitch = $(".brand-switch");

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
      "nav.news": "News",
      "nav.contact": "Contact",
      "hero.kicker": "Leadership for Asansol",
      "hero.name": "Abhik Kumar Mondal",
      "hero.role": "Yuva Morcha President, Asansol",
      "hero.tagline": "Youth Power, Nation First",
      "hero.desc": "A youth-focused leadership platform for public service, social awareness, and strong grassroots organization.",
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
      "nav.news": "খবর",
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
      "nav.news": "समाचार",
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

  function applyLanguage(lang) {
    const dictionary = translations[lang] || translations.en;
    $("[data-i18n]").each(function () {
      const key = $(this).data("i18n");
      if (dictionary[key]) {
        $(this).text(dictionary[key]);
      }
    });
    $("#languageSelect").val(lang);
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

  if ($(".language-switcher").length) {
    applyLanguage(localStorage.getItem("siteLang") || "en");
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
      slidesToShow: 3,
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
            slidesToShow: 2
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
      const translatedJourney = (journeyTranslations[currentLang] || journeyTranslations.en)[year];
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
})(jQuery);
