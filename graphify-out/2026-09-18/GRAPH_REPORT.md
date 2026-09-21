# Graph Report - Khan Poultry  (2026-09-18)

## Corpus Check
- 128 files · ~3,061,334 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: .avif 4, (none) 3, .db 1)

## Summary
- 674 nodes · 1474 edges · 49 communities (34 shown, 13 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9ee749bc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- orders/[id]/page.tsx
- app/page.tsx
- orders.ts
- index.ts
- [slug]/page.tsx
- schema.ts
- getDb
- callback/route.ts
- compilerOptions
- package.json
- seed.ts
- ProductGrid.tsx
- Feedback.tsx
- devDependencies
- Khan's Poultry API Documentation
- dependencies
- Deployment Guide
- react
- fetch-product-images.py
- settings/page.tsx
- validation.ts
- scripts
- products/page.tsx
- jwt.ts
- requireAdmin
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
- settings.ts
- Khan Poultry — Product Image Refresh
- Showcase.tsx
- Testimonials.tsx
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
7. `createOrder()` - 18 edges
8. `react` - 16 edges
9. `compilerOptions` - 16 edges
10. `getIp()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `AdminSettingsPage()` --calls--> `requirePermission()`  [EXTRACTED]
  frontend/src/app/admin/settings/page.tsx → frontend/src/lib/auth/session.ts
- `clearCart()` --calls--> `getDb()`  [EXTRACTED]
  frontend/src/lib/cart.ts → frontend/src/lib/db/index.ts
- `setPaymentStatus()` --calls--> `getDb()`  [EXTRACTED]
  frontend/src/lib/payments.ts → frontend/src/lib/db/index.ts
- `SignedInView()` --calls--> `money()`  [EXTRACTED]
  frontend/src/app/account/page.tsx → frontend/src/lib/catalog-format.ts
- `AdminLayout()` --calls--> `requireAdmin()`  [EXTRACTED]
  frontend/src/app/admin/layout.tsx → frontend/src/lib/auth/session.ts

## Import Cycles
- None detected.

## Communities (49 total, 13 thin omitted)

### Community 0 - "orders/[id]/page.tsx"
Cohesion: 0.28
Nodes (6): Order, OrderActions(), STATUS_FLOW, OrderStatusBadge(), branches, orderItems

### Community 1 - "app/page.tsx"
Cohesion: 0.17
Nodes (9): CATES, Hero(), Instagram(), POSTS, ITEMS, Marquee(), MartOverview(), Partners (+1 more)

### Community 2 - "orders.ts"
Cohesion: 0.07
Nodes (48): Ctx, DELETE(), PATCH(), GET(), audit(), auditAdmin(), addItems(), CART_TOKEN_COOKIE (+40 more)

### Community 3 - "index.ts"
Cohesion: 0.22
Nodes (11): createResetToken(), markTokenUsed(), sha256(), storeResetToken(), userIdForResetToken(), DB, g, passwordResetTokens (+3 more)

### Community 4 - "[slug]/page.tsx"
Cohesion: 0.16
Nodes (9): nextConfig, generateMetadata(), Props, RecipePage(), ShareRecipeForm(), getRecipe(), Recipe, RECIPES (+1 more)

### Community 5 - "schema.ts"
Cohesion: 0.11
Nodes (15): Branch, Cart, CartItem, Category, Feedback, notifications, Order, OrderItem (+7 more)

### Community 6 - "getDb"
Cohesion: 0.08
Nodes (67): AdminCustomersPage(), AdminOrderDetailPage(), AdminOrdersPage(), AdminProductEditPage(), AdminProductsPage(), Ctx, POST(), Ctx (+59 more)

### Community 7 - "callback/route.ts"
Cohesion: 0.33
Nodes (6): GET(), parseWiPayCallback(), verifyWiPayHash(), WiPayCallback, WiPayPaymentRequest, WiPayPaymentResponse

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "package.json"
Cohesion: 0.10
Nodes (18): name, private, version, bcryptjs, better-sqlite3, drizzle-kit, eslint, eslint-config-next (+10 more)

### Community 10 - "seed.ts"
Cohesion: 0.16
Nodes (16): cleanSlug(), doInit(), permissions, ALL_PERMISSIONS, ensureAdminUser(), ensureCatalog(), ensureRoles(), ensureSeed() (+8 more)

### Community 11 - "ProductGrid.tsx"
Cohesion: 0.06
Nodes (46): AccountPage(), Me, OrderView, SignedInView(), STATUS_LABEL, Branch, CheckoutPage(), Confirmation() (+38 more)

### Community 13 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, drizzle-kit, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, tsx, @types/better-sqlite3 (+4 more)

### Community 14 - "Khan's Poultry API Documentation"
Cohesion: 0.06
Nodes (33): Admin Endpoints, Auth Endpoints, Authentication, Base URL, Cart, DELETE /api/admin/products/[id], DELETE /api/cart/items/[id], Error Responses (+25 more)

### Community 15 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, bcryptjs, better-sqlite3, date-fns, drizzle-orm, gsap, jose, next (+3 more)

### Community 16 - "Deployment Guide"
Cohesion: 0.08
Nodes (24): "Admin login fails", Automated Backups, Backup Strategy, "Build failed", Database Backups (SQLite), "Database is locked" (SQLite), Database Setup, Deployment Guide (+16 more)

### Community 17 - "react"
Cohesion: 0.28
Nodes (6): OrderFilters(), STATUSES, OrderRow, OrderTable(), date-fns, react

### Community 18 - "fetch-product-images.py"
Cohesion: 0.43
Nodes (6): download(), main(), photos_for(), query_for(), One-off: download one Pexels photo per product slug into…, search()

### Community 20 - "validation.ts"
Cohesion: 0.07
Nodes (33): GET(), GET(), clean(), MenuPage(), metadata, PageProps, TYPES, wrap() (+25 more)

### Community 21 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, db:generate, db:studio, dev, lint, start, test

### Community 22 - "products/page.tsx"
Cohesion: 0.21
Nodes (8): ProductFilters(), Category, Product, ProductForm(), ProductRow, ProductTable(), categories, products

### Community 23 - "jwt.ts"
Cohesion: 0.25
Nodes (6): secret, SessionClaims, signSession(), env, usingMockSecret, jose

### Community 24 - "requireAdmin"
Cohesion: 0.32
Nodes (5): AdminLayout(), AdminNav(), NAV_ITEMS, AdminDashboardPage(), requireAdmin()

### Community 25 - "DirectionShowcase.tsx"
Cohesion: 0.13
Nodes (10): metadata, Dir, DirectionShowcase(), TABS, CATES, HeroA(), CATES, HeroB() (+2 more)

### Community 26 - "data.ts"
Cohesion: 0.19
Nodes (11): Cta(), Footer(), LambFeature(), Cut, FACEBOOK_URL, GIFT_CARD_URL, INSTAGRAM_URL, Location (+3 more)

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

### Community 41 - "settings.ts"
Cohesion: 0.33
Nodes (3): settings, DEFAULTS, SiteSettings

### Community 42 - "Khan Poultry — Product Image Refresh"
Cohesion: 0.33
Nodes (5): Caveats, How it was done, Kept-original products (38), Khan Poultry — Product Image Refresh, Results

### Community 45 - "Product image credits"
Cohesion: 0.50
Nodes (3): Licenses by count, Product image credits, Replaced images

## Knowledge Gaps
- **248 isolated node(s):** `$schema`, `plugin`, `eslintConfig`, `nextConfig`, `name` (+243 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 304 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `orders/[id]/page.tsx`, `[slug]/page.tsx`, `package.json`, `ProductGrid.tsx`, `Feedback.tsx`, `settings/page.tsx`, `validation.ts`, `products/page.tsx`, `DirectionShowcase.tsx`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Why does `drizzle-orm` connect `index.ts` to `orders/[id]/page.tsx`, `orders.ts`, `getDb`, `callback/route.ts`, `package.json`, `seed.ts`, `react`, `validation.ts`, `products/page.tsx`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Why does `getDb()` connect `getDb` to `orders/[id]/page.tsx`, `orders.ts`, `index.ts`, `schema.ts`, `callback/route.ts`, `settings.ts`, `seed.ts`, `react`, `validation.ts`, `products/page.tsx`, `requireAdmin`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **What connects `$schema`, `plugin`, `eslintConfig` to the rest of the system?**
  _248 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `orders.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07017543859649122 - nodes in this community are weakly interconnected._
- **Should `schema.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11052631578947368 - nodes in this community are weakly interconnected._
- **Should `getDb` be split into smaller, more focused modules?**
  _Cohesion score 0.08043922369765066 - nodes in this community are weakly interconnected._