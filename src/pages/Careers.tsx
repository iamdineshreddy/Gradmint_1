const careers = [
  {
    num: "01",
    title: "Frontend Engineer",
    desc: "Build responsive, accessible user interfaces with React and modern web technologies.",
    tags: "React TypeScript Tailwind HTML CSS",
    type: "Full-time",
    location: "Hyderabad · Remote",
  },
  {
    num: "02",
    title: "Backend Engineer",
    desc: "Design and maintain scalable server-side APIs and infrastructure for digital products.",
    tags: "Node.js Python SQL AWS Docker",
    type: "Full-time",
    location: "Hyderabad",
  },
  {
    num: "03",
    title: "Mobile Developer",
    desc: "Create native and cross-platform mobile applications for iOS and Android.",
    tags: "React Native Swift Kotlin Flutter",
    type: "Full-time",
    location: "Hyderabad · Remote",
  },
  {
    num: "04",
    title: "UI/UX Designer",
    desc: "Shape thoughtful digital experiences through research, wireframes, and visual design.",
    tags: "Figma User Research Prototyping",
    type: "Full-time",
    location: "Hyderabad",
  },
  {
    num: "05",
    title: "QA Engineer",
    desc: "Ensure software quality through manual and automated testing across web and mobile.",
    tags: "Selenium Cypress TestNG API Testing",
    type: "Full-time",
    location: "Hyderabad",
  },
  {
    num: "06",
    title: "DevOps Engineer",
    desc: "Manage CI/CD pipelines, cloud infrastructure, and deployment automation.",
    tags: "Docker Kubernetes Jenkins AWS GitLab CI",
    type: "Full-time",
    location: "Hyderabad · Remote",
  },
];

export default function Careers() {
  return (
    <>
      <section className="pagehero py-[100px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] pb-[64px] text-center">
        <div className="container mx-auto max-w-[calc(100vw-40px)]">
          <div className="eyebrow mx-auto mb-[16px] inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4]">
            <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
            JOIN OUR TEAM
          </div>
          <h1 className="text-[clamp(42px,6vw,72px)] leading-[1.1] mb-[16px] max-w-[720px] mx-auto text-[#303747] tracking-[-0.04em] font-800">
            Careers at Gradmint.<br />
            <em className="text-[#44D4B4]">Build what&rsquo;s next.</em>
          </h1>
          <p className="text-[#687184] max-w-[620px] mx-auto mb-[24px] leading-[1.8] text-[16px]">
            We&rsquo;re growing our team of technologists, designers, and problem-solvers.
            Explore current openings and start a conversation with us.
          </p>
          <small className="text-[11px] font-700 tracking-[0.14em] uppercase text-brand-teal">
            Based in Hyderabad. Open to remote talent.
          </small>
        </div>
      </section>

      <section className="py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))]">
        <div className="container mx-auto max-w-[calc(100vw-40px)]">
          <div className="section-head max-w-[720px] mx-auto mb-[64px] text-center">
            <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
              <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
              Current openings
            </div>
            <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
              Work where your ideas <em className="text-[#303747]">take shape.</em>
            </h2>
            <p className="lead mb-[0] text-[#687184] leading-[1.9] text-[15px]">
              Join a team that values craft, collaboration, and practical impact. All roles are
              based in Hyderabad unless noted otherwise.
            </p>
          </div>
          <div className="program-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {careers.map((role) => (
              <a
                key={role.num}
                href="/contact/?interest=Career%20application"
                className="program-card block border border-line rounded-[6px] p-[24px] bg-white text-inherit text-decoration-none hover:border-[#93E6D3] transition-colors duration-150"
              >
                <small className="block mb-[10px] text-[10px] font-800 tracking-[0.12em] uppercase text-[#44D4B4]">
                  {role.num}
                </small>
                <h3 className="text-[17px] mb-[8px] text-[#303747] tracking-[-0.02em] font-800">{role.title}</h3>
                <p className="mb-[14px] text-[#687184] text-[13px] leading-[1.85]">{role.desc}</p>
                <div className="tags text-[11px] font-700 tracking-[0.08em] text-brand-teal">{role.tags}</div>
                <div className="mt-[14px] flex flex-wrap items-baseline gap-[6px]">
                  <span className="text-[#168568] font-800 text-[13px]">{role.type}</span>
                  <span className="text-[#687184] text-[13px]">{role.location}</span>
                </div>
                <a
                  href="/contact/?interest=Career%20application"
                  className="textlink mt-[10px] inline-block text-[13px] font-700 text-[#303747] hover:text-[#44D4B4] transition-colors duration-150"
                >
                  Apply &rarr;
                </a>
              </a>
            ))}
          </div>
          <p className="fine mt-[24px] text-[11px] text-[#687184] tracking-[0.06em] uppercase max-w-[720px] mx-auto">
            Don&rsquo;t see a role that fits? Send us your introduction anyway. We&rsquo;re always
            interested in meeting talented people.
          </p>
        </div>
      </section>

      <section className="cta py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] text-center bg-[#E9F7F2] rounded-[6px]">
        <div className="container mx-auto max-w-[calc(100vw-40px)]">
          <div className="eyebrow inline-flex items-center justify-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[16px]">
            <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
            LET&rsquo;S START A CONVERSATION
          </div>
          <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[22px] text-[#303747] tracking-[-0.04em] font-800">
            Ready to join Gradmint?<br />
            <em className="text-[#44D4B4]">We&rsquo;d love to hear from you.</em>
          </h2>
          <a
            href="/contact/?interest=Career%20application"
            className="button-primary inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 bg-brand-blue text-white rounded-[6px] hover:bg-brand-blue-dark transition-colors duration-150"
          >
            Apply now &rarr;
          </a>
        </div>
      </section>
    </>
  );
}