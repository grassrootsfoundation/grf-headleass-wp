import { SUPPORTED_BREAKPOINT_KEYS } from './constants';
import { tok } from './style';

import type { TColor } from '$types/color';
import type { ResponsiveProp } from '$types/media';
import type { TRadius } from '$types/radius';
import type { TShadow } from '$types/shadow';
import type { TSize } from '$types/size';
import type { TTextSize } from '$types/text';
import type { DesignTokenCategory } from './style';

/**
 * Filters out undefined props.
 */
export function definedProps(props = {}): typeof props {
	return Object.fromEntries(Object.entries(props).filter(([_, v]) => v !== undefined));
}

/**
 * Determines if a prop conforms to the responsive prop
 * config shape.
 */

export function createResponsivePropCSSProperties<T = unknown>(
	prop: ResponsiveProp<T>,
	config: { name: string }
): Record<string, string | T | undefined> {
	if (!prop || typeof prop !== 'object') {
		// If not an object, create a single CSS variable
		return { [config.name]: prop as T };
	}

	// If it's a responsive object, map keys to CSS variables
	return Object.keys(prop).reduce(
		(acc, key) => {
			if (SUPPORTED_BREAKPOINT_KEYS.includes(key as never)) {
				acc[`${config.name}-${key}`] = (prop as Record<string, T>)[key];
			}
			return acc;
		},
		{} as Record<string, string | T | undefined>
	);
}

export function inlineStyles(
	mergedStyles: { [s: string]: unknown } | ArrayLike<unknown>
): typeof mergedStyles {
	return Object.entries(mergedStyles)
		.map(([key, value]) => `${key}: ${value}`)
		.join('; ');
}

export type ResponsiveConfig = Record<string, { name: string; category: DesignTokenCategory }>;

export function generateCustomProperties(
	props: Partial<Record<string, ResponsiveProp<string | number> | undefined>>,
	config: ResponsiveConfig
): Record<string, string> {
	const vars: Record<string, string> = {};

	for (const [propName, propValue] of Object.entries(props)) {
		// Check if the prop value is defined and in the config
		if (propValue !== undefined && config[propName]) {
			const { name, category } = config[propName];

			// Process single or responsive property
			if (typeof propValue === 'object' && propValue !== null) {
				for (const [breakpoint, value] of Object.entries(propValue)) {
					if (value !== undefined) {
						vars[`--${name}-${breakpoint}`] = tok(category, value);
					}
				}
			} else if (propValue !== null) {
				vars[`--${name}`] = tok(category, propValue);
			}
		}
	}

	return vars;
}

export interface CommonProps {
	className?: string;
}

export interface CommonStyledProps extends CommonProps {
	bgColor?: TColor;
	borderColor?: TColor;
	color?: TColor;
	gap?: TSize;
	radius?: TRadius;
	shadow?: TShadow;
	spacingBlock?: TSize;
	spacingInline?: TSize;
	textSize?: TTextSize;
}
