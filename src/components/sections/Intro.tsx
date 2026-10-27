// React JSX transform handles imports automatically

export default function Intro() {
  return (
    <section className="section intro py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))]">
      <div className="container mx-auto max-w-[calc(100vw-40px)]">
        <div className="two-col grid grid-cols-1 lg:grid-cols-2 gap-[60px] align-start">
          <div className="max-w-[560px]">
            <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
              <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
              A little about us
            </div>
            <h2 className="text-[clamp(36px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
              Technology with purpose.<br />
              <span className="text-[#44D4B4]">People at its heart.</span>
            </h2>
            <p className="text-[#687184] mb-[24px] leading-[1.8] text-[15px]">
              We&rsquo;re Gradmint&mdash;a technology and talent partner based in Hyderabad. We
              take a practical, people-first approach to building digital solutions and helping
              the next generation of technology professionals develop through doing.
            </p>
            <a
              href="/about/"
              className="button-outline inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 border border-line text-[#303747] rounded-[6px] hover:border-brand-mint hover:text-brand-mint transition-colors duration-150"
            >
              Get to know Gradmint &rarr;
            </a>
          </div>
          <div>
            <div className="frame w-full aspect-[4/3] border border-line rounded-[6px] bg-[#E9F7F2] overflow-hidden relative" />
          </div>
        </div>
      </div>
    </section>
  );
}