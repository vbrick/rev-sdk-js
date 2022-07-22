
/**
 * @public
 */
export enum TokenType {
	JWT = 'JWT',
	ACCESS_TOKEN = 'AccessToken',
	GUEST_REGISTRATION = 'GuestRegistration'
}

/**
 * @public
 */
export interface VbrickSDKToken {
	type: TokenType;

	/**
	 * String containing the token value
	 */
	value: string;

	/**
	 * The issuer for the token
	 */
	issuer: string;
}

/**
 * @public
 */
export interface VbrickSDKConfig {
	/**
	 * URL for Rev
	 */
	baseUrl: string;

	/**
	 * Token for authentication
	 */
	token?: VbrickSDKToken;

	/**
	 * If true, sdk will log to console
	 */
	log?: boolean;
}
