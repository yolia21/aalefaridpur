export interface NarrativeEra {
  id: string;
  title: string;
  urduTitle: string;
  subtitle: string;
  period: string;
  content: string[];
  keyFigures: string[];
  placeholderText: string;
  placeholderCaption: string;
}

export interface MigrationStep {
  step: number;
  location: string;
  arabicName: string;
  title: string;
  description: string;
  coordinates?: { x: number; y: number }; // Relative percentage for map visualization
}

export interface LineagePerson {
  name: string;
  urduName?: string;
  title?: string;
  details?: string;
}

export interface LineageGroup {
  id: string;
  title: string;
  urduTitle: string;
  description: string;
  members: LineagePerson[];
}

export const narrativesData: NarrativeEra[] = [
  {
    id: "era-1",
    title: "Origins, Early Saints, and the Migration from Madinah",
    urduTitle: "ہجرتِ مدینہ اور اولیاءِ کرام",
    subtitle: "Roots in the Ahl al-Bayt and the journey eastward",
    period: "Early Islamic Era to Medieval Period",
    content: [
      "The lineage of the Faridpur Syeds traces back directly to the Holy Prophet Muhammad ﷺ through his daughter Fatima al-Zahra and Imam Ali ibn Abi Talib. The branch flows through Imam Hussein, Imam Ali Zain-ul-Abidin (the sole surviving adult son of the battle of Karbala), and Imam Muhammad al-Baqir.",
      "As descendants of the Ahl al-Bayt (آلِ بیت), they carried both a profound spiritual mandate and a legacy of scholarly wisdom. Following geopolitical shifts in the Hijaz, generations migrated through Baghdad and the wider Persia region before heading towards the Indian subcontinent.",
      "Two key spiritual anchors of this era are Syed Shah Uthman Sher Sawaar (known for his spiritual mastery and legendary title) and his son, the celebrated saint Syed Shah Muhammad Yusuf Burqa-Posh, whose title reflects his practice of veiling himself, a symbol of divine humility and spiritual concealment."
    ],
    keyFigures: ["Imam Ali Zain-ul-Abidin", "Imam Muhammad al-Baqir", "Syed Shah Uthman Sher Sawaar", "Syed Shah Muhammad Yusuf Burqa-Posh"],
    placeholderText: "Architectural Painting of Al-Masjid an-Nabawi",
    placeholderCaption: "A classic hand-painted architectural layout of Al-Masjid an-Nabawi (The Prophet's Mosque) in Al-Madinah al-Munawwarah, detailing the historic Green Dome, outer minarets, and open courtyards with date palms."
  },
  {
    id: "era-2",
    title: "Scholarly Authority in the Royal Courts of Delhi",
    urduTitle: "دہلی میں علمی و قاضیانہ خدمات",
    subtitle: "Administering justice and spiritual guidance at the heart of the empire",
    period: "Mughal Era",
    content: [
      "As the family settled in the capital of the Mughal Empire, Delhi, their intellectual depth and legal expertise earned them royal recognition. They transitioned from strictly spiritual saints to highly authoritative jurists (Qazis) and administrators.",
      "A prominent figure of this era, Syed Abdul Raheem Mufti, was appointed to the post of Qazi (Chief Judge) and Mufti of Delhi. His court decisions and legal decrees were widely respected across the imperial administration.",
      "Balancing spiritual guidance with the rigorous execution of administrative and judicial duties, this era established the family as pillars of Delhi's intellectual and theological elite."
    ],
    keyFigures: ["Syed Abdul Raheem Mufti", "Muhammad Qasim", "Ashiq Ali"],
    placeholderText: "Mughal Royal Court Painting",
    placeholderCaption: "A traditional Mughal miniature painting depicting the Emperor holding audience (Darbar) under an ornate golden canopy, surrounded by imperial advisors, guards, and courtiers in traditional attire."
  },
  {
    id: "era-3",
    title: "Settlement in Bihar and the Founding of Faridpur",
    urduTitle: "بہار میں سکونت اور فرید پور کا قیام",
    subtitle: "Estates, royal decrees, and founding the ancestral home",
    period: "Late 17th - 18th Century",
    content: [
      "With the shifting dynamics in Delhi, the family turned towards the fertile and intellectually vibrant region of Bihar. Syed Muhammad Farid migrated to Bihar, establishing a presence that would define the family's legacy for centuries.",
      "His descendant, Syed Muhammad Dawood, rendered exceptional services to the Mughal administration. In recognition of this, he received the Farman-e-Shahi (Royal Imperial Decree) granting him the land and rights to establish the estate of Faridpur, located in the Jehanabad district of Bihar.",
      "Faridpur became a royal Jagir—a center of learning, agriculture, and spiritual authority, serving as the ancestral seat where consecutive generations built traditional havelis, mosques, and libraries."
    ],
    keyFigures: ["Syed Muhammad Farid", "Syed Muhammad Dawood", "Syed Najm al-Din"],
    placeholderText: "Mughal Imperial Farman-e-Shahi",
    placeholderCaption: "An authentic historical Mughal Imperial Farman (royal decree) scroll from the 18th century, featuring elegant Persian Nastaliq calligraphy, imperial medallion seals, and official stamps."
  },
  {
    id: "era-4",
    title: "The 19th Century Anti-Colonial Resistance",
    urduTitle: "انیسویں صدی اور مجاہدِ آزادی",
    subtitle: "Haji Shubrati and the rebellion of 1857",
    period: "19th Century",
    content: [
      "The 19th century brought the encroachment of British colonial rule, which threatened the sovereignty and religious values of the region. The Faridpur Syeds stood at the forefront of the resistance.",
      "Syed Mir Majid Ali, universally known as Haji Shubrati (born in 1801), became a leading figure of resistance. During the historic 1857 Indian Rebellion (First War of Independence), he mobilized local forces and provided critical support to the freedom fighters, defending the estate against British troops.",
      "Following the suppression of the rebellion, Haji Shubrati was marked as a rebel by the British Raj. To escape execution, he embarked on a self-imposed 15-year exile in the holy city of Makkah. He eventually returned to Bihar, where he continued to serve as a beacon of resistance and spiritual guidance."
    ],
    keyFigures: ["Syed Mir Majid Ali (Haji Shubrati)", "Syed Abdul Majeed", "Syed Muhammad Kazim"],
    placeholderText: "1857 Indian Rebellion Engraving",
    placeholderCaption: "A 19th-century historical wood engraving depicting Indian freedom fighters (sepoys) in close-combat with British forces defending fortifications during the 1857 uprising."
  }
];

export const migrationSteps: MigrationStep[] = [
  {
    step: 1,
    location: "Al-Madinah al-Munawwarah",
    arabicName: "المدينة المنورة",
    title: "Origin: The Radiant City",
    description: "The spiritual cradle of the lineage in the Hijaz. Tracing ancestry directly to the Holy Prophet ﷺ through Imam Ali Zain-ul-Abidin and Imam Muhammad al-Baqir."
  },
  {
    step: 2,
    location: "Baghdad",
    arabicName: "بغداد",
    title: "Waypoint: Center of Islamic Scholarship",
    description: "Generations of early ancestors migrated to Baghdad, the intellectual and theological capital of the Abbasid caliphate, to refine their scholarship."
  },
  {
    step: 3,
    location: "Uzbekistan",
    arabicName: "أوزبكستان",
    title: "Waypoint: Overland Transit Route",
    description: "Overland migration path through Persia, Bukhara, and Transoxiana (Uzbekistan) before entering the northern gates of the Indian subcontinent."
  },
  {
    step: 4,
    location: "Lahore",
    arabicName: "لاہور",
    title: "Waypoint: Early Subcontinent Entry",
    description: "A major administrative and spiritual hub in Punjab, representing the physical entry of the lineage into the subcontinent's spiritual landscape."
  },
  {
    step: 5,
    location: "Delhi, India",
    arabicName: "دہلی",
    title: "Waypoint: Seat of Judicial & Spiritual Authority",
    description: "Arrival in the Mughal capital. Descendants served as imperial jurists, Saints, and Chief Judges (Qazis/Muftis) advising the Mughal courts."
  },
  {
    step: 6,
    location: "Jaunpur",
    arabicName: "جونپور",
    title: "Waypoint: Pre-Bihar Settlement",
    description: "Scholarly residency in the historical Shahi Sultanate of Jaunpur, celebrated as the 'Shiraz of the East' for its theological universities."
  },
  {
    step: 7,
    location: "Faridpur, Jehanabad, Bihar",
    arabicName: "فریدپور، بہار",
    title: "Destination: The Ancestral Estate & Royal Jagir",
    description: "Syed Muhammad Farid migrates to Bihar, and Syed Muhammad Dawood receives the imperial Farman-e-Shahi granting land to establish the ancestral seat of Faridpur."
  },
  {
    step: 8,
    location: "Makkah al-Mukarramah",
    arabicName: "مكة المكرمة",
    title: "Exile: Haji Shubrati's Exile & Retreat",
    description: "Following active resistance in the 1857 Indian Rebellion, Syed Mir Majid Ali (Haji Shubrati) escapes British arrest to find 15 years of exile and safety in Makkah."
  },
  {
    step: 9,
    location: "Sadar Gali, Patna / Faridpur",
    arabicName: "پٹنہ / فریدپور",
    title: "Return: Continuation of the Legacy",
    description: "Haji Shubrati returns from exile to Sadar Gali, Patna City, and Faridpur, reorganizing historical archives and maintaining the spiritual lineage."
  }
];

export const lineageGroups: LineageGroup[] = [
  {
    id: "group-1",
    title: "Group 1: The Imams of Ahl al-Bayt",
    urduTitle: "آلِ بیت اور ائمہ کرام",
    description: "The direct foundation of the lineage, tracing back to the Holy Prophet ﷺ through Imam Ali and Imam Hussein.",
    members: [
      { name: "Imam Ali ibn Abi Talib", urduName: "امام علی ابن ابی طالب", title: "Amir al-Mu'minin", details: "Cousin and son-in-law of the Holy Prophet ﷺ" },
      { name: "Imam Hussein ibn Ali", urduName: "امام حسین علیہ السلام", title: "Sayyid al-Shuhada", details: "Grandson of the Holy Prophet ﷺ, hero of Karbala" },
      { name: "Imam Ali Zain-ul-Abidin", urduName: "امام علی زین العابدین", title: "Al-Sajjad", details: "Fourth Imam, renowned for his prayers and devotion" },
      { name: "Imam Muhammad al-Baqir", urduName: "امام محمد الباقر", title: "Al-Baqir", details: "Fifth Imam, pioneer of early Islamic sciences" }
    ]
  },
  {
    id: "group-2",
    title: "Group 2: The Early Ancestors",
    urduTitle: "آبا و اجداد (ہجرت کا دور)",
    description: "The generations that lived through the Middle East, Central Asia, and early migrations toward the subcontinent.",
    members: [
      { name: "Abdullah" },
      { name: "Habibullah" },
      { name: "Barakatullah" },
      { name: "Shahab al-Din Noor al-Abidin" },
      { name: "Muhammad Najm al-Din" },
      { name: "Muhammad Sufi Sadiq" },
      { name: "Shahab al-Din Layyah" },
      { name: "Ahmad Elahi" },
      { name: "Muhammad Mahroof" },
      { name: "Junayd" },
      { name: "Muhammad Uthman" },
      { name: "Abdul Wahhab" }
    ]
  },
  {
    id: "group-3",
    title: "Group 3: Saints & Administrators of Delhi",
    urduTitle: "سلاطینِ دہلی اور اولیاء کرام",
    description: "The era of spiritual ascetics and royal judicial appointments (Muftis/Qazis) in Delhi.",
    members: [
      { name: "Syed Shah Uthman Sher Sawaar", urduName: "سید شاہ عثمان شیر سوار", title: "Sher Sawaar", details: "Spiritual master of Delhi/north India" },
      { name: "Syed Shah Muhammad Yusuf Burqa-Posh", urduName: "سید شاہ محمد یوسف برقعہ پوش", title: "Burqa-Posh", details: "Renowned veiled Sufi saint of Delhi" },
      { name: "Muhammad Qasim" },
      { name: "Muhammad" },
      { name: "Syed Abdul Raheem Mufti", urduName: "سید عبد الرحیم مفتی", title: "Qazi-e-Delhi", details: "Chief Mufti and Judge appointed by the Mughal court" },
      { name: "Abdul Rahman" },
      { name: "Ashiq Ali" }
    ]
  },
  {
    id: "group-4",
    title: "Group 4: Founders of the Faridpur Estate",
    urduTitle: "بانیانِ فرید پور (بہار)",
    description: "The pioneers who migrated to Bihar and founded the ancestral seat of Faridpur under Imperial Sanad.",
    members: [
      { name: "Syed Muhammad Farid", urduName: "سید محمد فرید", title: "Migrant to Bihar", details: "Initiated the family settlement in the Bihar region" },
      { name: "Muhammad Ibrahim" },
      { name: "Syed Muhammad Dawood", urduName: "سید محمد داؤد", title: "Farman-Shahi Holder", details: "Granted Farman-e-Shahi by the Mughal Emperor to establish Faridpur" },
      { name: "Syed Najm al-Din" },
      { name: "Muhammad Ali" },
      { name: "Syed Abd al-Karim" },
      { name: "Syed Abd al-Quddus" },
      { name: "Syed Muhammad Mohsin" }
    ]
  },
  {
    id: "group-5",
    title: "Group 5: The Recent Lineage & Freedom Fighters",
    urduTitle: "شجرہ نسب (عہدِ حاضر اور مجاہدین)",
    description: "The 19th-20th century generations, including freedom fighters of the 1857 Rebellion and recent family patriarchs.",
    members: [
      { name: "Syed Muhammad Yusuf" },
      { name: "Syed Muhammad Ishaaq" },
      { name: "Syed Mubarik Ali Faridpuri", urduName: "سید مبارک علی فریدپوری", details: "Deeply respected estate administrator" },
      { name: "Syed Barakat Ali" },
      { name: "Syed Amjad Ali" },
      { name: "Syed Mir Majid Ali (Haji Shubrati)", urduName: "سید میر ماجد علی (حاجی شہبراتی)", title: "Mujahid-e-Azadi", details: "Freedom fighter in the 1857 Rebellion, lived in Makkah exile for 15 years" },
      { name: "Syed Abdul Majeed" },
      { name: "Syed Muhammad Kazim", urduName: "سید محمد کاظم", details: "Carried the lineage and archive records into the modern era" }
    ]
  }
];
