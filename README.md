# 🌌 DreamDot

**DreamDot** is a next-generation social media marketplace that empowers creators to publish and monetize their art, writings, and thoughts in one unified platform. Whether you're a digital artist, indie author, blogger, or creative thinker — DreamDot offers the tools to connect, share, and earn from your creativity.

---

## 🚀 Features

### 👤 User & Creator Profiles
- Personal dashboards and public profile pages
- Follower system and content visibility controls

### 🖼️ Monetizable Content System
- Publish and monetize:
  - Digital art
  - Blogs & web novels
  - Audio/video content
- Payment models:
  - Pay-per-view
  - Subscription-based
  - One-time purchases

### 🧵 Social Interactions
- Like, comment, follow, and block
- Create and join user communities (Groups)

### 🔍 Smart Discovery
- Tag-based content browsing
- Trending, recent, and recommended feeds

### 📊 Analytics for Creators
- Engagement insights
- Earnings dashboard
- Follower growth metrics

---

## 🛠️ Tech Stack

| Layer         | Technologies                                                                 |
|---------------|------------------------------------------------------------------------------|
| **Frontend**  | Next.js, Tailwind CSS, Framer Motion, Ant Design                             |
| **Backend**   | Remix.js, GraphQL, Node.js                                                   |
| **Databases** | MongoDB (social/media data), PostgreSQL (user, items, audit logs)           |
| **ORM**       | Prisma ORM                                                                   |
| **Auth**      | JWT + Prisma Auth                                                            |
| **Storage**   | Firebase Storage / AWS S3 (for media)                                        |

---

## 🗃️ Database Overview

1. **Users Database**
   - Auth, profiles, user analytics

2. **Social Database**
   - Posts, comments, likes, follow/block actions

3. **Items Database**
   - Digital goods, transactions, reviews

4. **Groups Database**
   - Communities, memberships, discussions

5. **Audit Database**
   - Admin logs, system events, notifications

---

## ✨ Vision

> DreamDot is more than a platform — it’s a canvas for the dreamers. We believe in building a creative economy where expression meets ownership, and where your passion can power your livelihood.

---

## 💻 Local Development

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/dreamdot.git
cd dreamdot
```