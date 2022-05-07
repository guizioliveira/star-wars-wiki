export function capitalize(string) {
  return string.replace(/^\w/, (c) => c.toUpperCase());
}

export function height(string) {
  return string !== "unknown" ? `${string}cm` : string;
}

export function mass(string) {
  return string !== "unknown" ? `${string}kg` : string;
}

export function diameter(string) {
  return string !== "unknown" ? `${string}km` : string;
}

export function population(string) {
  // string.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  return string !== "unknown" ? `${string} inhabitant` : string;
}

export function concatInfo(array) {
  const currArray = [];
  array.forEach((item) => item !== "unknown" && currArray.push(item));
  return currArray.join(" · ");
}
