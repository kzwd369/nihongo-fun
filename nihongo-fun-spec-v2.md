# nihongo-fun.com 構築仕様書 v2.0

> Claude Code 司令塔+サブエージェント体制 / Phase 0 検証重視 / 台湾繁体字+スペイン語 先行

---

## 0. プロジェクト概要

- **サイト**: Nihongo Fun / nihongo-fun.com
- **目的**: 海外日本語学習者(アニメ・旅行・JLPT層)向け、和製英語+オノマトペ起点の多言語サイト
- **収益**: AdSense + 語学アプリアフィ + 将来Kindle
- **技術**: Astro + Content Collections + i18n / **Cloudflare Pages 確定**
- **言語戦略**: ソース=英語(マスター, 当面 noindex) / 公開=**zh-Hant(台湾)+ es** / Phase1 で ko→fr→en 解禁
- **Phase 0 規模**: 30記事 × 2言語 = 60ページで検証 → 勝ち型のみ横展開

## 1. 戦略の核(v1からの変更点)

### 1-1. なぜ台湾繁体字+スペイン語先行か
英語圏は Tofugu / Wanikani / Japanesepod101 が DR70+ で殴り合う飽和市場。新規ドメインで挑むのは Phase 0 の検証先として最悪。一方:
- **zh-Hant(台湾)**: 日本文化需要が世界最濃、競合は日本語ブログの中国語版程度、簡体字を避けて中国本土グレーゾーン回避、ユーザーのバンコク+アジア土地勘が活きる
- **es**: 中南米のアニメ人気が爆発成長中、供給が圧倒的不足、Tofugu級の競合不在
- 英語版は内部マスターとして存在、Phase1 で勝ち型確定後に投入

### 1-2. E-E-A-T(Experience)を最大武器化
ユーザー本人=43カ国旅・日本/バンコク拠点・愛国・古代史/宗教好き。これは Helpful Content Update 後の Google が最も評価する一次体験そのもの。**全記事に「現地で見たエピソード」or「旅で出会った台湾人/中南米人の反応」を最低1段落差し込む**ことを必須項目化。AI生成感の排除。

### 1-3. 競合分析を Agent 0 として最初に走らせる
原稿を1文字も書く前に、上位20サイトのコンテンツ構造・不足ポイント・バックリンクを洗い出し、差別化軸を `docs/positioning.md` に固定。

## 2. エージェント編成

### Agent 0: Competitive Researcher(★新規・最優先)
- 入力: ターゲット2言語のSERP上位20サイト
- 成果物: `docs/positioning.md`(競合不足ポイント / 差別化軸 / 勝てるキーワード50)
- これが終わるまで他エージェント全停止

### Agent A: Architect
- pnpm workspace + Astro + Content Collections + i18n(en/es/zh-tw、en は noindex 設定)
- Cloudflare Pages デプロイ設定
- shared-ui / og-generator / seo-utils

### Agent B: Content Writer
- 英語マスター原稿(600-900語、テンプレ8項目、Experience段落必須)
- Phase 0 は30記事のみ

### Agent C: SEO Optimizer
- frontmatter / JSON-LD(DefinedTerm + BreadcrumbList) / hreflang / sitemap分割

### Agent D: Translator
- en → zh-Hant(台湾) / en → es のみ
- **台湾華語に寄せる**(口語・固有名詞は台湾用法、香港語彙は不採用)
- 用語辞書 `docs/translation-glossary.json` 必須

### Agent E: SNS Strategist(v2.1 動画ゼロ構成)
**前提**: 本企画は「動画なしで回せること」がコンセプトの根幹。動画系SNS(TikTok / YouTube Shorts / Reels)は Phase 0 で全面禁止。AI動画生成系(HeyGen等)も2025年以降アルゴリズム的に死んでいるため明確に禁止項目とする。

**Phase 0 の4チャネル(全て動画なし・テキスト+静止画のみ)**:
1. **X(zh-Hant)** メイン: 1ワード=1投稿、1日1-2本、Buffer/Typefully で予約投稿、半年放置可
2. **X(es)** メイン: 同上、中南米時間帯で配信
3. **Threads(台湾)**: X(zh-Hant)投稿をそのまま転載、追加工数ほぼゼロ。台湾で爆伸び中のため必須
4. **Pinterest**: Satori 生成の OG画像をそのままピンに流用、語学学習者の単語カード保存文化を狙う。Architect段階で OG画像を Pinterest 比率(2:3)でも出せるよう設計に組み込むこと

**自動化方針**:
- Claude が記事から各SNS派生文を一括生成 → Buffer / Typefully / Pinterest API で予約投稿
- 投稿後は完全放置、月1回のみ反応をGSC/各SNS analytics で確認
- Instagram カルーセル / YouTube本編 は Phase 1 以降に検討

**英語圏SNS は Phase 0 では捨てる**(ターゲット言語と一致しないため)

### Agent F: QA Auditor
- Lighthouse 90+ / リンク切れ / a11y AA / 翻訳整合
- **Phase 0 は zh-Hant 10記事を Fiverr ネイティブレビュー($50程度)必須化**

### Agent G: Internal Link Architect(★新規)
- 30記事の内部リンクグラフ設計、ピラミッド構造を機械的に保証

### Agent H: Image/Asset Curator(★新規)
- ユーザー本人の旅行写真を `assets/personal/` に整理 → 一次素材として優先利用、不足分のみ Unsplash

## 3. 計測基盤(Phase 0 から必須)
GA4 + GSC(zh-Hant プロパティ + es プロパティ別建て) + Microsoft Clarity(無料ヒートマップ)。読了率が取れない原稿は「100点」と呼ばない。

## 4. 品質ゲート(8段階)
0. Researcher → 差別化軸確定
1. Architect → 2言語ルート200・CFビルド成功
2. Writer 5記事サンプル → ★ユーザー目視承認
3. SEO → メタ/JSON-LD/hreflang
4. Translator zh-Hant 5記事 → ★ユーザー+ Fiverr ネイティブ承認
5. Internal Link → ピラミッド完成
6. SNS → 台湾/中南米別素材完備
7. QA → Lighthouse 90+
8. ローンチ → Cloudflare本番 + GSC + Clarity

## 5. Phase 1 移行条件
Phase 0 公開後3ヶ月、GSC で **どちらかの言語が月間クリック500超** または **どちらかの記事が CTR 3%超**。条件達成側の型のみ ko → fr → en に展開。未達なら型を作り直し、規模を広げない。

## 6. ディレクトリ構造
v1 と同じ。ただし `sites/words/src/content/` 配下は **en / es / zh-tw のみ**(ko/fr は Phase 1)。`docs/positioning.md` `docs/dod/agent-*.md`(各エージェントの Definition of Done を分離)を追加。

## 7. Conductor 最初の指令(コピペ用)
```
あなたは Conductor。docs/spec-v2.md を熟読せよ。
最初に Agent 0(Competitive Researcher)を起動し、zh-Hant と es の
SERP上位20サイトを調査、docs/positioning.md を生成せよ。
これが完了するまで他エージェントは起動禁止。
完了後ユーザーに報告し、差別化軸の承認を得てから Architect へ進め。
推測で進めるな。
```

---
*v2.1 / 2026-04-11 / 検証→拡大の順序を死守 / SNSは動画ゼロ4チャネル*
