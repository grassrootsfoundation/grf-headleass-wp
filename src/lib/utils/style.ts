import type { DesignTokenCategory } from '$types/design-token-category';
/**
 * Builds a CSS Custom property name for a given token
 * category and value.
 */

export function tok(category: DesignTokenCategory, value: string | number) {
  return `var(--${category}-${value})`;
}
