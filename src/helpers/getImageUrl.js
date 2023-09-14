export function getImageUrl(name) {
  const textLink = `/src/assets/${ name }.jpg`;
  return new URL(textLink, import.meta.url).href
}