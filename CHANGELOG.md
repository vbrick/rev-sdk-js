# Changelog

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
