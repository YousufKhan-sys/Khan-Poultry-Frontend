# Graph Report - Khan Poultry  (2026-09-19)

## Corpus Check
- 128 files · ~3,432,921 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: .avif 4, (none) 3, .db 1)

## Summary
- 678 nodes · 1482 edges · 42 communities (29 shown, 11 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9ee749bc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- app/page.tsx
- cart.ts
- dependencies
- [slug]/page.tsx
- schema.ts
- getDb
- callback/route.ts
- compilerOptions
- package.json
- seed.ts
- ProductGrid.tsx
- Feedback.tsx
- scripts
- Khan's Poultry API Documentation
- drizzle-kit
- Deployment Guide
- fetch-product-images.py
- validation.ts
- session.ts
- DirectionShowcase.tsx
- data.ts
- frontend/README.md
- AGENTS.md
- frontend/AGENTS.md
- Khan Poultry Media Download Summary
- Khan Poultry Media Collection
- AboutUs.tsx
- graphify.js
- eslint.config.mjs
- postcss.config.mjs
- opencode.json
- Contact.tsx
- Khan Poultry Product Image Analysis
- Khan Poultry — Product Image Refresh
- Marquee.tsx
- Product image credits
- _probe-clean.js
- probe-tabs.js
- audit-prod1.js

## God Nodes (most connected - your core abstractions)
1. `getDb()` - 72 edges
2. `ok()` - 50 edges
3. `handleError()` - 50 edges
4. `ApiError` - 36 edges
5. `drizzle-orm` - 26 edges
6. `requirePermission()` - 24 edges
7. `react` - 18 edges
8. `createOrder()` - 18 edges
9. `compilerOptions` - 16 edges
10. `getIp()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `AdminSettingsPage()` --calls--> `requirePermission()`  [EXTRACTED]
  frontend/src/app/admin/settings/page.tsx → frontend/src/lib/auth/session.ts
- `clearCart()` --calls--> `getDb()`  [EXTRACTED]
  frontend/src/lib/cart.ts → frontend/src/lib/db/index.ts
- `SignedInView()` --calls--> `money()`  [EXTRACTED]
  frontend/src/app/account/page.tsx → frontend/src/lib/catalog-format.ts
- `AdminCustomersPage()` --calls--> `requirePermission()`  [EXTRACTED]
  frontend/src/app/admin/customers/page.tsx → frontend/src/lib/auth/session.ts
- `AdminCustomersPage()` --calls--> `getDb()`  [EXTRACTED]
  frontend/src/app/admin/customers/page.tsx → frontend/src/lib/db/index.ts

## Import Cycles
- None detected.

## Communities (42 total, 11 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, drizzle-kit, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, tsx, @types/better-sqlite3 (+4 more)

### Community 1 - "app/page.tsx"
Cohesion: 0.17
Nodes (8): CATES, Hero(), Instagram(), POSTS, Partners, Stats(), Testimonials(), STATS

### Community 2 - "cart.ts"
Cohesion: 0.10
Nodes (27): GET(), POST(), Detail, addItems(), CART_TOKEN_COOKIE, CartLineView, clearCart(), COOKIE_OPTS (+19 more)

### Community 3 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, bcryptjs, better-sqlite3, date-fns, drizzle-orm, gsap, jose, next (+3 more)

### Community 4 - "[slug]/page.tsx"
Cohesion: 0.21
Nodes (7): generateMetadata(), Props, RecipePage(), ShareRecipeForm(), getRecipe(), Recipe, RECIPES

### Community 5 - "schema.ts"
Cohesion: 0.06
Nodes (34): Order, OrderActions(), STATUS_FLOW, AdminOrderDetailPage(), AdminOrdersPage(), OrderStatusBadge(), OrderRow, OrderTable() (+26 more)

### Community 6 - "getDb"
Cohesion: 0.07
Nodes (90): Ctx, POST(), Ctx, PATCH(), Ctx, PATCH(), Ctx, DELETE() (+82 more)

### Community 7 - "callback/route.ts"
Cohesion: 0.33
Nodes (6): GET(), parseWiPayCallback(), verifyWiPayHash(), WiPayCallback, WiPayPaymentRequest, WiPayPaymentResponse

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "package.json"
Cohesion: 0.11
Nodes (17): name, private, version, bcryptjs, better-sqlite3, eslint, eslint-config-next, react-dom (+9 more)

### Community 10 - "seed.ts"
Cohesion: 0.09
Nodes (26): ProductFilters(), Category, Product, ProductForm(), AdminProductEditPage(), AdminProductsPage(), ProductRow, ProductTable() (+18 more)

### Community 11 - "ProductGrid.tsx"
Cohesion: 0.05
Nodes (47): nextConfig, AccountPage(), Me, OrderView, SignedInView(), STATUS_LABEL, OrderFilters(), STATUSES (+39 more)

### Community 13 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, db:generate, db:studio, dev, lint, start, test

### Community 14 - "Khan's Poultry API Documentation"
Cohesion: 0.06
Nodes (33): Admin Endpoints, Auth Endpoints, Authentication, Base URL, Cart, DELETE /api/admin/products/[id], DELETE /api/cart/items/[id], Error Responses (+25 more)

### Community 16 - "Deployment Guide"
Cohesion: 0.08
Nodes (24): "Admin login fails", Automated Backups, Backup Strategy, "Build failed", Database Backups (SQLite), "Database is locked" (SQLite), Database Setup, Deployment Guide (+16 more)

### Community 18 - "fetch-product-images.py"
Cohesion: 0.43
Nodes (6): download(), main(), photos_for(), query_for(), One-off: download one Pexels photo per product slug into…, search()

### Community 20 - "validation.ts"
Cohesion: 0.08
Nodes (27): GET(), clean(), MenuPage(), metadata, PageProps, TYPES, wrap(), SORTS (+19 more)

### Community 23 - "session.ts"
Cohesion: 0.08
Nodes (22): AdminCustomersPage(), AdminLayout(), AdminNav(), NAV_ITEMS, AdminDashboardPage(), SettingsForm(), AdminSettingsPage(), secret (+14 more)

### Community 25 - "DirectionShowcase.tsx"
Cohesion: 0.12
Nodes (11): metadata, Dir, DirectionShowcase(), TABS, CATES, HeroA(), CATES, HeroB() (+3 more)

### Community 26 - "data.ts"
Cohesion: 0.16
Nodes (13): Cta(), LambFeature(), MORE_LINKS, NAV_LINKS, Cut, FACEBOOK_URL, GIFT_CARD_URL, GOOGLE_REVIEWS_URL (+5 more)

### Community 27 - "frontend/README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 31 - "Khan Poultry Media Download Summary"
Cohesion: 0.17
Nodes (11): 📅 Completed, ✅ Download Complete, Facebook, 📁 Folder Structure, Immediate Use, Instagram, Khan Poultry Media Download Summary, Recommendation (+3 more)

### Community 32 - "Khan Poultry Media Collection"
Cohesion: 0.18
Nodes (10): 1. Download High-Quality Product Images, 2. Image Requirements, 3. Organization Structure, Facebook Content (`facebook_images.json`), Files Generated, Instagram Content (`instagram_images.json`), Khan Poultry Media Collection, Next Steps (+2 more)

### Community 33 - "AboutUs.tsx"
Cohesion: 0.29
Nodes (5): AboutUs(), FILMSTRIP, MISSION, STATS, VISION

### Community 39 - "Contact.tsx"
Cohesion: 0.32
Nodes (4): CHANNELS, Contact(), Locations(), LOCATIONS

### Community 40 - "Khan Poultry Product Image Analysis"
Cohesion: 0.29
Nodes (6): High Priority (Raw Meat Focus), Khan Poultry Product Image Analysis, Next Steps, Product Categories, Products Needing Review/Replacement, Summary

### Community 42 - "Khan Poultry — Product Image Refresh"
Cohesion: 0.33
Nodes (5): Caveats, How it was done, Kept-original products (38), Khan Poultry — Product Image Refresh, Results

### Community 43 - "Marquee.tsx"
Cohesion: 0.20
Nodes (6): CUTS, CUTS_ROW, ITEMS, Marquee(), Showcase(), FAVORITE_CUTS

### Community 45 - "Product image credits"
Cohesion: 0.50
Nodes (3): Licenses by count, Product image credits, Replaced images

## Knowledge Gaps
- **250 isolated node(s):** `$schema`, `plugin`, `eslintConfig`, `nextConfig`, `name` (+245 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 307 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `ProductGrid.tsx` to `app/page.tsx`, `[slug]/page.tsx`, `schema.ts`, `package.json`, `seed.ts`, `Feedback.tsx`, `validation.ts`, `session.ts`, `DirectionShowcase.tsx`, `data.ts`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Why does `drizzle-orm` connect `getDb` to `cart.ts`, `schema.ts`, `callback/route.ts`, `package.json`, `seed.ts`, `session.ts`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Why does `getDb()` connect `getDb` to `cart.ts`, `schema.ts`, `callback/route.ts`, `seed.ts`, `validation.ts`, `session.ts`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **What connects `$schema`, `plugin`, `eslintConfig` to the rest of the system?**
  _250 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `cart.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10084033613445378 - nodes in this community are weakly interconnected._
- **Should `schema.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05550416281221091 - nodes in this community are weakly interconnected._
- **Should `getDb` be split into smaller, more focused modules?**
  _Cohesion score 0.06533391279153991 - nodes in this community are weakly interconnected._