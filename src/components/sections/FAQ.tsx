// React JSX transform handles imports automatically

const faqs = [
  {
    q: "What can Gradmint help me with?",
    a: "Gradmint works across design, web and mobile development, cloud and DevOps, digital marketing and quality assurance. The team also lists hands-on internship programmes.",
  },
  {
    q: "How do we get started on a project?",
    a: "Share your goals through the contact page. You can send the enquiry through WhatsApp or contact the team by email.",
  },
  {
    q: "How long will a project take?",
    a: "Timelines depend on scope, features and integrations. The team can discuss requirements and agree on a realistic plan.",
  },
  {
    q: "Who are internship programmes for?",
    a: "The programmes cover different levels for students, graduates and early-career learners. Confirm prerequisites and availability with Gradmint.",
  },
];

export default function FAQ() {
  return (
    <section className="faq py-[96px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))]">
      <div className="container mx-auto max-w-[calc(100vw-40px)]">
        <div className="section-head max-w-[720px] mx-auto mb-[64px] text-center">
        <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
          <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
          A few things you might ask
        </div>
        <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[16px] text-[#303747] tracking-[-0.04em] font-800">
          Good questions.<br />
          <span className="text-[#44D4B4]">Straight answers.</span>
        </h2>
      </div>
      <div className="faqs space-y-[10px]">
        {faqs.map((faq, idx) => (
          <details key={idx} className="border border-line rounded-[6px]">
            <summary
              className="py-[18px] px-[22px] text-[14px] font-600 text-[#303747] cursor-pointer list-none hover:bg-[#FAF9F6] transition-colors duration-150"
            >
              {faq.q}
              <b className="float-right font-800 text-brand-teal">+</b>
            </summary>
            <p className="px-[22px] pb-[20px] text-[#687184] text-[13px] leading-[1.9] border-t border-line-soft">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
}