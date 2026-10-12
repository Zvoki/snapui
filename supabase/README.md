# Supabase waitlist setup

The waitlist stores email addresses in Supabase only after the project is
configured. The browser client can insert an email but cannot read the
waitlist.

## 1. Create a Supabase project

Create a project in the Supabase dashboard and keep its database credentials
private. This site only needs the project URL and the publishable (or legacy
`anon`) key.

## 2. Create the waitlist table

Open the project's SQL Editor, paste the contents of
[`migrations/20261012000000_create_waitlist_signups.sql`](./migrations/20261012000000_create_waitlist_signups.sql),
and run it. Row Level Security is enabled; anonymous visitors are only allowed
to insert an email. They cannot select, update, or delete stored addresses.

## 3. Configure the local website

Copy `.env.example` to `.env.local` in the project root and set:

```text
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

For older Supabase projects that only provide the legacy `anon` key, use
`VITE_SUPABASE_ANON_KEY` instead. Do not set both variables.

Restart the Vite development server after changing environment variables.
`.env.local` is ignored by Git. Never put a Supabase `service_role` or secret
key in a `VITE_` variable or in browser code.

## 4. Verify a signup

Submit the form with an email address and grant the displayed consent. Confirm
the new row appears in the Supabase Table Editor under
`public.waitlist_signups`. Duplicate addresses are not added a second time.

Before promoting the form publicly, add an anti-spam control such as CAPTCHA
and decide on a retention period and privacy notice for collected addresses.
