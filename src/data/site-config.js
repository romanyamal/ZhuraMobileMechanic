export default {
  businessName: "Zhura Mobile Mechanic and Roadside Assistance",
  shortName: "Zhura",
  tagline: "Certified mobile repair, wherever you're stranded.",
  phone: "+19165551234",
  phoneDisplay: "(916) 555-1234",
  email: "example@gmail.com",
  // PLACEHOLDER — real domain not finalized. Update here once confirmed;
  // this single value drives canonical URLs (Layout.astro), robots.txt's
  // sitemap reference, and the JSON-LD business schema (Footer.astro).
  domain: "https://romanyamal.github.io/ZhuraMobileMechanic",
  hours: {
    monday: "8:00–18:00",
    tuesday: "8:00–18:00",
    wednesday: "8:00–18:00",
    thursday: "8:00–18:00",
    friday: "8:00–18:00",
    saturday: "closed",
    sunday: "closed",
  },
  // PLACEHOLDER — leave empty ({}) to omit a displayed/schema address entirely
  // (Footer.astro and its JSON-LD both check for this). Fill in once a
  // public-facing address is confirmed (mobile businesses often use a
  // service-area description instead of a street address — confirm which
  // applies before populating this).
  address: {
    // streetAddress: "",
    // addressLocality: "",
    // addressRegion: "CA",
    // postalCode: "",
    // addressCountry: "US",
  },
  social: {
    google: "https://g.page/placeholder",
    facebook: "https://facebook.com/placeholder",
  },
  about: {
    src: "/src/assets/about/work-vehicle.jpg",
    alt: "Zhura Mobile Mechanic service vehicle, fully equipped for roadside repairs",
    intro:
      "Certified, mobile, and built around getting you back on the road without the wait.",
    paragraphs: [
      "Zhura Mobile Mechanic and Roadside Assistance was built on a simple idea: you shouldn't have to tow your car across town just to get it fixed. We bring certified, experienced technicians directly to your driveway, office parking lot, or wherever you're stranded — with the same tools and know-how as a full shop, minus the wait and the tow bill.",
      "Every job starts with upfront pricing, no surprise fees, and no pressure to approve work you don't need. Whether it's a dead battery on your way to work or a brake job you've been putting off, we treat every vehicle like it's our own.",
    ],
    stats: [
      { label: "Years in Business", value: "5+" },
      { label: "Jobs Completed", value: "500+" },
      { label: "Avg. Response Time", value: "45 min" },
    ],
    credentials: [
      "ASE Certified Technician",
      "Fully Insured & Bonded",
      "Upfront, Transparent Pricing",
    ],
  },
  // PLACEHOLDER — confirm this is the real business/LLC license number.
  license: "#LLCPlaceholder",
  // California Bureau of Automotive Repair registration number.
  // PLACEHOLDER — confirm this is the real, current ARD number before launch.
  ard: "ARD23333333",
  // PLACEHOLDER — one-line bonding/insurance disclosure shown in the footer.
  // Replace with real carrier/policy language (or a simple "Licensed,
  // Bonded & Insured" line) once confirmed with the business owner.
  insuranceDisclosure:
    "Licensed, bonded, and insured. Policy details available upon request.",
  // PLACEHOLDER — confirm which payment methods are actually accepted, or
  // remove this array (and the footer section that reads it) entirely if
  // this shouldn't be displayed. Currently unconfirmed per build spec §11.
  paymentMethods: ["Cash", "Credit / Debit Cards", "Venmo", "Zelle"],
  // PLACEHOLDER — rough price band for the AutoRepair schema's optional
  // priceRange field. "$$" is a safe generic placeholder; confirm or remove.
  priceRange: "$$",
};
