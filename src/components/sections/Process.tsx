// React JSX transform handles imports automatically

const steps = [
  { num: "01", title: "Listen & understand", desc: "Start with your goals, challenges and audience." },
  { num: "02", title: "Think & design", desc: "Shape a clear plan around your vision." },
  { num: "03", title: "Build & refine", desc: "Turn the plan into progress through testing and feedback." },
  { num: "04", title: "Launch & grow", desc: "Fine-tune the work and agree on next steps." },
];

export default function Process({ className }: { className?: string }) {
  return (
    <section className={`section process py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] bg-white ${className || ""}`}>
      <div className="container mx-auto max-w-[calc(100vw-40px)]">
        <div className="section-head max-w-[720px] mx-auto mb-[64px] text-center">
          <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
            <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
            How we make it happen
          </div>
          <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
            A clear path from idea to impact.
          </h2>
        </div>
        <div className="steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] border-t border-line">
          {steps.map((step) => (
            <article key={step.num} data-num={step.num} className="pt-[30px] relative">
              <div className="absolute top-0 left-0 w-[32px] h-[32px] rounded-full bg-[#E9F7F2] flex items-center justify-center">
                <span className="text-[10px] font-800 tracking-[0.05em] text-brand-blue">{step.num}</span>
              </div>
              <h3 className="text-[17px] mb-[8px] text-[#303747] tracking-[-0.02em] font-800">{step.title}</h3>
              <p className="text-[#687184] text-[13px] leading-[1.8]">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}