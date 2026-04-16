import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — EV, Industrial & Power Components",
  description: "Browse our complete catalog of EV fuses, circuit breakers, capacitors, transformers, and automation components from Eaton Bussmann, ABB, and Schneider.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}



