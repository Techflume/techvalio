import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { MotionDiv, MotionH1 } from "@/components/common/MotionDiv";
// import { MotionDiv, MotionH1 } from "@/components/common/MotionWrapper";

const team = [
  {
    name: "Shivanand Prakash",
    title: "Founder & CEO",
    image: "/images/banner/banner1.jpg",
    socials: [{ icon: <Linkedin />, url: "#" }],
  },
  {
    name: "Amit Sharma",
    title: "Chief Technology Officer",
    image: "/images/team/amit.jpg",
    socials: [
      { icon: <Linkedin />, url: "#" },
      { icon: <Github />, url: "#" },
    ],
  },
  {
    name: "Priya Verma",
    title: "Head of Compliance",
    image: "/images/team/priya.jpg",
    socials: [
      { icon: <Linkedin />, url: "#" },
      { icon: <Twitter />, url: "#" },
    ],
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">

      {/* ⭐ HERO (SSR) */}
      <section className="relative h-[320px] flex items-center justify-center overflow-hidden bg-neutral-100">
        <Image
          src="/images/banner/banner2.jpg"
          alt="Techvalio Team Discussion"
          fill
          className="object-cover z-0"
          style={{ opacity: 0.74 }}
        />

        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <MotionH1
          className="relative z-10 text-white text-4xl sm:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ABOUT US
        </MotionH1>
      </section>

      {/* ⭐ COMPANY STORY */}
      <section className="container mx-auto px-4 -mt-16 mb-10 z-10">
        <MotionDiv
          className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden p-0 md:p-0"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* TEXT */}
          <div className="p-7 md:p-10 flex-1">
            <h2 className="font-headline text-2xl font-bold mb-2 text-primary">
              WE ARE TECHVALIO
            </h2>

            <p className="text-muted-foreground mb-4">
              Techvalio is a leader in software validation, digital compliance,
              and consulting for regulated businesses. <br />
              We help pharma, healthcare, startups, and global enterprises
              launch audit-ready solutions with confidence.
            </p>

            <p className="text-sm text-muted-foreground mb-5">
              Since our inception, we've empowered organizations to future-proof
              operations, reduce risk, and ensure every deployment exceeds both
              regulatory and market standards.
            </p>

            <div className="mt-3 italic text-primary font-semibold">
              "Modern Validation. Trusted Compliance."
            </div>
            <div className="text-right font-bold mt-3 text-primary">
              ~ Team Techvalio
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 flex justify-center items-center py-6 md:py-0 bg-white">
            <Image
              src="/images/banner/banner3.jpg"
              alt="CEO"
              width={320}
              height={480}
              className="object-cover w-full h-80 md:h-[380px] rounded-xl shadow"
            />
          </div>
        </MotionDiv>
      </section>

      {/* ⭐ WHY CHOOSE US */}
      <section className="container mx-auto px-4 pb-12 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/banner/banner5.jpg"
              alt="Techvalio Team"
              width={430}
              height={270}
              className="rounded-xl shadow-xl"
            />
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-headline text-2xl font-bold mb-4">
              WHY CHOOSE US
            </h3>

            <div className="grid grid-cols-2 gap-5 text-sm text-muted-foreground">
              <div>
                <div className="font-bold text-primary">Compliance Experts</div>
                Decades of domain knowledge in global pharma and regulated tech.
              </div>
              <div>
                <div className="font-bold text-primary">Customer Focused</div>
                Transparent communication, tailored solutions, real results.
              </div>
              <div>
                <div className="font-bold text-primary">Innovation Ready</div>
                Agile validation and support for emerging technologies.
              </div>
              <div>
                <div className="font-bold text-primary">Full Lifecycle</div>
                From advisory and training to audits and digital upgrades.
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* ⭐ TEAM */}
      {/* <section className="container mx-auto px-4 pb-10">
        <h3 className="font-headline text-2xl font-bold mb-8 text-center">
          Meet Our Team
        </h3>

        <div className="flex flex-wrap gap-8 justify-center">
          {team.map((member) => (
            <MotionDiv
              key={member.name}
              className="bg-white rounded-xl p-5 w-56 shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="rounded-full object-cover mb-2 shadow"
              />
              <div className="font-semibold">{member.name}</div>
              <div className="text-sm text-muted-foreground mb-2">
                {member.title}
              </div>

              <div className="flex gap-3 text-primary text-lg">
                {member.socials.map((s, i) => (
                  <a key={i} href={s.url} target="_blank">
                    {s.icon}
                  </a>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </section> */}

      {/* ⭐ FOOTER */}
      <footer className="bg-muted py-10 mt-auto">
        <div className="container mx-auto text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-bold text-base text-primary">Techvalio</div>
            <div className="max-w-xs pt-1">
              Your partner for audit-ready, compliant software validation and
              digital transformation.
            </div>
          </div>

          <div>
            <div className="font-bold mb-0.5">Opening Time</div>
            <div>Mon–Fri: 9am–6pm</div>
            <div>Sat: 10am–4pm | Sun: Closed</div>
          </div>

          <div>
            <div className="font-bold mb-0.5">Contact</div>
            <div>info@techvalio.com</div>
            <div>+91 98765 43210</div>
            <div>203, Platinum Plaza, Indore</div>
          </div>
        </div>

        <div className="container mx-auto text-center mt-4 text-xs text-muted-foreground pt-2 border-t">
          © {new Date().getFullYear()} Techvalio. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
