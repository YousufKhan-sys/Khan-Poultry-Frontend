# Graph Report - Khan Poultry  (2026-09-21)

## Corpus Check
- 146 files · ~3,558,359 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: .avif 4, (none) 3, .db 1)

## Summary
- 766 nodes · 1704 edges · 49 communities (38 shown, 9 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9ee749bc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- (site)/page.tsx
- orders.ts
- dependencies
- settings.ts
- schema.ts
- getDb
- analytics-dashboard.tsx
- compilerOptions
- package.json
- seed.ts
- menu.ts
- orders/[id]/page.tsx
- scripts
- Khan's Poultry API Documentation
- ProductGrid.tsx
- Deployment Guide
- fetch-product-images.py
- jwt.ts
- analytics.ts
- react
- reset.ts
- Navbar.tsx
- proxy.ts
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
- validation.ts
- Khan Poultry — Product Image Refresh
- Marquee.tsx
- payments.ts
- Product image credits
- _probe-clean.js
- probe-tabs.js
- audit-prod1.js
- [slug]/page.tsx

## God Nodes (most connected - your core abstractions)
1. `getDb()` - 83 edges
2. `ok()` - 58 edges
3. `handleError()` - 58 edges
4. `ApiError` - 40 edges
5. `requirePermission()` - 32 edges
6. `drizzle-orm` - 29 edges
7. `react` - 22 edges
8. `createOrder()` - 18 edges
9. `getIp()` - 17 edges
10. `rateLimit()` - 16 edges

## Surprising Connections (you probably didn't know these)
- `AdminSettingsPage()` --calls--> `requirePermission()`  [EXTRACTED]
  frontend/src/app/admin/settings/page.tsx → frontend/src/lib/auth/session.ts
- `CartButton()` --calls--> `useCart()`  [EXTRACTED]
  frontend/src/components/Navbar.tsx → frontend/src/components/cart/CartProvider.tsx
- `clearCart()` --calls--> `getDb()`  [EXTRACTED]
  frontend/src/lib/cart.ts → frontend/src/lib/db/index.ts
- `setPaymentStatus()` --calls--> `getDb()`  [EXTRACTED]
  frontend/src/lib/payments.ts → frontend/src/lib/db/index.ts
- `SignedInView()` --calls--> `money()`  [EXTRACTED]
  frontend/src/app/(site)/account/page.tsx → frontend/src/lib/catalog-format.ts

## Import Cycles
- None detected.

## Communities (49 total, 9 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, drizzle-kit, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, tsx, @types/better-sqlite3 (+4 more)

### Community 1 - "(site)/page.tsx"
Cohesion: 0.16
Nodes (8): Categories(), CATES, Hero(), LambFeature(), MartOverview(), Partners, Showcase(), WHATSAPP_LINK

### Community 2 - "orders.ts"
Cohesion: 0.08
Nodes (43): GET(), POST(), Detail, audit(), auditAdmin(), addItems(), CART_TOKEN_COOKIE, cartIdForSession() (+35 more)

### Community 3 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, bcryptjs, better-sqlite3, date-fns, drizzle-orm, gsap, jose, next (+3 more)

### Community 4 - "settings.ts"
Cohesion: 0.33
Nodes (3): settings, DEFAULTS, SiteSettings

### Community 5 - "schema.ts"
Cohesion: 0.12
Nodes (14): Branch, Cart, CartItem, Category, notifications, Order, OrderItem, Payment (+6 more)

### Community 6 - "getDb"
Cohesion: 0.06
Nodes (88): AdminCustomerDetailPage(), AdminCustomersPage(), AdminOrderDetailPage(), AdminOrdersPage(), AdminProductEditPage(), AdminProductNewPage(), AdminProductsPage(), Ctx (+80 more)

### Community 7 - "analytics-dashboard.tsx"
Cohesion: 0.08
Nodes (26): AnalyticsDashboard(), Column, DeviceTable(), iso(), LocationTable(), presetRange(), PRESETS, rangeLabel() (+18 more)

### Community 8 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 9 - "package.json"
Cohesion: 0.10
Nodes (18): name, private, version, bcryptjs, better-sqlite3, drizzle-kit, eslint, eslint-config-next (+10 more)

### Community 10 - "seed.ts"
Cohesion: 0.21
Nodes (13): permissions, rolePermissions, roles, ALL_PERMISSIONS, ensureAdminUser(), ensureCatalog(), ensureRoles(), ensureSeed() (+5 more)

### Community 11 - "menu.ts"
Cohesion: 0.50
Nodes (3): MENU, MenuCategory, MenuItem

### Community 12 - "orders/[id]/page.tsx"
Cohesion: 0.19
Nodes (9): Order, OrderActions(), STATUS_FLOW, OrderStatusBadge(), OrderRow, OrderTable(), branches, orderItems (+1 more)

### Community 13 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, db:generate, db:studio, dev, lint, start, test

### Community 14 - "Khan's Poultry API Documentation"
Cohesion: 0.06
Nodes (33): Admin Endpoints, Auth Endpoints, Authentication, Base URL, Cart, DELETE /api/admin/products/[id], DELETE /api/cart/items/[id], Error Responses (+25 more)

### Community 15 - "ProductGrid.tsx"
Cohesion: 0.08
Nodes (33): AccountPage(), Me, OrderView, SignedInView(), STATUS_LABEL, Branch, CheckoutPage(), Confirmation() (+25 more)

### Community 16 - "Deployment Guide"
Cohesion: 0.08
Nodes (24): "Admin login fails", Automated Backups, Backup Strategy, "Build failed", Database Backups (SQLite), "Database is locked" (SQLite), Database Setup, Deployment Guide (+16 more)

### Community 18 - "fetch-product-images.py"
Cohesion: 0.43
Nodes (6): download(), main(), photos_for(), query_for(), One-off: download one Pexels photo per product slug into…, search()

### Community 19 - "jwt.ts"
Cohesion: 0.25
Nodes (6): secret, SessionClaims, signSession(), env, usingMockSecret, jose

### Community 20 - "analytics.ts"
Cohesion: 0.15
Nodes (24): GET(), Bucket, dayKey(), expand(), fetchOrders(), fetchSessions(), FULFILLED, getAnalytics() (+16 more)

### Community 21 - "react"
Cohesion: 0.08
Nodes (17): OrderFilters(), STATUSES, DeleteProductButton(), ProductFilters(), Category, Product, ProductForm(), ImageUploader() (+9 more)

### Community 22 - "reset.ts"
Cohesion: 0.39
Nodes (7): createResetToken(), markTokenUsed(), sha256(), storeResetToken(), userIdForResetToken(), DB, passwordResetTokens

### Community 23 - "Navbar.tsx"
Cohesion: 0.14
Nodes (12): Footer(), Instagram(), POSTS, CartButton(), MORE_LINKS, NAV_LINKS, Navbar(), PageMotion() (+4 more)

### Community 24 - "proxy.ts"
Cohesion: 0.50
Nodes (4): config, getReferrer(), proxy(), REFERRER_HEADERS

### Community 25 - "DirectionShowcase.tsx"
Cohesion: 0.13
Nodes (10): metadata, Dir, DirectionShowcase(), TABS, CATES, HeroA(), CATES, HeroB() (+2 more)

### Community 26 - "data.ts"
Cohesion: 0.19
Nodes (8): Stats(), Testimonials(), Cut, GOOGLE_REVIEWS_URL, Location, LOCATIONS, STATS, TESTIMONIALS

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
Cohesion: 0.22
Nodes (6): AboutUs(), MISSION, STATS, VISION, Cta(), PHONE_LINK

### Community 39 - "Contact.tsx"
Cohesion: 0.32
Nodes (3): CHANNELS, Contact(), Locations()

### Community 40 - "Khan Poultry Product Image Analysis"
Cohesion: 0.29
Nodes (6): High Priority (Raw Meat Focus), Khan Poultry Product Image Analysis, Next Steps, Product Categories, Products Needing Review/Replacement, Summary

### Community 41 - "validation.ts"
Cohesion: 0.07
Nodes (31): GET(), clean(), MenuPage(), metadata, PageProps, TYPES, wrap(), SORTS (+23 more)

### Community 42 - "Khan Poultry — Product Image Refresh"
Cohesion: 0.33
Nodes (5): Caveats, How it was done, Kept-original products (38), Khan Poultry — Product Image Refresh, Results

### Community 43 - "Marquee.tsx"
Cohesion: 0.33
Nodes (5): CUTS, CUTS_ROW, ITEMS, Marquee(), FAVORITE_CUTS

### Community 44 - "payments.ts"
Cohesion: 0.17
Nodes (12): GET(), payments, METHOD_LABELS, PaymentIntent, providerFor(), recordPayment(), setPaymentStatus(), parseWiPayCallback() (+4 more)

### Community 45 - "Product image credits"
Cohesion: 0.50
Nodes (3): Licenses by count, Product image credits, Replaced images

### Community 54 - "[slug]/page.tsx"
Cohesion: 0.11
Nodes (13): nextConfig, body, display, displaySerif, metadata, generateMetadata(), Props, RecipePage() (+5 more)

## Knowledge Gaps
- **269 isolated node(s):** `$schema`, `plugin`, `eslintConfig`, `nextConfig`, `name` (+264 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 333 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `analytics-dashboard.tsx`, `package.json`, `validation.ts`, `orders/[id]/page.tsx`, `ProductGrid.tsx`, `[slug]/page.tsx`, `Navbar.tsx`, `DirectionShowcase.tsx`, `data.ts`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **Why does `drizzle-orm` connect `getDb` to `orders.ts`, `analytics-dashboard.tsx`, `package.json`, `seed.ts`, `orders/[id]/page.tsx`, `payments.ts`, `analytics.ts`, `react`, `reset.ts`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Why does `getDb()` connect `getDb` to `orders.ts`, `settings.ts`, `analytics-dashboard.tsx`, `validation.ts`, `orders/[id]/page.tsx`, `payments.ts`, `analytics.ts`, `react`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **What connects `$schema`, `plugin`, `eslintConfig` to the rest of the system?**
  _269 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `orders.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08069381598793364 - nodes in this community are weakly interconnected._
- **Should `schema.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `getDb` be split into smaller, more focused modules?**
  _Cohesion score 0.06421894052296437 - nodes in this community are weakly interconnected._