# 記事追加プロジェクト 実行計画（2026-06 着手）

20記事を新規執筆し、5言語（en/es/zh-tw/th/id）へ展開する。
**このドキュメントは後続セッションが単独で動けるよう自己完結させてある。**
各セッション開始時にこのファイルを読み、該当フェーズのブリーフに従うこと。

---

## 0. 前提・ルール（全セッション共通）

- **言語**: en/es/zh-tw/th/id の5言語。**日本語マスター版は持たない**。`en` を原稿マスターとして先に完成 → 4言語へ翻訳。
- **格納先**: `sites/words/src/content/<collection>/<locale>/<slug>.md`
- **バッチ上限**（[[feedback_batch_size]] 厳守）: 1エージェント10〜11本 / 1セッション20本まで。超えたら次セッションへ引き継ぐ。
- **トーンルール**: 断定NG・煮りNG。CLAUDE.md と content-writer のトーン規約に従う。
- **翻訳QA重点**（[[feedback_translation_qa]]、特に id）: ①英語比較セクション省略 ②固有名詞欠落 ③UTF-8文字化け ④末尾punchline削除 を必ずチェック。
- **各セッション末ゲート**: `qa-reviewer`（誤字/重複/トーン）＋ `seo-strategist`（title/meta点検）を必ず通す。
- アフィCTA（Pimsleur/JapanesePod101）は **anime-japanese のみ・es除外**（[[project_affiliate]]）。今回の anime 5本も同方針。

### スキーマ早見表（既存記事から踏襲）

| collection | 本文量 | 必須frontmatter特有キー |
|---|---|---|
| onomatopoeia | ~200語 | `type`(gijougo/giongo/giseigo/gitaigo/giyougo), `meaning`, `examples[3]`, `animeAppearances[2]`, `relatedWords[]` |
| wasei-eigo | ~500語 | `vsPattern`(same/different/unique), `originalEnglish`, `japaneseMeaning`, `englishMeaning`, `examples[3]` |
| anime-japanese | ~900語 | `title`, `keyPhrases[]`（最重量・単独セッション） |

共通: `slug, locale, japanese, reading, romaji, jlpt, metaDescription, category, tags, draft:false, publishedAt`

---

## 1. セッション分割（全9セッション）

| # | Phase | セッション内容 | 本数 | 担当 |
|---|---|---|---|---|
| 0 | 準備 | 本計画＋ブリーフ保存（**完了**） | — | — |
| A | 原稿 | onomatopoeia en 執筆 | 8 | content-writer |
| B | 原稿 | wasei-eigo en 執筆 | 7 | content-writer |
| C | 原稿 | anime-japanese en 執筆（最重量・単独） | 5 | content-writer |
| D | 翻訳 | 全20記事 → **es** | 20 | content-writer |
| E | 翻訳 | 全20記事 → **zh-tw** | 20 | content-writer |
| F | 翻訳 | 全20記事 → **th** | 20 | content-writer |
| G | 翻訳 | 全20記事 → **id**（QA厚め） | 20 | content-writer |
| H | 統合 | リンク検証・build・deploy・メモリ更新 | — | — |

進捗は末尾「進捗チェックリスト」に記録すること。

---

## 2. 記事ブリーフ

> 注: `examples` 本文・`metaDescription` 確定文・本文セクションは執筆セッションで content-writer が作成。
> ここでは方向性・確定スラッグ・相互リンク設計を定義する。`reading` は全角カタカナ表記、`relatedWords` は新旧スラッグ混在可。

### 2-A. onomatopoeia（8本 / type・category 確定済み）

| slug | japanese | romaji | type | category | jlpt | 切り口 | relatedWords |
|---|---|---|---|---|---|---|---|
| girigiri | ぎりぎり | girigiri | gitaigo | degree | N3 | 時間/限界スレスレ。日常頻出 | harahara, batabata, kotsukotsu |
| pokapoka | ぽかぽか | pokapoka | gitaigo | weather | N3 | 暖かい陽気・体が温まる | fuwafuwa, suyasuya, kirakira |
| punpun | ぷんぷん | punpun | gijougo | emotion | N4 | プリプリ怒る | iraira, mukamuka, nikoniko |
| waiwai | わいわい | waiwai | giseigo | atmosphere | N3 | 賑やか・大勢の声。字幕頻出 | wakuwaku, nikoniko, gangan |
| zawazawa | ざわざわ | zawazawa | giseigo | sound | N3 | ざわめき＋不穏。ネットミーム | harahara, sowasowa, shiin |
| meromero | めろめろ | meromero | gijougo | emotion | N2 | 夢中・骨抜き。恋愛系 | dokidoki, fuwafuwa, ukiuki |
| kuyokuyo | くよくよ | kuyokuyo | gijougo | mental-state | N3 | くよくよ悩む | shikushiku, bonyari, iraira |
| bishobisho | びしょびしょ | bishobisho | gitaigo | texture | N3 | ずぶ濡れ | zaazaa, tsurutsuru, sarasara |

相互リンク補強: 新規同士も繋ぐ（例: punpun↔iraira既存、kuyokuyo↔shikushiku既存、bishobisho↔zaazaa既存、meromero↔dokidoki既存）。`zawazawa` は giseigo/gijougo 両義を本文で触れる。

### 2-B. wasei-eigo（7本）

| slug | japanese | originalEnglish | vsPattern | category | jlpt | englishMeaning（正しい英語） | 切り口 |
|---|---|---|---|---|---|---|---|
| talent | タレント | talent | different | entertainment | N3 | TV personality / celebrity | 「才能」とのギャップ誤用が強い |
| catch-ball | キャッチボール | catch ball | different | sports | N3 | play catch | 「対話・意思疎通」の比喩用法も解説 |
| silver-seat | シルバーシート | silver seat | different | daily-life | N3 | priority seat / courtesy seat | 優先席。文化解説と好相性 |
| image-change | イメチェン | image change | different | fashion | N2 | makeover / image makeover | 略語パターン（イメージチェンジ→イメチェン） |
| magic-tape | マジックテープ | magic tape | different | daily-life | N3 | velcro / hook-and-loop fastener | 商標の一般名詞化 |
| pocket-bell | ポケベル | pocket bell | different | technology | N2 | pager / beeper | レトロ文化史。ポケベル→ポケベル文化 |
| white-day | ホワイトデー | white day | unique | culture | N3 | （英語に等価なし・日本発） | 3/14のお返し文化。海外検索需要 |

各記事に「英語話者はこう言う」比較ブロック必須（翻訳でも省略しない）。`white-day` は vsPattern:unique なので「英語に対応語がない」軸で書く。

### 2-C. anime-japanese（5本 / 最重量・単独セッション）

各記事 `title`（en原稿で確定）＋ `keyPhrases[]`（日本語フレーズ＋romaji＋meaning）。アフィCTA設置（es除外）。

| slug | category | テーマ | keyPhrases 候補（en執筆時に確定） |
|---|---|---|---|
| chuunibyou | slang | 中二病フレーズ | 我が右手に〜/闇の力/封印されし/邪気眼/くっ…静まれ |
| tsundere-phrases | archetypes | ツンデレ定番 | べ、別に〜のためじゃ/勘違いしないでよね/バカじゃないの/うるさいうるさい |
| senpai-kohai | school | 先輩・後輩呼称と上下関係 | 先輩/後輩/〜さん付け/タメ口/敬語（honorifics補完） |
| nakama-friendship | slang | 仲間・友情（少年漫画） | 仲間/信じてる/諦めない/絆/守る |
| mecha-robot | scifi | メカ・ロボ出撃用語 | 出撃/発進/合体/起動/システムオールグリーン |

差別化注意: `tsundere-phrases` は既存 `love-confessions` と被らせない（告白でなく天邪鬼セリフ軸）。`senpai-kohai` は既存 `honorifics` を補完（敬称でなく上下関係の運用軸）。`nakama-friendship` は既存 `battle-cries` と連携・重複回避。`mecha-robot` は既存 `transformations` と連携。

---

## 3. 各セッションの定型手順

### 原稿セッション（A/B/C）
1. このファイル＋該当 collection の既存en記事を1〜2本読み、フォーマット・トーンを把握
2. `content-writer` でブリーフに沿って en 原稿を執筆（examples3本・本文・metaDescription含む）
3. `relatedWords` / `keyPhrases` をブリーフ通り設定、`draft:false`、`publishedAt` は当日
4. **ゲート**: `qa-reviewer` → `seo-strategist`。指摘を反映
5. このファイルの進捗チェックリストを更新してセッション終了

### 翻訳セッション（D/E/F/G）
1. このファイル＋翻訳先言語の既存記事を1本読み、その言語のトーンを把握
2. en原稿20本を対象言語へ翻訳（`content-writer`、1エージェント10本×2）
3. **id（G）は特に**: 英語比較セクション/固有名詞/文字化け/punchline を1本ずつ照合
4. **ゲート**: `qa-reviewer`（4パターン重点）
5. 進捗チェックリスト更新

### 統合セッション（H）
1. 新規 `relatedWords`/内部リンクが全解決するか検証（存在しないslug参照がないか）
2. カテゴリページ・件数の反映確認
3. `cd sites/words && pnpm build && npx wrangler deploy`
4. [[project_status]] / [[project_indonesian_launch]] メモリ更新（各collection本数: wasei 81→88, ono 50→58, anime 18→23）

---

## 4. 進捗チェックリスト

- [x] Phase 0 準備（本ファイル保存・2026-06-01 完了）
- [x] A: onomatopoeia en ×8（2026-06-01 完了。girigiri/pokapoka/punpun/waiwai/zawazawa/meromero/kuyokuyo/bishobisho。QA→SEOゲート通過・build成功。deploy未／翻訳はPhase D以降）
- [x] B: wasei-eigo en ×7（2026-06-01 完了。talent/catch-ball/silver-seat/image-change/magic-tape/pocket-bell/white-day。white-dayのみvsPattern:unique。全記事に英語比較ブロック有。QA→SEOゲート通過（must-fix反映：meta圧縮5本・作品名/Company表記/white-day断定緩和・YAMLコロン修正）・build成功890ページ。deploy未／翻訳はPhase D以降）
- [x] C: anime-japanese en ×5（2026-06-01 完了。chuunibyou/tsundere-phrases/senpai-kohai/nakama-friendship/mecha-robot。各~900-1150語。category: slang/slang/social/slang/action（薄いカテゴリページ回避のため既存タクソノミーへマッピング）。QA→SEOゲート通過（must-fix反映：mecha romaji誤記3件 meirei/sentou/hosoku・配置につく修正、title 5本短縮、tsundere/senpai 重複引用差替 Toradora/My Senpai Is Annoying、nakama romaji統一）・build成功900ページ。senpai-kohai は slug据置・本文は正romaji kouhai維持。deploy未／翻訳はPhase D以降）
- [x] D: es ×20（2026-06-01 完了。ono8/wasei7/anime5。content-writer 2エージェント=10+10で翻訳。frontmatter は locale:es 変更のみ・翻訳は人間可読フィールドのみ。QAゲート通過（合格minor・must-fixゼロ）。反映：chuunibyou「静まれ」を cálmate→detente に3箇所統一（停止ニュアンス保持）。anime CTA は es 非表示＝レイアウト処理のため本文に追記なし。pnpm build 成功924ページ・es新記事HTML生成確認。deploy未／統合はPhase H）
- [x] E: zh-tw ×20（2026-06-01 完了。ono8/wasei7/anime5。content-writer 2エージェント=10+10（①ono8+wasei2 ②wasei5+anime5）で翻訳。frontmatter は locale:zh-tw 変更のみ・tags据置・翻訳は人間可読フィールドのみ。繁体字（台湾華語）統一・簡体字混入ゼロ。QAゲート通過（致命傷ゼロ）。must-fix反映2件：image-change作品名「我太受歡迎了該怎麼辦？」に修正、tsundere-phrases に love-confessions 内部リンク誘導文を追加（en88行相当の欠落補完）。検討余地1件も反映：pocket-bell作品名「麻辣教師GTO」に修正。white-day は vsPattern:unique 論旨保持。anime CTA は zh-tw 表示対象だがレイアウト自動制御のため本文追記なし。pnpm build 成功948ページ。deploy未／統合はPhase H）
- [x] F: th ×20（2026-06-01 完了。ono8/wasei7/anime5。content-writer 2エージェント=10+10（①ono8+wasei2 ②wasei5+anime5）で翻訳。frontmatter は locale:th 変更のみ・機械値/日本語フィールド据置・翻訳は人間可読フィールドのみ。タイ語正書法（声調記号・母音記号・結合文字）厳守・文字化けゼロ。QAゲート通過（公開ブロックゼロ）。must-fix反映2件：tsundere-phrases 本文カナ誤記 จูนเดเระ→ซึนเดเระ、silver-seat metaDescription 転写 ชีโตะ→ซีโตะ。wasei7本の英語比較ブロック保持・white-day vsPattern:unique 論旨保持・anime keyPhrases日本語/romaji全保持・固有名詞欠落なし（pocket-bell数字コード0840等含む）・Fun Fact全保持。内部リンクは /th/ に正しく変換。anime CTA は th 表示対象だがレイアウト自動制御のため本文追記なし。pnpm build 成功972ページ・th新記事HTML生成確認。deploy未／統合はPhase H）
- [x] G: id ×20（2026-06-01 完了。ono8/wasei7/anime5。content-writer 2エージェント=10+10（①ono8+wasei2 talent/catch-ball ②wasei5+anime5）で翻訳。frontmatter は locale:id 変更のみ・機械値/日本語フィールド/examples.japanese-reading/keyPhrases.japanese-romaji 据置・翻訳は人間可読フィールドのみ。QAゲート通過（致命傷ゼロ・must-fixゼロ）。検討余地1件のみ反映：talent.md:40 の「cukup cukup」重複→「cukup」に圧縮。wasei7本の英語比較ブロック全保持・white-day vsPattern:unique「英語に等価語なし・日本発」論旨保持・anime keyPhrases日本語/romaji全保持・固有名詞欠落なし（pocket-bell数字コード0840/0906/14106/4649含む）・Fakta Menarik全保持・UTF-8文字化けゼロ。anime CTA は id 表示対象だがレイアウト自動制御のため本文追記なし。deploy未／統合はPhase H）
- [x] H: build & deploy & メモリ更新（2026-06-01 完了。件数検証OK＝ono58/wasei88/anime23×5言語、新規20slug×5言語=100記事全揃い。新規記事の相互リンク参照は全解決（未解決は既存kotsukotsu.mdのpittari/kachikachi 2件のみ＝非ブロッカー）。pnpm build 成功996ページ・エラーゼロ。npx wrangler deploy 成功（562ファイル・本番反映済み Version c1936704）。project_status メモリ更新済み。**プロジェクト完了**）

### 完成本数トラッカー（目標 / 現在）
- onomatopoeia: 各言語 50 → **58**
- wasei-eigo: 各言語 81 → **88**
- anime-japanese: 各言語 18 → **23**
