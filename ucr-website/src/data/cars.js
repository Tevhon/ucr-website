// Car fleet data for Unique Car Rental.
// Prices are real business figures (per day, in INR).
// fuelType / cng / transmission / seats / ac / image / popular are
// EDITABLE PLACEHOLDER values — update them once the business confirms
// exact specs and real photos are available.

const cars = [
  {
    id: "swift",
    name: "Swift",
    price: 2000,
    fuelType: "Petrol",
    cng: false,
    transmission: "Manual",
    seats: 5,
    ac: true,
    image: "/cars/swift.jpg",
    popular: true,
  },
  {
    id: "thar_roxx",
    name: "Thar Roxx",
    price: 4500,
    fuelType: "Diesel",
    cng: false,
    transmission: "Manual",
    seats: 4,
    ac: true,
    image: "/cars/thar_roxx.jpg",
    popular: true,
  },
  {
    id: "venue",
    name: "Venue",
    price: 2500,
    fuelType: "Petrol",
    cng: false,
    transmission: "Manual",
    seats: 5,
    ac: true,
    image: "/cars/venue.jpg",
    popular: false,
  },
  {
    id: "i20",
    name: "i20",
    price: 2100,
    fuelType: "Petrol",
    cng: false,
    transmission: "Manual",
    seats: 5,
    ac: true,
    image: "/cars/i20.jpg",
    popular: false,
  },
  {
    id: "scorpio-n",
    name: "Scorpio N",
    price: 5500,
    fuelType: "Diesel",
    cng: false,
    transmission: "Manual",
    seats: 7,
    ac: true,
    image: "/cars/scorpio-n.jpg",
    popular: true,
  },
  // {
  //   id: "xuv700-5s",
  //   name: "XUV 700 5-Seater",
  //   price: 3600,
  //   fuelType: "Diesel",
  //   cng: false,
  //   transmission: "Automatic",
  //   seats: 5,
  //   ac: true,
  //   image: "/cars/xuv700.jpg",
  //   popular: false,
  // },
  {
    id: "fortuner",
    name: "Fortuner",
    price: 9000,
    fuelType: "Diesel",
    cng: false,
    transmission: "Automatic",
    seats: 7,
    ac: true,
    image: "/cars/fortuner.jpg",
    popular: true,
  },
  {
    id: "baleno",
    name: "Baleno",
    price: 2200,
    fuelType: "Petrol",
    cng: false,
    transmission: "Manual",
    seats: 5,
    ac: true,
    image: "/cars/baleno.jpg",
    popular: false,
  },
  // {
  //   id: "punch",
  //   name: "Punch",
  //   price: 1800,
  //   fuelType: "Petrol",
  //   cng: false,
  //   transmission: "Manual",
  //   seats: 5,
  //   ac: true,
  //   image: "/cars/punch.jpg",
  //   popular: false,
  // },
  {
    id: "verna",
    name: "Verna",
    price: 3000,
    fuelType: "Petrol",
    cng: false,
    transmission: "Manual",
    seats: 5,
    ac: true,
    image: "/cars/verna.jpg",
    popular: false,
  },
  {
    id: "new-verna",
    name: "New Model Verna",
    price: 3500,
    fuelType: "Petrol",
    cng: false,
    transmission: "Automatic",
    seats: 5,
    ac: true,
    image: "/cars/new-verna.jpg",
    popular: true,
  },
  {
    id: "scorpio",
    name: "Scorpio",
    price: 4500,
    fuelType: "Diesel",
    cng: false,
    transmission: "Manual",
    seats: 7,
    ac: true,
    image: "/cars/scorpio.jpg",
    popular: false,
  },
  {
    id: "thar",
    name: "Thar",
    price: 4500,
    fuelType: "Diesel",
    cng: false,
    transmission: "Manual",
    seats: 4,
    ac: true,
    image: "/cars/thar.jpg",
    popular: true,
  },
  {
    id: "creta",
    name: "Creta",
    price: 3000,
    fuelType: "Petrol",
    cng: false,
    transmission: "Automatic",
    seats: 5,
    ac: true,
    image: "/cars/creta.jpg",
    popular: false,
  },
];

export default cars;

// Rule: prices ₹3000 or below show the exact price.
// Prices above ₹3000 have their first digit masked with "X" so the
// customer contacts UCR (via WhatsApp/call) for the exact quote.
// Do NOT hardcode masked strings anywhere else — always call this.
export function displayPrice(price) {
  if (price <= 3000) {
    return `₹${price}/day`;
  }
  const digits = String(price).split("");
  digits[0] = "X";
  return `₹${digits.join("")}/day`;
}

export function isPriceExact(price) {
  return price <= 3000;
}
