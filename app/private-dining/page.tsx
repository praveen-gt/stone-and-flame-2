import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import FlameIcon from "@/components/FlameIcon";

export const metadata: Metadata = {
  title: "Private Dining",
  description:
    "Host your event in the Stone Room at Stone & Flame. An intimate private dining space for 10–20 guests in Salamanca, Hobart.",
};

export default function PrivateDiningPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-40 px-6 lg:px-10 overflow-hidden border-b border-[#1a1714]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 70% 60%, rgba(176,141,87,0.2) 0%, transparent 60%)",
          }}
        />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#b08d57]/10 to-transparent hidden lg:block" style={{ left: "40px" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <p className="text-[#b08d57] text-xs tracking-[0.4em] uppercase font-body font-light mb-8">
              Private Dining
            </p>
            <h1
              className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-[#f7f4ef] mb-8"
              style={{ fontWeight: 300 }}
            >
              The Stone
              <br />
              <em className="text-[#a99472]">Room.</em>
            </h1>
            <p className="text-[#72593e] text-base font-body font-light max-w-md leading-relaxed">
              An intimate, private space hewn from the same heritage sandstone
              as the building itself. Made for gatherings that deserve their
              own room.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 lg:py-40 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionReveal>
                <p className="text-[#b08d57] text-xs tracking-[0.4em] uppercase font-body font-light mb-6">
                  The Space
                </p>
              </SectionReveal>
              <SectionReveal delay={100}>
                <h2
                  className="font-display text-[clamp(2rem,4vw,3rem)] text-[#f7f4ef] leading-tight mb-8"
                  style={{ fontWeight: 300 }}
                >
                  Your gathering,{" "}
                  <em className="text-[#a99472]">entirely your own.</em>
                </h2>
              </SectionReveal>
              <SectionReveal delay={200}>
                <p className="text-[#8f7555] text-base font-body font-light leading-relaxed mb-6">
                  The Stone Room seats up to 20 guests at a single communal
                  table, set beneath exposed heritage sandstone walls. The
                  space has its own dedicated service team and a private bar
                  offering our full drinks selection.
                </p>
              </SectionReveal>
              <SectionReveal delay={300}>
                <p className="text-[#8f7555] text-base font-body font-light leading-relaxed mb-10">
                  We work with each host to create a bespoke menu — whether
                  that&rsquo;s our signature set menu, a custom offering, or a
                  progression of shared plates that fits the occasion.
                </p>
              </SectionReveal>

              {/* Specs */}
              <SectionReveal delay={400}>
                <div className="grid grid-cols-2 gap-px bg-[#1a1714]">
                  {specs.map((spec) => (
                    <div key={spec.label} className="bg-[#100d08] p-6">
                      <p
                        className="font-display text-2xl text-[#b08d57] mb-1"
                        style={{ fontStyle: "italic" }}
                      >
                        {spec.value}
                      </p>
                      <p className="text-[#72593e] text-xs font-body font-light">
                        {spec.label}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            <div className="space-y-4">
              <SectionReveal delay={200} direction="left">
                <div className="space-y-4">
                  {occasions.map((occ, i) => (
                    <div
                      key={occ.title}
                      className="border-l border-[#1e1710] pl-6 py-4 hover:border-[#b08d57]/40 transition-colors duration-300"
                    >
                      <p
                        className="font-display text-lg text-[#c4b89d] mb-2"
                        style={{ fontStyle: "italic" }}
                      >
                        {occ.title}
                      </p>
                      <p className="text-[#72593e] text-sm font-body font-light leading-relaxed">
                        {occ.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Menus */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 border-t border-[#1a1714] bg-[#0d0a07]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionReveal>
              <p className="text-[#b08d57] text-xs tracking-[0.4em] uppercase font-body font-light mb-4">
                Private Dining Menus
              </p>
            </SectionReveal>
            <SectionReveal delay={100}>
              <h2
                className="font-display text-[clamp(2rem,4vw,3rem)] text-[#f7f4ef] max-w-lg"
                style={{ fontWeight: 300 }}
              >
                Curated for your evening.
              </h2>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1714]">
            {privateDiningMenus.map((menu, i) => (
              <SectionReveal key={menu.name} delay={i * 80}>
                <div className="bg-[#0d0a07] p-8 lg:p-10 h-full flex flex-col">
                  <p className="text-[#b08d57] text-xs tracking-[0.4em] uppercase font-body font-light mb-4">
                    {menu.type}
                  </p>
                  <h3
                    className="font-display text-2xl text-[#f7f4ef] mb-3"
                    style={{ fontStyle: "italic", fontWeight: 300 }}
                  >
                    {menu.name}
                  </h3>
                  <p className="text-[#72593e] text-sm font-body font-light leading-relaxed mb-6 flex-1">
                    {menu.description}
                  </p>
                  <div className="border-t border-[#1e1710] pt-6 mt-auto">
                    <p
                      className="font-display text-2xl text-[#b08d57]"
                      style={{ fontStyle: "italic" }}
                    >
                      {menu.price}
                    </p>
                    <p className="text-[#56422f] text-xs font-body font-light mt-1">
                      {menu.priceNote}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={300}>
            <p className="mt-8 text-[#56422f] text-xs font-body font-light">
              All menus are inclusive of matched non-alcoholic beverages. Drinks packages available.
              Dietary requirements accommodated with advance notice.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-10 border-t border-[#1a1714]">
        <div className="max-w-4xl mx-auto text-center">
          <SectionReveal>
            <FlameIcon size={28} className="text-[#b08d57]/30 mx-auto mb-8 animate-flicker" />
          </SectionReveal>
          <SectionReveal delay={100}>
            <h2
              className="font-display text-[clamp(2rem,5vw,3.5rem)] text-[#f7f4ef] leading-tight mb-6"
              style={{ fontWeight: 300 }}
            >
              Ready to plan your{" "}
              <em className="text-[#a99472]">gathering?</em>
            </h2>
          </SectionReveal>
          <SectionReveal delay={200}>
            <p className="text-[#8f7555] text-base font-body font-light max-w-md mx-auto mb-10">
              Contact us to discuss availability, menus, and any special
              requirements. We&rsquo;ll take care of the rest.
            </p>
          </SectionReveal>
          <SectionReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#b08d57] text-[#100d08] text-xs tracking-[0.3em] uppercase font-body font-light hover:bg-[#c4a267] transition-colors duration-300"
              >
                Enquire Now
              </Link>
              <a
                href="mailto:events@stoneandflame.com.au"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#3a2d22] text-[#72593e] text-xs tracking-[0.3em] uppercase font-body font-light hover:border-[#b08d57] hover:text-[#b08d57] transition-all duration-300"
              >
                Email Directly
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}

const specs = [
  { value: "10–20", label: "Guests seated" },
  { value: "Exclusive", label: "Private room, dedicated team" },
  { value: "Bespoke", label: "Custom menu available" },
  { value: "Full Bar", label: "Sake, whisky, cocktails" },
];

const occasions = [
  {
    title: "Corporate Dinners",
    description:
      "Impress clients or reward your team in a setting that speaks for itself. We handle everything.",
  },
  {
    title: "Milestone Celebrations",
    description:
      "Birthdays, anniversaries, and significant moments deserve a room that feels like it matters.",
  },
  {
    title: "Intimate Weddings",
    description:
      "A rehearsal dinner, a welcome evening, or a small ceremony reception. We can accommodate.",
  },
  {
    title: "Tasting Evenings",
    description:
      "Sake, whisky, or wine — paired with a bespoke menu. Educational, indulgent, and memorable.",
  },
];

const privateDiningMenus = [
  {
    type: "Set Menu",
    name: "The Fire Menu",
    description:
      "A five-course progression designed around the hibachi. Small plates, the grill, a larger share, and dessert. Our signature private dining experience.",
    price: "$120pp",
    priceNote: "Per person, food only",
  },
  {
    type: "Banquet",
    name: "Stone & Flame Banquet",
    description:
      "An abundant spread of 8–10 dishes passed and shared around the table. Less ceremony, more feast. Perfect for relaxed celebrations.",
    price: "$95pp",
    priceNote: "Per person, food only",
  },
  {
    type: "Bespoke",
    name: "Custom Menu",
    description:
      "Work with our kitchen team to create a menu that fits your occasion, dietary needs, and preferences. Subject to availability.",
    price: "POA",
    priceNote: "Price on application",
  },
];
