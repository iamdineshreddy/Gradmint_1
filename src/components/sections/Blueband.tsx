// React JSX transform handles imports automatically
// React import kept for JSX transform

export default function Blueband() {
  return (
    <section className="section blueband py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))]">
      <div className="container mx-auto max-w-[calc(100vw-40px)]">
        <div className="two-col grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
          <div>
            <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
              <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
              The Gradmint mindset
            </div>
            <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
              Different strengths.<br />
              <span className="text-[#44D4B4]">One shared ambition.</span>
            </h2>
          </div>
          <div className="valuegrid grid grid-cols-1 md:grid-cols-3 gap-[20px]">
            {[
              { num: "01", title: "People before process", desc: "Start with your goals, your users and what matters most." },
              { num: "02", title: "Learn by building", desc: "Put ideas into practice, make progress and improve with feedback." },
              { num: "03", title: "Clarity at every step", desc: "Make considered choices and keep the next step clear." },
            ].map((item) => (
              <article key={item.num} className="border border-line rounded-[6px] p-[24px] bg-[#FAF9F6]">
                <small className="block mb-[10px] text-[10px] font-800 tracking-[0.14em] uppercase text-[#44D4B4]">{item.num}</small>
                <h3 className="text-[16px] mb-[8px] text-[#303747] tracking-[-0.02em] font-800">{item.title}</h3>
                <p className="text-[#687184] text-[13px] leading-[1.8]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}