/**
 * Converts a prop value to pixels.
 * @returns string
 */
export function toPx(value: unknown) {
	if (value == null || value === '') return undefined;
	return `${String(value).replace(/px$/, '')}px`;
}
/**
 * Converts a string toLowerCase() with hyphens.
 * @returns string
 */
export function toKebabCase(str: string) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Converts a string toUpperCase() with underscores.
 * @returns string
 */
export function toCapsUnderscore(str: string) {
	return str.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
}

/**
 * Converts a string toUpperCase() with splitting each string, taking the first letter of each string.
 * @returns string
 */
export function convertStringToInitials(str?: string) {
	return str
		? str
				.trim()
				.split(/\s+/)
				.map((part) => part[0].toUpperCase())
				.join('')
		: undefined;
}
