export function isString (val: any): boolean {
	return Object.prototype.toString.call(val) === '[object String]';
}

export function lookupElement(element: string | HTMLElement): HTMLElement {
	const el: HTMLElement = element instanceof HTMLElement ? element : document.querySelector(element);

	if(!el) {
		throw new Error('Rev SDK Error: Could not resolve element');
	}

	return el;
}
