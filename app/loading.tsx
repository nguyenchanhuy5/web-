export default function LoadingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="h-16 w-56 animate-pulse rounded-xl bg-slate-200" />
      <div className="mt-8 h-64 animate-pulse rounded-[2rem] bg-slate-200" />
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-80 animate-pulse rounded-[2rem] bg-slate-200"
          />
        ))}
      </div>
    </main>
  );
}
