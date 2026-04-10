"use client";

import { QRCodeSVG } from "qrcode.react";

type CourseQrProps = {
  paymentLink: string;
};

export function CourseQr({ paymentLink }: CourseQrProps) {
  const hasPaymentLink = paymentLink.trim().length > 0;

  return (
    <div className="rounded-[1.75rem] border border-[var(--border)] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--blue-600)]">
        Payment QR
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-[var(--navy-900)]">
        Scan to pay
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {hasPaymentLink
          ? "Use your phone camera or payment app to open the secure payment link for this course."
          : "No payment link has been configured for this course yet."}
      </p>

      <div className="mt-6 flex justify-center rounded-2xl bg-slate-50 p-5">
        {hasPaymentLink ? (
          <QRCodeSVG
            value={paymentLink}
            size={220}
            bgColor="transparent"
            fgColor="#13294b"
          />
        ) : (
          <p className="text-sm font-medium text-slate-500">Payment link unavailable</p>
        )}
      </div>

      {hasPaymentLink ? (
        <a
          href={paymentLink}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--navy-900)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-800)]"
        >
          Open payment link
        </a>
      ) : null}
    </div>
  );
}
