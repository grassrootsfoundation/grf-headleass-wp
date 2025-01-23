import { MediaQuery } from '$utils/constants';

export function handleError(error: Error) {
  console.error('An error occurred:', error);
}

export function init() {
  console.log('Client hooks initialized');
}

/**
 * Used as a convience method for accessing pre-defined
 * breakpoints. Uses `useMediaQuery` under the hood.
 */
export function useBreakpoints() {
  const xs = MediaQuery.xs;
  const sm = MediaQuery.sm;
  const md = MediaQuery.md;
  const lg = MediaQuery.lg;
  const xl = MediaQuery.xl;

  return {
    xs,
    sm,
    md,
    lg,
    xl,
  };
}
