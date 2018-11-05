function checkOnpage(url,word, cb){
    var request = require("request");
    const fakeUa = require('fake-useragent');
    
    // We need to generate some fake headers for some websites, which require headers before passing on the page.
    var headers = {
      'User-Agent': fakeUa()
    };
    request.get({ url: url, headers: headers }, function (e, r, body) {
       return cb(body.match(eval("/"+word+"/")) !== null)
      });
       
    }
    
    module.exports = checkOnpage;