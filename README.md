# Rev JavaScript SDK

This is Vbrick's JavaScript SDK library that enables you to embed Vbrick Rev webcasts and videos (also known as Video on Demand or VOD) on your website, portal, or any web-based application using JavaScript code. The SDK supports interaction with the webcast, video and playlist embedded players.

## Demo Page

- [Demo Page](https://vbrick.github.io/rev-sdk-js/demo)

## Auto-Generated Documentation
- [API Reference](/docs/README.md)

## Accessing the SDK

The JavaScript SDK can be accessed via `<script>` tag in your HTML. Set the src attribute to `https://cdn.jsdelivr.net/npm/@vbrick/rev-sdk@latest/dist/rev-sdk.js` or import for ES6 module.

~~~
<script src="https://cdn.jsdelivr.net/npm/@vbrick/rev-sdk@latest/dist/rev-sdk.js"></script>

<script type="module">
  import revSdk from "https://cdn.jsdelivr.net/npm/@vbrick/rev-sdk@latest/dist/rev-sdk.esm.js";
</script>
~~~

#### Install using npm

If you use npm, then you can run
~~~
npm install @vbrick/rev-sdk
~~~

#### Building The SDK Locally

~~~
npm install
npm run build
~~~

## Embedding a Webcast
On your web page, you can insert an embedded webcast using an empty div tag. You will have to reference the div id when you interact with the SDK.

`<div id="embed"></div>`

#### Invoking Webcast
Embedding a webcast requires you to pass the following parameters to the embedWebast function

* Either a CSS selector string or HTML div element where the embed content will be rendered
* Rev Webcast Id
* Webcast Config which consists of the following individual parameters
  * token (type=object, Required): Token for the user who is watching the webcast, which can be unique for each embed
    * type (type=string, Required): Set to 'JWT' for [JSON Web Token](https://revdocs.vbrick.com/reference/jwt-authentication), 'AccessToken' for an [OAuth](https://revdocs.vbrick.com/reference/oauth2token) or [API token](https://revdocs.vbrick.com/reference/authenticateuser), or 'GuestRegistration' for a token generated using the [Guest Registration](https://revdocs.vbrick.com/reference/getguestuser) APIs.
    * value (type=string, Required): Value of the token
    * issuer (type=string): Issuer of the token.
  * baseUrl (type=string, Required): Your Rev URL
  * className (type=string, Optional): CSS classes if you want to include to the embed iFrame
  * width (type=string, Optional): iframe width if you want to overwrite the default responsive behavior
  * height (type=string, Optional): iframe height if you want to overwrite the default responsive behavior
  * showVideo (type=boolean, Optional, Default:true): to control display of video player or not. It's more useful for future release once we add Webcast Q&A, Polls, Chat features to the SDK.
  * log (type=boolean, Optional, Default:false): If set to true, you can get additional browser console log. You may need additional logging during your development and troubleshooting

~~~
const webcastId = '<<WEBCAST_ID>>';
const jwtToken = {
    type: 'JWT',
    issuer: '<<ISSUER>>',
    value: '<<JWT_TOKEN>>'
};
const webcast = revSdk.embedWebcast('#embed', webcastId, {
    baseUrl: 'https://<<YOUR_REV_URL>>',
    token: jwtToken,
    log: true
});
~~~

#### Listening to Webcast Events
You can listen for events in the webcast by adding a callback using .on(). See example below

~~~
webcast.on('broadcastStarted', function() {
  // handle this event
});
~~~

#### Supported Webcast Events

* broadcastStarted
* broadcastStopped
* webcastStarted
* webcastEnded
* error

##### Stop Listening to Events

You can stop listening for the events using .off(). See example below

~~~
webcast.off('broadcastStarted', handlerFunction);
~~~

##### Get Webcast Status
You can get the status of the webcast using status variable. See example below

`const webcastStatus = webcast.webcastStatus;`

#### Webcast Status Values
* Broadcasting
* Completed
* Error
* InProgress
* Loading
* Scheduled

##### Removing Webcast
You can remove the webcast from the DOM by calling destroy method.

`webcast.destroy();`

## Embedding a Video
You can embed a video just like a webcast using an empty div tag.

`<div id="embed"></div>`

Use the embedVideo method to display the video on your web page:

```
const videoId = '01234567-89AB-CDEF-0123-456789ABCDEF';
const token = {
    type: 'AccessToken',
    issuer: 'vbrick',
    value: '<<Token Value>>'
};

const vbrickEmbed = revSdk.embedVideo('#embed', videoId, {
	log: true,
	token,
  baseUrl: 'https://<<YOUR_REV_URL>>',
});
```

Use the .on method to watch for events about the video:

```
const onVideoLoaded = data => console.log(`Video loaded: ${JSON.stringify(data)}`);

vbrickEmbed.on('videoLoaded', onVideoLoaded);
```

Use the .off method to stop listening for events:

```
vbrickEmbed.off('videoLoaded', onVideoLoaded);
```

##### Control the player using external commands:

```
vbrickEmbed.play();
vbrickEmbed.pause();
vbrickEmbed.setVolume(0.5);
```

##### Supported Video Events

* videoLoaded
* playerStatusChanged
  * Buffering
  * Ended
  * Initializing
  * Paused
  * Playing
  * Seeking
* volumeChanged
* seeked
* error

##### Video Config Example

```
{
  "accentColor": "ff0000",
  "autoplay" : true,
  "forcedCaptions": false,
  "hideCaptions": false,
  "hideChapters" : false,
  "hideFullscreen": false,
  "playInLoop": true,
  "hideOverlayControls": false,
  "hidePlayControls": false,
  "hideSettings": false,
  "popOut": false,
  "startAt": "00m10s"
}
```

##### Get Video Status
You can get the status of the video using status variable, this reflects the latest playerStatusChanged event. See example below

`vbrickEmbed.playerStatus;`

##### Removing Webcast
You can remove the webcast from the DOM by calling destroy method.

##### Removing Video
You can remove the video from the DOM by calling destroy method.

`vbrickEmbed.destroy();`
