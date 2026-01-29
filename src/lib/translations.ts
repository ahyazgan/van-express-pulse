export type Language = "tr" | "en";

export const translations = {
  tr: {
    // Navigation
    nav: {
      explore: "Keşfet",
      shipments: "Gönderilerim",
      liveTracking: "Canlı Takip",
      profile: "Profil",
    },

    // TopBar
    topBar: {
      brandName: "RouteEU",
      tagline: "Türkiye - Avrupa Ekspres Taşımacılık",
    },

    // Hero Section
    hero: {
      heading: "RouteEU: Avrupa'nın Ekspres Minivan Hattı",
      subheading: "Türkiye'den tüm Avrupa'ya en hızlı, güvenli ve şeffaf ekspres taşımacılık çözümleri. Sınırları sizin için hızla aşıyoruz.",
      cta: "Hemen Fiyat Al",
      trustMarkers: {
        liveTracking: "7/24 Canlı Takip",
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
        new: "Alındı",
        negotiating: "Gümrükte",
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
  },

  en: {
    // Navigation
    nav: {
      explore: "Explore",
      shipments: "Shipments",
      liveTracking: "Live Tracking",
      profile: "Profile",
    },

    // TopBar
    topBar: {
      brandName: "RouteEU",
      tagline: "Turkey - Europe Express Shipping",
    },

    // Hero Section
    hero: {
      heading: "RouteEU: Europe's Express Minivan Line",
      subheading: "The fastest, safest, and most transparent express shipping solutions from Turkey to all of Europe. We cross borders swiftly for you.",
      cta: "Get a Quote Now",
      trustMarkers: {
        liveTracking: "24/7 Live Tracking",
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
        negotiating: "At Customs",
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
  },
} as const;

export type TranslationKey = keyof typeof translations.tr;
