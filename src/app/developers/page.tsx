"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, CheckCircle2, Terminal, Server, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function DevelopersPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const curlSnippet = `curl -X POST https://api.costadevices.com/v1/quotes \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "parts": [
      {"mpn": "STM32F405RGT6", "qty": 5000, "targetPrice": 4.50},
      {"mpn": "FWP-50B", "qty": 200, "targetPrice": null}
    ],
    "urgency": "critical",
    "deliveryRegion": "EMEA"
  }'`;

  const nodeSnippet = `import { CostaClient } from '@costadevices/sdk';

const client = new CostaClient(process.env.COSTA_API_KEY);

const quote = await client.quotes.create({
  parts: [
    { mpn: 'STM32F405RGT6', qty: 5000, targetPrice: 4.50 },
    { mpn: 'FWP-50B', qty: 200 }
  ],
  urgency: 'critical',
  deliveryRegion: 'EMEA'
});

console.log(\`Quote ID: \${quote.id}\`);
console.log(\`Estimated Turnaround: \${quote.eta}\`);`;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-text-primary pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-costa-green/10 text-costa-green text-xs font-bold tracking-widest uppercase mb-6">
            <Server size={14} />
            Costa Devices API v1
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-black tracking-tight mb-6">
            Programmatic Sourcing Infrastructure.
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-8">
            Automate your supply chain. Integrate the Costa Devices global inventory network directly into your ERP or procurement software. Real-time pricing, instant BOM payloads, and automated order execution.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[#111] text-white rounded-lg font-bold hover:bg-costa-green transition-colors shadow-lg">
              Generate API Key
            </button>
            <Link href="/contact" className="px-6 py-3 bg-white border border-black/10 rounded-lg font-bold hover:border-black/20 transition-colors">
              Contact Sales Engineering
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <Zap className="text-costa-green mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Sub-Second Latency</h3>
            <p className="text-text-secondary leading-relaxed">
              Query our 5,400+ active global suppliers with guaranteed P99 latency of under 400ms. True algorithmic sourcing.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <Shield className="text-costa-green mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
            <p className="text-text-secondary leading-relaxed">
              SOC 2 Type II compliant infrastructure. End-to-end encryption for all proprietary BOM payloads and pricing models.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <Terminal className="text-costa-green mb-4" size={32} />
            <h3 className="text-xl font-bold mb-3">Native SDKs</h3>
            <p className="text-text-secondary leading-relaxed">
              Official SDKs for Node.js, Python, and Go. Typed interfaces for seamless integration into modern microservices.
            </p>
          </div>
        </div>
      </section>

      {/* Code Demo */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="bg-[#111] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <div className="grid lg:grid-cols-2">
            
            <div className="p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Create a Quote Request</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Send an array of part numbers (MPNs) and target pricing. Our algorithmic engine will scan franchised, independent, and EMS excess channels globally.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-costa-green/20 text-costa-green flex items-center justify-center shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Authenticate</h4>
                    <p className="text-sm text-gray-400">Pass your Bearer token in the authorization header.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-costa-green/20 text-costa-green flex items-center justify-center shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Define Payload</h4>
                    <p className="text-sm text-gray-400">Include exact MPNs, quantities, and urgency routing flags.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-costa-green/20 text-costa-green flex items-center justify-center shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Receive Webhook</h4>
                    <p className="text-sm text-gray-400">We'll push the verified quote directly to your endpoint when ready.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12 bg-[#0A0A0A]">
              <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                <button className="text-costa-green text-sm font-bold tracking-wider">cURL</button>
                <button className="text-gray-500 text-sm font-bold tracking-wider hover:text-gray-300 transition-colors">Node.js</button>
                <button className="text-gray-500 text-sm font-bold tracking-wider hover:text-gray-300 transition-colors">Python</button>
              </div>
              
              <div className="relative group">
                <button 
                  onClick={() => copyToClipboard(curlSnippet, 'curl')}
                  className="absolute top-4 right-4 p-2 bg-white/5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"
                >
                  {copied === 'curl' ? <CheckCircle2 size={16} className="text-costa-green" /> : <Copy size={16} />}
                </button>
                <pre className="text-sm text-gray-300 overflow-x-auto p-4 rounded-xl bg-black border border-white/5 font-mono leading-loose">
                  <code>{curlSnippet}</code>
                </pre>
              </div>

              <div className="mt-8 relative group">
                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-3">Response</p>
                <pre className="text-sm text-costa-green overflow-x-auto p-4 rounded-xl bg-black/50 border border-costa-green/20 font-mono leading-loose">
                  <code>{`{
  "id": "qte_98xjs21",
  "status": "processing",
  "eta_seconds": 1200,
  "webhook_registered": true
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
