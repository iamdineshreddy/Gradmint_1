(() => {
  const toggle = document.querySelector(".menu");
  const nav = document.querySelector("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opened = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!opened));
      nav.classList.toggle("is-open", !opened);
      toggle.setAttribute("aria-label", opened ? "Open navigation" : "Close navigation");
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        toggle.focus();
      }
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");
  const submitBtn = form.querySelector('button[type="submit"]');
  const emailBtn = document.getElementById("email-submit");

  function setStatus(text, kind) {
    status.textContent = text;
    status.className = "form-status " + kind;
  }

  function clearStatus() {
    status.textContent = "";
    status.className = "form-status";
  }

  function getData() {
    if (!form.reportValidity()) return null;
    const f = new FormData(form);
    return {
      name: String(f.get("name") || "").trim(),
      email: String(f.get("email") || "").trim(),
      interest: String(f.get("interest") || "General enquiry"),
      message: String(f.get("message") || "").trim(),
    };
  }

  function message(d) {
    return [
      "Hello Gradmint Technologies,",
      "",
      "Name: " + d.name,
      "Email: " + d.email,
      "Enquiry: " + d.interest,
      "",
      "Message:",
      d.message,
    ].join("\n");
  }

  function setSubmitting(state) {
    if (state) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending&hellip;";
      if (emailBtn) emailBtn.disabled = true;
      clearStatus();
    } else {
      submitBtn.disabled = false;
      submitBtn.textContent = "Review WhatsApp message &rarr;";
      if (emailBtn) emailBtn.disabled = false;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = getData();
    if (!d) return;
    setSubmitting(true);
    setStatus("Opening WhatsApp. Review the message in WhatsApp and press Send to deliver your enquiry.", "info");

    const waUrl =
      "https://wa.me/919177719681?text=" + encodeURIComponent(message(d));

    const win = window.open(waUrl, "_blank", "noopener,noreferrer");
    if (!win) {
      setSubmitting(false);
      setStatus("Could not open WhatsApp. Please check your browser&rsquo;s pop-up settings.", "error");
      return;
    }

    // Give the user time to review/send in WhatsApp, then mark success.
    setTimeout(() => {
      setSubmitting(false);
      setStatus("If you sent the message in WhatsApp, your enquiry is on its way.", "success");
    }, 1200);
  });

  if (emailBtn) {
    emailBtn.addEventListener("click", () => {
      const d = getData();
      if (!d) return;
      setSubmitting(true);
      setStatus("Opening an email draft. Review it and press Send to deliver your enquiry.", "info");

      const mailto =
        "mailto:info@gradminttechnologiespvtltd.com?" +
        "subject=" + encodeURIComponent("Gradmint enquiry &mdash; " + d.interest) +
        "&body=" + encodeURIComponent(message(d));

      window.location.href = mailto;

      setTimeout(() => {
        setSubmitting(false);
        setStatus("If you sent the email, your enquiry is on its way.", "success");
      }, 1200);
    });
  }
})();
