// ============================================
// COSTA DEVICES ELECTRIC LTD — Company Data
// ============================================

export const COMPANY = {
  name: "Costa Devices",
  legalName: "Costa Devices Electric Ltd",
  dubaiEntity: "COSTA DEVICES FZCO",
  founded: 2011,
  yearsExperience: 14,
  tagline: "Powering The Future of Electric Mobility",
  description:
    "India's trusted distributor for Eaton Bussmann, ABB & Schneider — delivering mission-critical circuit protection for EV, Energy Storage & Industrial Power.",
  mission:
    "To deliver trusted, efficient electrical component solutions that power innovation across the EV, energy, and industrial sectors worldwide.",
  vision:
    "To be the world's most reliable power component supply chain partner — from electric vehicles to smart grids.",
  email: "info@costadevices.com",
  phone: "+91 8248982286",
  whatsapp: "+918248982286",
  website: "https://www.costadevices.com",
  linkedin: "https://www.linkedin.com/company/costa-devices",
};

export const TEAM = [
  {
    name: "Sam",
    title: "Director of Operations",
    email: "sam@costadevices.com",
    image: "/images/team/sam.jpg",
  },
  {
    name: "Nikhil",
    title: "Head of Business Development",
    email: "nikhil@costadevices.com",
    image: "/images/team/nikhil.jpg",
  },
];

export const OFFICES = [
  {
    id: "dubai",
    country: "UAE",
    flag: "🇦🇪",
    city: "Dubai",
    label: "Global HQ",
    address: "IFZA Property FZCO, Building A2, Dubai Silicon Oasis, DDP, Dubai, UAE",
    phone: "+971 4 501 8125",
    email: "info@costadevices.com",
    timezone: "GMT+4",
    coordinates: { lat: 25.1173, lng: 55.3834 },
  },
  {
    id: "india",
    country: "India",
    flag: "🇮🇳",
    city: "Coimbatore",
    label: "India Operations",
    address: "Coimbatore, Tamil Nadu, India",
    phone: "+91 8248982286",
    email: "info@costadevices.com",
    timezone: "GMT+5:30",
    coordinates: { lat: 11.0168, lng: 76.9558 },
  },
  {
    id: "hongkong",
    country: "Hong Kong",
    flag: "🇭🇰",
    city: "Hong Kong",
    label: "Asia Pacific Hub",
    address: "Hong Kong SAR, China",
    phone: "+852 3008 5693",
    email: "hk@costadevices.com",
    timezone: "GMT+8",
    coordinates: { lat: 22.3193, lng: 114.1694 },
  },
];

export const CLIENTS = [
  { name: "Ather Energy", logo: "/logos/ather.svg" },
  { name: "Ola Electric", logo: "/logos/ola.svg" },
  { name: "Foxconn", logo: "/logos/foxconn.svg" },
  { name: "HP", logo: "/logos/hp.svg" },
  { name: "Kaynes Technology", logo: "/logos/kaynes.svg" },
  { name: "GIGA", logo: "/logos/giga.svg" },
  { name: "Biosense Webster", logo: "/logos/biosense.svg" },
  { name: "Uno Minda", logo: "/logos/unominda.svg" },
  { name: "CoreCentric Solutions", logo: "/logos/corecentric.svg" },
];

export const BRANDS = [
  { name: "Eaton", products: "Breakers, Contactors, Relays, Buttons", logo: "https://logo.clearbit.com/eaton.com" },
  { name: "Eaton Bussmann", products: "Fuses (EV, Charger, Energy Storage, Industrial)", logo: "https://logo.clearbit.com/eaton.com" },
  { name: "ABB", products: "VFDs, Breakers, Safety Relays, Contactors, Fuses", logo: "https://logo.clearbit.com/abb.com" },
  { name: "Schneider", products: "Breakers, Safety Relays, Contactors", logo: "https://logo.clearbit.com/se.com" },
  { name: "Littelfuse", products: "Fuses", logo: "https://logo.clearbit.com/littelfuse.com" },
  { name: "Mersen", products: "Fuses", logo: "https://logo.clearbit.com/mersen.com" },
  { name: "Cooper Power", products: "Fuse, Switch, Tap Changer, Bushing", logo: "https://logo.clearbit.com/eaton.com" },
  { name: "HPS", products: "Transformers", logo: "https://logo.clearbit.com/hammondpowersolutions.com" },
  { name: "SNC", products: "Transformers", logo: "https://logo.clearbit.com/sncmanufacturing.com" },
];

export const DISTRIBUTOR_BRANDS = [
  "PKC Group", "Ohmite", "Kyocera", "Sensata Technologies", "KOA Speer Electronics", "Diodes Incorporated",
  "IODE Corp", "Knowles", "Glenair", "Honeywell", "Chemi-Con", "Aptiv", "AirBorn", "Abracon", "SK hynix",
  "Macronix", "Winbond", "Texas Instruments", "Fujitsu", "Walsin", "TE Connectivity", "Pulse", "TSMC",
  "OSRAM", "Micro Commercial Components", "Coilcraft", "ROHM Semiconductor", "Nichicon", "KEL", "Bourns",
  "CoreCentric Solutions", "Biosense Webster", "Lite-On", "Atmel", "Taiyo Yuden", "Fairchild Semiconductor",
  "Semtech", "Quectel", "Cavli Wireless", "STMicroelectronics", "Infineon", "Micron", "Amphenol", "Eaton",
  "Sawnics", "Delta", "Diotec Semiconductor", "Dialog Semiconductor", "Nexperia", "NEC", "JST", "TDK",
  "Murata", "DBwave", "Skyworks", "Toshiba", "Renesas", "Altera", "Quantic Evans", "Panasonic", "NXP",
  "NVIDIA", "Sunlord", "XP Power", "Vishay", "Yageo", "KEMET", "Allegro", "Molex", "Sumitomo",
  "Analog Devices", "Omron", "Moschip", "Broadcom", "Qualcomm", "Xilinx", "Intel", "GigaDevice",
  "HP Indigo", "Kaynes Technology", "Foxconn", "UNO Minda", "OLA", "Ather", "Mersen", "Littelfuse",
  "Cooper Power", "HPS", "SNC", "ABB", "Schneider"
];

export const PRODUCT_CATEGORIES = [
  {
    id: "ev-protection",
    title: "EV & Charger Protection",
    icon: "Zap",
    description: "Mission-critical fuses and protection for electric vehicles and charging infrastructure",
    products: ["EV Charger Fuse", "EV Fuse", "Energy Storage Fuse", "Pyro Fuse", "DC Contactor"],
    image: "/images/products/ev-protection.png",
  },
  {
    id: "circuit-protection",
    title: "Circuit Protection & Control",
    icon: "Shield",
    description: "Industrial-grade breakers, contactors, and safety devices for power systems",
    products: ["Circuit Breaker", "Contactor", "DC Contactor", "Safety Relay", "Push Button"],
    image: "/images/products/circuit-protection.png",
  },
  {
    id: "industrial-fuses",
    title: "Industrial Fuses",
    icon: "Flame",
    description: "High-performance fuses for utility, industrial, and commercial applications",
    products: ["Current Limit Fuse", "Bay-O-Net Fuse", "IEC & British Standard Fuse"],
    image: "/images/products/industrial-fuses.png",
  },
  {
    id: "capacitors",
    title: "Capacitors & Power Factor",
    icon: "Battery",
    description: "Complete capacitor solutions from medium voltage to low voltage applications",
    products: ["HV Power Capacitor", "MV Capacitor", "LV Capacitor", "Capacitor Set", "Capacitor Cabinet", "Capacitor Protection & Control"],
    image: "/images/products/capacitors.png",
  },
  {
    id: "transformers",
    title: "Transformers & Switchgear",
    icon: "Cable",
    description: "Power distribution equipment for substations and grid infrastructure",
    products: ["Load Breaker Switch", "Tap Changer", "Bushing", "Reactor"],
    image: "/images/products/transformers.png",
  },
  {
    id: "automation",
    title: "Automation & Drives",
    icon: "Cog",
    description: "Precision motor control and industrial automation components",
    products: ["VFD (Variable Frequency Drive)", "Cam Switch", "Relay"],
    image: "/images/products/automation.png",
  },
];

export const SERVICES = [
  {
    id: "spot-sourcing",
    title: "Spot Market Sourcing",
    icon: "Search",
    shortDesc: "Find the unfindable",
    description: "Find hard-to-source, obsolete, and shortage components through our vast global network. 24-48hr response guaranteed.",
    features: ["Global network access", "24-48hr response time", "Competitive pricing", "Authenticity guaranteed"],
    cta: "Request a Spot Quote",
  },
  {
    id: "distribution",
    title: "Yearly Distribution Programs",
    icon: "Package",
    shortDesc: "Predictable supply, guaranteed",
    description: "Secure long-term supply with scheduled deliveries, volume pricing, and demand forecasting.",
    features: ["Volume discounting", "JIT delivery", "Demand forecasting", "Buffer stock management"],
    cta: "Build Your Program",
  },
  {
    id: "shipping",
    title: "Combined Shipping",
    icon: "Truck",
    shortDesc: "Consolidate & save up to 40%",
    description: "Consolidate orders from multiple suppliers into cost-optimized single shipments.",
    features: ["Cost reduction up to 40%", "Customs handling", "Door-to-door tracking", "Multi-origin consolidation"],
    cta: "Calculate Savings",
  },
  {
    id: "pcb",
    title: "PCB Design & Assembly",
    icon: "CircuitBoard",
    shortDesc: "From concept to component",
    description: "End-to-end PCB services from schematic design through prototype to production assembly.",
    features: ["Multi-layer PCB design", "Prototype runs", "DFM analysis", "Turnkey assembly"],
    cta: "Start Your Project",
  },
  {
    id: "counterfeit",
    title: "Counterfeit Detection",
    icon: "ShieldCheck",
    shortDesc: "Zero tolerance for fakes",
    description: "AS 6081 certified inspection pipeline. Zero tolerance for counterfeit components.",
    features: ["Visual inspection", "X-ray testing", "XRF analysis", "Electrical testing"],
    cta: "Learn About Our QC",
  },
  {
    id: "technical",
    title: "Technical Solutions",
    icon: "Wrench",
    shortDesc: "Engineering DNA inside",
    description: "Not just distributors — solution providers with engineering DNA from Eaton Bussmann, TE, and Molex.",
    features: ["Component selection guidance", "Alternative recommendations", "Lifecycle support", "Design consultation"],
    cta: "Talk to an Engineer",
  },
];

export const INDUSTRIES = [
  {
    id: "ev-charging",
    title: "EV Charging Infrastructure",
    icon: "PlugZap",
    tagline: "Building the backbone of electric mobility",
    description: "We provide mission-critical circuit protection components for EV charging stations — from DC fast chargers to residential wallboxes.",
    products: ["EV Charger Fuse", "DC Contactor", "Protection Equipment"],
    customers: ["Ather Energy", "Ola Electric"],
    image: "/images/industries/ev-charging.png",
  },
  {
    id: "electric-vehicles",
    title: "Electric Vehicles",
    icon: "Car",
    tagline: "Protecting the powertrain of tomorrow",
    description: "Our EV-grade fuses and protection devices safeguard battery packs, inverters, and high-voltage systems in next-generation electric vehicles.",
    products: ["EV Fuse", "Pyro Fuse", "Battery Protection"],
    customers: ["Ola Electric", "Uno Minda"],
    image: "/images/industries/electric-vehicles.png",
  },
  {
    id: "energy-storage",
    title: "Energy Storage Systems",
    icon: "BatteryCharging",
    tagline: "Securing renewable energy for the smart grid",
    description: "We deliver high-performance fuses, capacitors, and reactors for battery energy storage systems (BESS) that power the renewable revolution.",
    products: ["Energy Storage Fuse", "Capacitors", "Reactors"],
    customers: [],
    image: "/images/industries/energy-storage.png",
  },
  {
    id: "power-distribution",
    title: "Power Distribution",
    icon: "Gauge",
    tagline: "Reliable power at every scale",
    description: "From substations to smart grids, our tap changers, bushings, and switchgear keep power flowing to millions across continents.",
    products: ["Tap Changer", "Bushing", "Load Breaker Switch", "Capacitor Set"],
    customers: [],
    image: "/images/industries/power-distribution.png",
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    icon: "Factory",
    tagline: "Smart manufacturing, automated excellence",
    description: "We supply VFDs, circuit breakers, and control components that keep factories running efficiently and safely.",
    products: ["VFD", "Circuit Breaker", "Contactor", "Safety Relay"],
    customers: ["Foxconn", "Kaynes Technology"],
    image: "/images/industries/industrial-automation.png",
  },
  {
    id: "ups-systems",
    title: "UPS & Critical Power",
    icon: "Power",
    tagline: "Uninterrupted power, guaranteed uptime",
    description: "Our fuses, capacitors, and protection relays ensure mission-critical systems never go dark — from data centers to hospitals.",
    products: ["Fuses", "Capacitors", "Protection Relays"],
    customers: ["HP"],
    image: "/images/industries/ups-systems.png",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote: "Costa Devices has been our go-to supplier for EV-grade Bussmann fuses. Their 24-hour turnaround on spot quotes has saved us from multiple production delays.",
    author: "Procurement Lead",
    company: "Ather Energy",
    rating: 5,
  },
  {
    id: "t2",
    quote: "The counterfeit detection pipeline from Costa Devices gives us complete confidence. Every component is authentic, tested, and traceable. Zero issues in 3 years.",
    author: "Supply Chain Manager",
    company: "Kaynes Technology",
    rating: 5,
  },
  {
    id: "t3",
    quote: "We consolidated our fuse and contactor sourcing with Costa Devices and reduced shipping costs by 35%. Their combined shipping program is a game-changer.",
    author: "VP of Operations",
    company: "GIGA",
    rating: 5,
  },
];

export const CERTIFICATIONS = [
  {
    id: "as6081",
    name: "AS 6081:2023",
    fullName: "Fraudulent/Counterfeit Electronic Parts: Avoidance, Detection, Mitigation, Disposition",
    description: "Ensures comprehensive avoidance and detection of counterfeit electronic parts through rigorous inspection and testing protocols.",
    entity: "COSTA DEVICES FZCO",
    year: 2024,
    image: "/images/certificates/as6081.jpg",
    pdf: "/pdfs/AS 6081 OF EU COSTA DEVICES FZCO.pdf",
  },
  {
    id: "as9120b",
    name: "AS 9120:2016 B",
    fullName: "Quality Management Systems — Requirements for Aviation, Space & Defense Distributors",
    description: "Meets the highest quality standards required for distributing components to the aerospace, space, and defense industries.",
    entity: "COSTA DEVICES FZCO",
    year: 2024,
    image: "/images/certificates/as9120b.jpg",
    pdf: "/pdfs/AS 9120B OF EU COSTA DEVICES FZCO.pdf",
  },
  {
    id: "iso9001",
    name: "ISO 9001:2015",
    fullName: "Quality Management System",
    description: "International standard for quality management systems, ensuring consistent quality in all processes and customer satisfaction.",
    entity: "COSTA DEVICES FZCO",
    certificateNumber: "305025123070Q",
    year: 2023,
    image: "/images/certificates/iso9001.jpg",
    pdf: "/pdfs/COSTA DEVICES FZCO ISO 9001-2015.pdf",
  },
];

export const TIMELINE = [
  { year: 2011, title: "Founded", description: "Established in India, focused on circuit protection distribution" },
  { year: 2013, title: "Authorized Distributor", description: "Became authorized Bussmann & Eaton Moeller distributor" },
  { year: 2015, title: "Asia Expansion", description: "Expanded to Hong Kong for Asia-Pacific operations" },
  { year: 2017, title: "ISO Certification", description: "Achieved ISO 9001:2015 quality management certification" },
  { year: 2019, title: "Aerospace & Defense", description: "AS 9120B & AS 6081 certifications for aerospace/defense" },
  { year: 2020, title: "Dubai HQ Launch", description: "Opened global headquarters at Dubai Silicon Oasis" },
  { year: 2022, title: "EV Revolution", description: "Began serving major EV clients: Ather Energy, Ola Electric" },
  { year: 2024, title: "Global Milestone", description: "1000+ components sourced, 50+ active global clients" },
  { year: 2025, title: "Energy Future", description: "Expanded into Energy Storage & EV Charging infrastructure" },
];

export const STATS = [
  { value: 14, suffix: "+", label: "Years of Excellence" },
  { value: 9, suffix: "+", label: "Premium Brands" },
  { value: 1000, suffix: "+", label: "Components Sourced" },
  { value: 50, suffix: "+", label: "Global Clients" },
  { value: 3, suffix: "", label: "Global Offices" },
  { value: 99.8, suffix: "%", label: "Quality Rate", decimals: 1 },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Company", href: "/company" },
  { label: "Quality", href: "/quality" },
];

export const COUNTERFEIT_STEPS = [
  { step: 1, title: "Visual Inspection", description: "External examination under 10x-200x magnification for physical anomalies" },
  { step: 2, title: "Data Sheet Review", description: "Cross-reference with original manufacturer specifications and packaging dimensions" },
  { step: 3, title: "Component Body Inspection", description: "200x microscope examination for sanding, black topping, and remarking techniques" },
  { step: 4, title: "Solder Ability Test", description: "Detection of oxidation and foreign residues that could harm components" },
  { step: 5, title: "Marking Test", description: "MIL-STD-883G compliance verification of component markings" },
  { step: 6, title: "Decapsulation Test", description: "Die analysis and verification with original manufacturer" },
  { step: 7, title: "X-Ray Inspection", description: "Internal structure validation to detect tampering or mismatched die" },
  { step: 8, title: "Electrical Test", description: "Full functional and parametric testing to ensure specifications are met" },
];
