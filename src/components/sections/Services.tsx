// React JSX transform handles imports automatically

const services = [
  {
    num: "01",
    title: "UI/UX &amp; Design",
    desc: "Digital experiences shaped around people.",
    items: ["User journeys and wireframes", "Interactive prototypes", "Visual identity and design systems"],
  },
  {
    num: "02",
    title: "Web Development",
    desc: "Websites and applications built around your business.",
    items: ["Responsive business websites", "Custom web applications and APIs", "Performance and accessibility"],
  },
  {
    num: "03",
    title: "Mobile App Development",
    desc: "Useful mobile experiences, from concept to launch.",
    items: ["Native and cross-platform apps", "API and payment integrations", "App testing and launch support"],
  },
  {
    num: "04",
    title: "Cloud &amp; DevOps",
    desc: "Reliable infrastructure and smoother delivery.",
    items: ["Cloud setup and migration", "CI/CD and deployment automation", "Monitoring and infrastructure support"],
  },
  {
    num: "05",
    title: "Digital Marketing",
    desc: "Connect with the audiences who need you.",
    items: ["Search engine optimisation", "Content and social media strategy", "Campaign setup and reporting"],
  },
  {
    num: "06",
    title: "Testing &amp; Quality Assurance",
    desc: "Digital experiences tested with care.",
    items: ["Manual and automated testing", "API and regression testing", "Performance and usability checks"],
  },
];

export default function Services() {
  return (
    <section className="section services py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))]">
      <div className="container mx-auto max-w-[calc(100vw-40px)]">
        <div className="section-head max-w-[720px] mx-auto mb-[64px] text-center">
          <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
            <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
            What we bring to the table
          </div>
          <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
            Good ideas.<br />
            <span className="text-[#44D4B4]">Great execution.</span>
          </h2>
          <p className="text-[#687184] leading-[1.9] text-[15px]">
            From your first sketch to your next milestone, we make technology work hard for the
            people it serves.
          </p>
        </div>
        <div className="service-list flex flex-col gap-[1px] border-t border-line">
          {services.map((svc) => (
            <a
              key={svc.num}
              href="/services/"
              className="service-item grid grid-cols-[56px_1fr_auto_22px] align-center gap-[20px] px-[20px] py-[8px] border-b border-line-soft text-decoration-none text-inherit hover:bg-[#EAF8F3] transition-colors duration-150"
            >
              <small className="text-[11px] font-800 tracking-[0.1em] uppercase text-[#44D4B4]">{svc.num}</small>
              <b className="text-[16px] text-[#303747] tracking-[-0.035em]">{svc.title}</b>
              <span className="text-[#687184] text-[13px]">{svc.desc}</span>
              <span className="text-[#44D4B4] text-[13px]">&rarr;</span>
            </a>
          ))}
        </div>
        <a
          href="/services/"
          className="button-outline inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 border border-line text-[#303747] rounded-[6px] hover:border-brand-mint hover:text-brand-mint transition-colors duration-150 mt-[24px] inline-block"
        >
          Explore all services &rarr;
        </a>
      </div>
    </section>
  );
}