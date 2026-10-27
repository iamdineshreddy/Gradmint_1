// React JSX transform handles imports automatically

import { FluidBrandText } from "@/components/ui/fluid-brand-text";

export default function Hero() {
  return (
    <section className="hero relative py-[110px] px-6 overflow-hidden sm:px-[max(32px,calc((100vw-1180px)/2))] pb-[80px]">
      <div className="container mx-auto max-w-[calc(100vw-40px)]">
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center position-relative z-2">
          <div className="hero-copy max-w-[560px]">
            <FluidBrandText className="mb-[20px]" />
            <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[18px]">
              <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
              TECHNOLOGY &middot; TALENT &middot; TOMORROW
            </div>
            <h1 className="text-[clamp(48px,6.5vw,80px)] leading-[1.05] mb-[22px] text-[#303747] tracking-[-0.04em]">
              Build what&rsquo;s next.<br />
              <em className="text-[#44D4B4]">Grow beyond.</em>
            </h1>
            <p className="text-[#687184] max-w-[470px] mb-[30px] leading-[1.8] text-[16px]">
              Big ideas deserve thoughtful execution. We bring technology, creativity and talent
              together to move your business&mdash;and your future&mdash;forward.
            </p>
            <div className="hero-actions flex gap-[14px] flex-wrap">
              <a
                href="/contact/"
                className="button-primary inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 bg-brand-blue text-white rounded-[6px] hover:bg-brand-blue-dark transition-colors duration-150"
              >
                Let&rsquo;s build together &rarr;
              </a>
              <a
                href="/services/"
                className="button-outline inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 border border-line text-[#303747] rounded-[6px] hover:border-brand-mint hover:text-brand-mint transition-colors duration-150"
              >
                Explore services &rarr;
              </a>
            </div>
            <div className="hero-note mt-[44px] flex items-center gap-[10px] text-[#687184] text-[12px] font-600 tracking-[0.1em] uppercase">
              <span className="note-dot inline-block w-[7px] h-[7px] rounded-full bg-[#44D4B4]" />
              Practical technology. Real-world momentum.
            </div>
          </div>
          <div className="hero-visual min-w-0 relative">
            <div className="frame w-full aspect-[4/3] border border-line rounded-[6px] bg-[#E9F7F2] overflow-hidden relative">
              {/* Placeholder visual - no image yet */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}