export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getRestaurantName() {
  const cities = [
    "San Diego, CA",
    "Los Angeles, CA",
    "San Francisco, CA",
    "Denver, CO",
    "Boston, MA",
    "Portland, OR"
  ];

  const restaurants = [
    "Submarina",
    "Veggie Grill",
    "Vino Volo",
    "House of Pies",
    "Fatburger",
    "Lollicup",
    "Alforon",
    "Sizzler",
    "Little River Inn",
    "The Linkery",
    "Emmet House Site",
    "Souplantation",
    "Gladstones Malibu",
    "The Rock Store",
    "Spago",
    "Pinkberry",
    "Panda Express",
    "Johnny Rockets",
    "El Torito",
    "Tastee-Freez",
    "The Crab Cooker"
  ];

  return `${rando(restaurants)}, (${rando(cities)})`;
}
