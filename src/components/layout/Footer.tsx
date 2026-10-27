import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About us" },
  { href: "/services/", label: "Our services" },
  { href: "/internships/", label: "Internship programmes" },
];

const servicesLinks = [
  { href: "/services/#ui-ux", label: "Design & development" },
  { href: "/services/#cloud-devops", label: "Cloud & DevOps" },
  { href: "/services/#digital-marketing", label: "Digital marketing" },
  { href: "/services/#quality-assurance", label: "Testing & QA" },
];

const connectLinks = [
  { href: "mailto:info@gradminttechnologiespvtltd.com", label: "info@gradminttechnologiespvtltd.com" },
  { href: "tel:+919177719681", label: "+91 91777 19681" },
  {
    href: "https://www.instagram.com/gradmint_official/",
    label: "Instagram &rarr;",
    external: true,
  },
  {
    href: "https://www.linkedin.com/company/gradmint-technologies/",
    label: "LinkedIn &rarr;",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-[calc(100vw-40px)] px-6 py-[64px] pb-[32px]">
        <div className="footgrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[34px] mb-[40px]">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="brand-lockup inline-flex items-center gap-[10px] text-decoration-none mb-[14px]"
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
            <p className="text-sm text-[#687184] leading-[1.8] mb-[10px]">
              Building better technology.<br />
              Creating brighter possibilities.
            </p>
            <small className="text-xs text-[#687184]">
              Based in Hyderabad. Built for what&rsquo;s next.
            </small>
          </div>
          <div>
            <b className="text-xs font-800 tracking-[0.1em] uppercase text-[#303747] mb-[12px] block">
              Explore
            </b>
            {exploreLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block text-sm text-[#687184] mb-[8px] hover:text-[#44D4B4] transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <b className="text-xs font-800 tracking-[0.1em] uppercase text-[#303747] mb-[12px] block">
              What we do
            </b>
            {servicesLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block text-sm text-[#687184] mb-[8px] hover:text-[#44D4B4] transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <b className="text-xs font-800 tracking-[0.1em] uppercase text-[#303747] mb-[12px] block">
              Let&rsquo;s connect
            </b>
            {connectLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="block text-sm text-[#687184] mb-[8px] hover:text-[#44D4B4] transition-colors duration-150"
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
            ))}
          </div>
        </div>

        <div className="footbottom flex items-center justify-between gap-[16px] pt-[24px] border-t border-line text-[#687184] text-xs font-600 tracking-[0.08em]">
          <span>
            &copy; <span id="year">{currentYear}</span> Gradmint Technologies Pvt. Ltd.
          </span>
          <span>Made with thought in Hyderabad, India.</span>
        </div>
      </div>
    </footer>
  );
}