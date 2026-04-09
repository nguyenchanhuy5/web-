# Student Aid Courses

Production-oriented Next.js 14 App Router application with:

- Homepage tabs for `Considering School` and `In School`
- Initial homepage data loaded on the server from Supabase
- Client-side tab switching that queries the `courses` table in Supabase and filters by the `category` column
- Dynamic course detail pages at `/course/[id]`
- QR code payment section on the detail page using `qrcode.react`
- TailwindCSS styling inspired by the clean, dark-header layout style of `studentaid.gov`
- Supabase configuration via `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Expected `courses` table columns

- `id`
- `category`
- `title`
- `provider`
- `description`
- `duration`
- `price`
- `starts_on`
- `payment_link`
- `highlights`

## Folder structure

- `app/`
  App Router pages, loading and error boundaries, and the optional API route.
- `app/api/courses/route.ts`
  Route handler for server-side course fetching by category.
- `app/course/[id]/page.tsx`
  Server-rendered course detail page.
- `components/`
  Reusable UI components such as the header, tabbed course list, cards, and QR section.
- `lib/`
  Shared constants, environment helpers, Supabase clients, query helpers, and row transformers.
- `types/`
  Database and application types used across the app.

## Run locally

1. Install Node.js 18.17+ or 20+.
2. Copy `.env.example` to `.env.local` and set your Supabase values.
3. Ensure your Supabase Row Level Security policies allow `select` on `public.courses` for the anon key if you want client-side tab fetching to work.
4. Install dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm run dev
```
