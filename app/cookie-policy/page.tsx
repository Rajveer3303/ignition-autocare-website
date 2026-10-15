import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { COMPANY, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy | Ignition Autocare",
  description: "Which cookies the Ignition Autocare website uses and how to control them.",
};

/** Google Analytics 4 property loaded through GTM-NXD66CHX. */
const GA_ID = "2HYQCXLVXB";

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="15 October 2026">
      <p>
        This policy explains how {COMPANY.legalName} (trading as Ignition Autocare) uses cookies on
        ignitionautocare.co.uk. Cookies are small text files that a website saves on your device.
      </p>

      <h2>The cookies we use</h2>
      <p>
        Our website only uses non-essential cookies if you choose <strong>Accept all</strong> in the
        cookie banner. Until then they are switched off (using Google Consent Mode). With your
        permission we use <strong>Google Analytics</strong> to see how many people visit and which
        pages they view, and <strong>Google Ads</strong> and the <strong>Meta (Facebook) Pixel</strong>
        to measure whether our adverts lead to bookings and enquiries. These are loaded through
        Google Tag Manager. Google Analytics sets these cookies:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-ink-900/10 text-ink-900">
              <th className="py-2 pr-4 font-semibold">Cookie</th>
              <th className="py-2 pr-4 font-semibold">Provider</th>
              <th className="py-2 pr-4 font-semibold">Purpose</th>
              <th className="py-2 font-semibold">How long it lasts</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-ink-900/5">
              <td className="py-2 pr-4 font-mono text-xs">_ga</td>
              <td className="py-2 pr-4">Google Analytics</td>
              <td className="py-2 pr-4">Tells visits apart so we can count visitors</td>
              <td className="py-2">2 years</td>
            </tr>
            <tr className="border-b border-ink-900/5">
              <td className="py-2 pr-4 font-mono text-xs">_ga_{GA_ID}</td>
              <td className="py-2 pr-4">Google Analytics</td>
              <td className="py-2 pr-4">Keeps track of the current visit</td>
              <td className="py-2">2 years</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Google Analytics does not tell us who you are. Find out more in{" "}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
          how Google uses information from sites that use its services
        </a>
        .
      </p>

      <h2>Advertising cookies</h2>
      <p>
        If you accept, <strong>Google Ads</strong> sets cookies such as <span className="font-mono text-xs">_gcl_au</span>{" "}
        and <span className="font-mono text-xs">_gcl_aw</span> (up to 90 days) to recognise that you arrived
        from one of our adverts, and the <strong>Meta Pixel</strong> sets{" "}
        <span className="font-mono text-xs">_fbp</span> (up to 90 days). When you move to our booking system,
        a reference to the advert you clicked is passed along so a booking can be matched to it.
      </p>

      <h2>Other services</h2>
      <ul>
        <li>
          <strong>Online booking.</strong> When you book, you move to our booking system at
          book.ignitionautocare.uk. It uses a spam-protection check to make sure bookings come
          from real people rather than bots.
        </li>
        <li>
          <strong>Links to other websites.</strong> Services we link to, such as WhatsApp, Google
          Maps, Payment Assist and our video health check videos, may set their own cookies when
          you open them. Their own cookie policies apply.
        </li>
      </ul>

      <h2>How to control cookies</h2>
      <ul>
        <li>
          Use the <strong>Cookie settings</strong> link at the bottom of any page to change your choice at
          any time.
        </li>
        <li>
          You can block or delete cookies in your browser settings. Our website will still work if
          you do.
        </li>
        <li>
          You can stop Google Analytics collecting your visits on any website by installing the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics opt-out browser add-on
          </a>
          .
        </li>
      </ul>

      <h2>More information</h2>
      <p>
        For how we handle your personal information, see our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>. If you have any questions, email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
        <a href={SITE.phoneHref}>{SITE.phone}</a>.
      </p>
    </LegalPage>
  );
}
