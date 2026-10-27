import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<{ text: string; kind: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const buildFormMessage = (form: HTMLFormElement): string => {
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      interest: String(formData.get("interest") || "General enquiry"),
      message: String(formData.get("message") || "").trim(),
    };

    return [
      "Hello Gradmint Technologies,",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Enquiry: ${data.interest}`,
      "",
      "Message:",
      data.message,
    ].join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (!form.reportValidity()) return;

    const messageText = buildFormMessage(form);

    setSubmitting(true);
    setStatus({
      text: "Opening WhatsApp. Review the message in WhatsApp and press Send to deliver your enquiry.",
      kind: "info",
    });

    const waUrl = `https://wa.me/919177719681?text=${encodeURIComponent(messageText)}`;
    const win = window.open(waUrl, "_blank", "noopener,noreferrer");

    if (!win) {
      setSubmitting(false);
      setStatus({
        text: "Could not open WhatsApp. Please check your browser's pop-up settings.",
        kind: "error",
      });
      return;
    }

    setSubmitting(false);
    setStatus({
      text: "WhatsApp has been opened. Please press Send in WhatsApp to deliver your enquiry.",
      kind: "info",
    });
  };

  const handleEmail = () => {
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (!form || !form.reportValidity()) return;

    const messageText = buildFormMessage(form);

    setSubmitting(true);
    setStatus({
      text: "Opening an email draft. Review it and press Send to deliver your enquiry.",
      kind: "info",
    });

    const mailto =
      `mailto:info@gradminttechnologiespvtltd.com?subject=${encodeURIComponent("Gradmint enquiry — " + buildFormMessage(form).split("\n")[2].replace("Name: ", ""))}&body=${encodeURIComponent(messageText)}`;

    window.location.href = mailto;

    setSubmitting(false);
    setStatus({
      text: "An email draft has been opened. Please press Send in your email app to deliver your enquiry.",
      kind: "info",
    });
  };

  return (
    <>
      <section className="pagehero py-[100px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] pb-[64px] text-center">
        <div className="container mx-auto max-w-[calc(100vw-40px)]">
          <div className="eyebrow mx-auto mb-[16px] inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4]">
            <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
            LET'S MAKE SOMETHING HAPPEN
          </div>
          <h1 className="text-[clamp(42px,6vw,72px)] leading-[1.1] mb-[16px] max-w-[720px] mx-auto text-[#303747] tracking-[-0.04em] font-800">
            It starts with<br />
            <em className="text-[#44D4B4]">hello.</em>
          </h1>
          <p className="text-[#687184] max-w-[620px] mx-auto mb-[24px] leading-[1.8] text-[16px]">
            A new project, a career question or an idea you can't stop thinking about. We'd
            love to hear it.
          </p>
        </div>
      </section>

      <section className="contact grid grid-cols-1 lg:grid-cols-2 gap-[70px] py-[90px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] align-start">
        <div className="contact-info max-w-[480px]">
          <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
            <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
            GOOD CONVERSATIONS. BETTER POSSIBILITIES.
          </div>
          <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.15] mb-[10px] text-[#303747] tracking-[-0.04em] font-800">
            Tell us where you<br />
            <em className="text-[#44D4B4]">want to go.</em>
          </h2>
          <p className="text-[#687184] mb-[22px] leading-[1.8] text-[14px]">
            We'll work out how to get there, together.
          </p>
          <div className="detail flex gap-[14px] mb-[22px]">
            <small className="text-[10px] font-800 tracking-[0.14em] uppercase text-[#44D4B4] min-w-[130px]">
              DROP US A LINE
            </small>
            <a href="mailto:info@gradminttechnologiespvtltd.com" className="text-[#687184] text-[14px]">
              info@gradminttechnologiespvtltd.com
            </a>
          </div>
          <div className="detail flex gap-[14px] mb-[22px]">
            <small className="text-[10px] font-800 tracking-[0.14em] uppercase text-[#44D4B4] min-w-[130px]">
              GIVE US A CALL
            </small>
            <a href="tel:+919177719681" className="text-[#687184] text-[14px]">
              +91 91777 19681
            </a>
          </div>
          <div className="detail flex flex-col gap-[6px] mb-[22px]">
            <small className="text-[10px] font-800 tracking-[0.14em] uppercase text-[#44D4B4]">
              FIND US IN HYDERABAD
            </small>
            <p className="text-[#687184] text-[14px]">
              4th Floor, Siri Height, Ayyappa Society Main Road, Madhapur, Hyderabad, Telangana –
              500081
            </p>
          </div>
          <div className="detail flex flex-col gap-[6px]">
            <small className="text-[10px] font-800 tracking-[0.14em] uppercase text-[#44D4B4]">
              FOLLOW ALONG
            </small>
            <a
              href="https://www.instagram.com/gradmint_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#687184] text-[14px]"
            >
              @gradmint_official on Instagram →
            </a>
            <a
              href="https://www.linkedin.com/company/gradmint-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#687184] text-[14px]"
            >
              Gradmint Technologies on LinkedIn →
            </a>
          </div>
        </div>

        <div className="formwrap border border-line rounded-[6px] p-[34px] bg-white">
          <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[14px]">
            <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
            WHAT'S ON YOUR MIND?
          </div>
          <h2 className="text-[clamp(28px,4vw,40px)] leading-[1.15] mb-[10px] text-[#303747] tracking-[-0.04em] font-800">
            Let's take it <em className="text-[#44D4B4]">from here.</em>
          </h2>
          <p className="text-[#687184] mb-[26px] leading-[1.8] text-[14px]">
            Share a few details, then choose to open WhatsApp or a pre-filled email. Nothing is
            sent until you press Send in that app.
          </p>
          <form id="contact-form" onSubmit={handleSubmit}>
            <label className="block mb-[6px] text-[12px] font-700 tracking-[0.04em] text-[#303747]">
              Your name <span className="text-[#c0392b]">*</span>
            </label>
            <input
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="Your name"
              className="w-full border border-line rounded-[6px] px-[12px] py-[10px] text-[14px] text-[#303747] bg-white focus:border-brand-mint focus:outline-none transition-colors duration-150"
            />

            <label className="block mt-[4] mb-[6px] text-[12px] font-700 tracking-[0.04em] text-[#303747]">
              Email address <span className="text-[#c0392b]">*</span>
            </label>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={160}
              placeholder="you@example.com"
              className="w-full border border-line rounded-[6px] px-[12px] py-[10px] text-[14px] text-[#303747] bg-white focus:border-brand-mint focus:outline-none transition-colors duration-150"
            />

            <label className="block mt-[4] mb-[6px] text-[12px] font-700 tracking-[0.04em] text-[#303747]">
              I'm reaching out about
            </label>
            <select
              name="interest"
              className="w-full border border-line rounded-[6px] px-[12px] py-[10px] text-[14px] text-[#303747] bg-white focus:border-brand-mint focus:outline-none transition-colors duration-150"
            >
              <option value="Project enquiry">Project enquiry</option>
              <option value="Internship enquiry">Internship enquiry</option>
              <option value="General enquiry">General enquiry</option>
            </select>

            <label className="block mt-[4] mb-[6px] text-[12px] font-700 tracking-[0.04em] text-[#303747]">
              Your message <span className="text-[#c0392b]">*</span>
            </label>
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={2000}
              rows={5}
              placeholder="Tell us what you have in mind."
              className="w-full border border-line rounded-[6px] px-[12px] py-[10px] text-[14px] text-[#303747] bg-white focus:border-brand-mint focus:outline-none transition-colors duration-150"
            />

            <label className="consent flex items-start gap-[10px] text-[12px] text-[#687184] mt-[4] mb-[18px]">
              <input type="checkbox" required className="mt-[2px] shrink-0" />
              <span>I agree to open WhatsApp or email to send these details.</span>
            </label>
            <p className="privacy text-xs text-[#687184] mb-[22px]">
              This website does not store submitted form data on a server.
            </p>
            {status && (
              <p
                id="form-status"
                className={`form-status min-h-[20px] text-[13px] mb-[16px] font-600 ${
                  status.kind === "success" ? "text-[#44D4B4]" : status.kind === "error" ? "text-[#c0392b]" : "text-brand-blue"
                }`}
              >
                {status.text}
              </p>
            )}
            {!status && (
              <p id="form-status" className="form-status min-h-[20px] text-[13px] mb-[16px]" />
            )}
            <div className="formbuttons flex gap-[12px] flex-wrap">
              <button
                type="submit"
                className="button-primary inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 bg-brand-blue text-white rounded-[6px] hover:bg-brand-blue-dark transition-colors duration-150 disabled:opacity-70"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Review WhatsApp message →"}
              </button>
              <button
                type="button"
                onClick={handleEmail}
                className="button-outline inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 border border-line text-[#303747] rounded-[6px] hover:border-brand-mint hover:text-brand-mint transition-colors duration-150 disabled:opacity-70"
                disabled={submitting}
              >
                Prepare email →
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="map py-[80px] px-6 sm:px-[max(32px,calc((100vw-1180px)/2))] bg-[#FAF9F6]">
        <div className="container mx-auto max-w-[calc(100vw-40px)]">
          <div className="flex justify-between items-start lg:items-center gap-[40px]">
            <div>
              <div className="eyebrow inline-flex items-center gap-[10px] text-[11px] font-800 tracking-[0.16em] uppercase text-[#44D4B4] mb-[8px]">
                <span className="inline-block w-[18px] h-[1.5px] bg-[#44D4B4]" />
                BASED IN HYDERABAD
              </div>
              <h2 className="text-[clamp(34px,5vw,52px)] leading-[1.1] mb-[8px] text-[#303747] tracking-[-0.04em] font-800">
                Grounded here.<br />
                <em className="text-[#44D4B4]">Built for what's next.</em>
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=4th+Floor+Siri+Height+Ayyappa+Society+Main+Road+Madhapur+Hyderabad+500081"
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline inline-flex items-center justify-center gap-[6px] px-[20px] py-[11px] text-[13px] font-700 border border-line text-[#303747] rounded-[6px] hover:border-brand-mint hover:text-brand-mint transition-colors duration-150"
            >
              View on maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}