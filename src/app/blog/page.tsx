"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Tag, Clock } from "lucide-react";

const BLOG_POSTS = [
  {
    id: "as6081-counterfeit-mitigation-2026",
    title: "Advanced AS6081 Counterfeit Mitigation in 2026",
    excerpt: "With the rise of sophisticated black-topping and die remarking, basic visual inspection is no longer sufficient. Explore our updated 8-step decapsulation and X-ray screening protocol.",
    date: "June 2, 2026",
    author: "Priya Ramanathan",
    category: "Quality Assurance",
    readTime: "8 min read"
  },
  {
    id: "eol-transitions-32bit-mcus",
    title: "Managing EOL Transitions for 32-bit MCUs",
    excerpt: "When your primary microcontroller goes End-of-Life, you have 6 to 12 months to redesign. Learn how strategic buffer stock and Last Time Buy (LTB) financing can extend your runway.",
    date: "May 18, 2026",
    author: "Nikhil Sharma",
    category: "Supply Chain Strategy",
    readTime: "6 min read"
  },
  {
    id: "algorithmic-sourcing-vs-brokers",
    title: "Algorithmic Sourcing vs. Traditional Brokers",
    excerpt: "Why dialing down a list of independent brokers is dead. How API-driven inventory scanning across franchised, EMS, and OEM excess pools reduces RFQ turnaround from days to seconds.",
    date: "April 30, 2026",
    author: "Sam Costa",
    category: "Technology",
    readTime: "5 min read"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-text-primary pt-32 pb-24">
      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-6 mb-24">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight mb-6">
            Costa Insights.
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-8">
            Technical deep dives into supply chain resilience, counterfeit mitigation, and electronic component sourcing.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-[1200px] mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-black/5 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] group"
        >
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-6 text-sm text-text-muted font-medium">
              <span className="px-3 py-1 bg-[#111] text-white rounded-full text-xs font-bold uppercase tracking-widest">
                Featured
              </span>
              <span className="flex items-center gap-1"><Calendar size={14} /> June 7, 2026</span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight mb-6 group-hover:text-costa-green transition-colors">
              The Cost of Line-Downs: A Data-Driven Analysis of Component Shortages
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-4xl">
              Our latest analysis across 500+ OEM manufacturing facilities reveals that the average hourly cost of a factory line-down has increased by 42% since 2023. We break down the true cost of missing a single $2 component and how to build resilience into your BOM.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-costa-green/20 text-costa-green flex items-center justify-center font-bold text-lg">
                  S
                </div>
                <div>
                  <p className="font-bold text-sm text-text-primary">Sam Costa</p>
                  <p className="text-xs text-text-muted font-medium">Director of Operations</p>
                </div>
              </div>
              
              <Link href="/blog/cost-of-line-downs" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-costa-green transition-colors">
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={post.id} 
              className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] group flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={12} className="text-costa-green" />
                  <span className="text-xs text-costa-green font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="font-heading text-xl font-bold tracking-tight mb-4 group-hover:text-costa-green transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="pt-6 border-t border-black/5 flex items-center justify-between text-xs text-text-muted font-medium mt-auto">
                  <span className="flex items-center gap-1.5"><User size={12} /> {post.author}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
