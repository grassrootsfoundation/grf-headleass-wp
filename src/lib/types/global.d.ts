import '@testing-library/jest-dom';

declare namespace Vi {
	interface Assertion<T = never> {
		toBeInTheDocument(): T;
		toHaveAttribute(attr: string, value?: string): T;
		// Add other jest-dom matchers as needed
	}
}
