// React JSX transform handles imports automatically

export function TextColor() {
  return (
    <section className="text-color relative py-[100px] px-6 bg-white overflow-hidden sm:px-[max(32px,calc((100vw-1180px)/2))]">
      {/* Subtle background glow */}
      <div className="text-color-bg absolute inset-[-20%] z-1 pointer-events-none" aria-hidden="true" />

      <div className="relative z-2 max-w-[720px] mx-auto text-center">
        <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.18em] uppercase text-brand-teal mb-[18px]">
          <span className="inline-block w-[18px] h-[1.5px] bg-brand-green" />
          IDEAS INTO IMPACT
        </div>

        <h2 className="text-[clamp(40px,6vw,60px)] leading-[1.1] mb-[24px] text-[#303747] tracking-[-0.04em]">
          Develop.
          <span className="inline-block animate-[gradint-shift_6s_ease-in-out_infinite] bg-[linear-gradient(135deg,_#0078C0_0%,_#00A0B0_30%,_#18B0A0_50%,_#38B880_70%,_#44D4B4_100%)] bg-clip-text text-transparent">
            Preview.
          </span>
          Ship.
        </h2>

        <p className="text-[#687184] max-w-[520px] mx-auto mb-[36px] leading-[1.8] text-[16px]">
          Practical technology solutions and meaningful digital experiences —
          designed, built, and delivered with care for businesses and learners
          alike.
        </p>

        <div className="actions flex gap-[14px] justify-center flex-wrap">
          <a
            href="/services/"
            className="button-primary inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 bg-brand-blue text-white rounded-[6px] hover:bg-brand-blue-dark transition-colors duration-150"
          >
            Explore Our Services &rarr;
          </a>
          <a
            href="/contact/"
            className="button-outline inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 border border-line text-[#303747] rounded-[6px] hover:border-brand-mint hover:text-brand-mint transition-colors duration-150"
          >
            Contact Our Team &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}