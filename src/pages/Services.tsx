export default function ServicesPage() {
  return (
    <>
      <section className="pagehero py-[100px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] pb-[64px] text-center">
      <div className="container mx-auto max-w-[calc(100vw-40px)]">
        <div className="eyebrow mx-auto mb-[16px] inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4]">
          <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
          THE RIGHT EXPERTISE. THE RIGHT PARTNER.
        </div>
        <h1 className="text-[clamp(42px,6vw,72px)] leading-[1.1] mb-[16px] max-w-[720px] mx-auto text-[#303747] tracking-[-0.04em] font-800">
          Your ambition.<br />
          <em className="text-[#44D4B4]">Our craft.</em>
        </h1>
        <p className="text-[#687184] max-w-[620px] mx-auto mb-[24px] leading-[1.8] text-[16px]">
          Digital experiences that feel right. Technology that works hard. Explore how we can
          help you take the next step.
        </p>
        <small className="text-[11px] font-700 tracking-[0.14em] uppercase text-brand-teal">
          Thoughtful solutions, from start to scale
        </small>
      </div>
    </section>

    <section className="py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))]">
      <div className="container mx-auto max-w-[calc(100vw-40px)]">
        <div className="section-head max-w-[720px] mx-auto mb-[64px] text-center">
          <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
            <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
            Built around your needs
          </div>
          <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
            Six ways to <em className="text-[#303747]">move forward.</em>
          </h2>
          <p className="lead mb-[0] text-[#687184] leading-[1.9] text-[15px]">
            Start with the challenge you want to solve. We can discuss scope, requirements and
            approach together.
          </p>
        </div>
        <div className="servicedetails space-y-[1px] border-t border-line">
          {[
            {
              num: "01 / 06",
              title: "UI/UX & Design",
              desc: "Thoughtful digital experiences that turn first impressions into lasting connections.",
              items: ["User journeys and wireframes", "Interactive prototypes", "Visual identity and design systems"],
            },
            {
              num: "02 / 06",
              title: "Web Development",
              desc: "Fast, intuitive websites and powerful web applications built around your business.",
              items: ["Responsive business websites", "Custom web applications and APIs", "Performance and accessibility"],
            },
            {
              num: "03 / 06",
              title: "Mobile App Development",
              desc: "Seamless mobile experiences that put your business right where your customers are.",
              items: ["Native and cross-platform apps", "API and payment integrations", "App testing and launch support"],
            },
            {
              num: "04 / 06",
              title: "Cloud & DevOps",
              desc: "A reliable foundation for your next stage of growth—secure, scalable and ready to evolve.",
              items: ["Cloud setup and migration", "CI/CD and deployment automation", "Monitoring and infrastructure support"],
            },
            {
              num: "05 / 06",
              title: "Digital Marketing",
              desc: "Connect with the right audience through a digital presence that works as hard as you do.",
              items: ["Search engine optimisation", "Content and social media strategy", "Campaign setup and reporting"],
            },
            {
              num: "06 / 06",
              title: "Testing & Quality Assurance",
              desc: "Launch with confidence. Make every interaction more dependable, from the first click.",
              items: ["Manual and automated testing", "API and regression testing", "Performance and usability checks"],
            },
          ].map((svc, idx) => (
            <article key={svc.num} className="border-b border-line-soft">
              <div className="flex gap-[20px] px-[8px] py-[27px]">
                <small className="text-[11px] font-800 tracking-[0.1em] uppercase text-[#44D4B4]">{svc.num}</small>
                <div>
                  <h3 className="text-[17px] mb-[8px] text-[#303747] tracking-[-0.035em] font-800">{svc.title}</h3>
                  <p className="text-[#687184] text-[13px] leading-[1.9]">{svc.desc}</p>
                </div>
                <div>
                  <b className="block mb-[6px] text-[#303747]">What we can help with</b>
                  <ul className="list-disc pl-4 text-[#687184] text-[13px] leading-[1.9] space-y-[2px]">
                    {svc.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href="/contact/"
                    className="textlink mt-[10px] inline-block text-[13px] font-700 text-[#303747] hover:text-[#44D4B4] transition-colors duration-150"
                  >
                    Discuss your project →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="cta py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] text-center bg-[#E9F7F2] rounded-[6px]">
      <div className="container mx-auto max-w-[calc(100vw-40px)]">
        <div className="eyebrow inline-flex items-center justify-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[16px]">
          <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
          NOT SURE WHERE TO START?
        </div>
        <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[22px] text-[#303747] tracking-[-0.04em] font-800">
          Tell us what you have<br />
          <em className="text-[#44D4B4]">in mind.</em>
        </h2>
        <a
          href="/contact/"
          className="button-primary inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 bg-brand-blue text-white rounded-[6px] hover:bg-brand-blue-dark transition-colors duration-150"
        >
          Let's figure it out →
        </a>
      </div>
    </section>
    </>
  );
}