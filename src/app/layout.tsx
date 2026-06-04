import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Preloader from "@/components/ui/Preloader";
import { Toaster } from "sonner";
import CookieConsent from "@/components/ui/CookieConsent";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Costa Devices Electric Ltd — Powering The Future of Electric Mobility",
    template: "%s | Costa Devices",
  },
  description:
    "India's trusted distributor for Eaton Bussmann, ABB & Schneider. 14+ years delivering mission-critical circuit protection for EV, Energy Storage & Industrial Power across 3 continents.",
  keywords: [
    "EV components distributor",
    "Eaton Bussmann distributor India",
    "EV charger fuse",
    "electric vehicle protection",
    "energy storage components",
    "industrial circuit protection",
    "ABB distributor India",
    "Schneider distributor",
    "semiconductor sourcing",
    "Costa Devices",
  ],
  openGraph: {
    title: "Costa Devices Electric Ltd — Powering The Future of Electric Mobility",
    description: "India's trusted distributor for mission-critical circuit protection for EV, Energy Storage & Industrial Power.",
    url: "https://www.costadevices.com",
    siteName: "Costa Devices",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Cinematic Dark Mode enforced natively via CSS :root */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Costa Devices Electric Ltd",
              alternateName: "Costa Devices",
              url: "https://www.costadevices.com",
              logo: "https://www.costadevices.com/logos/logo.png",
              description: "Global distributor for mission-critical circuit protection, electronic components, and industrial automation. Authorized Eaton Bussmann, ABB & Schneider distributor.",
              foundingDate: "2011",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-824-898-2286",
                  contactType: "sales",
                  email: "info@costadevices.com",
                  areaServed: ["IN", "AE", "Global"],
                  availableLanguage: ["English"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "IFZA Property FZCO, Building A2, Dubai Silicon Oasis",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              sameAs: [
                "https://www.linkedin.com/company/costa-devices",
              ],
              hasCredential: [
                { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "ISO 9001:2015" },
                { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "AS 6081" },
                { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "AS 9120B" },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-bg-primary transition-colors duration-500 font-body" suppressHydrationWarning>
        <Preloader />
        <SmoothScroll>
          {/* Global Matte Noise Overlay for Physical Texture */}
          <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] dark:opacity-[0.04] mix-blend-multiply dark:mix-blend-screen" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
          
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold" style={{ background: "var(--brand-green)", color: "#fff" }}>
            Skip to main content
          </a>

          <ScrollProgress />
          <Navbar />
          
          <main id="main-content" className="flex-grow min-h-screen relative z-10">
            {children}
          </main>
          
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
          
          <Toaster 
            position="bottom-right" 
            toastOptions={{
              style: {
                background: 'var(--bg-elevated)',
                color: 'var(--text-primary)',
                border: '1px solid var(--glass-border)'
              }
            }}
          />
          <CookieConsent />
        </SmoothScroll>
      </body>
    </html>
  );
}

