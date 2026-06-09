-- Create the enquiries table
create table if not exists public.enquiries (
    id text primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    date text not null,
    name text not null,
    email text not null,
    whatsapp text not null,
    title text not null,
    type text not null,
    budget text not null,
    description text not null,
    timestamp bigint not null
);

-- Enable Row Level Security (RLS)
alter table public.enquiries enable row level security;

-- Create policies for public access (since the Admin page uses a custom passcode login)
create policy "Allow public read access" on public.enquiries
    for select using (true);

create policy "Allow public insert access" on public.enquiries
    for insert with check (true);

create policy "Allow public delete access" on public.enquiries
    for delete using (true);
