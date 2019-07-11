const request = require('request');
const fakeUA = require('fake-useragent');
const cloudscraper = require('cloudscraper');

module.exports = {
    normal(url, str, callback) {
        if (typeof callback !== 'function') throw new Error('Callback must be a function.');

        request(url, (err, res, body) => callback(!err && body && body.includes(str)));
    },
    // Attach fake useragent 
    fake(url, str, callback) {
        if (typeof callback !== 'function') throw new Error('Callback must be a function.');

        request({
            url,
            headers: { 'User-Agent': fakeUA() }
        }, (err, res, body) => callback(!err && body && body.includes(str)));
    },
    // bypass cloudflare
    anticf(url, str, callback) {
        if (typeof callback !== 'function') throw new Error('Callback must be a function.');

        cloudscraper.get(url).then((res) => callback(res && res.includes(res)));
    }
};
