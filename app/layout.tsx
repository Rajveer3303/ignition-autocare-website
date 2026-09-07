import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { localBusinessSchema, SITE_URL } from "@/lib/schema";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const GTM_ID = "GTM-NXD66CHX";

const TITLE = "Trusted MOT & Car Servicing Garage | Ignition Auto Care Castleford";
const DESCRIPTION =
  "Keep your car safe and road-ready with MOTs, servicing, brakes, and tyre fitting at Ignition Auto Care. Expert technicians, honest prices, and easy online booking.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    // Page titles become "MOT Castleford … | Ignition Autocare" without each
    // page having to repeat the brand.
    template: "%s | Ignition Autocare",
  },
  description: DESCRIPTION,
  applicationName: "Ignition Autocare",
  alternates: { canonical: "/" },
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
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
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
      </body>
    </html>
  );
}
