export const loadPolyfill = (!window.Promise || !window.fetch)
	? import(/* webpackChunkName: "polyfill" */'./polyfill-impl')
	: undefined;

