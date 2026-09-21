import { BUSINESS } from "@/data/businessInfo";

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: BUSINESS.name,
    description: "Layanan ambulans 24 jam di Gunung Sindur, Bogor",
    url: BUSINESS.url,
    telephone: BUSINESS.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "City", name: "Gunung Sindur" },
      { "@type": "City", name: "Bogor" },
    ],
  };
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
    />
  );
}