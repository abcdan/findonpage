// All the libraries that are being used.
const request = require("request")
const fakeUa = require('fake-useragent')
const cloudscraper = require('cloudscraper')

// Normal, no fake user agents.
async function normal(url, string, cb) {
  if (typeof cb !== "function") throw new Error("Callback must be a function")
  await request.get({
    url: url,
  }, function (e, r, body) {
    cb(!e && body && body.match(eval("/" + string + "/")) !== null)
  })
}

// Fake, has fake user agents.
async function fake(url, string, cb) {
  if (typeof cb !== "function") throw new Error("Callback must be a function")
  var headers = {
    'User-Agent': fakeUa()
  };
  await request.get({
    url: url,
    headers: headers
  }, function (e, r, body) {
    cb(!e && body && body.match(eval("/" + string + "/")) !== null)
  })
}

// Anticf, this one will [TRY] to bypass cloudflare.
async function anticf(url, string, cb) {
  if (typeof cb !== "function") throw new Error("Callback must be a function")
  var options = {
    method: 'GET',
    url: url
  };

  let response = await cloudscraper(options)

  cb(response && response.match(eval("/" + string + "/")) !== null)
}

// Export the things.
module.exports = {
  normal: normal,
  fake: fake,
  anticf: anticf
}
