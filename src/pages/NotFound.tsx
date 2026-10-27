import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="py-[100px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] text-center">
        <div className="container mx-auto max-w-[calc(100vw-40px)]">
          <Link
            to="/"
            className="brand-lockup inline-flex items-center gap-[10px] text-decoration-none mb-[32px] inline-block"
            aria-label="Gradmint Technologies home"
          >
            <img
              className="brand-logo h-auto w-auto h-[28px]"
              src="/assets/logo.jpg"
              alt="Gradmint Technologies logo"
            />
            <span className="brand-name flex flex-col items-start justify-center gap-[2px] m-0">
              <span className="brand-gradmint block text-[16px] font-800 tracking-[-0.04em] leading-none text-[#005A8F]">
                gradmint
              </span>
              <span className="brand-technologies block text-[8px] font-700 tracking-[0.18em] uppercase leading-none text-[#44D4B4]">
                technologies
              </span>
            </span>
          </Link>
          <div className="eyebrow inline-flex items-center justify-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[16px]">
            <span className="inline-block w-[18px] h-[1.5px] bg-[#93E6D3]" />
            404 &mdash; PAGE NOT FOUND
          </div>
          <h1 className="text-[clamp(42px,6vw,72px)] leading-[1.1] mb-[24px] max-w-[460px] mx-auto text-[#303747] tracking-[-0.04em] font-800">
            This path has<br />
            <em className="text-[#44D4B4]">taken a detour.</em>
          </h1>
          <p className="text-[#687184] max-w-[460px] mx-auto mb-[32px] leading-[1.8] text-[16px]">
            The page may have moved or the address may be incorrect.
          </p>
          <Link
            to="/"
            className="button-primary inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 bg-brand-blue text-white rounded-[6px] hover:bg-brand-blue-dark transition-colors duration-150"
          >
            Back to home &rarr;
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}