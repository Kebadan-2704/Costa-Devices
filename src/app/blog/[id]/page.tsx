import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

const BLOG_DB: Record<string, any> = {
  "as6081-counterfeit-mitigation-2026": {
    title: "Advanced AS6081 Counterfeit Mitigation in 2026",
    date: "June 2, 2026",
    author: "Priya Ramanathan",
    authorRole: "Head of Quality Assurance",
    category: "Quality Assurance",
    readTime: "8 min read",
    content: `
      <h2>The Evolution of Counterfeit Components</h2>
      <p>As the semiconductor shortage eases, a new threat has emerged: highly sophisticated counterfeit components entering the secondary market. Basic visual inspections are no longer enough to catch these fakes. Counterfeiters are now using advanced techniques like laser black-topping and die remarking to bypass traditional screening methods.</p>
      
      <h2>The AS6081 Protocol</h2>
      <p>At Costa Devices, we adhere strictly to the AS6081 standard for counterfeit mitigation. This involves an 8-step protocol that includes:</p>
      <ul>
        <li><strong>Visual Inspection:</strong> Examining components under 10x to 200x magnification.</li>
        <li><strong>Data Sheet Review:</strong> Cross-referencing physical dimensions with original manufacturer specifications.</li>
        <li><strong>Component Body Inspection:</strong> Looking for signs of sanding, black-topping, or remarking.</li>
        <li><strong>Solderability Testing:</strong> Ensuring components meet required standards for solderability.</li>
        <li><strong>Marking Test:</strong> Verifying compliance with MIL-STD-883G.</li>
        <li><strong>Decapsulation Test:</strong> Opening the component to inspect the die itself.</li>
        <li><strong>X-Ray Inspection:</strong> Validating the internal structure of the component.</li>
        <li><strong>Electrical Test:</strong> Full functional testing to ensure specifications are met.</li>
      </ul>

      <h2>Why Decapsulation and X-Ray Are Critical</h2>
      <p>Decapsulation allows us to physically view the die inside the component, verifying the manufacturer's logo and part number directly on the silicon. X-Ray inspection helps us identify mismatched wire bonds or missing dies without destroying the component. These advanced techniques are essential for mission-critical applications where failure is not an option.</p>
    `
  },
  "eol-transitions-32bit-mcus": {
    title: "Managing EOL Transitions for 32-bit MCUs",
    date: "May 18, 2026",
    author: "Nikhil Sharma",
    authorRole: "Head of Business Development",
    category: "Supply Chain Strategy",
    readTime: "6 min read",
    content: `
      <h2>The Challenge of EOL Notices</h2>
      <p>When an End-of-Life (EOL) notice is issued for a critical component like a 32-bit MCU, engineering teams are often left scrambling. Redesigning a board and updating firmware can take anywhere from 6 to 12 months, but Last Time Buy (LTB) windows are typically much shorter.</p>

      <h2>Strategic Buffer Stock</h2>
      <p>The most effective way to manage an EOL transition is through strategic buffer stock. By forecasting your required volume for the duration of the redesign phase, you can secure the necessary inventory upfront. However, this often requires tying up significant capital.</p>

      <h2>LTB Financing Programs</h2>
      <p>Costa Devices offers specialized LTB financing programs. We will purchase and hold the required buffer stock in our AS9120B certified facilities, releasing the inventory to you on a scheduled basis. This allows you to secure your supply chain without the immediate capital expenditure, giving your engineering team the runway they need to complete the transition smoothly.</p>

      <h2>Conclusion</h2>
      <p>Proactive EOL management is crucial for maintaining production continuity. By partnering with a strategic distributor, you can mitigate the risks associated with component obsolescence and ensure a seamless transition to next-generation architectures.</p>
    `
  },
  "algorithmic-sourcing-vs-brokers": {
    title: "Algorithmic Sourcing vs. Traditional Brokers",
    date: "April 30, 2026",
    author: "Sam Costa",
    authorRole: "Director of Operations",
    category: "Technology",
    readTime: "5 min read",
    content: `
      <h2>The Limitations of Traditional Brokerage</h2>
      <p>For decades, sourcing hard-to-find or obsolete components meant relying on a network of independent brokers. This process is inherently slow, inefficient, and prone to price gouging. A procurement agent would call down a list of brokers, who would in turn call their own contacts, creating a daisy-chain of markups and delays.</p>

      <h2>The Algorithmic Approach</h2>
      <p>Costa Devices has revolutionized this process with our algorithmic sourcing API. Instead of relying on manual phone calls, our engine queries a vast, verified network of over 5,400 franchised distributors, EMS providers, and OEM excess pools in real-time.</p>

      <h2>Speed and Transparency</h2>
      <p>By automating the discovery process, we can reduce RFQ turnaround times from days to seconds. Our algorithm not only finds the inventory but also analyzes pricing trends and historical reliability data for each supplier, ensuring you get the best possible price from a verified source.</p>

      <h2>The Future of Procurement</h2>
      <p>As supply chains become increasingly complex, relying on manual brokerage is a competitive disadvantage. Programmatic sourcing provides the speed, transparency, and resilience needed to navigate modern component shortages effectively.</p>
    `
  }
};

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = BLOG_DB[id];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-24">
      {/* Header */}
      <section className="max-w-[800px] mx-auto px-6 mb-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-costa-green transition-colors mb-12">
          <ArrowLeft size={16} /> Back to Insights
        </Link>
        
        <div className="flex items-center gap-2 mb-6">
          <Tag size={16} className="text-costa-green" />
          <span className="text-xs text-costa-green font-bold uppercase tracking-widest bg-costa-green/10 px-2 py-1 rounded">
            {post.category}
          </span>
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl font-black tracking-tight mb-8 leading-tight text-gray-900">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 py-6 border-y border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-costa-green/10 text-costa-green flex items-center justify-center font-bold text-xl border border-costa-green/20">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900">{post.author}</p>
              <p className="text-xs text-gray-500 font-medium">{post.authorRole}</p>
            </div>
          </div>
          
          <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
          
          <div className="hidden md:flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <Calendar size={14} /> {post.date}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <Clock size={14} /> {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-[800px] mx-auto px-6">
        <div 
          className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-costa-green hover:prose-a:text-emerald-500 prose-img:rounded-2xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-24 pt-12 border-t border-gray-200 text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Subscribe to Costa Insights</h3>
          <p className="text-gray-500 mb-8 font-medium">Get the latest supply chain analysis and technical deep dives delivered to your inbox.</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-[#fafafa] border border-gray-200 rounded-xl focus:outline-none focus:border-costa-green focus:ring-2 focus:ring-costa-green/20 text-gray-900"
            />
            <MagneticWrapper>
              <button className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-costa-green transition-colors shadow-lg hover:-translate-y-1">
                Subscribe
              </button>
            </MagneticWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
