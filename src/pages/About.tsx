import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="pagehero py-[100px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] pb-[64px] text-center">
          <div className="container mx-auto max-w-[calc(100vw-40px)]">
            <div className="eyebrow mx-auto mb-[16px] inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4]">
              <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
              HELLO, WE&rsquo;RE GRADMINT
            </div>
            <h1 className="text-[clamp(42px,6vw,72px)] leading-[1.1] mb-[16px] max-w-[720px] mx-auto text-[#303747] tracking-[-0.04em] font-800">
              We see potential.<br />
              <em className="text-[#44D4B4]">Then we get to work.</em>
            </h1>
            <p className="text-[#687184] max-w-[620px] mx-auto mb-[24px] leading-[1.8] text-[16px]">
              A technology partner. A launchpad for talent. A shared belief that great things are
              built together.
            </p>
            <small className="text-[11px] font-700 tracking-[0.14em] uppercase text-brand-teal">
              Our story, still being written
            </small>
          </div>
        </section>

        <section className="py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))]">
          <div className="container mx-auto max-w-[calc(100vw-40px)]">
            <div className="two-col grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
              <div>
                <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
                  <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
                  Rooted in learning
                </div>
                <h2 className="text-[clamp(36px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
                  Driven by <em className="text-[#303747]">possibility.</em>
                </h2>
                <p className="lead mb-[24px] text-[#687184] leading-[1.95] text-[15px]">
                  Gradmint Technologies brings together two things that belong together:
                  technology that solves real problems and people with the skills to build it.
                </p>
                <p className="text-[#687184] mb-[24px] leading-[1.8] text-[15px]">
                  Based in Hyderabad, our focus is practical progress. For businesses, that means
                  thoughtful digital solutions. For students and graduates, it means learning
                  through real projects, guided mentorship and internship experience.
                </p>
                <p className="text-[#687184] leading-[1.8] text-[15px]">
                  We&rsquo;re here to make the journey from &ldquo;what if&rdquo; to &ldquo;what&rsquo;s
                  next&rdquo; a little clearer&mdash;and a lot more achievable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] bg-white">
          <div className="container mx-auto max-w-[calc(100vw-40px)]">
            <div className="section-head max-w-[720px] mx-auto mb-[64px] text-center">
              <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
                <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
                What we stand for
              </div>
              <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
                Our approach is simple.<br />
                <em className="text-[#303747]">Our commitment isn&rsquo;t small.</em>
              </h2>
            </div>
            <div className="valuegrid grid grid-cols-1 md:grid-cols-3 gap-[20px]">
              {[
                {
                  num: "01",
                  title: "People before process",
                  desc: "Good work starts with listening. We put your goals, your users and your growth at the centre of our thinking.",
                },
                {
                  num: "02",
                  title: "Learn by building",
                  desc: "Progress comes from practice. We believe in getting hands-on, solving problems and improving with every iteration.",
                },
                {
                  num: "03",
                  title: "Clarity at every step",
                  desc: "We value straightforward conversations, thoughtful decisions and a shared understanding of what comes next.",
                },
              ].map((item) => (
                <article key={item.num} className="border border-line rounded-[6px] p-[24px] bg-[#FAF9F6]">
                  <small className="block mb-[10px] text-[10px] font-800 tracking-[0.14em] uppercase text-[#44D4B4]">{item.num}</small>
                  <h3 className="text-[16px] mb-[8px] text-[#303747] tracking-[-0.02em] font-800">{item.title}</h3>
                  <p className="text-[#687184] text-[13px] leading-[1.85]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))]">
          <div className="container mx-auto max-w-[calc(100vw-40px)]">
            <div className="two-col grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
              <div>
                <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
                  <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
                  Find your starting point
                </div>
                <h2 className="text-[clamp(36px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
                  Build skills.<br />
                  <em className="text-[#303747]">Create your next chapter.</em>
                </h2>
                <p className="text-[#687184] mb-[24px] leading-[1.8] text-[15px]">
                  Whether you are exploring a digital project or finding a practical way into
                  technology, there is more than one way to begin a conversation with Gradmint.
                </p>
              </div>
              <div>
                <a
                  href="/services/"
                  className="button-primary inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 bg-brand-blue text-white rounded-[6px] hover:bg-brand-blue-dark transition-colors duration-150"
                >
                  Explore services &rarr;
                </a>
                <a
                  href="/careers/"
                  className="button-outline inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 border border-line text-[#303747] rounded-[6px] hover:border-brand-mint hover:text-brand-mint transition-colors duration-150 mt-[14px] inline-block"
                >
                  Browse careers &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="cta py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] text-center bg-[#E9F7F2] rounded-[6px]">
          <div className="container mx-auto max-w-[calc(100vw-40px)]">
            <div className="eyebrow inline-flex items-center justify-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[16px]">
              <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
              LET&rsquo;S START SOMETHING
            </div>
            <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[22px] text-[#303747] tracking-[-0.04em] font-800">
              Good things happen<br />
              <em className="text-[#44D4B4]">when we build together.</em>
            </h2>
            <a
              href="/contact/"
              className="button-primary inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 bg-brand-blue text-white rounded-[6px] hover:bg-brand-blue-dark transition-colors duration-150"
            >
              Talk to our team &rarr;
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}