const validString = (string) => string !== undefined && string !== "unknown";
const numberFormat = (string) => string.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export function capitalize(string) {
  return validString(string) && string.replace(/^\w/, (c) => c.toUpperCase());
}

export function height(string) {
  return validString(string) ? `${string}cm` : string;
}

export function mass(string) {
  return validString(string) ? `${string}kg` : string;
}

export function diameter(string) {
  return validString(string) ? `${numberFormat(string)}km` : string;
}

export function population(string) {
  return validString(string) ? `${numberFormat(string)} inhabitant` : string;
}

export function concatInfo(array) {
  return array
    .map((item) => item !== "unknown" && item)
    .filter((item) => item)
    .join(" · ");
}
