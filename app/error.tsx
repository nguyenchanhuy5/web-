"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--blue-600)]">
        Application Error
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-[var(--navy-900)]">
        Something went wrong while loading this page.
      </h1>
      <p className="mt-4 text-slate-600">
        Verify your Supabase environment variables and table schema, then try
        again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-[var(--navy-900)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-800)]"
      >
        Retry
      </button>
    </main>
  );
}
