// React JSX transform handles imports automatically

export function FluidBrandText({ className }: { className?: string }) {
  return (
    <div
      className={`fluid-brand-text relative inline-block ${className || ""}`}
      aria-label="Gradmint Technologies"
    >
      <h2 className="relative z-10 flex flex-col sm:flex-row items-baseline gap-1 sm:gap-3 leading-none">
        <span
          className="fluid-primary inline-block text-[clamp(2rem,5.5vw,3.5rem)] font-800 tracking-[-0.03em] leading-none bg-[size:200%_200%] bg-[linear-gradient(90deg,#0078C0_0%,#00A0B0_25%,#18B0A0_50%,#38B880_75%,#44D4B4_100%)] bg-clip-text text-transparent animate-[fluid-flow_8s_ease-in-out_infinite] hover:animate-[fluid-flow_4s_ease-in-out_infinite] transition-all duration-300"
        >
          Gradmint
        </span>
        <span className="fluid-secondary block sm:inline text-[10px] sm:text-[11px] font-700 tracking-[0.18em] uppercase text-brand-teal mt-1 sm:mt-0 sm:ml-1">
          Technologies
        </span>
      </h2>
    </div>
  );
}
