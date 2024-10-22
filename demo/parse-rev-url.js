
/**
 * * Parse a Rev URL
 * attempt to parse a URL (or <iframe src=...> embed code) referencing a Rev webcast, vod, playlist, channel or category).
 * The resulting object will have a videoId if it's a valid VOD url
 * @param {string} url 
 * @returns {ParseResult}
 */
export function parseRevUrl(url) {
    url = url.trim();
    // attempt to read src parameter if embed code is pasted in
    if (url.startsWith('<')) {
        url = [].concat(url.match(/src=["']([^"']+)["']/)).slice(1) || '';
    }
    // will throw if invalid
    const { searchParams, pathname, hash, origin } = new URL(url);

    var out = {
        revUrl: origin === 'null' ? '' : origin,
        params: {}
    };
    parsePath(pathname, out);
    parseHash(hash, out);
    parseSearch(searchParams, out);
    return out;
}
function parsePath(pathname, out = {}) {
    var idLookup = {
        category: 'categoryId',
        events: 'webcastId',
        webcasts: 'webcastShortcut',
        playlist: 'playlistId',
        playlists: 'playlistId',
        webcast: 'webcastId',
        sharevideo: 'videoId',
        videos: 'videoId'
    };
    pathname
        .split('/')
        .reduce((prev, curr, i) => {
            const key = idLookup[prev];
            if (key) {
                // special case for /media/videos/category URL
                if (key === 'videoId' && curr === 'category') return curr;
                out[key] = curr;
            }
            return curr;
        });
    return out;
}
function parseSearch(urlOrParams, out = {}) {
    const params = typeof urlOrParams === 'string'
        ? new URLSearchParams(urlOrParams)
        : urlOrParams instanceof URL
            ? urlOrParams.searchParams
            : urlOrParams;
    if (!out.params) out.params = {};
    const lookup = {
        id: 'videoId',
        team: 'channelId',
        playlist: 'playlistId'
    };
    Array.from(params)
        .forEach(pair => {
            var key = pair[0];
            var value = pair[1];
            var idKey = lookup[key];
            if (idKey) {
                out[idKey] = value;
            } else {
                out.params[key] = value;
            }
        });
    return out;
}
function parseHash(hash, out = {}) {
    if (!hash) return out;
    try {
        var u = new URL(hash.slice(1), 'http://_.invalid');
        parsePath(u.pathname, out);
        parseSearch(u.searchParams, out);
    }
    catch (err) { }
    return out;
}

/**
 * take object output by parseRevUrl and turn into an embed URL
 * @param {ParseResult} parseResult 
 * @param {string} [jwtToken] optional jwt token to add to url params
 * @returns {URL}
 */
export function formatRevEmbedUrl(parseResult, jwtToken) {
    var path = '/embed';
    var params = new URLSearchParams(parseResult.params);

    if (parseResult.videoId) {
        params.set('id', parseResult.videoId);
    } else if (parseResult.playlistId) {
        params.set('playlist', parseResult.playlistId);
    } else if (parseResult.webcastId) {
        path  = '/embed/webcast/' + parseResult.webcastId;
    } else {
        throw new Error('Cannot create embed URL - no valid vbrick id found');
    }

    if (jwtToken) {
        params.set('jwt_token', jwtToken);
    }

    var u = new URL(path, parseResult.revUrl);
    u.search = params.toString();
    return u;
}

/**
 * @typedef {object} ParseResult
 * @property {string} revUrl
 * @property {string} [videoId]
 * @property {string} [webcastId]
 * @property {string} [webcastShortcut]
 * @property {string} [playlistId]
 * @property {string} [channelId]
 * @property {string} [categoryId]
 * @property {Record<string, string | boolean>} params
 */

