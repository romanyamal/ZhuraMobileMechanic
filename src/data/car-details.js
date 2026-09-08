// Next model year through 1980, descending (newest first).
const currentYear = new Date().getFullYear();
export const years = Array.from(
  { length: currentYear + 1 - 1990 + 1 },
  (_, i) => currentYear + 1 - i,
);

export const makes = [
  "Honda",
  "Toyota",
  "Ford",
  "Chevrolet",
  "Nissan",
  "Jeep",
  "Ram",
  "GMC",
  "Hyundai",
  "Kia",
  "Subaru",
  "BMW",
  "Mercedes-Benz",
  "Volkswagen",
  "Mazda",
  "Other",
];
