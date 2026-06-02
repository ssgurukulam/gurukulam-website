import ReactMarkdown from 'react-markdown';

// Paste your raw markdown text inside this template literal string
const privacyPolicyContent = `
# Privacy Policy

**Last Updated: June 2026**

Welcome to Shoonya Shikhar Gurukulam ("we," "our," "us," or "Gurukulam"). We operate the website https://www.ssgurukulam.com (the "Site") and provide traditional educational courses, residential programs, and spiritual retreats.

Your privacy is profoundly important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our Site or enroll in our residential programs.

---

## 1. Information We Collect

### A. Personal Data
When you register for a course, apply for a residential program, or contact us via our forms, we may collect personally identifiable information, including:
* Name, email address, and phone number.
* Emergency contact details (critical for residential students).
* Identification documentation (such as Aadhaar card, Passport, or Visa details for international seekers).

### B. Usage and Technical Data
Our servers automatically collect standard technical logs when you access our Site, including your IP address, browser type, operating system, and the specific pages you visit.

---

## 2. How We Use Your Information
We process your information strictly to support your journey at the Gurukulam:
* To process your admissions and course registrations.
* To communicate important updates regarding retreat schedules.
* To maintain campus safety and comply with local governmental reporting laws.

We **never** sell, rent, or trade your personal data to third-party marketing companies.
`;

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article className="prose lg:prose-xl dark:prose-invert">
        <ReactMarkdown>{privacyPolicyContent}</ReactMarkdown>
      </article>
    </main>
  );
}