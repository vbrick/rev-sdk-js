import { VbrickSDKConfig } from "../VbrickSDK";

export function authenticateAccessToken(config: VbrickSDKConfig): Promise<any> {
	return Promise.resolve({
		accessToken: config.token?.value
	});
}

export function authenticateGuestToken(webcastId: string, config: VbrickSDKConfig): Promise<any> {
	const issuer = config.token.issuer;
	const token = config.token.value;

	return fetch(`${config.baseUrl}/external/auth/jwt/${webcastId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-requested-with': 'xmlhttprequest'
		},
		body: `{
				"token": "${issuer} ${token}"
			}`
	})
		.then(response => {
			if (!response.ok) {
				return Promise.reject('Unable to authenticate jwt');
			}
			return response.json();
		})
		.then(response => ({
			...response,
			issuer
		}));
}

export function authenticateJWT(config: VbrickSDKConfig): Promise<any> {
	const issuer = config.token.issuer;
	const jwt = config.token.value;

	const url = new URL('/api/v2/jwtauthenticate', config.baseUrl);
	url.searchParams.set('jwt_token', jwt);

	return fetch(`${url}`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'x-requested-with': 'xmlhttprequest'
		}
	})
		.then(response => {
			if (!response.ok) {
				return Promise.reject('Unable to authenticate jwt');
			}
			return response.json();
		})
		.then(response => ({
			...response,
			issuer
		}));
}
