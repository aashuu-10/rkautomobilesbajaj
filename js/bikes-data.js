// ============================================================
// RK AUTOMOBILES - Bike Data
// ============================================================
const BIKES = [
  {
    id: "ns400z", name: "Pulsar NS400Z", category: "Sport", price: "₹1,86,150",
    cc: "349.13 cc", power: "40.04 bhp", mileage: "32 kmpl", tag: "New",
    img: "images/bikes/ns400z/pearl-metallic-white.jpg",
    gallery: [
      "images/bikes/ns400z/pearl-metallic-white.jpg",
      "images/bikes/ns400z/glossy-racing-red.jpg",
      "images/bikes/ns400z/brooklyn-black.jpg"
    ],
    colors: ["Pearl Metallic White", "Glossy Racing Red", "Brooklyn Black"],
    desc: "The most powerful Pulsar ever. Race-inspired streetfighter DNA with a menacing front fascia and 40 PS on tap."
  },
  {
    id: "ns200", name: "Pulsar NS200", category: "Sport", price: "₹1,39,282",
    cc: "199.5 cc", power: "24.13 bhp", mileage: "36 kmpl", tag: "Popular",
    img: "images/bikes/ns200/glossy-ebony-black.jpg",
    gallery: ["images/bikes/ns200/glossy-ebony-black.jpg"],
    colors: ["Glossy Ebony Black"],
    desc: "The original street-sport icon. Twin-projector LED headlamps and a 199.5 cc liquid-cooled engine."
  },
  {
    id: "ns160", name: "Pulsar NS160", category: "Sport", price: "₹1,26,819",
    cc: "160.3 cc", power: "17.03 bhp", mileage: "44 kmpl", tag: "Popular",
    img: "images/bikes/ns160/pewter-grey.jpg",
    gallery: [
      "images/bikes/ns160/pewter-grey.jpg",
      "images/bikes/ns160/ebony-black.jpg",
      "images/bikes/ns160/pearl-metallic-white.jpg",
      "images/bikes/ns160/cocktail-wine-red.jpg"
    ],
    colors: ["Pewter Grey", "Ebony Black", "Pearl Metallic White", "Cocktail Wine Red"],
    desc: "The NS-series streetfighter with a 160.3 cc engine, perimeter frame and sharp muscular styling."
  },
  {
    id: "n250", name: "Pulsar N250", category: "Sport", price: "₹1,45,479",
    cc: "249 cc", power: "24.1 bhp", mileage: "40 kmpl", tag: "",
    img: "images/bikes/n250/brooklyn-black.jpg",
    gallery: [
      "images/bikes/n250/brooklyn-black.jpg",
      "images/bikes/n250/glossy-racing-red.jpg",
      "images/bikes/n250/pearl-metallic-white.jpg"
    ],
    colors: ["Brooklyn Black", "Glossy Racing Red", "Pearl Metallic White"],
    desc: "Aggressive new-gen Pulsar with muscular tank, full-LED lighting and a punchy 249 cc oil-cooled motor."
  },
  {
    id: "n160", name: "Pulsar N160 2V", category: "Sport", price: "₹1,16,801",
    cc: "164.82 cc", power: "15.68 bhp", mileage: "47 kmpl", tag: "Best Seller",
    img: "images/bikes/n160/atlantic-blue.jpg",
    gallery: [
      "images/bikes/n160/atlantic-blue.jpg",
      "images/bikes/n160/pearl-metallic-white.jpg",
      "images/bikes/n160/brooklyn-black.jpg"
    ],
    colors: ["Atlantic Blue", "Pearl Metallic White", "Brooklyn Black"],
    desc: "Sharp, connected and powerful. A 164.82 cc engine with smartphone connectivity."
  },
  {
    id: "n1604v", name: "Pulsar N160 4V", category: "Sport", price: "₹1,34,529",
    cc: "164.5 cc", power: "18.24 bhp", mileage: "49 kmpl", tag: "",
    img: "images/bikes/n160/right-side-2026.jpg",
    gallery: [
      "images/bikes/n160/right-side-2026.jpg",
      "images/bikes/n160/atlantic-blue.jpg"
    ],
    colors: ["Atlantic Blue", "Pearl Metallic White", "Brooklyn Black"],
    desc: "The 4-valve N160 delivers stronger low-end torque and refined performance."
  },
  {
    id: "ns125", name: "Pulsar NS125", category: "Sport", price: "₹94,049",
    cc: "124.45 cc", power: "11.8 bhp", mileage: "50 kmpl", tag: "",
    img: "images/bikes/ns125/black.jpg",
    gallery: ["images/bikes/ns125/black.jpg","images/bikes/ns125/orange.jpg"],
    colors: ["Black", "Orange"],
    desc: "The NS-series DNA in a lighter, friendlier package — perimeter frame and muscular tank."
  },
  {
    id: "n125", name: "Pulsar N125", category: "Commuter-Sport", price: "₹93,698",
    cc: "124.45 cc", power: "11.8 bhp", mileage: "58 kmpl", tag: "",
    img: "images/bikes/n125/ebony-black.jpg",
    gallery: [
      "images/bikes/n125/ebony-black.jpg",
      "images/bikes/n125/cocktail-wine-red.jpg"
    ],
    colors: ["Ebony Black", "Cocktail Wine Red"],
    desc: "A modern commuter-sport Pulsar with great mileage and sharp new-gen styling."
  },
  {
    id: "pulsar125", name: "Pulsar 125", category: "Commuter-Sport", price: "₹92,990",
    cc: "124.4 cc", power: "11.8 bhp", mileage: "51.46 kmpl", tag: "Popular",
    img: "images/bikes/pulsar125/right-side-2026.jpg",
    gallery: ["images/bikes/pulsar125/right-side-2026.jpg"],
    colors: ["Red", "Black"],
    desc: "India's favourite Pulsar. Sporty commuter with high mileage and sharp looks."
  },
  {
    id: "pulsar150", name: "Pulsar 150", category: "Commuter-Sport", price: "₹1,15,233",
    cc: "149.5 cc", power: "14 bhp", mileage: "47.5 kmpl", tag: "",
    img: "images/bikes/pulsar150/right-side.jpg",
    gallery: ["images/bikes/pulsar150/right-side.jpg"],
    colors: ["Red", "Black", "Blue"],
    desc: "The evergreen Pulsar 150 — trusted performance, sporty look and outstanding value."
  },
  {
    id: "chetak", name: "Bajaj Chetak", category: "Electric Scooter", price: "₹1,19,038",
    cc: "EV", power: "3.1 kW", mileage: "131 km", tag: "EV",
    img: "images/bikes/chetak/brooklyn-black.jpg",
    gallery: [
      "images/bikes/chetak/brooklyn-black.jpg",
      "images/bikes/chetak/cyber-white.jpg",
      "images/bikes/chetak/matte-coarse-grey.jpg"
    ],
    colors: ["Brooklyn Black", "Cyber White", "Matte Coarse Grey"],
    desc: "The iconic Chetak returns as a premium electric scooter with retro-modern style."
  }
];

const OFFERS = [
  {
    id: "durgapuja", title: "Durga Puja Special Offer", sub: "Ride Karo, Jeeto Dil Khol Ke!",
    desc: "Buy any Bajaj bike and scratch your card to win exciting guaranteed prizes!",
    tag: "Mega Offer", gold: true,
    terms: "Guaranteed prize on every scratch card! Valid during Durga Puja."
  },
  {
    id: "emi", title: "0% Easy EMI", sub: "Starting at just ₹3,999/mo",
    desc: "Ride home today with flexible zero/low-interest EMI plans and instant loan approval.",
    tag: "Finance", alt: true,
    terms: "Finance approval subject to bank norms & eligibility."
  },
  {
    id: "exchange", title: "Best Exchange Value", sub: "Extra Exchange Bonus",
    desc: "Trade in your old bike and get the best market value plus an extra exchange bonus.",
    tag: "Exchange", alt: true,
    terms: "Exchange value assessed at showroom."
  },
  {
    id: "gifts", title: "Free Helmet + Accessories", sub: "Worth ₹1,500",
    desc: "Every bike bought this month gets a free ISI-certified helmet and accessories kit.",
    tag: "Gift", alt: false,
    terms: "One gift set per bike purchase. While stock lasts."
  }
];

const FULL_CATALOGUE = [
  { name: "Pulsar NS400Z", price: "₹1,86,150" },
  { name: "Dominar 400", price: "₹2,08,330" },
  { name: "Pulsar RS200", price: "₹1,80,863" },
  { name: "Dominar 250", price: "₹1,86,823" },
  { name: "Pulsar N250", price: "₹1,45,479" },
  { name: "Pulsar NS200", price: "₹1,39,282" },
  { name: "Pulsar NS160", price: "₹1,26,819" },
  { name: "Pulsar N160 4V", price: "₹1,34,529" },
  { name: "Pulsar N160 2V", price: "₹1,16,801" },
  { name: "Pulsar 180", price: "₹1,22,926" },
  { name: "Pulsar 220F", price: "₹1,39,687" },
  { name: "Pulsar 150", price: "₹1,15,233" },
  { name: "Pulsar 125", price: "₹92,990" },
  { name: "Pulsar NS125", price: "₹94,049" },
  { name: "Pulsar N125", price: "₹93,698" },
  { name: "Freedom 125 CNG", price: "₹1,04,232" },
  { name: "Avenger Cruise 220", price: "₹1,34,095" },
  { name: "Avenger Street 220", price: "₹1,34,102" },
  { name: "Platina 110", price: "₹75,784" },
  { name: "Platina 100", price: "₹73,354" },
  { name: "CT 110", price: "₹74,821" },
  { name: "CT 110X", price: "₹74,930" },
  { name: "Chetak", price: "₹1,19,038" },
  { name: "Chetak C25", price: "₹1,04,599" }
];
