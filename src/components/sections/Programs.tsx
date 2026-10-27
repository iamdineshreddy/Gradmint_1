// React JSX transform handles imports automatically

const programs = [
  {
    num: "01 / DATA",
    title: "Data Engineering",
    desc: "Explore data pipelines, transformation and modern data systems.",
    tags: "Python SQL Spark AWS",
  },
  {
    num: "02 / DEVELOP",
    title: "Full Stack Development",
    desc: "Bring interfaces, server logic and data together.",
    tags: "React Node.js MongoDB",
  },
  {
    num: "03 / INTELLIGENCE",
    title: "AI &amp; Machine Learning",
    desc: "Explore machine learning, language technologies and applied AI.",
    tags: "TensorFlow PyTorch NLP",
  },
];

export default function Programs() {
  return (
    <section className="section programs py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))]">
      <div className="container mx-auto max-w-[calc(100vw-40px)]">
        <div className="section-head max-w-[720px] mx-auto mb-[64px] text-center">
          <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
            <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
            For the next generation
          </div>
          <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
            Don&rsquo;t just learn it.<br />
            <span className="text-[#44D4B4]">Build it.</span>
          </h2>
          <p className="text-[#687184] leading-[1.9] text-[15px]">
            Hands-on programmes designed to help learners build practical skills,
            work on projects and prepare for what comes next.
          </p>
          <a
            href="/careers/"
            className="textlink inline-block text-[13px] font-600 text-[#303747] hover:text-[#44D4B4] transition-colors duration-150 mt-[16px]"
          >
            Explore all opportunities &rarr;
          </a>
        </div>
        <div className="program-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {programs.map((prog) => (
            <a
              key={prog.num}
              href="/careers/"
              className="program-card block border border-line rounded-[6px] p-[24px] bg-white text-inherit text-decoration-none hover:border-[#93E6D3] transition-colors duration-150"
            >
              <small className="block mb-[10px] text-[10px] font-800 tracking-[0.12em] uppercase text-[#44D4B4]">
                {prog.num}
              </small>
              <h3 className="text-[17px] mb-[8px] text-[#303747] tracking-[-0.02em] font-800">{prog.title}</h3>
              <p className="mb-[14px] text-[#687184] text-[13px] leading-[1.85]">{prog.desc}</p>
              <div className="tags text-[11px] font-700 tracking-[0.08em] text-brand-teal">{prog.tags}</div>
            </a>
          ))}
        </div>
        <p className="fine mt-[24px] text-[11px] text-[#687184] tracking-[0.06em] uppercase max-w-[720px] mx-auto">
          Eight specialisations are listed on the current programmes page. Ask the team about
          prerequisites, upcoming cohorts, fees and availability.
        </p>
      </div>
    </section>
  );
}