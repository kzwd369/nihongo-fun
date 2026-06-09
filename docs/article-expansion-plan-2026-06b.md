# 記事追加プロジェクト 第2弾 実行計画（2026-06b 着手 2026-06-08）

10記事を新規執筆し、5言語（en/es/zh-tw/th/id）へ展開する。**= 計 50記事**。
前回（20記事 / `article-expansion-plan-2026-06.md`）の実証済みフローを10記事規模にスケールしたもの。
**このドキュメントは後続セッションが単独で動けるよう自己完結させてある。** 各セッション開始時にこれを読み、該当フェーズのブリーフに従うこと。

配分: **onomatopoeia 4 / wasei-eigo 3 / anime-japanese 3**（バランス型・2026-06-08 確定）。
完成後の各collection本数: ono 58→**62** / wasei 88→**91** / anime 23→**26**。

---

## 0. 前提・ルール（全セッション共通）

- **言語**: en/es/zh-tw/th/id の5言語。**日本語マスター版は持たない**。`en` を原稿マスターとして先に完成 → 4言語へ翻訳。
- **格納先**: `sites/words/src/content/<collection>/<locale>/<slug>.md`
- **バッチ上限**（[[feedback_batch_size]] 厳守）: 1エージェント10〜11本 / 1セッション20本まで。本PJは各翻訳が10本=1エージェントで収まる。
- **トーンルール**: 断定NG・煽りNG。CLAUDE.md と content-writer のトーン規約に従う。「エロ系」表現は本サイト対象外。
- **翻訳QA重点**（[[feedback_translation_qa]]、特に id）: ①英語比較セクション省略 ②固有名詞欠落 ③UTF-8文字化け ④末尾punchline（Fun Fact等）削除 を必ずチェック。
- **各セッション末ゲート**: `qa-reviewer`（誤字/重複/トーン）＋ 原稿セッションは加えて `seo-strategist`（title/meta点検）を必ず通す。
- アフィCTA（Pimsleur/JapanesePod101）は **anime-japanese のみ・es除外**（[[project_affiliate]]）。レイアウト自動制御のため本文への追記は不要。今回の anime 3本も同方針。
- **YAML注意**（既知の破損パターン）: `englishMeaning`/`japaneseMeaning`/`metaDescription`/`title` の値が `"` で始まる、または animeAppearances の description 文中に半角コロン+スペース `: ` があると plain scalar が破綻。`>-` ブロックスカラー推奨。anime の `title`/`metaDescription` は二重引用符で囲む既存流儀に従う。

### スキーマ早見表（既存記事から踏襲・実物で確認済み）

| collection | 本文量 | 必須frontmatter特有キー |
|---|---|---|
| onomatopoeia | ~200語 | `type`(giongo/giseigo/gitaigo/gijougo/giyougo), `meaning`, `examples[3]`, `animeAppearances[2]`, `relatedWords[]` |
| wasei-eigo | ~500語 | `vsPattern`(same/different/unique), `originalEnglish`, `japaneseMeaning`, `englishMeaning`, `examples[3]`, `animeAppearances[2]`, `relatedWords[]` |
| anime-japanese | ~900語 | `title`, `metaDescription`, `keyPhrases[]`(japanese+romaji+meaning), `relatedArticles[]`, `relatedWaseiEigo[]`, `relatedOnomatopoeia[]` |

共通: `slug, locale, japanese, reading, romaji, jlpt, metaDescription, category, tags, draft:false, publishedAt`。
本文構成（en手本）: 導入見出し → 解説2〜3節 → `## Fun Fact`（ono/wasei）。anime は `## ...` 節 + 各 keyPhrase を `>` 引用で解説。
`reading` は全角カタカナ/ひらがな表記、`relatedWords` は新旧スラッグ混在可（**実在slugのみ参照**）。

---

## 1. セッション分割（全6セッション）

| # | Phase | セッション内容 | 本数 | 担当 |
|---|---|---|---|---|
| 0 | 準備 | 本計画＋ブリーフ保存（**完了 2026-06-08**） | — | — |
| A | 原稿 | onomatopoeia en ×4 ＋ wasei-eigo en ×3（計7・軽量寄り） | 7 | content-writer |
| B | 原稿 | anime-japanese en ×3（最重量・単独セッション） | 3 | content-writer |
| C | 翻訳 | 全10記事 → **es**（anime CTAはレイアウト非表示） | 10 | content-writer |
| D | 翻訳 | 全10記事 → **zh-tw**（繁体字・簡体字混入禁止） | 10 | content-writer |
| E | 翻訳 | 全10記事 → **th**（タイ語正書法・声調記号厳守） | 10 | content-writer |
| F | 翻訳 | 全10記事 → **id**（QA厚め・4パターン照合） | 10 | content-writer |
| G | 統合 | リンク検証・build・deploy・メモリ更新 | — | — |

> 翻訳は各言語1エージェント10本でバッチ上限内。A は原稿執筆のため軽量7本に留め、anime（重量）は B で単独。
> 進捗は末尾「進捗チェックリスト」に記録すること。

---

## 2. 記事ブリーフ

> 注: `examples` 本文・`metaDescription` 確定文・本文セクションは執筆セッションで content-writer が作成。
> ここでは方向性・確定スラッグ・カテゴリ（既存タクソノミーへマッピング済＝薄ページ回避）・相互リンク設計を定義する。

### 2-A. onomatopoeia（4本 / type・category 確定済み）

| slug | japanese | reading | romaji | type | category | jlpt | 切り口 | relatedWords（実在slug + 新規） |
|---|---|---|---|---|---|---|---|---|
| pittari | ぴったり | ぴったり | pittari | gitaigo | degree | N4 | ピッタリ合う・一致・時間ぴったり・サイズが合う | girigiri, kachikachi, sarasara |
| kachikachi | かちかち | かちかち | kachikachi | gitaigo | texture | N3 | 硬い・凍る・緊張で固まる（カチカチに緊張） | tsurutsuru, sarasara, korokoro |
| jinjin | じんじん | じんじん | jinjin | gijougo | body | N3 | ジンジン痛む・しびれ・じんわり熱を持つ痛み | zukizuki, shikushiku, gangan |
| korokoro | ころころ | ころころ | korokoro | gitaigo | action | N4 | 転がる・コロコロ変わる（意見/態度）・小動物の愛らしさ | gorogoro, pyonpyon, kachikachi |

**相互リンク補強**: `pittari` `kachikachi` は既存 `kotsukotsu.md` の relatedWords が参照中（=リンク切れ）→ 本PJで実体追加され**自動解消**。新規同士も繋ぐ（kachikachi↔korokoro）。
**差別化注意**: `korokoro` は既存 `gorogoro`（ゴロゴロ＝濁音・大きい/怠惰）と濁音ニュアンス差を本文で対比。`jinjin` は既存 `zukizuki`（ズキズキ＝鋭い拍動痛）との痛みの質差（じんじん＝鈍くしびれる）に触れる。

### 2-B. wasei-eigo（3本）

| slug | japanese | reading | originalEnglish | vsPattern | category | jlpt | englishMeaning（正しい英語） | 切り口 |
|---|---|---|---|---|---|---|---|---|
| complex | コンプレックス | コンプレックス | complex | different | personality | N2 | inferiority complex / insecurity / hang-up | 英語 complex は「複合・複雑」中立。日本語は「劣等感」限定の縮約誤用 |
| happy-end | ハッピーエンド | ハッピーエンド | happy end | different | entertainment | N3 | happy ending | 英語は ending（-ing）。和製は happy end と略す。物語批評語彙 |
| my-boom | マイブーム | マイブーム | my boom | unique | slang | N2 | （英語に等価なし。my personal craze / current obsession で説明） | 「今ハマっていること」。みうらじゅん造語の文化史。海外検索需要 |

各記事に「英語話者はこう言う」比較ブロック必須（翻訳でも省略しない）。
`my-boom` は vsPattern:unique → 「英語に直接対応語がない・日本発」軸で書く（white-day と同型）。`my-*` クラスタ（my-car/my-home/my-pace）と内部リンク相互化（Phase G で双方向化検討）。

### 2-C. anime-japanese（3本 / 最重量・単独セッション B）

各記事 `title`（en原稿で確定・二重引用符）＋ `metaDescription`（二重引用符）＋ `keyPhrases[]`（日本語フレーズ＋romaji＋meaning、5本前後）。
キーは `relatedArticles[]` / `relatedWaseiEigo[]` / `relatedOnomatopoeia[]` の3種（`relatedWords` ではない）。アフィCTA設置対象（es非表示・本文追記不要）。

| slug | category | テーマ | keyPhrases 候補（en執筆時に確定） | relatedArticles / relatedWaseiEigo / relatedOnomatopoeia |
|---|---|---|---|---|
| yandere-phrases | slang | ヤンデレ（病んだ愛）定番セリフ | ずっと一緒だよ / 私だけ見て / 他の子と話さないで / どこにも行かないで / 死んでも離さない | [tsundere-phrases, character-archetypes, love-confessions] / [] / [dokidoki, zawazawa] |
| idol-phrases | phrases | アイドル/ライブ定番（コール・ヲタ芸・MC） | みんなー！ / 一番好き / 会いに来てね / 最高の思い出 / ラストまで盛り上がっていこう | [catchphrases, reaction-words, slang-modern] / [talent, live-house] / [kirakira, wakuwaku] |
| manga-sfx | culture | 漫画の描き文字・効果音（擬音の視覚表現） | ドーン / ズキューン / シーン / ゴゴゴゴ / バキ | [reaction-words, battle-cries, catchphrases] / [] / [dokidoki, gangan, shiin] |

**差別化注意**:
- `yandere-phrases` は既存 `tsundere-phrases`（天邪鬼・照れ隠し）と対の関係＝「執着・独占」軸で被らせない。本文で対比導線を張る。
- `idol-phrases` は既存 `catchphrases` と被らせず「ライブ現場のコール/MC/ヲタ芸用語」に特化。`talent`（タレント）wasei記事へ橋渡し。
- `manga-sfx` は onomatopoeia コレクションへの**ブリッジ記事**＝「擬音語が漫画でどう描き文字になるか」。既存 `reaction-words` と役割分担（声に出すリアクション vs 紙面の描き文字）。

---

## 3. 各セッションの定型手順

### 原稿セッション（A/B）
1. 本ファイル＋該当 collection の既存en記事を1〜2本読み、フォーマット・トーンを把握（手本: ono=girigiri / wasei=talent / anime=tsundere-phrases）
2. `content-writer` でブリーフに沿って en 原稿を執筆（examples3本・本文・metaDescription・Fun Fact含む）
3. `relatedWords` / `keyPhrases` / `related*` をブリーフ通り設定、**参照先slugが実在するか確認**、`draft:false`、`publishedAt` は当日（2026-06-08 以降の実行日）
4. **ゲート**: `qa-reviewer` → `seo-strategist`。must-fix を反映
5. 進捗チェックリストを更新してセッション終了

### 翻訳セッション（C/D/E/F）
1. 本ファイル＋翻訳先言語の既存記事を1本読み、その言語のトーン・正書法を把握
2. en原稿10本を対象言語へ翻訳（`content-writer` 1エージェント10本）。**frontmatter は locale 変更のみ**＝機械値（japanese/reading/romaji/examples.japanese・reading/keyPhrases.japanese・romaji/jlpt/category/tags/slug/vsPattern/type）は据置、**人間可読フィールドのみ翻訳**（metaDescription/meaning/translation/englishMeaning/japaneseMeaning/title/keyPhrases.meaning/本文）
3. 言語別チェック: **zh-tw**=繁体字統一・簡体字混入ゼロ／**th**=声調記号・母音記号・結合文字／**id（F）特に**=英語比較セクション/固有名詞/文字化け/Fun Fact・punchline を1本ずつ照合
4. **ゲート**: `qa-reviewer`（4パターン重点）。must-fix 反映
5. 進捗チェックリスト更新

### 統合セッション（G）
1. 新規 `relatedWords`/`related*`/内部リンクが全解決するか検証（存在しないslug参照がないか）。既存 `kotsukotsu.md` の pittari/kachikachi 参照が解消したか確認
2. （任意）双方向リンク強化: `my-car`/`my-home`/`my-pace` の relatedWords に `my-boom` 追加（全5言語編集）
3. カテゴリページ・件数の反映確認
4. `cd sites/words && pnpm build && npx wrangler deploy`
5. [[project_status]] / [[project_article_expansion]] メモリ更新（ono 58→62 / wasei 88→91 / anime 23→26）

---

## 4. 進捗チェックリスト

- [x] Phase 0 準備（本ファイル保存・2026-06-08 完了）
- [x] A: onomatopoeia en ×4 ＋ wasei-eigo en ×3（2026-06-08 完了。pittari/kachikachi/jinjin/korokoro ＋ complex/happy-end/my-boom。QA→SEOゲート通過。must-fix反映: happy-end/my-boom romaji macron化(happī endo/mai būmu)・pittari の Cinderella枠→Doraemon差替＋全称断定除去・meta圧縮6本・happy-end relatedWords cream-soda→karaoke-box・tags既存タクソノミー寄せ。YAML修正: kachikachi の Kaguya-sama タイトル引用符化。build 1007ページ成功）
- [x] B: anime-japanese en ×3（2026-06-08 完了。yandere-phrases/idol-phrases/manga-sfx。各~900-940語。category: slang/phrases/culture。QA→SEOゲート通過（致命傷ゼロ）。must-fix反映: yandere本文 romaji誤記 Karanaide→Hanarenaide・idol romaji minna—!→minnā・manga-sfx Araki引用を伝聞化・meta3本160字以内に圧縮・idol/manga title に"Japanese"追加。build 1010ページ成功。**en原稿10本すべて完成・翻訳フェーズC以降へ**）
- [x] C: es ×10（2026-06-08 完了。content-writer 1エージェント10本。qa-reviewerゲート通過＝must-fixゼロ。QAのlocale欠落指摘は誤検出（en含め全ファイルにlocale在）。nice-to-have: korokoro の Band-Aid比喩を es「Celo」に置換—ラテンアメリカ中立化は任意、未対応で許容）
- [x] D: zh-tw ×10（2026-06-08 完了。content-writer 1エージェント10本。qa-reviewerゲート通過＝簡体字混入ゼロ・must-fixゼロ・全10本公開可。内部リンク /zh-tw/ 統一）
- [x] E: th ×10（2026-06-08 完了。content-writer 1エージェント10本。qa-reviewerゲート通過＝must-fixゼロ・全10本公開可。タイ語正書法/UTF-8文字化けなし・英語比較セクション/固有名詞/punchline全保持。englishMeaningは英語据え置き（after-service手本準拠）・japaneseMeaningのみタイ語化。korokoro末尾はBand-Aid→แพมเพิร์ส（パンパース）とタイ読者向けローカライズ＝nice-to-have対応済）
- [x] F: id ×10（QA厚め・2026-06-08 完了。content-writer 1エージェント10本。qa-reviewerゲート（4パターン精密照合）通過＝must-fixゼロ・全10本公開可。英語比較セクション/vs対比節（jinjin↔ずきずき・korokoro↔ゴロゴロ）/固有名詞（Freud/Adler/Miura Jun/Araki Hirohiko/Tezuka Osamu/年号1997）/UTF-8/末尾punchline 全保持。内部リンク/id/統一。englishMeaning英語据え置き・japaneseMeaningのみid化。「これまでで最もクリーン」評）
- [x] G: build & deploy & メモリ更新（2026-06-08 完了。リンク全解決検証OK＝MISSINGゼロ・kotsukotsu の pittari/kachikachi 参照解消確認。my-boom 被リンク双方向化＝my-car/my-home/my-pace の relatedWords に my-boom 追加・全5言語15ファイル。件数 ono62/wasei91/anime26 一致。build **1066ページ**成功・wrangler deploy 完了（本番反映 Version 274b5837）。[[project_status]]/[[project_article_expansion]]/MEMORY.md 更新済。**全フェーズ完走＝本PJ完了**）

### 完成本数トラッカー（現在 → 目標）
- onomatopoeia: 各言語 58 → **62**
- wasei-eigo: 各言語 88 → **91**
- anime-japanese: 各言語 23 → **26**
