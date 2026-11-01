/**
 * CENTRALIZED INVITATION CONTENT AND CONFIGURATION
 * Single source of truth for all event content, translations, names,
 * dates, addresses, media assets, and feature flags.
 *
 * Non-developers can safely edit this file to update event details or replace images.
 */

export interface GalleryItem {
  id: string
  src: string
  alt: {
    bn: string
    en: string
  }
  title: {
    bn: string
    en: string
  }
  subtitle: {
    bn: string
    en: string
  }
}

export interface ContentConfig {
  // Feature Configuration Flags
  config: {
    showCouplePhoto: boolean
    heroImageIsPlaceholder: boolean
    showGallery: boolean
    showMap: boolean
    showFamilyAddresses: boolean
    defaultLanguage: 'bn' | 'en'
  }

  // Core Event Timing
  event: {
    date: string // YYYY-MM-DD
    time: string // HH:mm in 24h format
    endTime: string // Configurable event end time, e.g. "17:00", or empty if unconfirmed
    timezone: string // Standard IANA timezone
    isoDateTime: string // ISO 8601 with Asia/Dhaka offset (+06:00)
    isoEndDateTime: string // ISO 8601 with Asia/Dhaka offset (+06:00)
  }

  // Contact & RSVP Configuration
  contact: {
    displayPhone: string
    internationalPhone: string
    whatsappNumber: string
    whatsappMessage: {
      bn: string
      en: string
    }
  }

  // Venue & Google Maps Coordinates
  venue: {
    latitude: number
    longitude: number
    googleMapsEmbedUrl: string
    googleMapsDirectionsUrl: string
    name: {
      bn: string
      en: string
    }
    address: {
      bn: string
      en: string
    }
  }

  // Media Paths
  media: {
    heroImage: string
    heroImageAlt: {
      bn: string
      en: string
    }
    gallery: GalleryItem[]
  }

  // Couple & Family Profiles
  groom: {
    name: {
      bn: string
      en: string
    }
    fullName: {
      bn: string
      en: string
    }
    father: {
      bn: string
      en: string
    }
    mother: {
      bn: string
      en: string
    }
    address: {
      bn: string
      en: string
    }
  }

  bride: {
    name: {
      bn: string
      en: string
    }
    fullName: {
      bn: string
      en: string
    }
    nickname: {
      bn: string
      en: string
    }
    father: {
      bn: string
      en: string
    }
    mother: {
      bn: string
      en: string
    }
    address: {
      bn: string
      en: string
    }
  }

  // Welcoming Committee & Hosts
  hosts: {
    title: {
      bn: string
      en: string
    }
    subtitle: {
      bn: string
      en: string
    }
    members: Array<{
      bn: string
      en: string
    }>
  }

  welcomingCommittee: {
    title: {
      bn: string
      en: string
    }
    members: Array<{
      bn: string
      en: string
    }>
  }

  // Multilingual Strings & Copy
  translations: {
    bn: {
      bismillah: string
      bismillahTranslation: string
      eventTitle: string
      eventSubtitle: string
      dateDisplay: string
      dayOfWeek: string
      mealTitle: string
      mealTime: string
      countdown: {
        title: string
        days: string
        hours: string
        minutes: string
        seconds: string
        startedTitle: string
        startedMessage: string
        passedMessage: string
      }
      dawat: {
        sectionTitle: string
        badge: string
        salutation: string
        bodyP1: string
        bodyP2: string
        bodyP3: string
      }
      details: {
        sectionTitle: string
        calendarBtn: string
        calendarAddedSuccess: string
        directionsBtn: string
        contactHost: string
        eventLabel: string
        dateLabel: string
        timeLabel: string
        venueLabel: string
        addressLabel: string
      }
      venue: {
        sectionTitle: string
        badge: string
        viewFullMap: string
        getDirections: string
      }
      gallery: {
        sectionTitle: string
        subtitle: string
        viewPhoto: string
        close: string
        prev: string
        next: string
      }
      rsvp: {
        sectionTitle: string
        subtitle: string
        whatsappBtn: string
        callBtn: string
        floatingBtn: string
        phoneLabel: string
        inquiries: string
      }
      family: {
        sectionTitle: string
        groomSideTitle: string
        brideSideTitle: string
        fatherLabel: string
        motherLabel: string
        addressLabel: string
      }
      footer: {
        presenceRequest: string
        duaArabic: string
        duaTranslation: string
        credits: string
      }
      nav: {
        home: string
        invitation: string
        event: string
        venue: string
        gallery: string
        rsvp: string
        languageSwitch: string
      }
    }
    en: {
      bismillah: string
      bismillahTranslation: string
      eventTitle: string
      eventSubtitle: string
      dateDisplay: string
      dayOfWeek: string
      mealTitle: string
      mealTime: string
      countdown: {
        title: string
        days: string
        hours: string
        minutes: string
        seconds: string
        startedTitle: string
        startedMessage: string
        passedMessage: string
      }
      dawat: {
        sectionTitle: string
        badge: string
        salutation: string
        bodyP1: string
        bodyP2: string
        bodyP3: string
      }
      details: {
        sectionTitle: string
        calendarBtn: string
        calendarAddedSuccess: string
        directionsBtn: string
        contactHost: string
        eventLabel: string
        dateLabel: string
        timeLabel: string
        venueLabel: string
        addressLabel: string
      }
      venue: {
        sectionTitle: string
        badge: string
        viewFullMap: string
        getDirections: string
      }
      gallery: {
        sectionTitle: string
        subtitle: string
        viewPhoto: string
        close: string
        prev: string
        next: string
      }
      rsvp: {
        sectionTitle: string
        subtitle: string
        whatsappBtn: string
        callBtn: string
        floatingBtn: string
        phoneLabel: string
        inquiries: string
      }
      family: {
        sectionTitle: string
        groomSideTitle: string
        brideSideTitle: string
        fatherLabel: string
        motherLabel: string
        addressLabel: string
      }
      footer: {
        presenceRequest: string
        duaArabic: string
        duaTranslation: string
        credits: string
      }
      nav: {
        home: string
        invitation: string
        event: string
        venue: string
        gallery: string
        rsvp: string
        languageSwitch: string
      }
    }
  }
}

export const CONTENT: ContentConfig = {
  config: {
    showCouplePhoto: true,
    heroImageIsPlaceholder: true,
    showGallery: false, // Set to true when photographs are ready
    showMap: true,
    showFamilyAddresses: false, // Set to true to display residential street addresses
    defaultLanguage: 'bn',
  },

  event: {
    date: '2026-12-26',
    time: '13:00',
    endTime: '17:00', // Configurable event end time
    timezone: 'Asia/Dhaka',
    isoDateTime: '2026-12-26T13:00:00+06:00',
    isoEndDateTime: '2026-12-26T17:00:00+06:00',
  },

  contact: {
    displayPhone: '01711-672740',
    internationalPhone: '+8801711672740',
    whatsappNumber: '8801711672740',
    whatsappMessage: {
      bn: 'আসসালামু আলাইকুম। ফাহিম ও জয়ীর বৌভাত অনুষ্ঠানে উপস্থিত থাকার বিষয়ে জানাচ্ছি।',
      en: 'Assalamu Alaikum. I am confirming my attendance for Fahim & Joyee\'s Bou Bhat reception ceremony.',
    },
  },

  venue: {
    latitude: 23.9999571,
    longitude: 90.4220385,
    googleMapsEmbedUrl: 'https://www.google.com/maps?q=23.9999571,90.4220385&output=embed',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=23.9999571,90.4220385',
    name: {
      bn: 'প্রকৌশলী কনভেনশন হল',
      en: 'Prokoushali Convention Hall',
    },
    address: {
      bn: 'জয়দেবপুর, গাজীপুর',
      en: 'Joydebpur, Gazipur',
    },
  },

  media: {
    heroImage: '/images/hero-couple-placeholder.svg',
    heroImageAlt: {
      bn: 'ফাহিম ও জয়ীর বৌভাত সংবর্ধনা চিত্র',
      en: 'Fahim and Joyee Wedding Reception Portrait',
    },
    gallery: [
      {
        id: 'gal-01',
        src: '/images/gallery-placeholder-01.svg',
        alt: {
          bn: 'শুভ সূচনা ও স্মৃতিময় মুহূর্ত ১',
          en: 'Sacred Beginnings - Photo 01',
        },
        title: {
          bn: 'শুভ সূচনা',
          en: 'Sacred Beginnings',
        },
        subtitle: {
          bn: 'নতুন অধ্যায়ের পদযাত্রা',
          en: 'First steps into eternity',
        },
      },
      {
        id: 'gal-02',
        src: '/images/gallery-placeholder-02.svg',
        alt: {
          bn: 'আনন্দঘন বিবাহ সংবর্ধনা মুহূর্ত ২',
          en: 'Joyous Celebration - Photo 02',
        },
        title: {
          bn: 'আনন্দঘন মুহূর্ত',
          en: 'Joyous Celebration',
        },
        subtitle: {
          bn: 'হাসি ও আনন্দ উদযাপনে',
          en: 'Laughter and shared happiness',
        },
      },
      {
        id: 'gal-03',
        src: '/images/gallery-placeholder-03.svg',
        alt: {
          bn: 'পারিবারিক ঐতিহ্য ও শুভকামনা ৩',
          en: 'Family and Tradition - Photo 03',
        },
        title: {
          bn: 'পারিবারিক বন্ধন',
          en: 'Family & Tradition',
        },
        subtitle: {
          bn: 'স্নেহাশীষ ও আন্তরিকতা',
          en: 'Warmth and blessings',
        },
      },
      {
        id: 'gal-04',
        src: '/images/gallery-placeholder-04.svg',
        alt: {
          bn: 'ভালোবাসার চিরন্তন বন্ধন ৪',
          en: 'Bound by Love - Photo 04',
        },
        title: {
          bn: 'ভালোবাসার বন্ধন',
          en: 'Bound by Love',
        },
        subtitle: {
          bn: 'একসাথে পথচলার অঙ্গীকার',
          en: 'Walking hand in hand',
        },
      },
      {
        id: 'gal-05',
        src: '/images/gallery-placeholder-05.svg',
        alt: {
          bn: 'চিরন্তন স্মৃতিগাথা ৫',
          en: 'Timeless Grace - Photo 05',
        },
        title: {
          bn: 'চিরন্তন স্মৃতি',
          en: 'Timeless Grace',
        },
        subtitle: {
          bn: 'হৃদয়ে অমলিন ভালোবাসার আলো',
          en: 'Treasured memories forever',
        },
      },
      {
        id: 'gal-06',
        src: '/images/gallery-placeholder-06.svg',
        alt: {
          bn: 'নবজীবনের পদযাত্রা ৬',
          en: 'New Journey - Photo 06',
        },
        title: {
          bn: 'নবজীবনের সূচনা',
          en: 'New Journey',
        },
        subtitle: {
          bn: 'দোয়া ও ভালোবাসার ছোঁয়া',
          en: 'Prayers for eternal joy',
        },
      },
    ],
  },

  groom: {
    name: {
      bn: 'মোঃ মোস্তাফিজুর রহমান ফাহিম',
      en: 'Mostafizur Rahman Fahim',
    },
    fullName: {
      bn: 'ইঞ্জিনিয়ার মোঃ মোস্তাফিজুর রহমান ফাহিম',
      en: 'Engineer Mostafizur Rahman Fahim',
    },
    father: {
      bn: 'আলহাজ্ব মোঃ আব্দুর রশীদ',
      en: 'Alhaj Md. Abdur Rashid',
    },
    mother: {
      bn: 'আলহাজ্ব মোছাঃ দেলোয়ারা বেগম',
      en: 'Alhaj Mrs. Delowara Begum',
    },
    address: {
      bn: 'জে.আর.পি টাওয়ার (গ্রেট ওয়াল লি.), চালনা-চৌরাঙ্গা, গাজীপুর মহানগর, গাজীপুর',
      en: 'J.R.P Tower (Great Wall Ltd.), Chalna-Chouranga, Gazipur City, Gazipur',
    },
  },

  bride: {
    name: {
      bn: 'নাঈমা জান্নাত (জয়ী)',
      en: 'Naeema Jannat Joyee',
    },
    fullName: {
      bn: 'ইঞ্জিনিয়ার নাঈমা জান্নাত (জয়ী)',
      en: 'Engineer Naeema Jannat Joyee',
    },
    nickname: {
      bn: 'জয়ী',
      en: 'Joyee',
    },
    father: {
      bn: 'আলহাজ্ব মোঃ আব্দুল জব্বার',
      en: 'Alhaj Md. Abdul Jabbar',
    },
    mother: {
      bn: 'আলহাজ্ব মোছাঃ মাহমুদা খাতুন',
      en: 'Alhaj Mrs. Mahmuda Khatun',
    },
    address: {
      bn: 'লালহাড়া, দেলদুয়ার, টাঙ্গাইল',
      en: 'Lalhara, Delduar, Tangail',
    },
  },

  hosts: {
    title: {
      bn: 'দাওয়াতান্তে',
      en: 'Cordially Invited By',
    },
    subtitle: {
      bn: 'বরের শ্রদ্ধেয় পিতা ও মাতা',
      en: 'Parents of the Groom',
    },
    members: [
      {
        bn: 'আলহাজ্ব মোঃ আব্দুর রশীদ',
        en: 'Alhaj Md. Abdur Rashid',
      },
      {
        bn: 'আলহাজ্ব মোছাঃ দেলোয়ারা বেগম',
        en: 'Alhaj Mrs. Delowara Begum',
      },
    ],
  },

  welcomingCommittee: {
    title: {
      bn: 'অভ্যর্থনায়',
      en: 'Welcoming Committee',
    },
    members: [
      { bn: 'সাহানা', en: 'Sahana' },
      { bn: 'সুমি', en: 'Sumi' },
      { bn: 'রুমি', en: 'Rumi' },
      { bn: 'উমি', en: 'Umi' },
      { bn: 'আয়ান', en: 'Ayaan' },
      { bn: 'আনাম', en: 'Anam' },
      { bn: 'ওয়াসিম', en: 'Wasim' },
      { bn: 'সারা', en: 'Sara' },
      { bn: 'জারা', en: 'Zara' },
    ],
  },

  translations: {
    bn: {
      bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      bismillahTranslation: 'পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে শুরু করছি',
      eventTitle: 'বৌভাত',
      eventSubtitle: 'বিবাহোত্তর সংবর্ধনা অনুষ্ঠান',
      dateDisplay: '২৬ ডিসেম্বর ২০২৬',
      dayOfWeek: 'রোজ শনিবার',
      mealTitle: 'প্রীতিভোজ',
      mealTime: 'দুপুর ১.০০ ঘটিকা',
      countdown: {
        title: 'শুভ মুহূর্তের প্রতীক্ষায়',
        days: 'দিন',
        hours: 'ঘণ্টা',
        minutes: 'মিনিট',
        seconds: 'সেকেন্ড',
        startedTitle: 'অনুষ্ঠান চলমান',
        startedMessage: 'ফাহিম ও জয়ীর বিবাহোত্তর সংবর্ধনা অনুষ্ঠানে আপনাকে সশ্রদ্ধ স্বাগতম।',
        passedMessage: 'অনুষ্ঠানটি সফলভাবে সম্পন্ন হয়েছে। আপনাদের দোয়া ও ভালোবাসায় আমরা চিরকৃতজ্ঞ।',
      },
      dawat: {
        sectionTitle: 'দাওয়াত',
        badge: 'আমন্ত্রণপত্র',
        salutation: 'সুধী, আসসালামু আলাইকুম।',
        bodyP1:
          'আগামী ২৬/১২/২০২৬ ইং তারিখ, রোজ শনিবার, আমাদের একমাত্র পুত্র ইঞ্জিনিয়ার মোঃ মোস্তাফিজুর রহমান ফাহিম এর সহিত দেলদুয়ার নিবাসী আলহাজ্ব মোঃ আব্দুল জব্বার সাহেবের একমাত্র কন্যা ইঞ্জিনিয়ার নাঈমা জান্নাত (জয়ী) এর বিবাহোত্তর সংবর্ধনা অনুষ্ঠানের আয়োজন করা হয়েছে।',
        bodyP2: 'উক্ত অনুষ্ঠানে আপনার উপস্থিতি ও দোয়া কামনা করছি।',
        bodyP3: '',
      },
      details: {
        sectionTitle: 'অনুষ্ঠান বিবরণ',
        calendarBtn: 'ক্যালেন্ডারে যুক্ত করুন',
        calendarAddedSuccess: 'ক্যালেন্ডার ফাইল ডাউনলোড হয়েছে',
        directionsBtn: 'গুগল ম্যাপে দেখুন',
        contactHost: 'প্রয়োজনে যোগাযোগ',
        eventLabel: 'অনুষ্ঠান',
        dateLabel: 'তারিখ',
        timeLabel: 'প্রীতিভোজ',
        venueLabel: 'স্থান',
        addressLabel: 'ঠিকানা',
      },
      venue: {
        sectionTitle: 'অনুষ্ঠানস্থল ও পথনির্দেশনা',
        badge: 'গুগল ম্যাপ',
        viewFullMap: 'বড় ম্যাপে খুলুন',
        getDirections: 'পথনির্দেশনা পান',
      },
      gallery: {
        sectionTitle: 'স্মৃতি অ্যালবাম',
        subtitle: 'আমাদের বিশেষ মুহূর্তগুলোর এক ঝলক',
        viewPhoto: 'ছবি দেখুন',
        close: 'বন্ধ করুন',
        prev: 'পূর্ববর্তী',
        next: 'পরবর্তী',
      },
      rsvp: {
        sectionTitle: 'উপস্থিতি নিশ্চিতকরণ',
        subtitle: 'আপনার উপস্থিতি আমাদের আনন্দিত করবে। অনুগ্রহ করে নিচের মাধ্যমে জানান।',
        whatsappBtn: 'WhatsApp-এ জানান',
        callBtn: 'কল করুন',
        floatingBtn: 'উপস্থিতি জানান',
        phoneLabel: 'সরাসরি মোবাইল',
        inquiries: 'যেকোনো তথ্যের জন্য সরাসরি যোগাযোগ করুন',
      },
      family: {
        sectionTitle: 'পারিবারিক পরিচয়',
        groomSideTitle: 'বর পক্ষ',
        brideSideTitle: 'কনে পক্ষ',
        fatherLabel: 'পিতা',
        motherLabel: 'মাতা',
        addressLabel: 'ঠিকানা',
      },
      footer: {
        presenceRequest: 'আপনার উপস্থিতি ও দোয়া কামনা করছি।',
        duaArabic: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        duaTranslation: 'আল্লাহ আপনাকে বরকত দান করুন, আপনার উপর বরকত নাযিল করুন এবং আপনাদের উভয়কে কল্যাণের সাথে একত্রিত রাখুন। (তিরমিযী)',
        credits: 'ফাহিম ও জয়ীর শুভ বিবাহোত্তর সংবর্ধনা • ২০২৬',
      },
      nav: {
        home: 'হোম',
        invitation: 'দাওয়াত',
        event: 'অনুষ্ঠান',
        venue: 'স্থান',
        gallery: 'গ্যালারি',
        rsvp: 'যোগাযোগ',
        languageSwitch: 'English',
      },
    },

    en: {
      bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      bismillahTranslation: 'In the name of Allah, the Most Gracious, the Most Merciful',
      eventTitle: 'Bou Bhat',
      eventSubtitle: 'Wedding Reception Ceremony',
      dateDisplay: '26 December 2026',
      dayOfWeek: 'Saturday',
      mealTitle: 'Lunch Feast',
      mealTime: '1:00 PM',
      countdown: {
        title: 'Counting Down to the Blessed Moment',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        startedTitle: 'Celebration in Progress',
        startedMessage: 'Welcome to the wedding reception of Fahim & Joyee. We are blessed to have you with us.',
        passedMessage: 'The celebration has concluded. Thank you deeply for your gracious presence and heartfelt prayers.',
      },
      dawat: {
        sectionTitle: 'Invitation',
        badge: 'Card of Invitation',
        salutation: 'Dear Sir/Madam, Assalamu Alaikum.',
        bodyP1:
          'We are delighted to announce that the wedding reception of our only son, Engineer Mostafizur Rahman Fahim, with Engineer Naeema Jannat Joyee, the only daughter of Alhaj Md. Abdul Jabbar of Delduar, has been arranged for Saturday, 26 December 2026.',
        bodyP2:
          'We sincerely request your gracious presence and prayers on this joyous occasion.',
        bodyP3: '',
      },
      details: {
        sectionTitle: 'Event Details',
        calendarBtn: 'Add to Calendar',
        calendarAddedSuccess: 'Calendar file downloaded',
        directionsBtn: 'Get Directions',
        contactHost: 'Direct Inquiries',
        eventLabel: 'Event',
        dateLabel: 'Date',
        timeLabel: 'Reception Feast',
        venueLabel: 'Venue',
        addressLabel: 'Address',
      },
      venue: {
        sectionTitle: 'Venue & Directions',
        badge: 'Interactive Map',
        viewFullMap: 'Open Full Map',
        getDirections: 'Get Directions',
      },
      gallery: {
        sectionTitle: 'Photo Gallery',
        subtitle: 'A glimpse into our joyous celebration and cherished memories',
        viewPhoto: 'View Photo',
        close: 'Close',
        prev: 'Previous',
        next: 'Next',
      },
      rsvp: {
        sectionTitle: 'RSVP & Inquiries',
        subtitle: 'Your presence will add immense joy to our celebration. Kindly let us know.',
        whatsappBtn: 'Message on WhatsApp',
        callBtn: 'Call Directly',
        floatingBtn: 'RSVP Now',
        phoneLabel: 'Direct Phone',
        inquiries: 'For any directions or information, feel free to contact us',
      },
      family: {
        sectionTitle: 'Family Lineage',
        groomSideTitle: 'Groom’s Family',
        brideSideTitle: 'Bride’s Family',
        fatherLabel: 'Father',
        motherLabel: 'Mother',
        addressLabel: 'Residence',
      },
      footer: {
        presenceRequest: 'We sincerely look forward to your gracious presence and prayers.',
        duaArabic: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        duaTranslation: 'May Allah bless you and bestow His blessings upon you and unite you both in goodness. (At-Tirmidhi)',
        credits: 'Fahim & Joyee Wedding Reception • 2026',
      },
      nav: {
        home: 'Home',
        invitation: 'Invitation',
        event: 'Event',
        venue: 'Venue',
        gallery: 'Gallery',
        rsvp: 'RSVP',
        languageSwitch: 'বাংলা',
      },
    },
  },
}
