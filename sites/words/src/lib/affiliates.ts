// アフィリエイト設定の一元管理
//
// 運用メモ:
// - url に実際のアフィリエイトリンクを入れる。空文字の間はそのサービスは描画されない（安全装置）。
// - enabled: false にすると locale を問わず非表示。
// - locales: その言語の記事でだけ表示する。en/zh-tw/th/id を対象、es は英語ベース教材の壁が大きいため除外。
// - 両サービスとも教材インターフェイスは基本「英語」。日本語が読める運営者向けの注記であり、
//   翻訳済み文言は「英語が読める学習者」を想定したトーンにしてある。

export type AffiliateLocale = 'en' | 'es' | 'zh-tw' | 'th' | 'id';

export interface AffiliateService {
  id: string;
  enabled: boolean;
  /** アフィリエイトリンク（要差し替え）。空文字なら描画しない。 */
  url: string;
  /** 表示対象の locale */
  locales: AffiliateLocale[];
  /** 強調色（カードのアクセント） */
  accent: string;
}

export interface AffiliateCopy {
  heading: string;
  body: string;
  cta: string;
  /** 広告・アフィリエイト表記（景表法/FTC対応） */
  note: string;
}

export const affiliateServices: AffiliateService[] = [
  {
    id: 'pimsleur',
    enabled: true,
    url: '', // TODO: Pimsleur のアフィリエイトリンクを設定
    locales: ['en', 'zh-tw', 'th', 'id'],
    accent: '#c2185b',
  },
  {
    id: 'japanesepod101',
    enabled: false, // 申請中。承認後に true + url を設定
    url: '', // TODO: JapanesePod101 のアフィリエイトリンクを設定
    locales: ['en', 'zh-tw', 'th', 'id'],
    accent: '#3949ab',
  },
];

// サービス×locale の文言。note は広告表記。
export const affiliateCopy: Record<string, Record<AffiliateLocale, AffiliateCopy>> = {
  pimsleur: {
    en: {
      heading: 'Want to actually speak Japanese?',
      body: "Pimsleur's audio-first method builds real conversation skills—so you learn how phrases like these are actually spoken.",
      cta: 'Try Pimsleur Japanese free',
      note: 'Affiliate link',
    },
    'zh-tw': {
      heading: '想真正開口說日語嗎？',
      body: 'Pimsleur 的音訊教學法專注於真實對話，讓你學會這些說法在實際情境中的發音與用法。',
      cta: '免費試聽 Pimsleur 日語',
      note: '廣告・聯盟連結',
    },
    th: {
      heading: 'อยากพูดภาษาญี่ปุ่นได้จริงไหม?',
      body: 'วิธีเรียนแบบเน้นเสียงของ Pimsleur ช่วยสร้างทักษะการสนทนาจริง ให้คุณออกเสียงและใช้สำนวนแบบนี้ได้อย่างเป็นธรรมชาติ',
      cta: 'ทดลองเรียน Pimsleur ภาษาญี่ปุ่นฟรี',
      note: 'ลิงก์พันธมิตร (โฆษณา)',
    },
    id: {
      heading: 'Ingin benar-benar bisa berbicara bahasa Jepang?',
      body: 'Metode audio Pimsleur membangun keterampilan percakapan nyata—agar kamu tahu cara ungkapan seperti ini benar-benar diucapkan.',
      cta: 'Coba Pimsleur Jepang gratis',
      note: 'Tautan afiliasi (iklan)',
    },
    es: {
      heading: '¿Quieres hablar japonés de verdad?',
      body: 'El método de audio de Pimsleur desarrolla habilidades de conversación reales para que aprendas cómo se dicen frases como estas.',
      cta: 'Prueba Pimsleur Japonés gratis',
      note: 'Enlace de afiliado',
    },
  },
  japanesepod101: {
    en: {
      heading: 'Learn Japanese with real lessons',
      body: 'JapanesePod101 turns vocab like this into full audio and video lessons taught by native speakers.',
      cta: 'Start free at JapanesePod101',
      note: 'Affiliate link',
    },
    'zh-tw': {
      heading: '用真正的課程學日語',
      body: 'JapanesePod101 由母語老師把這類詞彙變成完整的影音課程，從聽說練到實際運用。',
      cta: '前往 JapanesePod101 免費開始',
      note: '廣告・聯盟連結',
    },
    th: {
      heading: 'เรียนภาษาญี่ปุ่นด้วยบทเรียนจริง',
      body: 'JapanesePod101 เปลี่ยนคำศัพท์แบบนี้ให้เป็นบทเรียนเสียงและวิดีโอเต็มรูปแบบ สอนโดยเจ้าของภาษา',
      cta: 'เริ่มเรียนฟรีที่ JapanesePod101',
      note: 'ลิงก์พันธมิตร (โฆษณา)',
    },
    id: {
      heading: 'Belajar bahasa Jepang dengan pelajaran sungguhan',
      body: 'JapanesePod101 mengubah kosakata seperti ini menjadi pelajaran audio dan video lengkap dari penutur asli.',
      cta: 'Mulai gratis di JapanesePod101',
      note: 'Tautan afiliasi (iklan)',
    },
    es: {
      heading: 'Aprende japonés con lecciones reales',
      body: 'JapanesePod101 convierte vocabulario como este en lecciones completas de audio y vídeo con hablantes nativos.',
      cta: 'Empieza gratis en JapanesePod101',
      note: 'Enlace de afiliado',
    },
  },
};

/** 指定 locale で表示すべきサービス（有効・url あり・locale 対象）を返す。 */
export function getAffiliatesForLocale(locale: string): Array<{ service: AffiliateService; copy: AffiliateCopy }> {
  return affiliateServices
    .filter(s => s.enabled && s.url && s.locales.includes(locale as AffiliateLocale))
    .map(s => ({ service: s, copy: affiliateCopy[s.id][locale as AffiliateLocale] }))
    .filter(x => Boolean(x.copy));
}
