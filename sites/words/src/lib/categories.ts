/**
 * Shared category labels and metadata for hub pages.
 *
 * Only categories with `MIN_HUB_COUNT` entries get a hub page generated.
 * This avoids thin hubs that would dilute internal link equity.
 */

export const MIN_HUB_COUNT = 3;

export type Locale = 'en' | 'es' | 'zh-tw' | 'th' | 'id';

/** Display labels per locale, per category. Falls back to English then to slug. */
const LABELS: Record<Locale, Record<string, string>> = {
  en: {
    'daily-life': 'Daily Life',
    fashion: 'Fashion',
    food: 'Food',
    transportation: 'Transportation',
    business: 'Business',
    work: 'Work',
    technology: 'Technology',
    stationery: 'Stationery',
    housing: 'Housing',
    entertainment: 'Entertainment',
    emotion: 'Emotion',
    texture: 'Texture',
    sound: 'Sound',
    animals: 'Animals',
    action: 'Action',
    slang: 'Slang',
    phrases: 'Phrases',
    social: 'Social',
    daily: 'Daily Life',
    culture: 'Culture',
    grammar: 'Grammar',
  },
  es: {
    'daily-life': 'Vida Diaria',
    fashion: 'Moda',
    food: 'Comida',
    transportation: 'Transporte',
    business: 'Negocios',
    work: 'Trabajo',
    technology: 'Tecnología',
    stationery: 'Papelería',
    housing: 'Vivienda',
    entertainment: 'Entretenimiento',
    emotion: 'Emoción',
    texture: 'Textura',
    sound: 'Sonido',
    animals: 'Animales',
    action: 'Acción',
    slang: 'Argot',
    phrases: 'Frases',
    social: 'Social',
    daily: 'Vida Diaria',
    culture: 'Cultura',
    grammar: 'Gramática',
  },
  'zh-tw': {
    'daily-life': '日常生活',
    fashion: '時尚穿搭',
    food: '飲食',
    transportation: '交通工具',
    business: '商業',
    work: '工作',
    technology: '科技',
    stationery: '文具',
    housing: '居住',
    entertainment: '娛樂',
    emotion: '情緒',
    texture: '質感',
    sound: '聲音',
    animals: '動物',
    action: '動作',
    slang: '俚語',
    phrases: '常用語句',
    social: '社交',
    daily: '日常生活',
    culture: '文化',
    grammar: '文法',
  },
  th: {
    'daily-life': 'ชีวิตประจำวัน',
    fashion: 'แฟชั่น',
    food: 'อาหาร',
    transportation: 'การเดินทาง',
    business: 'ธุรกิจ',
    work: 'การทำงาน',
    technology: 'เทคโนโลยี',
    stationery: 'เครื่องเขียน',
    housing: 'ที่อยู่อาศัย',
    entertainment: 'บันเทิง',
    emotion: 'อารมณ์',
    texture: 'พื้นผิวและสัมผัส',
    sound: 'เสียง',
    animals: 'สัตว์',
    action: 'การกระทำ',
    slang: 'คำสแลง',
    phrases: 'วลีสำนวน',
    social: 'สังคม',
    daily: 'ชีวิตประจำวัน',
    culture: 'วัฒนธรรม',
    grammar: 'ไวยากรณ์',
  },
  id: {
    'daily-life': 'Kehidupan Sehari-hari',
    fashion: 'Mode',
    food: 'Makanan',
    transportation: 'Transportasi',
    business: 'Bisnis',
    work: 'Pekerjaan',
    technology: 'Teknologi',
    stationery: 'Alat Tulis',
    housing: 'Hunian',
    entertainment: 'Hiburan',
    emotion: 'Emosi',
    texture: 'Tekstur',
    sound: 'Suara',
    animals: 'Hewan',
    action: 'Aksi',
    slang: 'Bahasa Gaul',
    phrases: 'Frasa',
    social: 'Sosial',
    daily: 'Kehidupan Sehari-hari',
    culture: 'Budaya',
    grammar: 'Tata Bahasa',
  },
};

export function categoryLabel(locale: string, category: string): string {
  const l = locale as Locale;
  return LABELS[l]?.[category] || LABELS.en[category] || titleCase(category);
}

function titleCase(s: string): string {
  return s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export type Collection = 'wasei-eigo' | 'onomatopoeia' | 'anime-japanese';

/** Per-collection intro template. {category} replaced with localized label, {n} with count. */
const INTROS: Record<Locale, Record<Collection, string>> = {
  en: {
    'wasei-eigo': 'Wasei-eigo in the {category} category — {n} words that look English but mean something completely different in Japanese.',
    'onomatopoeia': 'Japanese onomatopoeia for {category} — {n} sound and feeling words you\'ll hear all the time.',
    'anime-japanese': '{category} in anime — {n} guides to the phrases, slang, and expressions you\'ll hear in your favorite shows.',
  },
  es: {
    'wasei-eigo': 'Wasei-eigo en la categoría {category} — {n} palabras que parecen inglés pero significan algo completamente diferente en japonés.',
    'onomatopoeia': 'Onomatopeyas japonesas de {category} — {n} palabras de sonido y sensación que escucharás todo el tiempo.',
    'anime-japanese': '{category} en el anime — {n} guías sobre las frases, jerga y expresiones que oirás en tus series favoritas.',
  },
  'zh-tw': {
    'wasei-eigo': '{category}類別的和製英語 — 共 {n} 個看起來像英文，意思卻完全不同的詞彙。',
    'onomatopoeia': '{category}相關的日語擬聲擬態詞 — {n} 個你經常會聽到的聲音與感覺詞彙。',
    'anime-japanese': '動漫裡的{category} — {n} 篇深入解析動漫中常見的台詞、俚語與表達方式。',
  },
  th: {
    'wasei-eigo': 'วาเซอิ-เอโกะหมวด {category} — {n} คำที่ดูเหมือนภาษาอังกฤษแต่ความหมายต่างกันโดยสิ้นเชิงในภาษาญี่ปุ่น',
    'onomatopoeia': 'คำเลียนเสียงญี่ปุ่นหมวด {category} — {n} คำเสียงและความรู้สึกที่คุณจะได้ยินบ่อยมาก',
    'anime-japanese': '{category} ในอนิเมะ — {n} บทความเจาะลึกวลี คำสแลง และสำนวนที่คุณจะได้ยินในเรื่องโปรด',
  },
  id: {
    'wasei-eigo': 'Wasei-eigo kategori {category} — {n} kata yang terlihat seperti bahasa Inggris tapi artinya benar-benar berbeda dalam bahasa Jepang.',
    'onomatopoeia': 'Onomatope Jepang untuk {category} — {n} kata bunyi dan perasaan yang sering kamu dengar.',
    'anime-japanese': '{category} di anime — {n} panduan tentang frasa, bahasa gaul, dan ekspresi yang kamu dengar di serial favoritmu.',
  },
};

export function categoryIntro(locale: string, collection: Collection, category: string, count: number): string {
  const l = (locale in INTROS ? locale : 'en') as Locale;
  const tpl = INTROS[l][collection];
  return tpl.replace('{category}', categoryLabel(locale, category)).replace('{n}', String(count));
}

const CATEGORY_HUB_LABEL: Record<Locale, string> = {
  en: 'Browse by category',
  es: 'Explorar por categoría',
  'zh-tw': '依分類瀏覽',
  th: 'เลือกดูตามหมวด',
  id: 'Telusuri berdasarkan kategori',
};

export function browseByCategoryLabel(locale: string): string {
  const l = (locale in CATEGORY_HUB_LABEL ? locale : 'en') as Locale;
  return CATEGORY_HUB_LABEL[l];
}
