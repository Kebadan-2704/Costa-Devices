import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="text-center max-w-lg">
        <div className="font-mono text-[8rem] font-bold leading-none mb-4" style={{ color: "var(--brand-green)", opacity: 0.2 }}>
          404
        </div>
        <h1 className="font-heading text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
          Page Not Found
        </h1>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} /> Go Home
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}



