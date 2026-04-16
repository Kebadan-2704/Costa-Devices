import Link from "next/link";
import { COMPANY, NAV_LINKS, PRODUCT_CATEGORIES, OFFICES } from "@/lib/constants";
import { Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--footer-border)" }}>
      {/* Green Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(to right, transparent, var(--brand-green), transparent)" }} />

      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <path d="M18 2L6 10V26L18 34L30 26V10L18 2Z" fill="url(#footer-grad)" opacity="0.9"/>
                <path d="M12 14L18 10L24 14V22L18 26L12 22V14Z" fill="var(--bg-primary)"/>
                <path d="M18 10L24 14L18 18L12 14L18 10Z" fill="var(--brand-green)" opacity="0.7"/>
                <defs>
                  <linearGradient id="footer-grad" x1="6" y1="2" x2="30" y2="34">
                    <stop stopColor="var(--brand-green)"/>
                    <stop offset="1" stopColor="var(--brand-green-light)"/>
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <span className="font-heading text-lg font-bold tracking-wide" style={{ color: "var(--text-primary)" }}>COSTA</span>
                <span className="font-heading text-[9px] font-medium tracking-[0.2em] block -mt-1" style={{ color: "var(--brand-green)" }}>DEVICES</span>
              </div>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              {COMPANY.tagline}. Trusted distributor for Eaton Bussmann, ABB & Schneider since 2011.
            </p>
            <div className="flex gap-3">
              <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:text-costa-green transition-all"
                style={{ border: "1px solid var(--glass-border)" }}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={`mailto:${COMPANY.email}`}
                className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:text-costa-green transition-all"
                style={{ border: "1px solid var(--glass-border)" }}
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: "var(--text-primary)" }}>Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-costa-green transition-colors duration-300 flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-sm text-text-secondary hover:text-costa-green transition-colors duration-300 flex items-center gap-1 group">
                  Contact
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="text-sm text-text-secondary hover:text-costa-green transition-colors duration-300 flex items-center gap-1 group">
                  Request Quote
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: "var(--text-primary)" }}>Products</h4>
            <ul className="space-y-3">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/products#${cat.id}`} className="text-sm text-text-secondary hover:text-costa-green transition-colors duration-300">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: "var(--text-primary)" }}>Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-text-secondary hover:text-costa-green transition-colors">
                  <Mail size={16} className="text-costa-green shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-text-secondary hover:text-costa-green transition-colors">
                  <Phone size={16} className="text-costa-green shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              {OFFICES.map((office) => (
                <li key={office.id} className="flex items-start gap-3 text-sm text-text-muted">
                  <MapPin size={16} className="text-costa-green shrink-0 mt-0.5" />
                  <span>{office.flag} {office.city}, {office.country}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid var(--footer-border)" }}>
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-muted">
            <Link href="/privacy" className="hover:text-costa-green transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-costa-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
