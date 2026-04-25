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
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-[var(--color-gold)]/30 ring-offset-2 ring-offset-[var(--color-accent)] shadow-lg shadow-black/30">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.title}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
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
