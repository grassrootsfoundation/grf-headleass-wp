import { SUPPORTED_BREAKPOINT_KEYS } from './constants';
import { tok } from './style';

import type { ResponsiveProp } from '$types/media';
import type { ResponsiveConfig } from '$types/responsive-config';

type Breakpoint = (typeof SUPPORTED_BREAKPOINT_KEYS)[number];
/**
 * Filters out undefined props.
 */
export function definedProps(props = {}): typeof props {
  return Object.fromEntries(
    Object.entries(props).filter(([_, v]) => v !== undefined)
  );
}

/**
 * Determines if a prop conforms to the responsive prop
 * config shape.
 */

export function inlineStyles(styles: Record<string, unknown>): string {
  return Object.entries(styles)
    .filter(([_, value]) => value != null) // Filter out null/undefined
    .map(([key, value]) => {
      // Convert camelCase to kebab-case
      const kebabKey = key.replace(
        /[A-Z]/g,
        (match) => `-${match.toLowerCase()}`
      );
      return `${kebabKey}: ${value};`;
    })
    .join(' ');
}

/**
 * Generates props in single or responsive form
 */

export function generateResponsiveCSSProperties<T = unknown>(
  props: Partial<Record<string, ResponsiveProp<T> | undefined>>,
  config: Record<string, { name: string; category?: string }>
): Record<string, string> {
  type Breakpoint = (typeof SUPPORTED_BREAKPOINT_KEYS)[number];
  const vars: Record<string, string> = {};

  // Built-in `tok` logic for formatting
  const tok = (category: string | undefined, value: T): string =>
    category ? `var(--${category}-${value})` : `${value}`;

  for (const [propName, propValue] of Object.entries(props)) {
    const propConfig = config[propName];

    if (propValue !== undefined && propConfig) {
      const { name, category } = propConfig;

      // Track the last defined value for cascading
      let lastValue: string | undefined;

      if (typeof propValue === 'object' && propValue !== null) {
        for (const [breakpoint, value] of Object.entries(propValue) as [
          Breakpoint,
          T,
        ][]) {
          if (
            value !== undefined &&
            SUPPORTED_BREAKPOINT_KEYS.includes(breakpoint)
          ) {
            const currentValue = tok(category, value);
            vars[`--${name}-${breakpoint}`] = currentValue;
            lastValue = currentValue;
          }
        }

        // If no default value is explicitly set, use the last defined value
        if (!vars[`--${name}-default`] && lastValue) {
          vars[`--${name}-default`] = lastValue;
        }
      } else if (propValue !== null) {
        // Handle non-responsive value as a global default
        vars[`--${name}`] = tok(category, propValue);
      }
    }
  }

  return vars;
}
