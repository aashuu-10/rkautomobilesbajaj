// ============================================================
// RK AUTOMOBILES - Clean Bike Names & Official Prices
// ============================================================
const BIKES = [
  {
    id: "dominar400", name: "Dominar 400", category: "Cruiser", price: "₹2,08,270",
    cc: "373.3 cc", power: "40 bhp", mileage: "27 kmpl", tag: "Flagship",
    img: "images/bikes/dominar400black.webp",
    gallery: ["images/bikes/dominar400black.webp", "images/bikes/dominar400green.webp"],
    colors: ["Charcoal Black", "Aurora Green"],
    desc: "The ultimate hyper-riding machine. A 40 PS power cruiser built for long-distance touring."
  },
  {
    id: "ns400z", name: "Pulsar NS400Z", category: "Sport", price: "₹1,86,015",
    cc: "349.13 cc", power: "40.04 bhp", mileage: "32 kmpl", tag: "New",
    img: "images/bikes/pulsarns400zpearlmetallicwhite.webp",
    gallery: ["images/bikes/pulsarns400zpearlmetallicwhite.webp", "images/bikes/pulsarns400zglossyracingred.webp", "images/bikes/pulsarns400zbrooklynblack.webp"],
    colors: ["Pearl Metallic White", "Glossy Racing Red", "Brooklyn Black"],
    desc: "The most powerful Pulsar ever. Race-inspired streetfighter DNA with 40 PS on tap."
  },
  {
    id: "dominar250", name: "Dominar 250", category: "Cruiser", price: "₹1,86,835",
    cc: "248.77 cc", power: "27 bhp", mileage: "35 kmpl", tag: "",
    img: "images/bikes/dominar250racingred.webp",
    gallery: ["images/bikes/dominar250racingred.webp", "images/bikes/dominar250sparklingblack.webp", "images/bikes/dominar250citrusrush.webp"],
    colors: ["Racing Red", "Sparkling Black", "Citrus Rush"],
    desc: "Sports touring made accessible. Liquid-cooled performance with a comfortable touring stance."
  },
  {
    id: "rs200", name: "Pulsar RS200", category: "Sport", price: "₹1,81,295",
    cc: "199.5 cc", power: "24.5 bhp", mileage: "35 kmpl", tag: "",
    img: "images/bikes/pulsarrs200brooklynblack.webp",
    gallery: ["images/bikes/pulsarrs200brooklynblack.webp", "images/bikes/pulsarrs200glossyracingred.webp", "images/bikes/pulsarrs200pearlmetallicwhiteandcaribbeanblue.webp"],
    colors: ["Brooklyn Black", "Glossy Racing Red", "Pearl White"],
    desc: "The fully-faired race machine with dual-channel ABS."
  },
  {
    id: "ns200", name: "Pulsar NS200", category: "Sport", price: "₹1,40,367",
    cc: "199.5 cc", power: "24.13 bhp", mileage: "36 kmpl", tag: "Popular",
    img: "images/bikes/pulsarns200glossyebonyblack.webp",
    gallery: ["images/bikes/pulsarns200glossyebonyblack.webp", "images/bikes/pulsarns200metallicpearlwhite.webp"],
    colors: ["Glossy Ebony Black", "Metallic Pearl White"],
    desc: "The original street-sport icon with twin-projector LED headlamps."
  },
  {
    id: "n250", name: "Pulsar N250", category: "Sport", price: "₹1,46,220",
    cc: "249 cc", power: "24.1 bhp", mileage: "40 kmpl", tag: "",
    img: "images/bikes/pulsarn250brooklynblack.webp",
    gallery: ["images/bikes/pulsarn250brooklynblack.webp", "images/bikes/pulsarn250glossyracingred.webp", "images/bikes/pulsarn250pearlmetallicwhite.webp"],
    colors: ["Brooklyn Black", "Glossy Racing Red", "Pearl Metallic White"],
    desc: "Aggressive new-gen Pulsar with muscular tank and full-LED lighting."
  },
  {
    id: "pulsar220f", name: "Pulsar 220F", category: "Sport", price: "₹1,40,391",
    cc: "220 cc", power: "20.4 bhp", mileage: "40 kmpl", tag: "Legend",
    img: "images/bikes/pulsar220fblackinkblue.webp",
    gallery: ["images/bikes/pulsar220fblackinkblue.webp", "images/bikes/pulsar220fblackcherryred.webp", "images/bikes/pulsar220fblackcopperbeige.webp", "images/bikes/pulsar220fblackgold.webp"],
    colors: ["Black Ink Blue", "Black Cherry Red", "Black Copper Beige", "Black Gold"],
    desc: "The legendary semi-faired Pulsar 220F with raw power and timeless styling."
  },
  {
    id: "ns160", name: "Pulsar NS160", category: "Sport", price: "₹1,27,245",
    cc: "160.3 cc", power: "17.03 bhp", mileage: "44 kmpl", tag: "Popular",
    img: "images/bikes/pulsarns160pewtergrey.webp",
    gallery: ["images/bikes/pulsarns160pewtergrey.webp", "images/bikes/pulsarns160ebonyblack.webp", "images/bikes/pulsarns160pearlmetallicwhite.webp", "images/bikes/pulsarns160cocktailwinered.webp"],
    colors: ["Pewter Grey", "Ebony Black", "Pearl Metallic White", "Cocktail Wine Red"],
    desc: "NS-series streetfighter with perimeter frame and sharp muscular styling."
  },
  {
    id: "n160", name: "Pulsar N160", category: "Sport", price: "₹1,22,966",
    cc: "164.82 cc", power: "15.68 bhp", mileage: "47 kmpl", tag: "Best Seller",
    img: "images/bikes/pulsarn1602vbajajpulsarn160rightsideview.webp",
    gallery: ["images/bikes/pulsarn1602vbajajpulsarn160rightsideview.webp", "images/bikes/pulsarn1602vpolarskybluesplitseat.webp", "images/bikes/pulsarn1602vracingred.webp"],
    colors: ["Ebony Black", "Polar Sky Blue", "Racing Red"],
    desc: "Sharp, connected and powerful streetfighter with smartphone connectivity."
  },
  {
    id: "pulsar180", name: "Pulsar 180", category: "Sport", price: "₹1,23,552",
    cc: "178.6 cc", power: "17 bhp", mileage: "45 kmpl", tag: "",
    img: "images/bikes/pulsar180blackblue.webp",
    gallery: ["images/bikes/pulsar180blackblue.webp", "images/bikes/pulsar180blackgrey.webp", "images/bikes/pulsar180blackred.webp", "images/bikes/pulsar180white.webp"],
    colors: ["Black Blue", "Black Grey", "Black Red", "White"],
    desc: "Classic sporty handling and iconic Pulsar performance."
  },
  {
    id: "pulsar150", name: "Pulsar 150", category: "Commuter", price: "₹1,14,165",
    cc: "149.5 cc", power: "14 bhp", mileage: "47.5 kmpl", tag: "",
    img: "images/bikes/pulsar150bajajnewpulser150rightsideview.webp",
    gallery: ["images/bikes/pulsar150bajajnewpulser150rightsideview.webp"],
    colors: ["Black", "Red", "Blue"],
    desc: "Evergreen Pulsar 150 with trusted performance and outstanding value."
  },
  {
    id: "freedom", name: "Freedom 125 CNG", category: "CNG", price: "₹1,02,306",
    cc: "125 cc (CNG)", power: "9.5 PS", mileage: "102 km/kg", tag: "CNG First",
    img: "images/bikes/freedomcaribbeanblue.webp",
    gallery: ["images/bikes/freedomcaribbeanblue.webp", "images/bikes/freedomcyberwhite.webp", "images/bikes/freedomracingred.webp"],
    colors: ["Caribbean Blue", "Cyber White", "Racing Red"],
    desc: "World's first CNG motorcycle with dual-fuel capability and unbeatable running cost."
  },
  {
    id: "ns125", name: "Pulsar NS125", category: "Sport", price: "₹1,01,828",
    cc: "124.45 cc", power: "11.8 bhp", mileage: "50 kmpl", tag: "",
    img: "images/bikes/pulsarns125black.webp",
    gallery: ["images/bikes/pulsarns125black.webp", "images/bikes/pulsarns125orange.webp", "images/bikes/pulsarns125pearlmettalicwhite.webp"],
    colors: ["Black", "Orange", "Pearl Metallic White"],
    desc: "NS-series DNA in a lighter, friendlier package."
  },
  {
    id: "n125", name: "Pulsar N125", category: "Commuter", price: "₹94,707",
    cc: "124.45 cc", power: "11.8 bhp", mileage: "58 kmpl", tag: "",
    img: "images/bikes/pulsarn125ebonyblack.webp",
    gallery: ["images/bikes/pulsarn125ebonyblack.webp", "images/bikes/pulsarn125cocktailwinered.webp", "images/bikes/pulsarn125caribbeanblue.webp", "images/bikes/pulsarn125pearlmetallicwhite.webp"],
    colors: ["Ebony Black", "Cocktail Wine Red", "Caribbean Blue", "Pearl Metallic White"],
    desc: "Modern commuter-sport Pulsar with great mileage."
  },
  {
    id: "pulsar125", name: "Pulsar 125", category: "Commuter", price: "₹91,910",
    cc: "124.4 cc", power: "11.8 bhp", mileage: "51.46 kmpl", tag: "Popular",
    img: "images/bikes/bajajpulsar125[2026]rightsideview.webp",
    gallery: ["images/bikes/bajajpulsar125[2026]rightsideview.webp"],
    colors: ["Red", "Black"],
    desc: "India's favourite Pulsar. Sporty commuter with high mileage."
  },
  {
    id: "chetak", name: "Bajaj Chetak", category: "EV", price: "₹1,15,000",
    cc: "EV", power: "3.1 kW", mileage: "131 km", tag: "EV",
    img: "images/bikes/chetakbrooklynblack.webp",
    gallery: ["images/bikes/chetakbrooklynblack.webp", "images/bikes/chetakcyberwhite.webp", "images/bikes/chetakmattecoarsegrey.webp"],
    colors: ["Brooklyn Black", "Cyber White", "Matte Coarse Grey"],
    desc: "Premium electric scooter with retro-modern style and long real-world range."
  },
  {
    id: "platina100", name: "Platina 100", category: "Commuter", price: "₹73,095",
    cc: "102 cc", power: "7.9 PS", mileage: "70 kmpl", tag: "Mileage",
    img: "images/bikes/platina100blackblue.webp",
    gallery: ["images/bikes/platina100blackblue.webp", "images/bikes/platina100blackgold.webp", "images/bikes/platina100blacksilver.webp"],
    colors: ["Black Blue", "Black Gold", "Black Silver"],
    desc: "Comfortable, economical daily commuter with high fuel efficiency."
  }
];

const OFFERS = [
  {
    id: "durgapuja",
    title: "Durga Puja Special Offer",
    sub: "Ride Karo, Jeeto Dil Khol Ke!",
    desc: "Buy any Bajaj bike and scratch your card to win exciting guaranteed prizes!",
    tag: "Mega Offer",
    gold: true,
    terms: "Guaranteed prize on every scratch card! Valid during Durga Puja."
  },
  {
    id: "emi",
    title: "0% Easy EMI",
    sub: "Starting at just ₹3,999/mo",
    desc: "Ride home today with flexible EMI plans and instant loan approval.",
    tag: "Finance",
    alt: true,
    terms: "Finance approval subject to bank norms & eligibility."
  },
  {
    id: "exchange",
    title: "Best Exchange Value",
    sub: "Extra Exchange Bonus",
    desc: "Trade in your old bike and get the best market value plus extra bonus.",
    tag: "Exchange",
    alt: true,
    terms: "Exchange value assessed at showroom."
  },
  {
    id: "gifts",
    title: "Free Helmet + Accessories",
    sub: "Worth ₹1,500",
    desc: "Every bike bought this month gets a free ISI helmet and accessories kit.",
    tag: "Gift",
    alt: false,
    terms: "One gift set per bike purchase. While stock lasts."
  }
];

const FULL_CATALOGUE = [
  { name: "Dominar 400", price: "₹2,08,270" },
  { name: "Pulsar NS400Z", price: "₹1,86,015" },
  { name: "Dominar 250", price: "₹1,86,835" },
  { name: "Pulsar RS200", price: "₹1,81,295" },
  { name: "Pulsar NS200", price: "₹1,50,668" },
  { name: "Pulsar N250", price: "₹1,46,220" },
  { name: "Pulsar 220F", price: "₹1,40,391" },
  { name: "Pulsar N160", price: "₹1,40,868" },
  { name: "Pulsar NS200", price: "₹1,40,367" },
  { name: "Pulsar NS160", price: "₹1,35,747" },
  { name: "Pulsar 220F", price: "₹1,35,045" },
  { name: "Avenger 220", price: "₹1,34,856" },
  { name: "Pulsar N160", price: "₹1,32,656" },
  { name: "Pulsar N160", price: "₹1,31,912" },
  { name: "Pulsar N160", price: "₹1,29,381" },
  { name: "Pulsar NS160", price: "₹1,27,245" },
  { name: "Pulsar 180", price: "₹1,23,552" },
  { name: "Pulsar N160", price: "₹1,23,387" },
  { name: "Pulsar N160", price: "₹1,20,283" },
  { name: "Pulsar N160", price: "₹1,20,012" },
  { name: "Pulsar 150", price: "₹1,18,094" },
  { name: "Pulsar N160", price: "₹1,17,658" },
  { name: "Pulsar N160", price: "₹1,17,127" },
  { name: "Pulsar 150", price: "₹1,14,165" },
  { name: "Avenger 160", price: "₹1,13,103" },
  { name: "Pulsar 150", price: "₹1,11,982" },
  { name: "Pulsar 150", price: "₹1,08,236" },
  { name: "Pulsar NS125", price: "₹1,06,047" },
  { name: "Pulsar 150", price: "₹1,05,333" },
  { name: "Pulsar 125", price: "₹1,03,002" },
  { name: "Freedom 125 CNG", price: "₹1,02,306" },
  { name: "Pulsar NS125", price: "₹1,01,828" },
  { name: "Pulsar 125", price: "₹98,855" },
  { name: "Pulsar 125", price: "₹97,857" },
  { name: "Pulsar NS125", price: "₹94,070" },
  { name: "Pulsar 125", price: "₹94,164" },
  { name: "Pulsar 125", price: "₹91,910" },
  { name: "Pulsar 125", price: "₹91,987" },
  { name: "Pulsar 125", price: "₹91,249" },
  { name: "Pulsar 125", price: "₹88,311" },
  { name: "Pulsar 125", price: "₹86,175" },
  { name: "Pulsar 125", price: "₹83,414" },
  { name: "Pulsar 125", price: "₹82,081" },
  { name: "Pulsar 125", price: "₹79,166" },
  { name: "Platina 110", price: "₹75,862" },
  { name: "CT 110X", price: "₹75,137" },
  { name: "Platina 100", price: "₹73,095" },
  { name: "Platina 100", price: "₹63,779" }
];
