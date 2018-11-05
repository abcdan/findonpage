function checkOnpage(url,word){
var request = require("request");
const fakeUa = require('fake-useragent');

// We need to generate some fake headers for some websites, which require headers before passing on the page.
var headers = {
  'User-Agent': fakeUa()
};
request.get({ url: url, headers: headers }, function (e, r, body) {
    var regex = new RegExp(eval("/"+word+"/"))
    console.log(regex.test(body))
  });
   
}

module.exports = checkOnpage;