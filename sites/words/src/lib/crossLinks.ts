/**
 * Cross-pillar link recommender.
 *
 * Picks N entries from a candidate collection that are most relevant to a
 * source entry, using tag overlap and category similarity. Falls back to a
 * deterministic shuffle so every article always has cross-pillar links.
 */

export interface SourceEntry {
  slug: string;
  category: string;
  tags: string[];
}

export interface CandidateEntry {
  slug: string;
  category: string;
  tags: string[];
  /** Primary display string (japanese for word collections, title for articles) */
  primary: string;
  /** Secondary display string (meaning / category / etc.) */
  secondary: string;
}

export interface CrossLinkItem {
  slug: string;
  japanese: string;
  label: string;
}

/** Loose category equivalence across collections. */
const CATEGORY_ALIASES: Record<string, string[]> = {
  'daily-life': ['daily', 'daily-life', 'lifestyle'],
  'daily': ['daily', 'daily-life', 'lifestyle'],
  'food': ['food', 'cooking'],
  'culture': ['culture', 'tradition'],
  'work': ['work', 'business', 'social'],
  'business': ['work', 'business'],
  'education': ['education', 'school'],
  'fashion': ['fashion', 'clothing'],
  'entertainment': ['entertainment', 'media', 'anime'],
  'personality': ['personality', 'emotion', 'mental-state'],
  'emotion': ['emotion', 'personality', 'mental-state'],
  'social': ['social', 'work', 'manners'],
  'action': ['action', 'movement', 'sound'],
  'technology': ['technology', 'tech'],
  'tech': ['technology', 'tech'],
};

function categoryScore(a: string, b: string): number {
  if (a === b) return 3;
  const aliases = CATEGORY_ALIASES[a];
  if (aliases && aliases.includes(b)) return 2;
  return 0;
}

function tagScore(sourceTags: string[], candTags: string[]): number {
  const set = new Set(sourceTags);
  let overlap = 0;
  for (const t of candTags) if (set.has(t)) overlap++;
  if (overlap === 0) return 0;
  if (overlap === 1) return 2;
  if (overlap === 2) return 5;
  return 9;
}

/** Stable hash of a string → [0, 2^31). */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function pickCrossLinks(
  source: SourceEntry,
  candidates: CandidateEntry[],
  count: number,
): CrossLinkItem[] {
  if (candidates.length === 0) return [];

  const scored = candidates.map((c) => {
    const score = tagScore(source.tags, c.tags) + categoryScore(source.category, c.category);
    // Tiebreaker: deterministic per source × candidate so each article gets a
    // stable but varied selection (avoids every article showing the same N).
    const tiebreak = hash(source.slug + '|' + c.slug) / 0xffffffff;
    return { c, score, tiebreak };
  });

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.tiebreak - b.tiebreak;
  });

  return scored.slice(0, count).map(({ c }) => ({
    slug: c.slug,
    japanese: c.primary,
    label: c.secondary,
  }));
}
