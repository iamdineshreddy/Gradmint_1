import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const programmes = [
  {
    num: "01",
    title: "Data Engineering",
    desc: "Data pipelines, transformation and systems for moving data reliably.",
    tags: "Python SQL Spark AWS Airflow",
    duration: "45 days",
    level: "Intermediate",
  },
  {
    num: "02",
    title: "Full Stack Development",
    desc: "Connect frontend interfaces, backend logic and data storage.",
    tags: "React Node.js MongoDB Express",
    duration: "45 days",
    level: "Beginner to Pro",
  },
  {
    num: "03",
    title: "AI & Machine Learning",
    desc: "Explore machine learning methods, language technologies and applied AI.",
    tags: "TensorFlow PyTorch NLP",
    duration: "45 days",
    level: "Advanced",
  },
  {
    num: "04",
    title: "Core Java Development",
    desc: "Programming foundations, Java concepts and database connectivity.",
    tags: "Java OOP Collections JDBC",
    duration: "30 days",
    level: "Beginner to Intermediate",
  },
  {
    num: "05",
    title: "QA & Automation Testing",
    desc: "Quality checks and browser and API automation practices.",
    tags: "Selenium Java TestNG API Testing",
    duration: "60 days",
    level: "Intermediate",
  },
  {
    num: "06",
    title: "DevOps & Cloud Engineering",
    desc: "Delivery pipelines, containers and modern software operations.",
    tags: "Docker Kubernetes Jenkins AWS",
    duration: "60 days",
    level: "Advanced",
  },
  {
    num: "07",
    title: "Cybersecurity & Ethical Hacking",
    desc: "Network analysis, security tools and ethical security testing.",
    tags: "Kali Linux Wireshark Metasploit Nmap",
    duration: "45 days",
    level: "Intermediate",
  },
  {
    num: "08",
    title: "Data Science & Business Analytics",
    desc: "Data analysis, visualisation and data-informed decision making.",
    tags: "Python Pandas Tableau Power BI",
    duration: "60 days",
    level: "Intermediate",
  },
];

export default function Internships() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="pagehero py-[100px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] pb-[64px] text-center">
          <div className="container mx-auto max-w-[calc(100vw-40px)]">
            <div className="eyebrow mx-auto mb-[16px] inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4]">
              <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
              FOR THE NEXT GENERATION
            </div>
            <h1 className="text-[clamp(42px,6vw,72px)] leading-[1.1] mb-[16px] max-w-[720px] mx-auto text-[#303747] tracking-[-0.04em] font-800">
              Learn by doing.<br />
              <em className="text-[#44D4B4]">Grow with purpose.</em>
            </h1>
            <p className="text-[#687184] max-w-[620px] mx-auto mb-[24px] leading-[1.8] text-[16px]">
              Explore practical technology learning programmes and find the specialisation that best
              fits your interests and current skills.
            </p>
            <small className="text-[11px] font-700 tracking-[0.14em] uppercase text-brand-teal">
              Confirm prerequisites, fees and current availability with Gradmint
            </small>
          </div>
        </section>

        <section className="py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))]">
          <div className="container mx-auto max-w-[calc(100vw-40px)]">
            <div className="section-head max-w-[720px] mx-auto mb-[64px] text-center">
              <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
                <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
                Find your starting point
              </div>
              <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
                Choose your area <em className="text-[#303747]">of focus.</em>
              </h2>
              <p className="lead mb-[0] text-[#687184] leading-[1.9] text-[15px]">
                Durations and levels below reflect the public Gradmint programme descriptions.
                Confirm upcoming cohorts, eligibility and fees directly with the team.
              </p>
            </div>
            <div className="program-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
              {programmes.map((prog) => (
                <a
                  key={prog.num}
                  href="/contact/"
                  className="program-card block border border-line rounded-[6px] p-[24px] bg-white text-inherit text-decoration-none hover:border-[#93E6D3] transition-colors duration-150"
                >
                  <small className="block mb-[10px] text-[10px] font-800 tracking-[0.12em] uppercase text-[#44D4B4]">
                    {prog.num}
                  </small>
                  <h3 className="text-[17px] mb-[8px] text-[#303747] tracking-[-0.02em] font-800">{prog.title}</h3>
                  <p className="mb-[14px] text-[#687184] text-[13px] leading-[1.85]">{prog.desc}</p>
                  <div className="tags text-[11px] font-700 tracking-[0.08em] text-brand-teal">{prog.tags}</div>
                  <div className="mt-[14px] flex flex-wrap items-baseline gap-[6px]">
                    <span className="text-[#168568] font-800 text-[13px]">{prog.duration}</span>
                    <span className="text-[#687184] text-[13px]">{prog.level}</span>
                  </div>
                  <a
                    href="/contact/?interest=Internship%20enquiry"
                    className="textlink mt-[10px] inline-block text-[13px] font-700 text-[#303747] hover:text-[#44D4B4] transition-colors duration-150"
                  >
                    Ask about programme &rarr;
                  </a>
                </a>
              ))}
            </div>
            <p className="fine mt-[24px] text-[11px] text-[#687184] tracking-[0.06em] uppercase max-w-[720px] mx-auto">
              Programme details may change. Confirm duration, level, prerequisites, fees, stipend,
              certificate arrangements and cohort availability with Gradmint. This page does not
              promise placement or employment.
            </p>
          </div>
        </section>

        <section className="cta py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] text-center bg-[#E9F7F2] rounded-[6px]">
          <div className="container mx-auto max-w-[calc(100vw-40px)]">
            <div className="eyebrow inline-flex items-center justify-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[16px]">
              <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
              YOUR NEXT CHAPTER STARTS WITH A CONVERSATION
            </div>
            <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[22px] text-[#303747] tracking-[-0.04em] font-800">
              Curious about a programme?<br />
              <em className="text-[#44D4B4]">Let's talk it through.</em>
            </h2>
            <a
              href="/contact/?interest=Internship%20enquiry"
              className="button-primary inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 bg-brand-blue text-white rounded-[6px] hover:bg-brand-blue-dark transition-colors duration-150"
            >
              Ask about internships &rarr;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}