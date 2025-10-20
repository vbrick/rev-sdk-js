# Changelog

## Version 1.0

* Default to adding `local-network-access` Permission Policy, needed for Vbrick's [ECDN](https://vbrick.com/glossary/enterprise-content-delivery-network-ecdn/) functionality in Chrome/Edge version 142. See [Local Network Access](https://developer.chrome.com/blog/local-network-access). In the unlikely case that this interferes with embed loading you can use the old legacy behavior by passing `noLocalNetworkAccess: true` in the player config.

## Version 0.7

* Track playbackSpeed and volume on player object
* Support embed configuration chapter options
* Minor styling updates to demo page
* Update dependencies

## Version 0.6

* Added sidebar configuration compatibility

## Version 0.5

### Features
* Added `initialVolume` config option to set the volume on playback. This can be used to mute the video initially. Note that setting this value to something other than `0` *(muted)* may interfere with `autoplay` functionality.
* Include `exports` field in `package.json`
* expose `player.initialize()` promise to indicate when player has finished loading and is ready for SDK interaction
* Clarify some typescript types

### Bugfixes

* Avoid edge case where including a trailing `/` in the config `baseUrl` could cause load errors
* Detect some alternate config attributes *(the embed query paramters)*

## Version 0.4

### Breaking Changes

* When embedding videos/webcasts `popupAuth` now only set if explicitly included in the embed `config`. Having this value included can force cookie-based authentication for public videos in rare cases. This change may cause some videos to not automatically require authentication. In that case include `popupAuth: false` in the config to restore the original behavior.

### Features
* Allow using embed query parameters in embed `config` instead of renamed aliases, for example `noCc` instead of `hideSubtitles` or `enableFullRev` instead of `showFullWebcast`.

### Other

* Switch to `tsup` for compiling instead of `webpack`.


## Roadmap (Unreleased)

### Features
[ ] Include REST API integration.
[ ] Playlist embeds
