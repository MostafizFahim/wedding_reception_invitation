/**
 * CENTRALIZED INVITATION CONTENT AND CONFIGURATION
 * Single source of truth for all event content, translations, names,
 * dates, addresses, media assets, and feature flags.
 *
 * Revision 2: Pastel Theme (Baby Pink + Sky Blue), Default English,
 * Compact Layout, Collapsible Accordion, No Gallery.
 */

export interface ContentConfig {
  config: {
    defaultLanguage: 'en' | 'bn'
    heroMode: 'illustration' | 'photo'
    heroPhoto: string
    showMap: boolean
    showFamilyAddresses: boolean
  }

  event: {
    date: string // YYYY-MM-DD
    time: string // HH:mm
    endTime: string // Configurable end time
    timezone: string
    isoDateTime: string
    isoEndDateTime: string
  }

  contact: {
    displayPhone: string
    internationalPhone: string
    whatsappNumber: string
    whatsappMessage: {
      en: string
      bn: string
    }
  }

  venue: {
    latitude: number
    longitude: number
    googleMapsEmbedUrl: string
    googleMapsDirectionsUrl: string
    name: {
      en: string
      bn: string
    }
    address: {
      en: string
      bn: string
    }
  }

  groom: {
    name: {
      en: string
      bn: string
    }
    fullName: {
      en: string
      bn: string
    }
    father: {
      en: string
      bn: string
    }
    mother: {
      en: string
      bn: string
    }
  }

  bride: {
    name: {
      en: string
      bn: string
    }
    fullName: {
      en: string
      bn: string
    }
    father: {
      en: string
      bn: string
    }
    mother: {
      en: string
      bn: string
    }
  }

  hosts: {
    title: {
      en: string
      bn: string
    }
    members: Array<{
      en: string
      bn: string
    }>
  }

  welcomingCommittee: {
    title: {
      en: string
      bn: string
    }
    members: Array<{
      en: string
      bn: string
    }>
  }

  translations: {
    en: {
      bismillah: string
      heroTagline: string
      heroTitle: string
      subtitle: string
      dateLine: string
      countdownLabels: {
        days: string
        hours: string
        min: string
        sec: string
      }
      countdownFinished: string
      invitationHeading: string
      invitationBody: string
      details: {
        date: string
        time: string
        venue: string
        calendarBtn: string
        directionsBtn: string
      }
      venueHeading: string
      rsvpHeading: string
      rsvpHelper: string
      buttons: {
        whatsapp: string
        call: string
        calendar: string
        directions: string
        floatingRsvp: string
      }
      accordion: {
        title: string
        withLove: string
        welcoming: string
      }
      footer: {
        presence: string
        duaArabic: string
        duaTranslation: string
        credits: string
      }
      nav: {
        home: string
        invitation: string
        venue: string
        rsvp: string
        languageSwitch: string
      }
    }
    bn: {
      bismillah: string
      heroTagline: string
      heroTitle: string
      subtitle: string
      dateLine: string
      countdownLabels: {
        days: string
        hours: string
        min: string
        sec: string
      }
      countdownFinished: string
      invitationHeading: string
      invitationBody: string
      details: {
        date: string
        time: string
        venue: string
        calendarBtn: string
        directionsBtn: string
      }
      venueHeading: string
      rsvpHeading: string
      rsvpHelper: string
      buttons: {
        whatsapp: string
        call: string
        calendar: string
        directions: string
        floatingRsvp: string
      }
      accordion: {
        title: string
        withLove: string
        welcoming: string
      }
      footer: {
        presence: string
        duaArabic: string
        duaTranslation: string
        credits: string
      }
      nav: {
        home: string
        invitation: string
        venue: string
        rsvp: string
        languageSwitch: string
      }
    }
  }
}

export const CONTENT: ContentConfig = {
  config: {
    defaultLanguage: 'en', // Revision 2: Default is English
    heroMode: 'illustration', // 'illustration' | 'photo'
    heroPhoto: '/images/hero-couple.jpg', // Path to photograph when ready
    showMap: true,
    showFamilyAddresses: false,
  },

  event: {
    date: '2026-12-26',
    time: '13:00',
    endTime: '17:00',
    timezone: 'Asia/Dhaka',
    isoDateTime: '2026-12-26T13:00:00+06:00',
    isoEndDateTime: '2026-12-26T17:00:00+06:00',
  },

  contact: {
    displayPhone: '01711-672740',
    internationalPhone: '+8801711672740',
    whatsappNumber: '8801711672740',
    whatsappMessage: {
      en: "Assalamu Alaikum. I am confirming my attendance for Fahim & Joyee's Bou Bhat reception ceremony.",
      bn: 'আসসালামু আলাইকুম। ফাহিম ও জয়ীর বৌভাত অনুষ্ঠানে উপস্থিত থাকার বিষয়ে জানাচ্ছি।',
    },
  },

  venue: {
    latitude: 23.9999571,
    longitude: 90.4220385,
    googleMapsEmbedUrl: 'https://www.google.com/maps?q=23.9999571,90.4220385&output=embed',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=23.9999571,90.4220385',
    name: {
      en: 'Prokoushali Convention Hall',
      bn: 'প্রকৌশলী কনভেনশন হল',
    },
    address: {
      en: 'Joydebpur, Gazipur',
      bn: 'জয়দেবপুর, গাজীপুর',
    },
  },

  groom: {
    name: {
      en: 'Mostafizur Rahman Fahim',
      bn: 'মোঃ মোস্তাফিজুর রহমান ফাহিম',
    },
    fullName: {
      en: 'Engineer Mostafizur Rahman Fahim',
      bn: 'ইঞ্জিনিয়ার মোঃ মোস্তাফিজুর রহমান ফাহিম',
    },
    father: {
      en: 'Alhaj Md. Abdur Rashid',
      bn: 'আলহাজ্ব মোঃ আব্দুর রশীদ',
    },
    mother: {
      en: 'Alhajja Delowara Begum',
      bn: 'আলহাজ্ব মোছাঃ দেলোয়ারা বেগম',
    },
  },

  bride: {
    name: {
      en: 'Naeema Jannat Joyee',
      bn: 'নাঈমা জান্নাত (জয়ী)',
    },
    fullName: {
      en: 'Engineer Naeema Jannat Joyee',
      bn: 'ইঞ্জিনিয়ার নাঈমা জান্নাত (জয়ী)',
    },
    father: {
      en: 'Alhaj Md. Abdul Jabbar',
      bn: 'আলহাজ্ব মোঃ আব্দুল জব্বার',
    },
    mother: {
      en: 'Alhajja Mahfuza Khatun',
      bn: 'আলহাজ্ব মোছাঃ মাহফুজা খাতুন',
    },
  },

  hosts: {
    title: {
      en: 'With love,',
      bn: 'দাওয়াতান্তে',
    },
    members: [
      {
        en: 'Alhaj Md. Abdur Rashid',
        bn: 'আলহাজ্ব মোঃ আব্দুর রশীদ',
      },
      {
        en: 'Alhajja Delowara Begum',
        bn: 'আলহাজ্ব মোছাঃ দেলোয়ারা বেগম',
      },
    ],
  },

  welcomingCommittee: {
    title: {
      en: 'Welcoming you',
      bn: 'অভ্যর্থনায়',
    },
    members: [
      { en: 'Sohag', bn: 'সোহাগ' },
      { en: 'Sumi', bn: 'সুমি' },
      { en: 'Rumi', bn: 'রুমি' },
      { en: 'Umi', bn: 'উমি' },
      { en: 'Ayaan', bn: 'আয়ান' },
      { en: 'Anas', bn: 'আনাস' },
      { en: 'Ayash', bn: 'আয়াশ' },
      { en: 'Sara', bn: 'সারা' },
      { en: 'Zara', bn: 'জারা' },
    ],
  },

  translations: {
    en: {
      bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      heroTagline: 'Join us to celebrate',
      heroTitle: 'Fahim & Joyee',
      subtitle: 'Wedding Reception · Bou Bhat',
      dateLine: 'Saturday, 26 December 2026',
      countdownLabels: {
        days: 'Days',
        hours: 'Hours',
        min: 'Min',
        sec: 'Sec',
      },
      countdownFinished: "Today is the day. We can't wait to see you!",
      invitationHeading: "You're invited",
      invitationBody:
        'Assalamu Alaikum. With the blessings of Allah, we warmly invite you to the wedding reception of Engineer Mostafizur Rahman Fahim, only son of Alhaj Md. Abdur Rashid and Alhajja Delowara Begum, and Engineer Naeema Jannat Joyee, only daughter of Alhaj Md. Abdul Jabbar of Delduar. Your presence and duas would mean the world to us.',
      details: {
        date: 'Saturday, 26 Dec 2026',
        time: 'Lunch at 1:00 PM',
        venue: 'Prokoushali Convention Hall, Joydebpur, Gazipur',
        calendarBtn: 'Add to Calendar',
        directionsBtn: 'Directions',
      },
      venueHeading: 'Find us',
      rsvpHeading: 'Will you join us?',
      rsvpHelper: 'A quick message helps us plan. Thank you!',
      buttons: {
        whatsapp: 'RSVP on WhatsApp',
        call: 'Call',
        calendar: 'Add to Calendar',
        directions: 'Directions',
        floatingRsvp: 'RSVP',
      },
      accordion: {
        title: 'Hosts & Welcome Committee',
        withLove: 'With love,',
        welcoming: 'Welcoming you',
      },
      footer: {
        presence: 'Your presence and duas complete our joy.',
        duaArabic: 'بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        duaTranslation: 'Barakallahu lakuma wa baraka alaykuma wa jama\'a baynakuma fi khayr.',
        credits: 'Fahim & Joyee • 26 December 2026',
      },
      nav: {
        home: 'Home',
        invitation: 'Invitation',
        venue: 'Venue',
        rsvp: 'RSVP',
        languageSwitch: 'বাংলা',
      },
    },

    bn: {
      bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      heroTagline: 'আনন্দের এই দিনে আপনাকে আমন্ত্রণ',
      heroTitle: 'ফাহিম & জয়ী',
      subtitle: 'বৌভাত অনুষ্ঠান',
      dateLine: '২৬ ডিসেম্বর ২০২৬, শনিবার',
      countdownLabels: {
        days: 'দিন',
        hours: 'ঘণ্টা',
        min: 'মিনিট',
        sec: 'সেকেন্ড',
      },
      countdownFinished: 'আজই সেই দিন। আপনার অপেক্ষায় আছি!',
      invitationHeading: 'দাওয়াত',
      invitationBody:
        'আসসালামু আলাইকুম। আল্লাহর রহমতে আগামী ২৬ ডিসেম্বর ২০২৬, শনিবার, আমাদের একমাত্র পুত্র ইঞ্জিনিয়ার মোঃ মোস্তাফিজুর রহমান ফাহিম এবং দেলদুয়ার নিবাসী আলহাজ্ব মোঃ আব্দুল জব্বার সাহেবের একমাত্র কন্যা ইঞ্জিনিয়ার নাঈমা জান্নাত (জয়ী)-র বৌভাত অনুষ্ঠানে আপনার উপস্থিতি ও দোয়া কামনা করছি।',
      details: {
        date: 'শনিবার, ২৬ ডিসেম্বর ২০২৬',
        time: 'প্রীতিভোজ: দুপুর ১.০০ ঘটিকা',
        venue: 'প্রকৌশলী কনভেনশন হল, জয়দেবপুর, গাজীপুর',
        calendarBtn: 'ক্যালেন্ডারে যুক্ত করুন',
        directionsBtn: 'রুট দেখুন',
      },
      venueHeading: 'অনুষ্ঠানের স্থান',
      rsvpHeading: 'আপনি কি আসছেন?',
      rsvpHelper: 'একটি ছোট্ট বার্তা আমাদের আয়োজনে সাহায্য করবে। ধন্যবাদ!',
      buttons: {
        whatsapp: 'WhatsApp-এ জানান',
        call: 'কল করুন',
        calendar: 'ক্যালেন্ডারে যুক্ত করুন',
        directions: 'রুট দেখুন',
        floatingRsvp: 'উপস্থিতি জানান',
      },
      accordion: {
        title: 'আয়োজনে ও অভ্যর্থনায়',
        withLove: 'দাওয়াতান্তে',
        welcoming: 'অভ্যর্থনায়',
      },
      footer: {
        presence: 'আপনার উপস্থিতি ও দোয়া আমাদের আনন্দকে পূর্ণ করবে।',
        duaArabic: 'بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
        duaTranslation: 'আল্লাহ আপনাদের উভয়কে বরকত দান করুন, আপনাদের উপর বরকত নাযিল করুন এবং কল্যাণের সাথে একত্রিত রাখুন।',
        credits: 'ফাহিম ও জয়ী • ২৬ ডিসেম্বর ২০২৬',
      },
      nav: {
        home: 'হোম',
        invitation: 'দাওয়াত',
        venue: 'স্থান',
        rsvp: 'যোগাযোগ',
        languageSwitch: 'English',
      },
    },
  },
}
