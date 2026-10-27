// React JSX transform handles imports automatically

export default function CTA() {
  return (
    <section className="cta py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] text-center bg-[#E9F7F2] rounded-[6px]">
      <div className="container mx-auto max-w-[calc(100vw-40px)]">
        <div className="eyebrow inline-flex items-center justify-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[16px]">
          <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
          GREAT THINGS START WITH A CONVERSATION
        </div>
        <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[22px] text-[#303747] tracking-[-0.04em] font-800">
          Your next big idea.<br />
          <em className="text-[#44D4B4]">Our next great collaboration.</em>
        </h2>
        <p className="text-[#687184] max-w-[620px] mx-auto mb-[34px] leading-[1.8] text-[15px]">
          Share what you have in mind. We&rsquo;ll help you take the next step.
        </p>
        <div className="actions flex gap-[14px] justify-center flex-wrap">
          <a
            href="/contact/"
            className="button-primary inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 bg-brand-blue text-white rounded-[6px] hover:bg-brand-blue-dark transition-colors duration-150"
          >
            Let&rsquo;s talk about it &rarr;
          </a>
          <a
            href="/careers/"
            className="button-outline inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 border border-line text-[#303747] rounded-[6px] hover:border-brand-mint hover:text-brand-mint transition-colors duration-150"
          >
            Looking to grow? Explore careers →
          </a>
        </div>
      </div>
    </section>
  );
}