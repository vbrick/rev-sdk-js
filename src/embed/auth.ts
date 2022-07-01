import { TokenType, VbrickSDKConfig } from "../VbrickSDK";

export function initializeWebcastToken(webcastId: string, config: VbrickSDKConfig): Promise<any> {

	if(config.token?.type !== TokenType.JWT) {
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

