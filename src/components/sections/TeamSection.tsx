import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { TEAM } from "@/lib/content";

/**
 * Team section — credential-forward, since the audience (CPA managing partners)
 * underwrites on credentials and tenure, not marketing gloss.
 *
 * 2026-04-25: client provided real headshots via Drive — replaced monogram
 * placeholders with actual photos in circular crops. Photos reinforce the
 * "real, credentialed people" positioning the credentialed audience requires.
 *
 * Section ID: #team
 */
export function TeamSection() {
  return (
    <section
      id="team"
      className="bg-[var(--color-surface)] py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">The team behind the program</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--color-ink)] heading-rule">
            129+ years of combined financial-planning expertise.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
            When your firm sends a client to us, they meet credentialed
            planners who have done this work at the highest level — not a
            junior team in a satellite office.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 60}>
              <article className="h-full bg-white border border-[var(--color-line)] rounded-2xl p-6 lg:p-7 hover:border-[var(--color-primary)]/40 hover:shadow-sm transition">
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-[var(--color-primary)]/30 ring-offset-2 ring-offset-white shadow-md">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.title}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[var(--color-ink)] leading-snug">
                  {member.name}
                </h3>
                {member.title && (
                  <p className="mt-1 text-sm text-[var(--color-primary)] font-semibold">
                    {member.title}
                  </p>
                )}
                {member.creds && (
                  <p className="mt-2 text-xs text-[var(--color-ink-muted)] uppercase tracking-wider font-semibold">
                    {member.creds}
                  </p>
                )}
                {member.body && (
                  <p className="mt-4 text-sm text-[var(--color-ink-muted)] leading-relaxed">
                    {member.body}
                  </p>
                )}
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
