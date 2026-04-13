import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const locales = ['en', 'es', 'zh-tw'] as const;
const localeEnum = z.enum(locales);

/** Shared fields across all word-type collections */
const wordBaseSchema = z.object({
  /** URL-safe slug (e.g. "mansion") — same across locales */
  slug: z.string(),
  locale: localeEnum,

  /** The word in Japanese script */
  japanese: z.string(),
  /** Hiragana / katakana reading */
  reading: z.string(),
  /** Romaji for pronunciation */
  romaji: z.string(),

  /** JLPT level (N5–N1) */
  jlpt: z.enum(['N5', 'N4', 'N3', 'N2', 'N1']).optional(),

  /** Short one-line description for SEO meta */
  metaDescription: z.string(),

  /** Category within the collection (e.g. "housing", "food", "tech") */
  category: z.string(),
  /** Tags for filtering / related words */
  tags: z.array(z.string()).default([]),

  /** Publish status */
  draft: z.boolean().default(false),
  /** ISO date string */
  publishedAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

/** Wasei-eigo specific fields */
const waseiEigoSchema = wordBaseSchema.extend({
  /**
   * VS comparison pattern:
   * - "different" (Pattern B): same word, different meaning → two illustrations (mansion, salaryman)
   * - "same" (Pattern A): same object, different name → one illustration (consent/outlet, note-pasokon/laptop)
   */
  /**
   * VS comparison pattern:
   * - "different" (Pattern B): same word, different meaning → two illustrations (mansion)
   * - "same" (Pattern A): same object, different name → hero illustration only (consent, note-pasokon)
   * - "unique" (Pattern C): word doesn't exist in English → hero illustration + "not English" badge (salaryman, arubaito)
   */
  vsPattern: z.enum(['same', 'different', 'unique']).default('different'),

  /** The original English word(s) it derives from */
  originalEnglish: z.string(),
  /** What it actually means in Japanese */
  japaneseMeaning: z.string(),
  /** What the English word actually means */
  englishMeaning: z.string(),

  /** Example sentences */
  examples: z.array(z.object({
    japanese: z.string(),
    reading: z.string(),
    translation: z.string(),
  })).default([]),

  /** Anime/manga appearances */
  animeAppearances: z.array(z.object({
    title: z.string(),
    description: z.string(),
  })).default([]),

  /** Related wasei-eigo slugs for internal linking */
  relatedWords: z.array(z.string()).default([]),
});

/** Onomatopoeia specific fields */
const onomatopoeiaSchema = wordBaseSchema.extend({
  /** Type classification */
  type: z.enum(['giongo', 'giseigo', 'gitaigo', 'giyougo', 'gijougo']),

  /** The sensation/meaning it conveys */
  meaning: z.string(),

  /** Example sentences */
  examples: z.array(z.object({
    japanese: z.string(),
    reading: z.string(),
    translation: z.string(),
  })).default([]),

  /** Anime/manga appearances */
  animeAppearances: z.array(z.object({
    title: z.string(),
    description: z.string(),
  })).default([]),

  relatedWords: z.array(z.string()).default([]),
});

/** Anime Japanese article fields */
const animeJapaneseSchema = z.object({
  slug: z.string(),
  locale: localeEnum,
  title: z.string(),
  metaDescription: z.string(),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  publishedAt: z.string().optional(),
  updatedAt: z.string().optional(),

  /** Key phrases displayed as visual cards */
  keyPhrases: z.array(z.object({
    japanese: z.string(),
    romaji: z.string(),
    meaning: z.string(),
  })).default([]),

  /** Related article slugs */
  relatedArticles: z.array(z.string()).default([]),
  /** Related wasei-eigo / onomatopoeia slugs for cross-pillar linking */
  relatedWaseiEigo: z.array(z.string()).default([]),
  relatedOnomatopoeia: z.array(z.string()).default([]),
});

/** Generate unique ID from file path: "zh-tw/mansion.md" → "zh-tw/mansion" */
const generateId = ({ entry }: { entry: string }) => {
  return entry.replace(/\.(md|mdx)$/, '');
};

export const collections = {
  'wasei-eigo': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/wasei-eigo', generateId }),
    schema: waseiEigoSchema,
  }),
  'onomatopoeia': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/onomatopoeia', generateId }),
    schema: onomatopoeiaSchema,
  }),
  'anime-japanese': defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/anime-japanese', generateId }),
    schema: animeJapaneseSchema,
  }),
};
