import { TokenType, VbrickSDKConfig, VbrickSDKToken } from "../VbrickSDK";

let promise: Promise<VbrickSDKToken>;

export function initializeWebcastToken(webcastId: string, config: VbrickSDKConfig): Promise<VbrickSDKToken> {
	if(!promise) {
		promise = getToken(webcastId, config);
	}
	return promise;
}

function getToken(webcastId: string, config: VbrickSDKConfig): Promise<any> {

	if(config.token?.type !== TokenType.ACCESS_TOKEN) {
		return Promise.resolve({
			accessToken: config.token?.value
		});
	}

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
			if(!response.ok) {
				return Promise.reject('Unable to authenticate jwt');
			}
			return response.json();
		})
		.then(response => ({
			...response,
			issuer
		}));

}

