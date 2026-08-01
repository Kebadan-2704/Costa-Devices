export default function CompanyStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Costa Devices",
    "url": "https://costadevices.com",
    "logo": "https://costadevices.com/logos/logo.png",
    "description": "Mission-Critical Component Distribution. Securing obsolete, Active & Passive electronic components, heavy electrical, active high-voltage components, Aerospace, and Industrial infrastructure.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0199",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/costa-devices"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
