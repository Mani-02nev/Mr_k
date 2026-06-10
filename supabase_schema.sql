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
drop policy if exists "Allow public read access" on public.enquiries;
drop policy if exists "Allow public insert access" on public.enquiries;
drop policy if exists "Allow public delete access" on public.enquiries;

create policy "Allow public read access" on public.enquiries
    for select using (true);

create policy "Allow public insert access" on public.enquiries
    for insert with check (true);

create policy "Allow public delete access" on public.enquiries
    for delete using (true);

-- Create the investments table
create table if not exists public.investments (
    id text primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    date text not null,
    name text not null,
    company text,
    email text not null,
    whatsapp text not null,
    amount text not null,
    target_product text not null,
    notes text not null,
    timestamp bigint not null
);

-- Enable Row Level Security (RLS)
alter table public.investments enable row level security;

-- Create policies for public access (since the Admin page uses a custom passcode login)
drop policy if exists "Allow public read access" on public.investments;
drop policy if exists "Allow public insert access" on public.investments;
drop policy if exists "Allow public delete access" on public.investments;

create policy "Allow public read access" on public.investments
    for select using (true);

create policy "Allow public insert access" on public.investments
    for insert with check (true);

create policy "Allow public delete access" on public.investments
    for delete using (true);

-- Create the hiring table
create table if not exists public.hiring (
    id text primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    date text not null,
    name text not null,
    email text not null,
    whatsapp text not null,
    role text not null,
    portfolio text,
    education text,
    resume text,
    description text not null,
    timestamp bigint not null
);

-- Ensure columns exist if table was already created
alter table public.hiring add column if not exists education text;
alter table public.hiring add column if not exists resume text;

-- Enable Row Level Security (RLS)
alter table public.hiring enable row level security;

-- Create policies for public access (since the Admin page uses a custom passcode login)
drop policy if exists "Allow public read access" on public.hiring;
drop policy if exists "Allow public insert access" on public.hiring;
drop policy if exists "Allow public delete access" on public.hiring;

create policy "Allow public read access" on public.hiring
    for select using (true);

create policy "Allow public insert access" on public.hiring
    for insert with check (true);

create policy "Allow public delete access" on public.hiring
    for delete using (true);
