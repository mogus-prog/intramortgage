/**
 * Prepend the base URL to internal links.
 * Works with both dev and GitHub Pages deployment.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (path.startsWith('http') || path.startsWith('#') || path.startsWith('tel:') || path.startsWith('mailto:')) {
    return path;
  }
  return `${base}${path}`;
}
