# CLAUDE.md

## 対話・出力ルール

- 対話は必ず日本語で行う
- 質問には指定がない限り短い文章で回答
- 「鋭い指摘です」などの感想・相槌を省き、結論から簡潔に回答
- 長文エラーはそのまま出力せず、重要部分のみ抜粋してエラー原因と対処法を簡潔に伝える

## デプロイ

- ホスティング: Cloudflare Workers（静的サイト）
- ドメイン: https://nihongo-fun.com
- デプロイ手順: `cd sites/words && pnpm build && npx wrangler deploy`
