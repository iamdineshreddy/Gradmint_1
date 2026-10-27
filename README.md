# Gradmint Technologies Website

Responsive static website served by a small Node.js server.

## Pages
- Home: `/`
- About: `/about/`
- Services: `/services/`
- Internships: `/internships/`
- Contact: `/contact/`

Unknown paths show a branded 404 page. Health check: `/healthz`.

## Local development
Requires Node.js 18 or newer. Run:

```bash
npm start
```

Open `http://localhost:3000`.

## Render
Use a Node Web Service connected to `https://github.com/iamdineshreddy/Gradmint_1`, branch `main`.
- Build command: `npm install`
- Start command: `npm start`
- Health check path: `/healthz` (optional)
- Runtime: Node.js 18+

No API keys or build-time secrets are needed. The application uses only Node's built-in HTTP and filesystem modules.

## Contact form behavior
The form validates fields in the browser and lets users open a prefilled WhatsApp message or an email draft. It does not store submitted details on a server and does not claim to submit automatically; the visitor must review and send the message in the chosen application.

## Content review
Service areas, published internship names/durations/levels, general company positioning, and listed contact information were based on the public Gradmint website. Verify programme availability, eligibility, fees, stipends, certification and cohort dates with the company before relying on them. No reviews, project outcomes, awards, or performance claims have been fabricated.

The logo mark is a typographic placeholder, not an original logo asset. Swap in the official logo from the company when available. Social destinations should be confirmed by Gradmint before launch.
