import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { TEAM } from "@/lib/content";

/**
 * Team section — credential-forward, since the audience (CPA managing partners)
 * underwrites on credentials and tenure, not marketing gloss.
 * Section ID: #team
 */
export function TeamSection() {
  return (
    <section
      id="team"
      className="bg-[var(--color-accent)] text-white py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Pinstripe + gold glow */}
      <div className="absolute inset-0 -z-0 bg-pinstripe-navy" />
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-[var(--color-gold)]/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow eyebrow-on-dark">The team behind the program</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight heading-rule heading-rule-on-dark">
            129+ years of combined financial-planning expertise.
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            When your firm sends a client to us, they meet credentialed
            planners who have done this work at the highest level — not a
            junior team in a satellite office.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 60}>
              <article className="h-full bg-white/[0.05] backdrop-blur border border-white/10 rounded-2xl p-6 lg:p-7 hover:bg-white/[0.08] hover:border-[var(--color-gold)]/30 transition">
                {/* Monogram initials instead of photo (no public headshots accessible) */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-hover)] text-[var(--color-accent)] font-display font-semibold text-xl flex items-center justify-center shadow-lg shadow-[var(--color-gold)]/20">
                  {initials(member.name)}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white leading-snug">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-gold-100)] font-semibold">
                  {member.title}
                </p>
                <p className="mt-2 text-xs text-white/60 uppercase tracking-wider font-semibold">
                  {member.creds}
                </p>
                <p className="mt-4 text-sm text-white/75 leading-relaxed">
                  {member.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <PrimaryCTA variant="onDark" label="Meet the team on a strategy call" />
        </Reveal>
      </div>
    </section>
  );
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
