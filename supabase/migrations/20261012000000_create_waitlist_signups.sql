create table public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now(),
  constraint waitlist_signups_email_format check (
    email = lower(btrim(email))
    and email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
  ),
  constraint waitlist_signups_email_unique unique (email)
);

alter table public.waitlist_signups enable row level security;

revoke all on table public.waitlist_signups from anon, authenticated;
grant insert (email) on table public.waitlist_signups to anon, authenticated;

create policy "Allow waitlist signups"
  on public.waitlist_signups
  for insert
  to anon, authenticated
  with check (
    email = lower(btrim(email))
    and email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
  );
