# Rev JavaScript SDK

This is Vbrick's JavaScript SDK library that enables you to embed Vbrick Rev webcasts on your website, portal, or any web-based application using JavaScript code. The SDK currently supports interaction with the webcast video player. We will support full webcast features including slides, chats, Q&A, polls, VOD functionality, etc via this SDK in the future.

##### Documentation
- [API Module Reference](/docs/modules/index.md)
- [API Enumerations and Interfaces Reference](/docs/modules/IVbrickApi.md)

#### Accessing the SDK

The JavaScript SDK can be accessed via `<script>` tag in your HTML. Set the src attribute to `https://<<YOUR_REV_URL>>/dist/rev-sdk.js` or import for ES6 module.

If you use npm, then you can run `npm install @vbrick/rev-sdk`

~~~
<script src="<<REV URL>>/dist/rev-sdk.js"></script>

<script type="module">
  import revSdk from "<<YOUR_REV URL>>/dist/rev-sdk.js";
</script>
~~~

#### Building The SDK Locally

~~~
npm install
npm run build
~~~

#### Embedding a Webcast
On your web page, you can insert an embedded webcast using an empty div tag. You will have to reference the div id when you interact with the SDK.

`<div id="embed"></div>`

#### Initializing the SDK
You can initialize the SDK as shown below

`revSdk.defaults({baseUrl: 'https://<<YOUR_REV_URL>>' });`

#### Invoking Webcast
Embedding a webcast requires you to pass the following parameters to the embedWebast function

* Either a CSS selector string or HTML div element where the embed content will be rendered
* Rev Webcast Id
* Webcast Config which consists of the following individual parameters
  * token (type=object, Required): Json Web Token (JWT) for the user who is watching the webcast
    * type (type=string, Required): Set to 'JWT' (Future version will support more token types
    * value (type=string, Required): JWT token generate for each individual user
    * issuer (type=string, Required): Issuer of the JWT token
  * baseUrl (type=string, Optional): Your Rev URL if you did not initialize the SDK with defaults
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
    token: jwtToken
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

#### Stop Listening to Events

You can stop listening for the events using .off(). See example below

~~~
webcast.off('broadcastStarted', function() {
  // handle this event
});
~~~

#### Get Webcast Status
You can get the status of the webcast using status variable. See example below

`var sts = webcast.status();`

#### Webcast Status Values
* Broadcasting
* Completed
* Error
* InProgress
* Loading
* Scheduled

#### Removing Webcast
You can remove the webcast from the DOM by calling destroy method.

`webcast.destroy();`


#### Upgrading from rev-embed-sdk
There are a few breaking changes if you are updating from rev-embed-sdk:

Export was renamed from `revEmbed` to `revSdk`
The library URL was changed to `https://<<YOUR_REV_URL>>/dist/rev-sdk.js`
The NPM package was renamed to `@vbrick/rev-sdk`
