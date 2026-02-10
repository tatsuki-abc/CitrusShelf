# CitrusShelf
# 📚 Reading Manager App

React + TypeScript で作成した、個人向けの読書管理Webアプリです。  
「積読の可視化」と「シリーズ単位での管理」に重点を置いています。

---

## ✨ 概要

Google Books API を用いて書籍を検索し、  
**積読（ToRead）／読了（Read）／本棚（Bookshelf）／統計（Analytics）**  
の各機能で読書状況を管理します。

SNS共有やレビュー投稿は行わず、  
**個人利用に特化したシンプルな読書管理**を目的としています。

---

## 🎯 想定ユーザー

- 月に 1〜5 冊程度読書する人
- シリーズ物の小説・漫画を読むことが多い人
- 読書記録を静かに管理したい人

---

## 🚫 非目標（初期）

- SNS機能・レビュー共有
- ユーザー認証・複数端末同期
- 公開ランキング機能

---

## 🛠 使用技術

### フロントエンド
- React
- TypeScript
- Vite
- React Router

### 状態管理・永続化
- Zustand
- LocalStorage

### 外部API
- Google Books API（書籍検索）
- OpenDB API（ISBNからシリーズ・巻数情報取得）

### 可視化
- Recharts（統計グラフ）

---

## 🔍 外部APIについて

### Google Books API
書籍検索に使用します。

取得例：
- タイトル
- 著者
- 概要
- サムネイル
- ISBN
- 発売日
- ページ数

※ 情報が欠損する場合があるため、UI側でのフォールバックを考慮しています。

### OpenDB API
ISBN が取得できた場合のみ使用し、以下を補足します。

- シリーズ名
- 巻数
- 出版社
- 書誌情報

---

## 📦 データモデル（Book）

```ts
type Book = {
  id: string
  title: string
  authors: string[]
  thumbnail?: string

  status: "toRead" | "reading" | "read" | "abandoned"

  series?: string
  volume?: number

  registeredAt: string
  readAt?: string
  rating?: number
  memo?: string

  shelves: string[]
}
