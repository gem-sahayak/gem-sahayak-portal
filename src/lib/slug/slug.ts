/**
 * Slug Engine
 * Path: /src/lib/slug/slug.ts
 * Description: Clean, robust utility functions for normalizing, generating, and validating URL slugs.
 */

/**
 * Normalizes an existing slug string by converting it to lowercase,
 * replacing multiple hyphens/whitespaces with a single hyphen, and removing special characters.
 */
export function normalizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-') // replace spaces and underscores with hyphens
    .replace(/[^a-z0-9-]/g, '') // remove all non-alphanumeric chars except hyphens
    .replace(/-+/g, '-') // collapse multiple hyphens
    .replace(/^-+|-+$/g, ''); // trim leading/trailing hyphens
}

/**
 * Generates a clean URL slug from any input text (e.g. title).
 */
export function generateSlug(text: string): string {
  return normalizeSlug(text);
}

/**
 * Parses a slug or path string into an array of normalized segments.
 */
export function parseSlug(slug: string): string[] {
  return slug
    .split('/')
    .map(segment => normalizeSlug(segment))
    .filter(segment => segment.length > 0);
}

/**
 * Validates whether a slug is syntactically correct and matches standard URL formats.
 * e.g., only lowercase letters, numbers, and single hyphens, no leading/trailing hyphens.
 */
export function validateSlug(slug: string): boolean {
  if (!slug || typeof slug !== 'string') return false;
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}
