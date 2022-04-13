export declare enum TokenType {
    JWT = "JWT",
    ACCESS_TOKEN = "AccessToken"
}
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
