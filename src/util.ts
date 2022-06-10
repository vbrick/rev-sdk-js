/**
 * @internal
 */
export function isString (val: any): boolean {
	return Object.prototype.toString.call(val) === '[object String]';
}

/**
 * @internal
 */
export function lookupElement(element: string | HTMLElement): HTMLElement {
	const el: HTMLElement = element instanceof HTMLElement ? element : document.querySelector(element);

	if(!el) {
		throw new Error('Rev SDK Error: Could not resolve element');
	}

	return el;
}

export function getEmbedUrl(baseUrl: string, endpoint: string, params: Record<string, any>) {
	const query = Object.entries(params)
		.map(([key, value]) =>
			!value ? undefined :
			value === true ? key :
			`${key}=${encodeURIComponent(value)}`)
		.filter(Boolean)
		.join('&');

	return `${baseUrl}${endpoint}?${query}`;
}