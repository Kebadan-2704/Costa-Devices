import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company — About Costa Devices Electric Ltd",
  description: "Learn about Costa Devices' 14-year journey from India to 3 continents. Meet our team, explore our timeline, and discover our mission in EV and industrial power.",
};

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return children;
}



