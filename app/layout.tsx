import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import { localBusinessSchema, SITE_URL } from "@/lib/schema";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// GTM-NXD66CHX: GA4. GTM-PNFLPXKD (ignitionautocare432 account): Google Ads
// conversions, Conversion Linker and the Meta Pixel.
const GTM_IDS = ["GTM-NXD66CHX", "GTM-PNFLPXKD"];

// Google Consent Mode v2 defaults — everything denied until "Accept all".
// Must run before GTM loads. Static string.
const CONSENT_DEFAULTS = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);
try{if(localStorage.getItem('cookie-consent')==='all'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}`;

const TITLE = "Trusted MOT & Car Servicing Garage | Ignition Auto Care Castleford";
const DESCRIPTION =
  "Keep your car safe and road-ready with MOTs, servicing, brakes, and tyre fitting at Ignition Auto Care. Expert technicians, honest prices, and easy online booking.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // No title template: 18 of 20 pages already end their own title with
  // "| Ignition Autocare", so a template appended the brand a second time.
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Ignition Autocare",
  // "./" resolves against each page's own path. A plain "/" was inherited by every
  // route, so every page declared the homepage as its canonical.
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Ignition Autocare",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULTS }} />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_IDS[0]}');
${GTM_IDS.slice(1).map((id) => `(function(d,i){var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;d.head.appendChild(j);})(document,'${id}');`).join("\n")}`}
        </Script>
      </head>
      <body className="font-sans">
        <noscript>
          {GTM_IDS.map((id) => (
            <iframe
              key={id}
              src={`https://www.googletagmanager.com/ns.html?id=${id}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          ))}
        </noscript>
        {/*
          Business identity for Google: name, address, phone, hours, geo and the
          service catalogue. Feeds the local pack and the knowledge panel.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Navbar />
        <main className="pt-20 pb-24 sm:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
