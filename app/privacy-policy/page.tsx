import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { COMPANY, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Ignition Autocare",
  description: `How ${COMPANY.legalName} collects, uses and protects your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="13 October 2026">
      <p>
        This policy explains how we collect, use and look after your personal information when you
        visit our website, book with us or contact us.
      </p>

      <h2>Who we are</h2>
      <p>
        Ignition Autocare is the trading name of <strong>{COMPANY.legalName}</strong>, a company
        registered in {COMPANY.registeredIn} (company number {COMPANY.number}). Our registered
        office is {COMPANY.registeredOffice}. Our garage is at {SITE.fullAddress}.
      </p>
      <p>
        We are the &ldquo;controller&rdquo; of your personal information, which means we decide how
        it is used. If you have any questions about this policy or your information, contact us:
      </p>
      <ul>
        <li>
          Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </li>
        <li>
          Phone: <a href={SITE.phoneHref}>{SITE.phone}</a>
        </li>
        <li>Post: {SITE.fullAddress}</li>
      </ul>

      <h2>What information we collect</h2>
      <h3>When you book online</h3>
      <p>
        Our online booking system (book.ignitionautocare.uk) asks for your name, phone number, email
        address and vehicle registration, the service you want and your preferred date. If you ask
        us to collect your car, we also take your collection address. We use your registration to
        look up your vehicle&apos;s make, model and MOT history from DVLA and DVSA records.
      </p>
      <h3>When you send us an enquiry</h3>
      <p>
        Our fleet enquiry form asks for your company name, your name, phone number, fleet size and
        a message. Our vehicle recovery form asks for your name, phone number, postcode, and
        optionally your registration and any notes.
      </p>
      <h3>When you call, email or WhatsApp us</h3>
      <p>
        We keep the details you give us, such as your name, contact details, vehicle and what you
        need, so we can deal with your request.
      </p>
      <h3>When we work on your car</h3>
      <p>
        We keep records of your vehicle, the work we carry out, MOT results, quotes, invoices and
        any video health check we record of your vehicle.
      </p>
      <h3>When you browse our website</h3>
      <p>
        We use Google Analytics to understand how visitors use our website, for example which pages
        are viewed. See our <Link href="/cookie-policy">Cookie Policy</Link> for details.
      </p>

      <h2>How and why we use your information</h2>
      <p>
        Under UK data protection law we must have a lawful basis for using your information. We use
        it to:
      </p>
      <ul>
        <li>
          <strong>Take and manage your booking</strong>, carry out the work, collect and deliver
          your car, and send you quotes, confirmations, reminders and your video health check. This
          is necessary to provide the service you have asked for (performance of a contract).
        </li>
        <li>
          <strong>Reply to your enquiries</strong>, including fleet and recovery quotes. This is in
          our legitimate interests, or is a step you have asked us to take before entering into a
          contract.
        </li>
        <li>
          <strong>Keep service, MOT and accounting records</strong>. This is needed to meet our
          legal obligations, for example tax and accounting rules, and to deal with any warranty
          claims or disputes (legitimate interests).
        </li>
        <li>
          <strong>Improve our website</strong> using Google Analytics (legitimate interests).
        </li>
        <li>
          <strong>Protect our forms from spam and abuse</strong> (legitimate interests).
        </li>
      </ul>
      <p>
        We do not sell your information, and we do not send you marketing messages unless you have
        agreed to receive them. You can opt out at any time.
      </p>

      <h2>Who we share your information with</h2>
      <p>
        We only share your information where it is needed to run our business or provide your
        service. We use trusted service providers who act on our instructions:
      </p>
      <ul>
        <li>our website hosting provider, which also receives our website enquiry forms</li>
        <li>the secure cloud database provider for our booking system</li>
        <li>our email and text message providers, which send booking confirmations and reminders</li>
        <li>our spam-protection service, which checks that form submissions come from real people</li>
        <li>our website analytics provider (Google Analytics)</li>
        <li>our video health check provider, which sends you the video of your vehicle</li>
        <li>WhatsApp, if you choose to message us on WhatsApp</li>
      </ul>
      <p>
        If you apply to spread the cost of your bill with Payment Assist, your application is made
        directly with Payment Assist and is covered by their own privacy policy. We may also share
        information where the law requires it, for example with DVSA in connection with MOT testing.
      </p>

      <h2>International transfers</h2>
      <p>
        Some of our service providers store or process information outside the UK, including in the
        United States. Where this happens, we rely on the safeguards UK law allows, such as the UK
        International Data Transfer Addendum or the UK&ndash;US data bridge, to make sure your
        information remains protected.
      </p>

      <h2>How long we keep your information</h2>
      <ul>
        <li>
          <strong>Enquiries that don&apos;t lead to a booking</strong> are kept only for as long as
          we need to deal with them and any follow-up.
        </li>
        <li>
          <strong>Booking, service and invoice records</strong> are kept for six years after the
          end of the financial year they relate to, because the law requires us to keep accounting
          records, and so we can handle warranty claims and disputes.
        </li>
        <li>
          <strong>Website analytics data</strong> is kept according to our Google Analytics
          settings.
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>Under UK data protection law you have the right to:</p>
      <ul>
        <li>ask for a copy of the personal information we hold about you</li>
        <li>ask us to correct information that is wrong or incomplete</li>
        <li>ask us to delete your information, where we no longer have a reason to keep it</li>
        <li>object to, or ask us to restrict, how we use your information</li>
        <li>ask us to transfer information you gave us to another organisation</li>
        <li>withdraw your consent at any time, where we rely on consent</li>
      </ul>
      <p>
        To use any of these rights, contact us using the details above. We will reply within one
        month. There is normally no charge.
      </p>

      <h2>Complaints</h2>
      <p>
        If you are unhappy with how we have used your information, please contact us first so we
        can try to put it right. You also have the right to complain to the Information
        Commissioner&apos;s Office (ICO) at{" "}
        <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>{" "}
        or on 0303 123 1113.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top shows when it was last
        changed.
      </p>
    </LegalPage>
  );
}
