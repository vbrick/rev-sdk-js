import { IVbrickAPIToken, IVbrickWebcastConfig, TokenType } from './IVbrickApi';

let promise: Promise<IVbrickAPIToken>;
export function initializeToken(webcastId: string, config: IVbrickWebcastConfig): Promise<IVbrickAPIToken> {
	if(!promise) {
		promise = getToken(webcastId, config);
	}
	return promise;
}

function getToken(webcastId: string, config: IVbrickWebcastConfig): Promise<any> {
	const token = config.token.value;
	const issuer = config.token.issuer;
	const oldToken = getOldToken();
	if(oldToken.source && oldToken.source.token === token && oldToken.source.issuer === issuer) {
		return Promise.resolve(oldToken);
	}

	if(config.token.type === TokenType.OAUTH) {
		return Promise.resolve({ auth: token });
	}

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
		.then(auth => {
			localStorage.setItem('vbrick-token', JSON.stringify({
				...auth,
				source: { token, issuer }
			}));
			return auth;
		});
}

function getOldToken(): any {
	const oldToken = localStorage.getItem('vbrick-token');
	return oldToken ? JSON.parse(oldToken) : {};
}
