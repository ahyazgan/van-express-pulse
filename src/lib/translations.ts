export type Language = "tr" | "en";

export const translations = {
  tr: {
    // Navigation
    nav: {
      explore: "Keşfet",
      shipments: "Gönderilerim",
      liveTracking: "Gönderi Takibi",
      profile: "Profil",
    },

    // TopBar
    topBar: {
      brandName: "RouteEU",
      tagline: "Türkiye - Avrupa Ekspres Taşımacılık",
    },

    // Hero Section
    hero: {
      heading: "RouteEU Express - Avrupa'nın En Hızlı Panelvan Ağı",
      subheading: "Türkiye'den tüm Avrupa'ya en hızlı, güvenli ve şeffaf ekspres taşımacılık çözümleri. Sınırları sizin için hızla aşıyoruz.",
      cta: "Hemen Fiyat Al",
      trustMarkers: {
        liveTracking: "Aşamalı Sevkiyat Takibi",
        expressBorder: "Ekspres Sınır Geçişi",
        proService: "Profesyonel Servis",
      },
    },

    // Bottom Sheet / Home
    home: {
      whereToShip: "Nereye gönderilecek?",
      searchPlaceholder: "Şehir ara...",
      quickRoutes: "Hızlı Rotalar",
      seeAll: "Tümünü Gör",
      popularRoutes: "Popüler Rotalar",
      bookNow: "Rezervasyon Yap",
      getQuote: "Fiyat Al",
      fromIstanbul: "İstanbul'dan",
      capacity: "Kapasite",
      maxWeight: "Maks. Ağırlık",
      maxVolume: "Maks. Hacim",
    },

    features: {
      eyebrow: "Neden Biz?",
      title: "Fark Yaratan Özellikler",
      items: {
        noWeekendBan: { title: "Haftasonu Yasağı Yok", description: "7 gün kesintisiz teslimat" },
        doubleDriver: { title: "Çift Şoför", description: "Mola vermeden hızlı ulaşım" },
        gps: { title: "Aşamalı Sevkiyat Takibi", description: "Dört aşamada durum bilgisi" },
      },
      trustPrefix: "2018'den beri",
      trustSuffix: "güvenilir lojistik partneri",
      countries: { tr: "Türkiye", de: "Almanya", nl: "Hollanda", be: "Belçika" },
    },

    services: {
      eyebrow: "Hizmetler",
      title: "Kapsamlı Lojistik Çözümleri",
      express: {
        title: "Panelvan Express",
        description: "24-48 saat içinde Avrupa'nın her noktasına güvenli teslimat",
        badge: "Popüler",
      },
      customs: { title: "Gümrükleme", description: "Tüm evrak işlemleri dahil" },
      doorToDoor: { title: "Kapıdan Kapıya", description: "Adresinizden alıp teslim" },
      insured: {
        title: "CMR Sorumluluğu + Ek Sigorta",
        description: "Her sevkiyat CMR taşıyıcı sorumluluğu altında taşınır; talep üzerine beyan değeriniz üzerinden ek yük sigortası yaptırıyoruz.",
      },
    },

    meta: {
      home: {
        title: "Uluslararası Nakliyat ve Avrupa Kargo Fiyatları 2026",
        description: "Türkiye ve Avrupa arası ekspres panelvan taşımacılığı. Hızlı fiyat alın, sevkiyatınızın hangi aşamada olduğunu takip edin.",
      },
      auth: {
        title: "RouteEU - Kullanıcı Girişi",
        description: "RouteEU Express hesabınıza giriş yapın veya yeni hesap oluşturun.",
      },
      tracking: {
        title: "RouteEU - Panelvan Gönderi Takibi",
        description: "Takip numaranızla sevkiyatınızın hangi aşamada olduğunu görün: talep alındı, anlaşma, yolda, teslim edildi. Aracın o anki yerini WhatsApp'tan sorabilirsiniz.",
      },
      orders: {
        title: "RouteEU - Gönderilerim",
        description: "Türkiye'den Avrupa'ya panelvan gönderilerinizi tek yerden takip edin.",
      },
      success: {
        title: "Talebiniz Alındı - RouteEU Express",
        description: "Kargo talebiniz başarıyla alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.",
      },
    },

    consent: {
      message: "Deneyiminizi iyileştirmek ve trafiği ölçmek için çerezler kullanıyoruz.",
      accept: "Kabul Et",
      reject: "Reddet",
    },

    mode: {
      domestic: "Yurt İçi",
      europe: "Avrupa",
      domesticBadge: "Aynı gün / ertesi gün teslimat",
      europeBadge: "24-48 Saatte Teslimat",
      domesticNote: "Tahmini aralık; kesin fiyat yük ve araca göre değişir.",
      domesticFrom: "Nereden? (şehir)",
      domesticTo: "Nereye? (şehir)",
    },

    // Order Form
    orderForm: {
      shipmentDetails: "Yük Bilgileri",
      contactInfo: "İletişim Bilgileri",
      productCategory: "Ürün Kategorisi",
      selectCategory: "Kategori seçin",
      packagingType: "Paketleme Tipi",
      selectPackaging: "Paketleme seçin",
      quantity: "Adet",
      weight: "Ağırlık (kg)",
      volume: "Hacim (m³)",
      stackable: "İstifleme",
      canStack: "Üzerine yük konulabilir",
      notes: "Notlar",
      additionalNotes: "Ek notlar (opsiyonel)",
      fullName: "Ad Soyad / Firma",
      namePlaceholder: "İsminizi girin",
      phone: "Telefon",
      phonePlaceholder: "+90 5XX XXX XX XX",
      email: "E-posta",
      emailPlaceholder: "ornek@email.com",
      back: "Geri",
      continue: "Devam",
      sendRequest: "Talep Gönder",
      sending: "Gönderiliyor...",
      submitError: "Talebiniz gönderilemedi. Lütfen tekrar deneyin.",
      quoteSummary: "Fiyat Özeti",
      estimatedPrice: "Tahmini Fiyat",
      step: "Adım",
      of: "/",
      categories: {
        textile: "Tekstil",
        food: "Gıda",
        electronics: "Elektronik",
        furniture: "Mobilya",
        cosmetics: "Kozmetik",
        machinery: "Makine/Yedek Parça",
        other: "Diğer",
      },
      packaging: {
        pallet: "Palet",
        box: "Koli",
        bag: "Çuval",
        crate: "Sandık",
        roll: "Rulo",
        other: "Diğer",
      },
    },

    // Success Screen
    success: {
      title: "Talebiniz Alındı!",
      message: "RouteEU 15 dk içinde size dönecektir.",
      trackOrder: "Siparişi Takip Et",
      newRequest: "Yeni Talep",
      orderId: "Sipariş No",
    },

    // Orders Page
    orders: {
      title: "Gönderilerim",
      subtitle: "Tüm kargo taleplerinizi buradan takip edin",
      noOrders: "Henüz gönderiniz yok",
      noOrdersDesc: "Ana sayfadan yeni bir kargo talebi oluşturarak başlayabilirsiniz.",
      orderId: "Sipariş ID",
      status: {
        new: "Yeni",
        negotiating: "Görüşmede",
        in_transit: "Yolda",
        delivered: "Teslim Edildi",
      },
    },

    // Tracking Page
    tracking: {
      title: "Gönderi Takibi",
      searchTitle: "Gönderinizi Takip Edin",
      searchPlaceholder: "Sipariş numaranızı girin...",
      search: "Ara",
      searching: "Aranıyor...",
      enterOrderId: "Lütfen sipariş numarası girin",
      orderNotFound: "Sipariş bulunamadı. Lütfen numarayı kontrol edin.",
      errorOccurred: "Bir hata oluştu. Lütfen tekrar deneyin.",
      shipmentStatus: "Gönderi Durumu",
      orderInfo: "Sipariş Bilgileri",
      orderNo: "Sipariş No",
      customer: "Müşteri",
      estimatedPrice: "Tahmini Fiyat",
      origin: "İstanbul",
      destination: "Varış Noktası",
      stages: {
        new: "Talep Alındı",
        negotiating: "Anlaşma",
        in_transit: "Yolda",
        delivered: "Teslim Edildi",
      },
    },

    // Profile Page
    profile: {
      corporateMember: "Kurumsal Üye",
      shipments: "Gönderi",
      countries: "Ülke",
      onTime: "Zamanında",
      savedAddresses: "Kayıtlı Adresler",
      notificationSettings: "Bildirim Ayarları",
      priceNotifications: "Fiyat Bildirimleri",
      priceNotificationsDesc: "Özel kampanya ve indirimler",
      trackingNotifications: "Kargo Takip",
      trackingNotificationsDesc: "Gönderi durum güncellemeleri",
      logout: "Çıkış Yap",
      logoutSuccess: "Çıkış Yapıldı",
      logoutMessage: "Güvenli bir şekilde çıkış yaptınız.",
      origin: "Çıkış Noktası",
      destination: "Varış Noktası",
    },

    // Common
    common: {
      close: "Kapat",
      cancel: "İptal",
      confirm: "Onayla",
      loading: "Yükleniyor...",
      error: "Hata",
      success: "Başarılı",
    },

    // Auth
    auth: {
      login: "Giriş Yap",
      signup: "Üye Ol",
      email: "E-posta",
      password: "Şifre",
      fullName: "Ad Soyad",
      companyName: "Firma Adı",
      phone: "Telefon",
      loginError: "Giriş Hatası",
      signupError: "Kayıt Hatası",
      invalidCredentials: "E-posta veya şifre hatalı",
      emailExists: "Bu e-posta zaten kayıtlı",
      welcome: "Hoş Geldiniz!",
      loginSuccess: "Başarıyla giriş yaptınız.",
      signupSuccess: "Hesabınız oluşturuldu.",
      noAccount: "Hesabınız yok mu?",
      hasAccount: "Zaten üye misiniz?",
      memberBenefits: "Üyelere Özel: Sevkiyat Takibi + Sipariş Geçmişi",
    },

    // Booking Choice
    bookingChoice: {
      title: "Nasıl devam etmek istersiniz?",
      memberOption: "Üye Ol / Giriş Yap",
      memberDescription: "Bilgileriniz kaydedilsin ve sevkiyatınızın aşamasını takip edin.",
      guestOption: "Misafir Olarak Devam Et",
      guestDescription: "Üye olmadan hızlıca talep oluşturun. (Sadece bu sipariş için geçerlidir)",
      recommended: "ÖNERİLEN",
      liveTracking: "Sevkiyat Takibi",
      quickForm: "Hızlı Form",
    },
  },

  en: {
    // Navigation
    nav: {
      explore: "Explore",
      shipments: "Shipments",
      liveTracking: "Track Shipment",
      profile: "Profile",
    },

    // TopBar
    topBar: {
      brandName: "RouteEU",
      tagline: "Turkey - Europe Express Shipping",
    },

    // Hero Section
    hero: {
      heading: "RouteEU Express - Europe's Fastest Panelvan Network",
      subheading: "The fastest, safest, and most transparent express shipping solutions from Turkey to all of Europe. We cross borders swiftly for you.",
      cta: "Get a Quote Now",
      trustMarkers: {
        liveTracking: "Four-Stage Shipment Status",
        expressBorder: "Express Border Crossing",
        proService: "Professional Service",
      },
    },

    // Bottom Sheet / Home
    home: {
      whereToShip: "Where to ship?",
      searchPlaceholder: "Search city...",
      quickRoutes: "Quick Routes",
      seeAll: "See All",
      popularRoutes: "Popular Routes",
      bookNow: "Book Now",
      getQuote: "Get Quote",
      fromIstanbul: "From Istanbul",
      capacity: "Capacity",
      maxWeight: "Max Weight",
      maxVolume: "Max Volume",
    },

    features: {
      eyebrow: "Why Us?",
      title: "Features That Make the Difference",
      items: {
        noWeekendBan: { title: "No Weekend Ban", description: "7-day uninterrupted delivery" },
        doubleDriver: { title: "Double Driver", description: "Fast transport without breaks" },
        gps: { title: "Four-Stage Shipment Status", description: "Status updates at every stage" },
      },
      trustPrefix: "Since 2018",
      trustSuffix: "a trusted logistics partner",
      countries: { tr: "Turkey", de: "Germany", nl: "Netherlands", be: "Belgium" },
    },

    services: {
      eyebrow: "Services",
      title: "Comprehensive Logistics Solutions",
      express: {
        title: "Panelvan Express",
        description: "Safe delivery anywhere in Europe within 24-48 hours",
        badge: "Popular",
      },
      customs: { title: "Customs Clearance", description: "All paperwork included" },
      doorToDoor: { title: "Door to Door", description: "Pickup and delivery at your address" },
      insured: {
        title: "CMR Liability + Added Cover",
        description: "Every shipment moves under CMR carrier liability; added cargo cover on your declared value is arranged on request.",
      },
    },

    meta: {
      home: {
        title: "RouteEU Express - Professional Panelvan & Fast Logistics Solutions",
        description: "Express panelvan shipping between Turkey and Europe. Get instant quotes and see which stage your shipment has reached.",
      },
      auth: {
        title: "RouteEU - Sign In",
        description: "Sign in to your RouteEU Express account or create a new one.",
      },
      tracking: {
        title: "RouteEU - Panelvan Shipment Tracking",
        description: "Your tracking number shows which stage the shipment has reached: received, quoted, in transit, delivered. Ask us for the current position over WhatsApp.",
      },
      orders: {
        title: "RouteEU - My Shipments",
        description: "Track all your panelvan shipments from Turkey to Europe in one place.",
      },
      success: {
        title: "Request Received - RouteEU Express",
        description: "Your shipping request has been received. Our team will contact you shortly.",
      },
    },

    consent: {
      message: "We use cookies to improve your experience and measure traffic.",
      accept: "Accept",
      reject: "Reject",
    },

    mode: {
      domestic: "Domestic",
      europe: "Europe",
      domesticBadge: "Same-day / next-day delivery",
      europeBadge: "Delivery in 24-48 hours",
      domesticNote: "Estimated range; final price depends on cargo and vehicle.",
      domesticFrom: "From? (city)",
      domesticTo: "To? (city)",
    },

    // Order Form
    orderForm: {
      shipmentDetails: "Shipment Details",
      contactInfo: "Contact Information",
      productCategory: "Product Category",
      selectCategory: "Select category",
      packagingType: "Packaging Type",
      selectPackaging: "Select packaging",
      quantity: "Quantity",
      weight: "Weight (kg)",
      volume: "Volume (m³)",
      stackable: "Stackable",
      canStack: "Can be stacked",
      notes: "Notes",
      additionalNotes: "Additional notes (optional)",
      fullName: "Full Name / Company",
      namePlaceholder: "Enter your name",
      phone: "Phone",
      phonePlaceholder: "+90 5XX XXX XX XX",
      email: "Email",
      emailPlaceholder: "example@email.com",
      back: "Back",
      continue: "Continue",
      sendRequest: "Send Request",
      sending: "Sending...",
      submitError: "Your request could not be sent. Please try again.",
      quoteSummary: "Quote Summary",
      estimatedPrice: "Estimated Price",
      step: "Step",
      of: "of",
      categories: {
        textile: "Textile",
        food: "Food",
        electronics: "Electronics",
        furniture: "Furniture",
        cosmetics: "Cosmetics",
        machinery: "Machinery/Parts",
        other: "Other",
      },
      packaging: {
        pallet: "Pallet",
        box: "Box",
        bag: "Bag",
        crate: "Crate",
        roll: "Roll",
        other: "Other",
      },
    },

    // Success Screen
    success: {
      title: "Request Received!",
      message: "RouteEU will contact you within 15 minutes.",
      trackOrder: "Track Order",
      newRequest: "New Request",
      orderId: "Order ID",
    },

    // Orders Page
    orders: {
      title: "My Shipments",
      subtitle: "Track all your shipping requests here",
      noOrders: "No shipments yet",
      noOrdersDesc: "Start by creating a new shipping request from the home page.",
      orderId: "Order ID",
      status: {
        new: "New",
        negotiating: "Negotiating",
        in_transit: "In Transit",
        delivered: "Delivered",
      },
    },

    // Tracking Page
    tracking: {
      title: "Shipment Tracking",
      searchTitle: "Track Your Shipment",
      searchPlaceholder: "Enter your order number...",
      search: "Search",
      searching: "Searching...",
      enterOrderId: "Please enter order number",
      orderNotFound: "Order not found. Please check the number.",
      errorOccurred: "An error occurred. Please try again.",
      shipmentStatus: "Shipment Status",
      orderInfo: "Order Information",
      orderNo: "Order No",
      customer: "Customer",
      estimatedPrice: "Estimated Price",
      origin: "Istanbul",
      destination: "Destination",
      stages: {
        new: "Received",
        negotiating: "Quoted",
        in_transit: "In Transit",
        delivered: "Delivered",
      },
    },

    // Profile Page
    profile: {
      corporateMember: "Corporate Member",
      shipments: "Shipments",
      countries: "Countries",
      onTime: "On Time",
      savedAddresses: "Saved Addresses",
      notificationSettings: "Notification Settings",
      priceNotifications: "Price Notifications",
      priceNotificationsDesc: "Special offers and discounts",
      trackingNotifications: "Shipment Tracking",
      trackingNotificationsDesc: "Delivery status updates",
      logout: "Log Out",
      logoutSuccess: "Logged Out",
      logoutMessage: "You have been safely logged out.",
      origin: "Origin",
      destination: "Destination",
    },

    // Common
    common: {
      close: "Close",
      cancel: "Cancel",
      confirm: "Confirm",
      loading: "Loading...",
      error: "Error",
      success: "Success",
    },

    // Auth
    auth: {
      login: "Log In",
      signup: "Sign Up",
      email: "Email",
      password: "Password",
      fullName: "Full Name",
      companyName: "Company Name",
      phone: "Phone",
      loginError: "Login Error",
      signupError: "Registration Error",
      invalidCredentials: "Invalid email or password",
      emailExists: "This email is already registered",
      welcome: "Welcome!",
      loginSuccess: "You have successfully logged in.",
      signupSuccess: "Your account has been created.",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      memberBenefits: "Members Only: Shipment Status + Order History",
    },

    // Booking Choice
    bookingChoice: {
      title: "How would you like to continue?",
      memberOption: "Sign Up / Log In",
      memberDescription: "Save your info and follow which stage your shipment has reached.",
      guestOption: "Continue as Guest",
      guestDescription: "Create a quick request without signing up. (Valid for this order only)",
      recommended: "RECOMMENDED",
      liveTracking: "Shipment Status",
      quickForm: "Quick Form",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.tr;
