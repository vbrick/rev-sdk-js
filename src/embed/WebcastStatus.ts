/**
 * @public
 * @group Enums
 * @category Webcast
 */
export enum WebcastStatus {
	/**
	 * Embedded webcast is authenticating
	 */
	Loading = 'Loading',
	/**
	 * Embedded webcast is authenticated and waiting for webcast to start
	 */
	Scheduled = 'Scheduled',
	/**
	 * Webcast is active (but not currently Broadcasting)
	 */
	InProgress = 'InProgress',
	/**
	 * Webcast is active with video stream
	 */
	Broadcasting = 'Broadcasting',
	/**
	 * Webcast has ended
	 */
	Completed = 'Completed',
	/**
	 * Fatal error embedding webcast
	 */
	Error = 'Error'
}
