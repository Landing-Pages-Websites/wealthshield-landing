import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { TEAM } from "@/lib/content";

/**
 * Team section — rebrand 2026-05-18.
 *
 * Doug Vincent gets a featured-portrait spotlight (left), with the rest of
 * the planning bench in a clean 5-up grid below. Replaces the previous 6-up
 * monogram-ring grid in commit 0db9765. New headshots pulled from the NEW
 * Drive bundle.
 *
 * Section ID: #team
 */
export function TeamSection() {
  const [doug, ...rest] = TEAM;

  return (
    <section
      id="team"
      className="bg-[var(--color-surface)] py-20 lg:py-28 relative border-y border-[var(--color-line)]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">The team behind the program</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--color-ink)] heading-rule">
            Deep expertise across retirement, tax strategy, and wealth planning.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
            When your firm sends a client to us, they meet credentialed
            planners who have done this work at the highest level — not a
            junior team in a satellite office.
          </p>
        </Reveal>

        {/* Founder feature card */}
        <Reveal delay={80}>
          <article className="mt-14 grid lg:grid-cols-[420px_1fr] gap-8 lg:gap-12 items-start bg-paper border border-[var(--color-line)] rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[var(--color-surface-cool)] ring-1 ring-[var(--color-line-cool)]">
              <Image
                src={doug.image}
                alt={`${doug.name} — ${doug.title}`}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="lg:pt-2">
              <p className="bracket-label">Founder &amp; CEO</p>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[var(--color-ink)] leading-tight">
                {doug.name}
              </h3>
              <p className="mt-2 text-[var(--color-primary)] font-semibold">
                {doug.title}, {doug.creds}
              </p>
              <div className="mt-5 h-px w-10 bg-[var(--color-slate-soft)]" />
              <p className="mt-5 text-[var(--color-ink-muted)] leading-relaxed text-base sm:text-lg max-w-2xl">
                {doug.body} Doug leads every executive partnership
                conversation personally — there is no junior gatekeeper on
                the strategy call.
              </p>
              <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 max-w-md">
                <div>
                  <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-slate)]">Tenure</dt>
                  <dd className="mt-1 font-display text-xl text-[var(--color-ink)]">31 years</dd>
                </div>
                <div>
                  <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-slate)]">Focus</dt>
                  <dd className="mt-1 font-display text-xl text-[var(--color-ink)]">Retirement income</dd>
                </div>
                <div>
                  <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-slate)]">Market</dt>
                  <dd className="mt-1 font-display text-xl text-[var(--color-ink)]">Greater Washington</dd>
                </div>
                <div>
                  <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-slate)]">Program</dt>
                  <dd className="mt-1 font-display text-xl text-[var(--color-ink)]">CPA partner</dd>
                </div>
              </dl>
            </div>
          </article>
        </Reveal>

        {/* Planning bench */}
        <Reveal delay={120}>
          <p className="mt-16 eyebrow">The planning bench</p>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[var(--color-ink)] max-w-3xl leading-tight">
            Credentialed partners delivering the work behind your firm&apos;s brand.
          </h3>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {rest.map((member, i) => (
            <Reveal key={member.name} delay={i * 60}>
              <article className="h-full bg-white border border-[var(--color-line)] rounded-xl overflow-hidden hover:border-[var(--color-primary)]/40 transition">
                <div className="relative aspect-square w-full bg-[var(--color-surface-cool)]">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.title}`}
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-base sm:text-lg font-semibold text-[var(--color-ink)] leading-snug">
                    {member.name}
                  </h4>
                  {member.title && (
                    <p className="mt-1 text-xs text-[var(--color-slate)] font-semibold uppercase tracking-[0.14em]">
                      {member.title}
                    </p>
                  )}
                  {member.body && (
                    <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-relaxed">
                      {member.body}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <PrimaryCTA variant="default" label="Schedule a Strategy Call" />
        </Reveal>
      </div>
    </section>
  );
}
