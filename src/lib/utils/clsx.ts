export default function clsx(...classes: (string | undefined | null | boolean)[]): string {
	return classes.filter(Boolean).join(' ');
}
