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
    heroImage: string
    heroImageWidth: number
    heroImageHeight: number
    heroAlt: {
      en: string
      bn: string
    }
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
    whatsappRsvp: {
      number: string
      display: string
      international: string
      url: string
    }
    informationPhone: {
      number: string
      display: string
      displayBn: string
      international: string
      telUrl: string
    }
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
    fullAddress: {
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
    address: {
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
    address: {
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
      countdownStates: {
        eventDay: string
        postEvent: string
      }
      envelope: {
        bismillah: string
        tagline: string
        coupleNames: string
        openButton: string
        skipButton: string
        replayButton: string
      }
      invitationHeading: string
      invitationBody: string
      familyBlock: {
        groomParentsTitle: string
        brideParentsTitle: string
        fatherLabel: string
        motherLabel: string
        addressLabel: string
      }
      details: {
        date: string
        time: string
        venue: string
        calendarBtn: string
        directionsBtn: string
      }
      timeline: {
        title: string
        dateStep: string
        timeStep: string
        venueStep: string
        lunchReception: string
      }
      venueHeading: string
      rsvpHeading: string
      rsvpHelper: string
      rsvpContactLabel: string
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
      countdownStates: {
        eventDay: string
        postEvent: string
      }
      envelope: {
        bismillah: string
        tagline: string
        coupleNames: string
        openButton: string
        skipButton: string
        replayButton: string
      }
      invitationHeading: string
      invitationBody: string
      familyBlock: {
        groomParentsTitle: string
        brideParentsTitle: string
        fatherLabel: string
        motherLabel: string
        addressLabel: string
      }
      details: {
        date: string
        time: string
        venue: string
        calendarBtn: string
        directionsBtn: string
      }
      timeline: {
        title: string
        dateStep: string
        timeStep: string
        venueStep: string
        lunchReception: string
      }
      venueHeading: string
      rsvpHeading: string
      rsvpHelper: string
      rsvpContactLabel: string
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
    defaultLanguage: 'en', // Default is English
    heroImage: '/images/hero/hero-background.webp',
    heroImageWidth: 900,
    heroImageHeight: 1600,
    heroAlt: {
      en: 'Painted golden wedding arch with a bride in red and a groom in ivory walking beneath a chandelier',
      bn: 'একটি সোনালী খিলান ও ঝাড়বাতির নিচে লাল শাড়িতে কনে ও আইভরি পোশাকে বরের চিত্রকর্ম',
    },
    showMap: true,
    showFamilyAddresses: true,
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
    whatsappRsvp: {
      number: '8801785227997',
      display: '01785227997',
      international: '+8801785227997',
      url: 'https://wa.me/8801785227997',
    },
    informationPhone: {
      number: '8801711697240',
      display: '01711697240',
      displayBn: '০১৭১১৬৯৭২৪০',
      international: '+8801711697240',
      telUrl: 'tel:+8801711697240',
    },
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
      en: '6th Floor, Prokoushali Bhaban (Near Railgate), Rajbari Road, Joydebpur, Gazipur.',
      bn: 'প্রকৌশলী ভবনের ৬ষ্ঠ তলা (রেলগেটের নিকটে), রাজবাড়ী রোড, জয়দেবপুর, গাজীপুর।',
    },
    fullAddress: {
      en: 'Prokoushali Convention Hall, 6th Floor, Prokoushali Bhaban (Near Railgate), Rajbari Road, Joydebpur, Gazipur.',
      bn: 'প্রকৌশলী কনভেনশন হল, প্রকৌশলী ভবনের ৬ষ্ঠ তলা (রেলগেটের নিকটে), রাজবাড়ী রোড, জয়দেবপুর, গাজীপুর।',
    },
  },

  groom: {
    name: {
      en: 'Mostafizur Rahman Fahim',
      bn: 'মোস্তাফিজুর রহমান ফাহিম',
    },
    fullName: {
      en: 'Mostafizur Rahman Fahim',
      bn: 'মোস্তাফিজুর রহমান ফাহিম',
    },
    father: {
      en: 'Alhaj Md. Abdur Rashid',
      bn: 'আলহাজ্ব মোঃ আব্দুর রশীদ',
    },
    mother: {
      en: 'Alhajja Delowara Begum',
      bn: 'আলহাজ্ব মোছাঃ দেলোয়ারা বেগম',
    },
    address: {
      en: 'J.R.P Tower, Flats 9/A and 9/B, GreatWall City, Chandona, Chowrasta, Gazipur Metropolitan City, Gazipur.',
      bn: 'জে.আর.পি টাওয়ার, ফ্ল্যাট ৯/এ ও ৯/বি, গ্রেটওয়াল সিটি, চান্দনা, চৌরাস্তা, গাজীপুর মহানগর, গাজীপুর।',
    },
  },

  bride: {
    name: {
      en: 'Naeema Jannat Joyee',
      bn: 'নাঈমা জান্নাত (জয়ী)',
    },
    fullName: {
      en: 'Naeema Jannat Joyee',
      bn: 'নাঈমা জান্নাত (জয়ী)',
    },
    father: {
      en: 'Alhaj Md. Abdul Jobbar',
      bn: 'আলহাজ্ব মোঃ আব্দুল জব্বার',
    },
    mother: {
      en: 'Alhajja Mahfuza Khatun',
      bn: 'আলহাজ্ব মোছাঃ মাহফুজা খাতুন',
    },
    address: {
      en: 'Lalhara, Delduar, Tangail.',
      bn: 'লালহাড়া, দেলদুয়ার, টাঙ্গাইল।',
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
      { en: 'Urmi', bn: 'উর্মি' },
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
      countdownStates: {
        eventDay: 'Today is the Celebration!',
        postEvent: 'A Beautiful Celebration Begins a New Chapter',
      },
      envelope: {
        bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        tagline: 'A Special Invitation',
        coupleNames: 'Fahim & Joyee',
        openButton: 'Open Invitation',
        skipButton: 'Skip to Invitation',
        replayButton: 'View Envelope',
      },
      invitationHeading: "You're invited",
      invitationBody:
        'Assalamu Alaikum. With the blessings of Allah, we warmly invite you to celebrate the wedding reception of Mostafizur Rahman Fahim and Naeema Jannat Joyee. Your presence and duas would make our celebration truly special.',
      familyBlock: {
        groomParentsTitle: "Groom's Parents",
        brideParentsTitle: "Bride's Parents",
        fatherLabel: 'Father: ',
        motherLabel: 'Mother: ',
        addressLabel: 'Family Address:',
      },
      details: {
        date: 'Saturday, 26 December 2026',
        time: '1:00 PM',
        venue: 'Prokoushali Convention Hall',
        calendarBtn: 'Add to Calendar',
        directionsBtn: 'Directions',
      },
      timeline: {
        title: 'Event Timeline',
        dateStep: 'Date',
        timeStep: 'Time',
        venueStep: 'Venue',
        lunchReception: 'Lunch Reception',
      },
      venueHeading: 'Find us',
      rsvpHeading: 'Will you join us?',
      rsvpHelper: 'A quick message helps us plan. Thank you!',
      rsvpContactLabel: 'For event information: ',
      buttons: {
        whatsapp: 'RSVP on WhatsApp',
        call: 'Call for Information',
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
      countdownStates: {
        eventDay: 'আজ আমাদের আনন্দের দিন!',
        postEvent: 'একটি সুন্দর আয়োজনের স্মৃতিতে শুরু হোক নতুন অধ্যায়।',
      },
      envelope: {
        bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        tagline: 'একটি বিশেষ আমন্ত্রণ',
        coupleNames: 'ফাহিম ও জয়ী',
        openButton: 'আমন্ত্রণটি খুলুন',
        skipButton: 'সরাসরি দেখুন',
        replayButton: 'খাম দেখুন',
      },
      invitationHeading: 'দাওয়াত',
      invitationBody:
        'আসসালামু আলাইকুম। মহান আল্লাহর অশেষ রহমতে আমাদের প্রিয় সন্তান মোস্তাফিজুর রহমান ফাহিম ও নাঈমা জান্নাত (জয়ী)-র বৌভাত অনুষ্ঠানে আপনাকে আন্তরিক আমন্ত্রণ জানাচ্ছি। আপনার উপস্থিতি ও দোয়া আমাদের আনন্দকে পূর্ণতা দেবে।',
      familyBlock: {
        groomParentsTitle: 'বরের পিতা-মাতা',
        brideParentsTitle: 'কনের পিতা-মাতা',
        fatherLabel: 'পিতা: ',
        motherLabel: 'মাতা: ',
        addressLabel: 'ঠিকানা:',
      },
      details: {
        date: '২৬ ডিসেম্বর ২০২৬, রোজ শনিবার',
        time: 'দুপুর ১.০০ ঘটিকা',
        venue: 'প্রকৌশলী কনভেনশন হল',
        calendarBtn: 'ক্যালেন্ডারে যুক্ত করুন',
        directionsBtn: 'রুট দেখুন',
      },
      timeline: {
        title: 'অনুষ্ঠান সূচি',
        dateStep: 'তারিখ',
        timeStep: 'সময়',
        venueStep: 'স্থান',
        lunchReception: 'প্রীতিভোজ',
      },
      venueHeading: 'অনুষ্ঠানের স্থান',
      rsvpHeading: 'আপনি কি আসছেন?',
      rsvpHelper: 'একটি ছোট্ট বার্তা আমাদের আয়োজনে সাহায্য করবে। ধন্যবাদ!',
      rsvpContactLabel: 'অনুষ্ঠান সংক্রান্ত তথ্য: ',
      buttons: {
        whatsapp: 'WhatsApp-এ জানান',
        call: 'তথ্যের জন্য কল করুন',
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
