import { IVbrickAPIToken, IVbrickWebcastConfig, TokenType } from './IVbrickApi';

let promise: Promise<IVbrickAPIToken>;

export function initializeWebcastToken(webcastId: string, config: IVbrickWebcastConfig): Promise<IVbrickAPIToken> {
	if(!promise) {
		promise = getToken(webcastId, config);
	}
	return promise;
}

function getToken(webcastId: string, config: IVbrickWebcastConfig): Promise<any> {
	const token = config.token.value;

	if(config.token.type === TokenType.ACCESS_TOKEN) {
		return Promise.resolve({
			accessToken: config.token.value
		});
	}

	const issuer = config.token.issuer;

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

