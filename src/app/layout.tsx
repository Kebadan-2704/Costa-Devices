import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollToTop from "@/components/layout/ScrollToTop";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('costa-theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold" style={{ background: "var(--brand-green)", color: "#fff" }}>
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content" className="pt-[80px]">{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "var(--bg-elevated)",
              border: "1px solid var(--glass-border)",
              color: "var(--text-primary)",
            },
          }}
        />
      </body>
    </html>
  );
}



