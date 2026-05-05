"use client";

import { useState, useEffect } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import {
  CLIENT_COUNT_OPTIONS,
  FREQUENCY_OPTIONS,
  CURRENT_HANDLING_OPTIONS,
  EXPLORE_OPTIONS,
  qualifies,
  type FrequencyValue,
  type CurrentHandlingValue,
  type ExploreValue,
  type ClientCountValue,
  BRAND,
} from "@/lib/content";

type Props = {
  variant?: "hero" | "card" | "inline";
  heading?: string;
  subheading?: string;
  idSuffix?: string;
};

/**
 * WealthShield Partnership lead form — fields come EXACTLY from the Atlas task spec
 * (4d6d40bf-b834-47b7-bfa4-8452ec1a2491). Do NOT add/remove/reorder fields
 * without re-reading the task first.
 *
 * Fields (EXACT):
 *   1. First Name     name="firstName"     required
 *   2. Last Name      name="lastName"      required
 *   3. Email          name="email"         required
 *   4. Phone          name="phone"         required
 *   5. Client count   name="clientCount"   required (0-10 / 11-25 / 26-50 / 50+)
 *   6. Explore turnkey name="explore"      required (Definitely not / Probably not / Maybe / Definitely yes)
 *
 * Qualifier logic:
 *   - explore ∈ {definitely-yes, maybe}      → success + redirect to Calendly (Doug Vincent) after 2s
 *   - explore ∈ {probably-not, definitely-not} → success w/ "we'll reach out when the timing is right"
 *   - lead submits in BOTH cases — CRM captures every qualified + unqualified lead.
 */

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const ChevronDown = () => (
  <svg
    className="w-5 h-5 text-[var(--color-ink-muted)]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export function FormCard({
  variant = "card",
  heading = "Request the partnership brief",
  subheading = "A 30-minute executive conversation with Doug Vincent, President & CEO. No pitch deck — we'll walk through fit, economics, and whether it makes sense for your firm.",
  idSuffix = "main",
}: Props) {
  const { submit } = useMegaLeadForm();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [clientCount, setClientCount] = useState<ClientCountValue | "">("");
  const [frequency, setFrequency] = useState<FrequencyValue | "">("");
  const [currentHandling, setCurrentHandling] = useState<CurrentHandlingValue | "">("");
  const [explore, setExplore] = useState<ExploreValue | "">("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [qualified, setQualified] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneValid = phoneDigits.length === 10;
  const canSubmit =
    firstName.trim().length >= 1 &&
    lastName.trim().length >= 1 &&
    /@.+\./.test(email) &&
    phoneValid &&
    clientCount.length > 0 &&
    frequency.length > 0 &&
    currentHandling.length > 0 &&
    explore.length > 0;

  // Auto-redirect to Calendly when qualified
  useEffect(() => {
    if (submitted && qualified) {
      const t = setTimeout(() => {
        window.location.href = BRAND.calendlyUrl;
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [submitted, qualified]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting || submitted) return;
    if (!canSubmit) return;
    setError(null);
    setSubmitting(true);
    const isQualified = qualifies(
      explore as ExploreValue,
      clientCount as ClientCountValue,
    );
    try {
      await submit({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phoneDigits,
        clientCount,
        frequency,
        currentHandling,
        explore,
        qualified: isQualified ? "yes" : "no",
      });
      // Fire form_submission event to GTM/dataLayer so optimizer.min.js can track it
      // (React forms use e.preventDefault(), so the script can't natively detect submission)
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submission",
          form_id: `wealthshield-partner-form-${idSuffix}`,
          value: 0,
        });
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      setError("Something went wrong on our end — we also got your info.");
    } finally {
      setQualified(isQualified);
      setSubmitted(true);
      setSubmitting(false);
    }
  }

  const wrapperClass =
    variant === "hero"
      ? "bg-white/98 backdrop-blur rounded-2xl shadow-2xl shadow-[var(--color-accent)]/40 border border-[var(--color-gold)]/30 p-6 sm:p-8"
      : variant === "inline"
      ? "bg-[var(--color-surface-cool)] rounded-2xl border border-[var(--color-line-cool)] p-6 sm:p-8"
      : "bg-white rounded-2xl shadow-xl border border-[var(--color-line)] p-6 sm:p-8";

  const inputClass =
    "w-full rounded-lg border border-[var(--color-line-cool)] bg-white px-4 py-3 text-base text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition";

  if (submitted) {
    return (
      <div className={wrapperClass}>
        <div className="text-center py-6 space-y-4">
          <div className="mx-auto w-14 h-14 rounded-full bg-[var(--color-gold-50)] flex items-center justify-center">
            <svg
              className="w-7 h-7 text-[var(--color-gold)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {qualified ? (
            <>
              <h3 className="text-2xl font-display font-semibold text-[var(--color-accent)]">
                You&apos;re all set, {firstName || "there"}.
              </h3>
              <p className="text-[var(--color-ink-muted)] max-w-sm mx-auto">
                Redirecting you to Doug Vincent&apos;s calendar to pick a
                30-min slot…
              </p>
              <a
                href={BRAND.calendlyUrl}
                className="inline-flex items-center justify-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3 rounded-lg font-semibold text-base transition shadow-sm"
              >
                Open the scheduler
              </a>
              <p className="text-xs text-[var(--color-ink-muted)]">
                Didn&apos;t redirect? Click the button above.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-display font-semibold text-[var(--color-accent)]">
                Thanks, {firstName || "we got it"}.
              </h3>
              <p className="text-[var(--color-ink-muted)] max-w-sm mx-auto">
                We&apos;ve logged your info. If the timing changes, or you want
                to see the program details anyway, we&apos;ll follow up when
                the fit makes sense — no pressure.
              </p>
              <p className="text-sm text-[var(--color-ink-muted)]">
                In the meantime, direct questions to{" "}
                <span className="font-semibold text-[var(--color-accent)]">
                  {BRAND.email}
                </span>{" "}
                or call{" "}
                <span className="font-semibold text-[var(--color-accent)]">
                  {BRAND.phoneDisplay}
                </span>
                .
              </p>
            </>
          )}

          {error && (
            <p className="text-xs text-[var(--color-ink-muted)]">
              (Note: {error})
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <div className="mb-5">
        <h3 className="text-2xl sm:text-[1.7rem] font-display font-semibold text-[var(--color-accent)] leading-tight">
          {heading}
        </h3>
        {subheading && (
          <p className="text-sm text-[var(--color-ink-muted)] mt-2 leading-relaxed">
            {subheading}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={`fn-${idSuffix}`} className="sr-only">
              First name
            </label>
            <input
              id={`fn-${idSuffix}`}
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`ln-${idSuffix}`} className="sr-only">
              Last name
            </label>
            <input
              id={`ln-${idSuffix}`}
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`email-${idSuffix}`} className="sr-only">
            Firm email
          </label>
          <input
            id={`email-${idSuffix}`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Firm email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`phone-${idSuffix}`} className="sr-only">
            Phone number
          </label>
          <input
            id={`phone-${idSuffix}`}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            pattern="\(\d{3}\) \d{3}-\d{4}"
            title="Enter a 10-digit US phone number"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor={`clients-${idSuffix}`}
            className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5 uppercase tracking-wider"
          >
            How many clients pay $50,000–$150,000+ in taxes each year?
          </label>
          <div className="relative">
            <select
              id={`clients-${idSuffix}`}
              name="clientCount"
              required
              value={clientCount}
              onChange={(e) =>
                setClientCount(e.target.value as ClientCountValue)
              }
              className={`${inputClass} appearance-none pr-10 ${
                clientCount === "" ? "text-[var(--color-ink-muted)]" : ""
              }`}
            >
              <option value="" disabled>
                Select a range
              </option>
              {CLIENT_COUNT_OPTIONS.map((opt) => (
                <option
                  key={opt}
                  value={opt}
                  className="text-[var(--color-ink)]"
                >
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor={`freq-${idSuffix}`} className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5 uppercase tracking-wider">
            How often do clients ask you about retirement or financial planning?
          </label>
          <div className="relative">
            <select id={`freq-${idSuffix}`} name="frequency" required value={frequency}
              onChange={(e) => setFrequency(e.target.value as FrequencyValue)}
              className={`${inputClass} appearance-none pr-10 ${frequency === "" ? "text-[var(--color-ink-muted)]" : ""}`}>
              <option value="" disabled>Select a frequency</option>
              {FREQUENCY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"><ChevronDown /></div>
          </div>
        </div>

        <div>
          <label htmlFor={`handling-${idSuffix}`} className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5 uppercase tracking-wider">
            What currently happens when a client asks about life insurance or retirement income planning?
          </label>
          <div className="relative">
            <select id={`handling-${idSuffix}`} name="currentHandling" required value={currentHandling}
              onChange={(e) => setCurrentHandling(e.target.value as CurrentHandlingValue)}
              className={`${inputClass} appearance-none pr-10 ${currentHandling === "" ? "text-[var(--color-ink-muted)]" : ""}`}>
              <option value="" disabled>Select an answer</option>
              {CURRENT_HANDLING_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"><ChevronDown /></div>
          </div>
        </div>


        <div>
          <label
            htmlFor={`explore-${idSuffix}`}
            className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5 uppercase tracking-wider"
          >
            If a turnkey system could deepen financial planning for your
            clients without creating more work for your team, would that be
            worth exploring?
          </label>
          <div className="relative">
            <select
              id={`explore-${idSuffix}`}
              name="explore"
              required
              value={explore}
              onChange={(e) => setExplore(e.target.value as ExploreValue)}
              className={`${inputClass} appearance-none pr-10 ${
                explore === "" ? "text-[var(--color-ink-muted)]" : ""
              }`}
            >
              <option value="" disabled>
                Select an answer
              </option>
              {EXPLORE_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="text-[var(--color-ink)]"
                >
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!canSubmit || submitting || submitted}
          className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-lg font-semibold text-base transition shadow-sm mt-2"
        >
          {submitting ? "Submitting…" : BRAND.primaryCtaLabel}
        </button>

        <p className="text-[11px] text-[var(--color-ink-muted)] text-center leading-relaxed pt-1">
          By submitting, you agree to be contacted by WealthShield Partnership
          about the Executive Partnership Program. 30-minute call, no
          obligation.
        </p>
      </form>
    </div>
  );
}
