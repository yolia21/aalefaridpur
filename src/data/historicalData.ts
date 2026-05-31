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
    placeholderText: "Islamic Geometric Arabesque & Calligraphy Art",
    placeholderCaption: "High-fidelity restoration representing early Islamic geometric motifs and calligraphy hailing from the Madinah-Baghdad migration period."
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
    placeholderText: "Imperial Delhi Darbar Painting Placeholder",
    placeholderCaption: "Lithograph of the Mughal Imperial Court in Delhi, depicting the presence of the Qazi and Mufti advising the royal administration."
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
    placeholderText: "Farman-e-Shahi Imperial Scroll",
    placeholderCaption: "Reproduction of a Mughal Imperial Farman (royal decree) with gold illumination and the official seal, granting land ownership of Faridpur to Syed Muhammad Dawood."
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
    placeholderText: "Historical Sketch of the 1857 Resistance in Bihar",
    placeholderCaption: "Colonial-era illustration of the defensive stand and rebellion in Jehanabad/Patna region during the 1857 uprising."
  }
];

export const migrationSteps: MigrationStep[] = [
  {
    step: 1,
    location: "Al-Madinah al-Munawwarah",
    arabicName: "المدينة المنورة",
    title: "The Ancestral Origin",
    description: "The spiritual cradle of the lineage. Tracing roots directly to the Holy Prophet ﷺ, Imam Ali, and the early Imams of the Ahl al-Bayt (آلِ بیت)."
  },
  {
    step: 2,
    location: "Baghdad",
    arabicName: "بغداد",
    title: "Center of Islamic Scholarship",
    description: "Following socio-political changes, descendants migrated to Baghdad, the intellectual and spiritual capital of the Abbasid caliphate, absorbing and compiling theological knowledge."
  },
  {
    step: 3,
    location: "Delhi, India",
    arabicName: "دهلي",
    title: "Seat of Judicial & Spiritual Authority",
    description: "Arrival in the Indian Subcontinent. The Syeds became respected saints and royal jurists (Qazis) under the Mughal courts, shaping Delhi's judicial landscape."
  },
  {
    step: 4,
    location: "Faridpur, Jehanabad, Bihar",
    arabicName: "فريدفور، بهار",
    title: "The Ancestral Estate & Royal Jagir",
    description: "Syed Muhammad Farid migrates to Bihar, and Syed Muhammad Dawood receives the imperial Farman-e-Shahi to establish the permanent ancestral estate at Faridpur."
  },
  {
    step: 5,
    location: "Makkah al-Mukarramah",
    arabicName: "مكة المكرمة",
    title: "15-Year Exile of Haji Shubrati",
    description: "Following active participation in the 1857 Rebellion, Syed Mir Majid Ali (Haji Shubrati) escapes British arrest and spends 15 years in exile in the holy city of Makkah."
  },
  {
    step: 6,
    location: "Faridpur / Patna, Bihar",
    arabicName: "فريدفور / بتنه",
    title: "Return and Continuation of the Legacy",
    description: "Haji Shubrati returns from Makkah, establishing a continuous educational and spiritual legacy in Bihar, carried forward by his descendants into the modern era."
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
