# Zeenom — Engineering Architecture Blueprint

> The authoritative reference for how this application is structured and why.
> Read this before writing code. If reality and this document disagree, fix one of them in the same PR.

**Status:** Foundation (v1)
**Owner:** Platform / Architecture
**Audience:** Every engineer touching this repo

---

## 0. Reading guide

- New to the repo? Read §1 (Structure), §2 (Architecture), §3 (Components), §6 (Data Fetching). That is enough to ship your first feature safely.
- Building a feature? Read §2, §5, §6, §7, §10.
- Reviewing a PR? Read §11, §15, §16.
- Scaling the team/org? Read §20.

Every section states **the decision**, **why**, **the trade-off we accepted**, and **common mistakes**. This is deliberate. Decisions without rationale rot, because the next engineer cannot tell an intentional constraint from an accident.

---

## 1. Guiding Principles (the tie-breakers)

When two designs are otherwise equal, we choose in this order:

1. **Boring and explicit over clever and implicit.** The code is read far more often than written. Magic saves keystrokes today and costs debugging hours for years.
2. **Colocation over centralization.** Things that change together live together. A "utils" or "components" mega-folder is where architecture goes to die.
3. **The framework's grain over fighting it.** Next.js App Router has strong opinions (Server Components first, file-based routing, caching model). We lean in. Fighting the framework is the most expensive kind of technical debt because every upgrade re-opens the wound.
4. **Dependencies are liabilities.** Every package is code we did not write, must patch, and inherit CVEs from. We add one only when it removes materially more complexity than it adds.
5. **Types are the cheapest tests.** Push correctness into the type system and into runtime validation at boundaries (Zod). A bug the compiler catches never reaches a customer.
6. **Make the right thing the easy thing.** Good defaults, lint rules, and generators beat documentation nobody reads.

These principles are the "why" behind nearly every specific decision below.

---

## 2. Overall Architecture: Modular Monolith, Feature-First, Layered inside each feature

### The decision
A **modular monolith** using a **feature-first (a.k.a. feature-sliced) layout**, with a **light layered architecture inside each feature** (UI → hooks → service → repository → schema).

### The alternatives considered

| Approach | What it is | Why not (for us, now) |
|---|---|---|
| **Technical-type-first** (`components/`, `hooks/`, `services/`, `types/` at root) | Group by what a file *is* | Scales terribly. To touch "billing" you jump across 6 top-level folders. Merge conflicts everywhere. Cannot delete a feature cleanly. This is the tutorial default and the #1 cause of large-repo pain. |
| **Strict Domain-Driven Design** (aggregates, bounded contexts, CQRS, hexagonal ports/adapters everywhere) | Heavy DDD tactical patterns | Premature. DDD's ceremony is worth it when domain complexity is high and the team is large. At the start it is abstraction tax with no payer. We borrow DDD's *good ideas* (bounded contexts = features, repositories, ubiquitous language) without the ceremony. |
| **Microfrontends / multiple apps day one** | Split into deployable units | Solves an org-scale problem you do not have yet. Adds distributed-systems complexity (versioning, contracts, cross-app auth) to a product that fits in one deploy. Premature distribution is the most expensive mistake in this list. |
| **Modular monolith, feature-first** ✅ | One deployable, internally partitioned by feature, clear layers at boundaries | Best DX, easy onboarding, cheap to refactor, and it is the *only* option here that can gracefully evolve into any of the others later. |

### Why feature-first wins for a 10-year horizon
- **Deletability.** Killing a feature is `rm -rf src/features/x` plus removing its routes. If you cannot delete a feature easily, you do not have modules — you have a tangle.
- **Cognitive load scales with the feature, not the repo.** A new engineer owning "notifications" reads one folder.
- **Team ownership maps to folders.** `CODEOWNERS` per feature is trivial. This is how you get from 1 → 100 engineers (see §20).
- **It defers the big decisions.** A clean feature module is the natural seam to later extract into a package (monorepo) or a service. You keep the option without paying for it now.

### The layering rule (inside a feature and across the app)
Dependencies point **inward and downward only**:

```
app/ (routes)  ──►  features/*  ──►  lib/ (shared infra)  ──►  types/ (leaf)
       │                 │
       └──────►  components/ui (design system, feature-agnostic)
```

- `app/` may import from `features/`, `components/`, `lib/`.
- `features/*` may import from `components/`, `lib/`, `types/`, and **its own** internals. **A feature must not import from another feature's internals.** Cross-feature needs go through a feature's public `index.ts` (barrel), or get promoted to `lib/`.
- `lib/` and `components/ui` must **never** import from `features/` or `app/`. They are leaves. This is enforced by lint (§16).

> **The single most important rule in this document:** features do not reach into each other. This is what keeps the codebase from becoming a monolith-shaped bowl of spaghetti. Enforce it with `eslint-plugin-boundaries` / `import/no-restricted-paths`, not with hope.

---

## 3. Project Folder Structure

```
zeenom/
├─ src/
│  ├─ app/                          # Next.js App Router — ROUTING ONLY. Thin.
│  │  ├─ (marketing)/               # Route group: public site, its own layout
│  │  ├─ (auth)/                    # Route group: login, register, reset
│  │  ├─ (app)/                     # Route group: authenticated product (dashboard)
│  │  ├─ (admin)/                   # Route group: admin panel, gated
│  │  ├─ (legal)/                   # terms, privacy — shared minimal layout
│  │  ├─ blog/                      # public content routes
│  │  ├─ docs/                      # documentation routes
│  │  ├─ api/                       # Route Handlers (webhooks, public API, non-RSC needs)
│  │  ├─ layout.tsx                 # Root layout: html/body, providers, fonts
│  │  ├─ not-found.tsx              # Global 404
│  │  ├─ global-error.tsx           # Root error boundary (renders <html>)
│  │  ├─ robots.ts                  # Generated robots.txt
│  │  ├─ sitemap.ts                 # Generated sitemap
│  │  └─ manifest.ts                # PWA manifest
│  │
│  ├─ features/                     # THE HEART OF THE APP. One folder per business capability.
│  │  └─ <feature>/                 # e.g. auth, billing, dashboard, blog, notifications
│  │     ├─ components/             # Feature-specific React components (server + client)
│  │     ├─ hooks/                  # Feature-specific client hooks (useX)
│  │     ├─ server/                 # Server-only: services, repositories, server actions
│  │     │  ├─ actions.ts           # 'use server' entry points (validated, thin)
│  │     │  ├─ <feature>.service.ts # Business logic / orchestration
│  │     │  └─ <feature>.repo.ts    # Data access (DB/external) — the ONLY place that touches persistence
│  │     ├─ schemas.ts              # Zod schemas = validation + inferred types (source of truth)
│  │     ├─ types.ts                # Feature-local TS types (non-Zod)
│  │     ├─ constants.ts
│  │     └─ index.ts                # PUBLIC API of the feature. Others import from here only.
│  │
│  ├─ components/
│  │  ├─ ui/                        # Design system primitives (shadcn/ui lives here). Feature-agnostic.
│  │  ├─ layout/                    # Header, Footer, Sidebar, Shell, Container
│  │  └─ shared/                    # Cross-feature composites that are NOT primitives (e.g. DataTable, EmptyState)
│  │
│  ├─ lib/                          # Shared infrastructure. Feature-agnostic, framework-adjacent.
│  │  ├─ db/                        # Drizzle client, schema, migrations bootstrap
│  │  ├─ auth/                      # Auth config + session helpers (server)
│  │  ├─ api/                       # Typed fetch client, API error mapping
│  │  ├─ email/                     # Email provider adapter (Resend)
│  │  ├─ payments/                  # Stripe client + typed helpers
│  │  ├─ jobs/                      # Background job queue adapter
│  │  ├─ flags/                     # Feature flag adapter
│  │  ├─ analytics/                 # Analytics/event tracking adapter
│  │  ├─ logger/                    # Structured logger (pino) — server; safe console shim client
│  │  ├─ i18n/                      # next-intl config, message loading
│  │  ├─ validation/                # Shared Zod helpers, env schema
│  │  ├─ errors/                    # AppError hierarchy, Result type, error mappers
│  │  ├─ utils/                     # Genuinely generic pure helpers (cn, formatDate). No business logic.
│  │  └─ constants/                 # App-wide constants, route map, config
│  │
│  ├─ config/                       # Static config: site metadata, nav, SEO defaults, pricing tiers
│  ├─ styles/                       # globals.css, Tailwind layer definitions, design tokens
│  ├─ types/                        # GLOBAL ambient types only (env.d.ts, global.d.ts). Leaf node.
│  ├─ hooks/                        # Truly global client hooks (useMediaQuery, useMounted). Rare.
│  ├─ providers/                    # App-wide React context providers (Theme, Query, Toast)
│  ├─ test/                         # Test setup, factories, MSW handlers, fixtures
│  └─ middleware.ts                 # Edge middleware: auth gate, i18n, security headers
│
├─ public/                         # Static assets served as-is
├─ messages/                       # i18n translation catalogs (en.json, ...)
├─ docs/                           # THIS folder — architecture, ADRs, runbooks, standards
│  └─ adr/                          # Architecture Decision Records (0001-...md)
├─ e2e/                            # Playwright end-to-end specs
├─ scripts/                        # One-off / ops scripts (seed, migrate, generate)
├─ .github/                        # CI workflows, CODEOWNERS, PR/issue templates
├─ .env.example                    # The contract for env vars (committed; never real secrets)
├─ components.json                 # shadcn/ui config
├─ drizzle.config.ts
├─ next.config.ts
├─ tailwind.config.ts
├─ tsconfig.json
├─ eslint.config.mjs               # Flat config
├─ .prettierrc
├─ vitest.config.ts
├─ playwright.config.ts
└─ package.json
```

### Folder-by-folder: what belongs, what never does

**`src/app/` — routing only.**
- *Belongs:* `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `route.ts`, metadata, route groups. Pages should be thin: parse params, call a feature's public API, render feature components.
- *Never:* business logic, data-access, reusable components, Zod schemas. A `page.tsx` over ~50 lines is a smell — the logic belongs in `features/`.
- *Why:* the router is a delivery mechanism, not a home for logic. Keeping it thin means routing changes (a very common churn source) never touch business code.

**`src/features/` — the product.**
- *Belongs:* everything specific to one business capability.
- *Never:* generic primitives (those go to `components/ui`), cross-cutting infra (goes to `lib/`), or imports from a sibling feature's internals.
- *Naming:* folder = the domain noun (`billing`, not `billingModule` or `billingManager`).

**`src/components/ui/` — design system.**
- *Belongs:* Button, Input, Dialog, Card — the shadcn/ui primitives. Zero business knowledge. A `Button` doesn't know what a "subscription" is.
- *Never:* anything that imports from `features/` or knows about domain data.

**`src/components/shared/` vs `components/ui/`:** `ui` = primitives (atoms/molecules). `shared` = cross-feature composites built from primitives (e.g. a generic `DataTable`) that still carry no domain logic. If it has domain logic, it belongs in a feature.

**`src/lib/` — infrastructure adapters.**
- *Belongs:* the one place we integrate an external system (Stripe, Resend, the DB). Each is an **adapter** exposing our own interface, so swapping the vendor touches one folder.
- *Never:* React components, feature logic. `lib/utils` in particular must stay a graveyard-free zone: only pure, generic, side-effect-free helpers. The moment a helper knows about a domain concept, it moves into that feature.

**`src/types/` — global ambient only.** Feature types live with their feature. This folder is for `env.d.ts` and genuine globals. Keeping it near-empty is a health signal.

### Import conventions
- **Path alias `@/`** → `src/` (configured in `tsconfig.json`). Never use `../../../`.
- Import from a feature's **barrel** (`@/features/billing`), not deep paths (`@/features/billing/server/billing.repo`). Enforced by lint.
- **Import ordering** (auto-fixed): builtin → external → `@/` internal → parent/sibling → styles. (`eslint-plugin-import` + `simple-import-sort`.)
- **Server-only modules** import `import 'server-only'` at the top so a client-side import fails the build instead of leaking secrets.

---

## 4. App Router Structure & Routing Strategy

### Route groups (parentheses = no URL segment)
Groups let unrelated sections have their own root-ish layout without polluting the URL:

- `(marketing)` — public, SEO-critical, static/ISR. Own header/footer, own font weights.
- `(auth)` — minimal centered layout, no nav.
- `(app)` — authenticated shell (sidebar + topbar), dynamic, per-user.
- `(admin)` — admin shell, hard-gated in `middleware.ts` + server-side role check (never trust the client).

**Why groups instead of nesting under `/dashboard`:** each group gets an isolated layout tree and can have a different rendering strategy (marketing = ISR, app = dynamic) without leaking providers or nav between them.

### Nested layouts
Layouts compose top-down and **persist across navigation** (they do not re-render/re-fetch on child navigation). Put the sidebar in `(app)/layout.tsx` so it survives route changes and keeps its scroll/state. Put per-section context providers at the lowest layout that needs them — not at the root — to keep the client bundle and re-render scope small.

### Conventions to use everywhere
- `loading.tsx` — instant Suspense fallback (skeletons, not spinners). Every route that fetches gets one.
- `error.tsx` — client component; recoverable route error boundary with a `reset()` retry. Every route segment that can fail gets one.
- `not-found.tsx` — semantic 404 via `notFound()` from server code.
- `template.tsx` — only when you genuinely need remount-on-navigation (rare; e.g. re-run enter animations).

### Dynamic, parallel, intercepting routes — when to reach for each
- **Dynamic** `[slug]`, `[...catchAll]` — content/detail pages. Pair with `generateStaticParams` for known-ahead pages (blog, docs) to pre-render.
- **Parallel routes** `@modal`, `@analytics` — render independent slots in one layout (e.g. a dashboard with a main panel and an independently-loading analytics rail). Use sparingly; they add real mental overhead. Justify each one.
- **Intercepting routes** `(.)photo/[id]` — the "open in a modal, but deep-linkable and refresh-safe" pattern. Great for image lightboxes / quick-view. Also non-trivial — document any use in the feature README.

### SEO/metadata (see also §14)
- Static pages: `export const metadata`.
- Dynamic pages: `export async function generateMetadata()` — fetch the entity, return title/description/OG. Reuses the cached fetch, so no extra request.
- A `config/seo.ts` holds defaults (site name, template `%s | Zeenom`, default OG image) that every page spreads.

### Rendering strategy per section (decide deliberately)
| Section | Strategy | Why |
|---|---|---|
| Marketing, blog, docs | Static / ISR (`revalidate`) | Fast, cacheable, cheap, great SEO |
| Auth pages | Static shell + client interactivity | No per-request data |
| Dashboard/app | Dynamic (per-user) with streaming | Personalized, but stream so shell is instant |
| Admin | Dynamic, `no-store` | Always fresh, never cached across users |

> **Common mistake:** making everything dynamic "to be safe." That throws away Next.js's biggest performance lever. Default to static; opt into dynamic per data need.

---

## 5. State Management

### The mental model: there are five kinds of state, and most are not "global."
Reach for the *lowest-power* tool that works. Most "we need Redux" instincts are really server state in disguise.

| Kind | Definition | Tool | Rule |
|---|---|---|---|
| **Server state** | Data owned by the backend/DB (users, orders, posts) | **RSC fetch** (default) / **TanStack Query** (interactive client) | The default and the largest category. Do NOT copy it into a global store. |
| **URL state** | Filters, tabs, pagination, search, sort | **`searchParams` + `nuqs`** | Shareable, refresh-safe, back-button-correct. The most under-used tool. |
| **Local state** | One component's ephemeral UI (input value, open/closed) | `useState` / `useReducer` | Keep it local. Don't lift until two siblings truly share it. |
| **Shared UI state** | Cross-tree, non-server, client-only (theme, sidebar collapsed, command palette) | **Zustand** (or Context for truly static values) | Small, client-only. Never put server data here. |
| **Form state** | In-flight form values + validation | **React Hook Form** (§10) | Its own well-solved problem. |

### The decision
- **TanStack Query (React Query)** for client-side server-state that needs caching, mutations, optimistic updates, background refetch (dashboards, infinite lists, real-time-ish views).
- **Zustand** for the small amount of genuinely global *client* state. Chosen over Redux (too much boilerplate/ceremony for our needs) and over Context-for-everything (Context re-renders every consumer on any change — fine for static values like theme, bad for frequently-updated state).
- **Context** only for dependency-injection of stable values (theme, current user object, feature flags) — not for high-frequency updates.
- **nuqs** for URL state as typed, validated `searchParams`.

### Why not one global store for everything (Redux/Zustand)?
Because ~80% of "state" is server state, and server state has needs a plain store cannot meet: caching, deduping, staleness, refetch, request cancellation. Reimplementing that in Redux is how teams end up with 2,000-line reducers that are a buggy TanStack Query. Keep server state in Query/RSC; keep the store tiny.

> **Common mistakes:** (1) putting fetched API data into Zustand/Redux — now you own cache invalidation forever. (2) Using Context for rapidly-changing values — performance cliff. (3) Reaching for a global store before trying `useState` + lifting.

---

## 6. Data Fetching

### Default: fetch on the server, in Server Components.
Server Components can be `async` and `await` data directly. This is the default because it: ships zero data-fetching JS to the client, keeps secrets server-side, avoids client waterfalls, and is SEO-perfect.

```
async function BillingPage() {
  const invoices = await billingService.listInvoices(userId) // runs on server
  return <InvoiceTable invoices={invoices} />
}
```

### The decision matrix

| Need | Use | Why |
|---|---|---|
| Read data for initial render | **Server Component** `await` | Default. No client JS, no waterfall, SEO-ready. |
| Mutation from a form/button | **Server Action** | Progressive-enhancement-friendly, typed, no hand-written API route. Validate input with Zod at the top of every action. |
| Client-interactive read (poll, refetch, infinite scroll, optimistic) | **TanStack Query** calling a Server Action or Route Handler | Needs client cache semantics. |
| Third-party/webhook/public REST API, or non-React consumer | **Route Handler** (`app/api/.../route.ts`) | HTTP contract for the outside world. |
| Streaming a slow section without blocking the page | **`<Suspense>` + async component** | Instant shell, progressive fill. |

### Server Actions vs Route Handlers — the clarifying rule
- **Server Action** = an RPC for *your own UI*. Prefer it for internal mutations/reads triggered by your components.
- **Route Handler** = a *public HTTP endpoint* for anything that is not your React tree: Stripe/Clerk webhooks, third-party callbacks, a public API, cron pings, OAuth callbacks.

### Caching & revalidation (Next.js's most misunderstood area — be explicit)
- Be **intentional** about `fetch` cache options; do not rely on remembered defaults across Next versions. State `cache: 'force-cache'` (static) or `no-store` (dynamic) explicitly, and set `next: { revalidate, tags }`.
- **Tag-based revalidation** is the scalable pattern: tag reads (`next: { tags: ['invoices', userId] }`), then `revalidateTag('invoices')` inside the mutating Server Action. This invalidates precisely, not the whole route.
- Use `revalidatePath` for coarse "this page changed" cases.
- **Never cache per-user data with a shared/static cache.** Per-user reads are dynamic or cached under a user-scoped tag. A leaked cross-user cache is a security incident, not a perf bug.

### Streaming & Suspense
Wrap slow, non-critical sections in `<Suspense fallback={<Skeleton/>}>` so the shell and above-the-fold content paint immediately while the rest streams in. Combine with `loading.tsx` for route-level and inline `<Suspense>` for component-level granularity.

> **Common mistakes:** fetching in a client `useEffect` when a Server Component would do (waterfalls, no SEO, spinner hell); forgetting Zod validation inside Server Actions (they are public endpoints — anyone can POST to them); accidentally opting a whole route into dynamic rendering by reading `cookies()`/`headers()` high in the tree.

---

## 7. API / Data Layer Architecture

### The layers (inside `features/<x>/server/`)
```
Server Action / Route Handler   ← boundary: authn/authz + Zod validation. THIN.
        │
        ▼
Service (<x>.service.ts)         ← business logic, orchestration, transactions. Framework-agnostic.
        │
        ▼
Repository (<x>.repo.ts)         ← ALL persistence/external access. The only DB-aware code.
        │
        ▼
DB client / external SDK (lib/)  ← Drizzle, Stripe SDK, etc.
```

**Responsibilities:**
- **Boundary (action/handler):** authenticate, authorize, validate input (Zod), map result/errors to the transport. No business logic. ~10–20 lines.
- **Service:** the "what should happen" — enforce business rules, coordinate multiple repos, own transactions, emit events/jobs. Knows nothing about HTTP or the DB dialect.
- **Repository:** the "how we store/fetch it" — queries, upserts, external API calls. Returns domain objects, not raw rows. Swapping Postgres→another store, or Stripe→another PSP, is contained here.

### Why repositories when we already have an ORM?
Because an ORM call sprinkled across 40 components is un-mockable, un-swappable, and couples business logic to schema. A repository gives one seam for testing (mock the repo, not the DB), one place to optimize queries, and one place to change when the schema evolves. The cost is a thin layer of indirection — worth it at any non-trivial scale.

### Validation, DTOs, Types — where they live
- **Zod schemas** in `features/<x>/schemas.ts` are the **source of truth**. Infer types from them (`z.infer`) so validation and types can never drift.
- **Input DTOs** = the Zod schema for what a boundary accepts. **Output DTOs** = an explicit `select`/mapper in the repository so you never leak internal columns (password hashes, internal flags) to the client.
- **API response envelope:** standardize on a discriminated result: `{ ok: true, data } | { ok: false, error: { code, message, fields? } }`. Never throw raw errors across the client boundary.

### The typed fetch client (`lib/api/`)
For any client-side or server-to-external HTTP, a single wrapper adds: base URL, auth header injection, timeout, retry-with-backoff for idempotent calls, and error normalization into our `AppError`. Nobody calls `fetch()` to an external API directly.

> **Common mistakes:** putting DB queries directly in components/actions (untestable, unswappable); returning raw DB rows to the client (leaks + over-fetching); letting the ORM type be the API type (schema change silently breaks the contract).

---

## 8. TypeScript Strategy

### Config: strict, and then stricter.
`tsconfig.json` runs `strict: true` **plus** `noUncheckedIndexedAccess`, `noImplicitOverride`, `exactOptionalPropertyTypes`, `forceConsistentCasingInFileNames`, `verbatimModuleSyntax`. Rationale: these catch a whole class of real bugs (array access assumed non-undefined, typo'd optional props) that plain `strict` misses. Turn them on at day zero when the cost is trivial; retrofitting later is painful.

### Where types live
- **Feature-local types** → `features/<x>/types.ts` (or inferred from `schemas.ts`). Colocation again.
- **Global ambient** (`ProcessEnv`, module augmentation) → `src/types/*.d.ts`.
- **Shared domain types used by multiple features** → promote to `lib/` or a `packages/types` if/when you go monorepo — never let feature A import feature B's `types.ts` directly.

### Conventions
- **`type` by default; `interface` only for public, extendable object contracts** (e.g. a component's props others extend, or a repository interface). Consistency > dogma — the rule is "pick one default and deviate with reason."
- **No `enum`.** Prefer `as const` objects + `keyof`/union types. TS `enum` has runtime cost, odd nominal behavior, and poor tree-shaking. `const Status = { Active: 'active', ... } as const; type Status = typeof Status[keyof typeof Status]`.
- **Never `any`.** Use `unknown` at boundaries and narrow with Zod. `any` is banned by lint; `unknown` + validation is the escape hatch.
- **Utility types** are your friends: `Pick`, `Omit`, `Partial`, `Awaited`, `Parameters`, and a small `lib/types` for shared helpers (`Prettify`, `Nullable`, `Result<T,E>`).
- **Derive, don't duplicate.** One source of truth (usually the Zod schema), everything else inferred.

---

## 9. Styling Strategy

### The decision: Tailwind CSS + CSS variables for tokens + shadcn/ui, with `cva` for variants.
- **Tailwind** for the 95% case: utility classes, colocated with markup, no context-switching to a `.css` file, no dead CSS, responsive via `sm:`/`md:` etc.
- **CSS variables as design tokens** in `styles/globals.css` under `:root` and `.dark`. Tailwind's theme references the variables. This is what makes theming and dark mode a variable swap, not a rewrite.
- **shadcn/ui** — components are copied into `components/ui` (we own the code, no version lock-in), themed entirely through the CSS variables.
- **`class-variance-authority (cva)`** for component variants (size/intent), **`tailwind-merge` + `clsx`** via a `cn()` helper to compose/override classes safely.

### Design tokens & theming
```
:root {            /* light */    .dark {            /* dark */
  --background;                       --background;
  --foreground;                       --foreground;
  --primary;                          --primary; ...
}
```
- Semantic tokens (`--primary`, `--muted`, `--destructive`), **not** raw colors (`--blue-500`) in components. Components reference intent; the theme maps intent→color. Rebranding = edit tokens.
- **Dark mode** via `next-themes` (`class` strategy, `prefers-color-scheme` default, user-toggleable, no flash-of-wrong-theme).
- **Responsive:** mobile-first, Tailwind breakpoints. Container queries for component-level responsiveness where layout depends on the component's own width, not the viewport.

### Why not CSS Modules / styled-components / Emotion?
- CSS-in-JS (styled/Emotion) has a **runtime cost** and does not play well with Server Components (they're client-runtime by nature). Actively the wrong direction for an RSC-first app.
- CSS Modules are fine but scatter styles into separate files, lose the utility ergonomics, and don't give a token system for free. Tailwind + variables covers their benefits without the context switch.

> **Common mistakes:** hard-coding colors instead of tokens (breaks theming); rebuilding shadcn primitives from scratch; giant `className` strings with no `cva` structure; forgetting dark-mode variants (lint/visual-review catches this).

---

## 10. Forms

### The decision: React Hook Form + Zod (via `@hookform/resolvers`), one shared schema, server re-validation always.
- **React Hook Form (RHF):** uncontrolled-by-default = minimal re-renders, great performance on large forms.
- **Zod:** one schema drives client validation **and** server validation. Same rules, no drift.
- **shadcn `Form`** components wire RHF to accessible field/label/error markup.

### The validation strategy (non-negotiable)
1. **Client-side** validation for UX (instant feedback) — from the Zod schema.
2. **Server-side** re-validation for trust — the **same** Zod schema, at the top of the Server Action. Client validation is a convenience; it is not security. Never trust the client.
3. **Field-level server errors** map back to specific inputs via the standard error envelope (§7) → RHF `setError`.

```
// features/auth/schemas.ts  — one source of truth
export const signInSchema = z.object({ email: z.string().email(), password: z.string().min(8) })
export type SignInInput = z.infer<typeof signInSchema>

// server action re-validates with the SAME schema
const parsed = signInSchema.safeParse(input); if (!parsed.success) return fieldErrors(parsed.error)
```

### Reusable form architecture
- Generic building blocks in `components/ui/form` (Field, Label, ErrorMessage, SubmitButton with pending state via `useFormStatus`).
- Each feature composes its own form from those + its schema. No god "DynamicFormBuilder" — those collapse under real-world edge cases. Explicit forms per use case age better.

---

## 11. Error Handling, Logging, Monitoring

### A typed error model (`lib/errors/`)
```
class AppError extends Error { code: ErrorCode; httpStatus: number; isOperational: true; cause? }
  ├─ ValidationError (400)   ├─ AuthError (401)   ├─ ForbiddenError (403)
  ├─ NotFoundError (404)     ├─ ConflictError (409)  └─ RateLimitError (429)
```
- **Operational errors** (expected: bad input, not found) are handled and mapped to user-facing responses.
- **Programmer errors** (bugs) bubble to the boundary, get logged with full context, and return a generic 500 — never leak internals to users.
- Services throw typed `AppError`s; boundaries catch and map to the response envelope. Optionally a `Result<T, AppError>` type for hot paths where throwing is undesirable.

### The four layers of errors
| Layer | Mechanism |
|---|---|
| **Global/root** | `app/global-error.tsx` (last resort, renders its own `<html>`), reports to monitoring. |
| **Route** | Per-segment `error.tsx` with `reset()`. Friendly message + retry, details logged not shown. |
| **API/action** | try/catch → map `AppError` → response envelope. Always validate input first. |
| **Form** | Field-level errors surfaced via RHF; submission errors as a toast + inline summary. |

### Logging
- **Structured JSON logs** with **pino** (`lib/logger`), server-side. Every log carries a **request/correlation id** (set in `middleware.ts`, propagated) so a user report maps to a trace.
- **Never log secrets or PII.** A redaction list in the logger config. This is a security requirement, not a nicety.
- Client: a thin wrapper that forwards meaningful errors to monitoring, no noisy console spam in prod.

### Monitoring
- **Sentry** for error tracking + performance/tracing on both server and client, source-maps uploaded in CI. Alerts wired to the team channel.
- Web Vitals reported via `useReportWebVitals` → analytics. Uptime/synthetic checks on critical flows (login, checkout).

> **Common mistakes:** swallowing errors with empty catch; returning stack traces to clients; logging unstructured strings you can't query; no correlation id (every incident becomes archaeology).

---

## 12. Authentication & Authorization (designed now, even if built later)

### The decision: **Auth.js (NextAuth v5)** as the default, self-hostable option; **Clerk** if you want to buy speed.
- **Auth.js v5** — App Router-native, database sessions, provider-agnostic (OAuth + credentials + email), you own the data. Chosen as default because it avoids vendor lock-in on the most security-critical, hardest-to-migrate subsystem.
- **Clerk** — pick this if time-to-market and prebuilt UIs/organizations/MFA outweigh lock-in and cost. It is genuinely excellent; the trade-off is vendor dependency and per-MAU pricing.

Whichever we choose, it is wrapped behind **our own interface** in `lib/auth/` (`getСurrentUser()`, `requireUser()`, `requireRole()`), so the provider is swappable and features never import the vendor SDK directly. This is the single most important auth decision: **isolate the vendor.**

### Architecture
- **Session access:** `lib/auth/session.ts` server helpers. Client components get the user via a Context provider seeded from the server (never a second fetch).
- **Route protection — defense in depth:**
  1. `middleware.ts` — coarse gate (redirect unauthenticated users away from `(app)`/`(admin)`). Fast, edge, but **not** the security boundary.
  2. **Server-side authz in the service/boundary** — the real check. Every mutation/read re-verifies identity and role. **Never rely on middleware or hidden UI for authorization.** The client can forge anything.
- **RBAC** now, ready for **ABAC/permissions** later: roles (`user`, `admin`) as a start; model permissions as a set so you can grow to fine-grained without a rewrite. A `can(user, action, resource)` helper is the seam.
- **Multi-tenancy readiness:** every domain table carries an `organizationId`/`tenantId` from day one even if single-tenant today. Retrofitting tenancy is brutal; a nullable column now is free.

### Security specifics
- Sessions: httpOnly, Secure, SameSite=Lax cookies; short-lived + rotation; server-side revocation possible (DB sessions).
- Passwords (if credentials): Argon2id/bcrypt, never home-rolled.
- CSRF handled by the framework's action/token model; still validate origin on state-changing Route Handlers.
- MFA and org/teams are anticipated in the data model even before implementation.

---

## 13. Performance

Order of impact — do the high-leverage things first.

- **Server Components by default** → the biggest lever. Ship HTML, not a JS app. Keep `'use client'` at the leaves (interactive islands), never at a layout/page root that would drag the whole subtree to the client.
- **Streaming + Suspense** → fast TTFB and FCP; slow data never blocks the shell.
- **`next/image`** → automatic responsive sizes, modern formats (AVIF/WebP), lazy loading, no CLS (always set width/height or `fill` + `sizes`). Never a raw `<img>` for content images.
- **`next/font`** → self-hosted, zero layout shift, no render-blocking font request, no external Google call (privacy + speed). Subset to used glyphs.
- **Code splitting / dynamic import** → `next/dynamic` for heavy client-only widgets (charts, editors, maps) with a skeleton fallback and `ssr: false` where appropriate. Split by route automatically; split heavy components manually.
- **Memoization with evidence, not reflex** → `memo`/`useMemo`/`useCallback` only where profiling shows a real re-render cost. Premature memoization adds noise and its own overhead. (Per our core rules: optimize only with evidence.)
- **Caching** → the Next.js caching layers (§6) plus a shared cache (Redis/Upstash) for expensive cross-request data when justified.
- **Edge runtime** for latency-sensitive, lightweight work (middleware, geolocated redirects, simple personalization). Keep DB-heavy work on Node runtime — the edge's constraints (no native modules, limited connections) make it the wrong home for heavy data access.
- **Bundle hygiene** → `@next/bundle-analyzer` in CI with a **budget** that fails the build on regressions; prefer tree-shakeable imports; watch barrel files that accidentally pull in a whole library. Import icons individually (Lucide supports this).

> **Common mistakes:** `'use client'` too high in the tree; shipping a charting lib to every page; raw `<img>`; memoizing everything; treating the edge as a faster Node (it isn't).

---

## 14. SEO

- **Metadata API** everywhere: static `metadata` for fixed pages, `generateMetadata()` for dynamic (reuses the cached data fetch, so no extra request). A `config/seo.ts` provides defaults + a title template.
- **Open Graph + Twitter Cards** on every public page. **Dynamic OG images** via `next/og` (`ImageResponse`) — branded, per-post images generated at the edge.
- **Structured data (JSON-LD)** per page type: `Organization`/`WebSite` sitewide, `Article`/`BlogPosting` for blog, `BreadcrumbList`, `Product`/`FAQ` where relevant. Rendered as a `<script type="application/ld+json">` helper component.
- **`app/sitemap.ts`** (dynamic, pulls published content) and **`app/robots.ts`** — generated, not hand-maintained.
- **Canonical URLs** via metadata `alternates.canonical` to kill duplicate-content issues (params, trailing slashes, i18n). **`hreflang`** alternates for localized pages.
- **Semantic HTML + accessibility** (real headings, landmarks, alt text) — it is both a11y and SEO. One `h1` per page.
- Marketing/blog/docs render **static/ISR** so crawlers get fast, complete HTML.

---

## 15. Security

Treat every input as hostile and every client-side check as advisory.

- **Validate all input at the boundary with Zod** — Server Actions and Route Handlers are public endpoints. This is the first line of defense against injection and malformed data.
- **Security headers + CSP** set in `next.config.ts` / `middleware.ts`: `Content-Security-Policy` (nonce-based, no blanket `unsafe-inline`), `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`/`frame-ancestors 'none'`, `Referrer-Policy`, `Permissions-Policy`. Start report-only, then enforce.
- **XSS:** rely on React's escaping; **ban `dangerouslySetInnerHTML`** except behind a sanitizer (DOMPurify) for trusted CMS HTML. Lint rule flags it.
- **CSRF:** Server Actions have built-in origin protections; still verify `Origin`/host on state-changing Route Handlers and use SameSite cookies.
- **Rate limiting** (`lib/` adapter over Upstash/Redis) on auth, mutations, and public APIs — by IP and by user. Fail closed.
- **Authorization on the server, every time** (see §12). Hidden UI is not security.
- **Secrets & env:** never in client bundles. Only `NEXT_PUBLIC_*` reaches the browser — treat those as public. Validate env at boot (§18). Secrets from a manager (Vault/Doppler/host secrets), never committed. `.env*` gitignored; `.env.example` is the committed contract.
- **Dependency security:** `pnpm audit` + Dependabot/Renovate in CI; lockfile committed; pin and review.
- **SSRF/URL safety:** validate/allowlist any user-supplied URL the server fetches (webhooks, image proxies).

---

## 16. Code Quality & Conventions

### Tooling
- **ESLint (flat config)** = `next/core-web-vitals` + `@typescript-eslint` (type-aware) + `import`/`simple-import-sort` + **`eslint-plugin-boundaries`** (enforces §2's dependency rules) + `jsx-a11y`. Key custom rules: no `any`, no cross-feature deep imports, no `console` in prod code (use the logger), enforce import order.
- **Prettier** = the single formatter; ESLint does not format (no rule overlap). `prettier-plugin-tailwindcss` sorts classes deterministically.
- **Husky + lint-staged** — pre-commit runs Prettier + ESLint + `tsc --noEmit` on staged files only (fast). Pre-push runs the test suite. Fast local gates catch issues before CI.
- **commitlint + Conventional Commits** (`feat:`, `fix:`, `chore:`...) → enables automated changelog + semantic versioning later, and makes history greppable.
- **CI (GitHub Actions):** typecheck, lint, unit+integration, build, e2e (on PR), bundle-budget check. Green CI is required to merge. Branch protection on `main`.

### Naming & files
- **Folders/routes:** `kebab-case` (`user-settings/`). **React components:** `PascalCase.tsx`. **Hooks:** `useThing.ts`. **Everything else (utils, services, config):** `kebab-case.ts`. **Types/interfaces:** `PascalCase`; **constants:** `SCREAMING_SNAKE_CASE`.
- **One component per file**, named the same as the file. Barrels (`index.ts`) only at feature/public boundaries — not deep, to avoid circular imports and bundle bloat.
- **Path alias `@/`** only; `../..` banned by lint.
- Names follow the global rule: `paymentService`, `authMiddleware`, `jobQueue` — never `enhancedProcessor`/`ultimateManager`.

---

## 17. Testing Strategy

### The pyramid (mostly cheap tests, a few expensive ones)
| Level | Tool | Scope | Where |
|---|---|---|---|
| **Unit** | **Vitest** | Pure logic: services, utils, Zod schemas, mappers. Fast, many. | Colocated `*.test.ts` next to source |
| **Component** | **Vitest + React Testing Library** | Component behavior (user-facing, not implementation) | Colocated `*.test.tsx` |
| **Integration** | **Vitest + MSW** (+ Testcontainers for DB where it matters) | A feature end-to-end minus the browser: action → service → repo against a real test DB | `features/<x>/**` or `src/test` |
| **E2E** | **Playwright** | Critical user journeys only (sign-up, checkout, core flow) across real browsers | `e2e/` |

### Principles
- **Test behavior, not implementation.** RTL by design steers you to query by role/text like a user. Tests that assert internal state break on every refactor and protect nothing.
- **The repository seam** (§7) makes services testable without a DB; use a real DB in integration tests for the queries that matter (Testcontainers).
- **MSW** mocks HTTP at the network layer for both tests and local dev — the same handlers, one source of truth.
- **Coverage is a signal, not a target.** Chase meaningful coverage of business logic; do not chase 100% by testing getters.
- **`src/test/`** holds setup, factories (typed test-data builders), and MSW handlers.

> **Common mistake:** inverting the pyramid — hundreds of slow, flaky E2E tests and few unit tests. E2E is for a handful of money-path journeys; push everything else down.

---

## 18. Environment Variables

- **`lib/validation/env.ts`** validates `process.env` with Zod **at startup** (via `@t3-oss/env-nextjs`), splitting **server** vs **client (`NEXT_PUBLIC_*`)** schemas. A missing/invalid var fails the build/boot loudly — never a silent `undefined` in production.
- **Import the parsed, typed `env` object**; never read `process.env.X` directly in app code. This gives autocomplete, type-safety, and one audited access point.
- **`.env.example`** is the committed contract (every var, with a comment, dummy value). Real files `.env.local` (dev), and per-environment secrets injected by the platform for staging/prod — **never committed**.
- **Per-environment config** (dev/staging/prod) comes from the host's secret store (Vercel/Doppler/Vault), not from files in the repo. Values that are non-secret and environment-specific (feature flag defaults, base URLs) live in `config/` keyed by `NEXT_PUBLIC_APP_ENV`.
- **Client exposure discipline:** anything prefixed `NEXT_PUBLIC_` is shipped to browsers and is effectively public. Secrets never get that prefix. The env schema makes the split explicit and reviewable.

---

## 19. Documentation (productive in a day)

Docs live in-repo (`/docs`) so they version with the code and can't rot in a wiki.

- **`README.md`** — what/why in 3 lines, prerequisites, `pnpm i && pnpm dev`, env setup, common scripts, links out. The 15-minute "clone to running" path.
- **`docs/ARCHITECTURE.md`** — this file. The map.
- **`docs/adr/`** — **Architecture Decision Records.** One short file per significant decision (context → decision → consequences). This is how future engineers learn *why*, not just *what* — the highest-leverage doc for a 10-year codebase. Never rewrite history; supersede.
- **`docs/CONTRIBUTING.md`** — branching, commit convention, PR checklist, review expectations, how to add a feature (the "new feature" recipe: scaffold `features/x`, add route, wire barrel).
- **`docs/STANDARDS.md`** — coding standards distilled to rules + examples (naming, error handling, when to use each state tool). Short enough to actually read.
- **Component docs** — colocated: props are self-documenting via TS; complex components get a doc-comment and, if UI-heavy, a **Storybook** story (also the visual-regression + a11y test surface).
- **Runbooks** (`docs/runbooks/`) — on-call: deploy, rollback, rotate secrets, common incidents.
- **A `scripts/scaffold-feature` generator** turns "read the docs to know the structure" into "run the generator." Codified conventions beat documented ones.

---

## 20. Scalability Roadmap (1 → 100+ engineers)

The through-line: **the feature-first modular monolith is the constant.** It is deliberately the structure that survives every stage below with additive change, not rewrites.

**1 developer — velocity.**
- Single Next.js app, single Postgres, deploy to Vercel. Everything in `src/`. Skip nothing structural (the folders are cheap) but don't build platform teams' tooling yet. Feature folders already keep you honest.

**~5 developers — parallelism without collisions.**
- **`CODEOWNERS` per feature.** The feature boundaries now pay off: people work in different folders, few merge conflicts.
- Introduce the ADR habit, Storybook, and a real CI matrix. Feature flags to decouple deploy from release.
- Still one repo, one deploy. Resist splitting.

**~20 developers — extract shared foundations.**
- Convert to a **monorepo (pnpm workspaces + Turborepo)**: extract `ui`, `config`, `types`, `lib` adapters into `packages/*`; the app stays in `apps/web`. Remote caching makes CI fast at scale.
- A small **platform/DX team** owns the design system, CI, generators, and the `lib` adapters. Product teams own features end-to-end.
- Contract-test the boundaries you might later split. Consider a second `apps/*` (e.g. admin) sharing packages.

**100+ developers — org-shaped software (Conway's Law, on purpose).**
- Split along the seams the feature modules already drew: some features graduate to **separate deployables/services** (billing, notifications, jobs) behind stable contracts; the web app composes them. Consider **microfrontends** *only* where independent deploy cadence is a proven need — not before.
- Dedicated platform, DX, security, and SRE orgs. Service catalog, internal APIs with versioned contracts, per-domain databases where justified.
- **What still doesn't change:** feature-first organization, the layered discipline (boundary→service→repo), Zod-at-the-edge, types-from-schemas, server-authz, the ADR trail. These are fractal — they work the same at every scale.

### What must be true from day one to make this path cheap
Getting these right early is what turns each transition into refactoring instead of rewriting:
1. **No cross-feature internal imports** (barrels + lint). This is the seam everything else depends on.
2. **Vendor isolation in `lib/`** (auth, payments, email, db) — swap providers without touching features.
3. **`tenantId` on every domain row** — multi-tenancy is unaffordable to retrofit.
4. **Validation and authorization on the server, always** — security can't be bolted on.
5. **The ADR habit** — so scale decisions are informed by remembered context, not re-litigated.

---

## Appendix A — Recommended dependencies (and why each earns its place)

| Concern | Choice | Why this, briefly |
|---|---|---|
| Framework | Next.js (App Router) | RSC, routing, caching, edge — the platform |
| Language | TypeScript (strict+) | Cheapest tests |
| Styling | Tailwind + CSS vars | Colocated, tokenized, no runtime CSS-in-JS |
| Components | shadcn/ui (owned) + Lucide | No lock-in, themeable, a11y baseline |
| Variants | cva + tailwind-merge + clsx | Structured, safe class composition |
| Package mgr | pnpm | Fast, strict, workspace-ready |
| Server state (client) | TanStack Query | Caching/mutation/optimistic done right |
| Client global state | Zustand | Tiny, no boilerplate, no Context re-render tax |
| URL state | nuqs | Typed, shareable, refresh-safe filters |
| Forms | React Hook Form | Minimal re-renders |
| Validation | Zod | One schema → types + client + server validation |
| Env safety | @t3-oss/env-nextjs | Fail-fast typed env |
| ORM/DB | Drizzle + Postgres | Typed, lightweight, SQL-honest, edge-friendly |
| Auth | Auth.js v5 (or Clerk) | Own your data / or buy speed — isolated behind `lib/auth` |
| Email | Resend + React Email | Typed, componentized emails |
| Payments | Stripe | Standard, well-typed SDK |
| Jobs/queue | Upstash QStash / Inngest | Serverless-native background work |
| Rate limit/cache | Upstash Redis | Edge-friendly |
| Feature flags | OpenFeature-compatible provider | Vendor-neutral flag interface |
| i18n | next-intl | App Router-native, typed messages |
| Analytics | Vercel Analytics + PostHog | Web vitals + product analytics/events |
| Errors/monitoring | Sentry | Errors + tracing, server & client |
| Logging | pino | Structured, fast |
| Unit/component test | Vitest + RTL | Fast, ESM-native |
| API mocking | MSW | One mock layer for tests + dev |
| E2E | Playwright | Reliable cross-browser journeys |
| Docs/UI | Storybook | Component docs + visual/a11y tests |
| Monorepo (later) | pnpm workspaces + Turborepo | Extract packages when the team grows |

**Deliberately *not* added now:** Redux (Query+Zustand cover it), a CSS-in-JS runtime (wrong for RSC), a heavyweight DI container (features + `lib` adapters suffice), GraphQL (Server Actions + typed clients are simpler until you have many diverse consumers). Each can be added later *behind an existing seam* if a real need appears — which is the whole point of the architecture.

---

## Appendix B — The "add a new feature" recipe (the DX payoff)

1. `pnpm scaffold-feature notifications` → generates `features/notifications/{components,hooks,server,schemas.ts,types.ts,index.ts}`.
2. Define `schemas.ts` (Zod = source of truth) → infer types.
3. `server/notifications.repo.ts` (data access) → `notifications.service.ts` (logic) → `server/actions.ts` (validate + authz + call service).
4. Build UI in `components/`, wire client interactivity with hooks + TanStack Query where needed.
5. Add the route in `app/(app)/notifications/` — thin page importing from `@/features/notifications`.
6. Export the public surface from `index.ts`. Add `CODEOWNERS` entry. Tests colocated. Done — no other feature touched.

If adding a feature ever requires editing many existing files, that is the architecture telling you a boundary is wrong. Listen to it.
```
