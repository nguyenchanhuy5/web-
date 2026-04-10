import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[var(--navy-950)] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold-400)] font-bold text-[var(--navy-950)]">
            SA
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/70">
              Student Support
            </p>
            <p className="text-lg font-semibold">Course Portal</p>
          </div>
        </Link>
        <nav className="hidden text-sm text-white/80 md:block">
          Trusted guidance for students before and during school
        </nav>
      </div>
    </header>
  );
}
