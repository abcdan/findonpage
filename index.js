function checkOnpage(url,word, cb){
    if(typeof cb !== "function") throw new Error("Callback must be a function")
    var request = require("request");
    const fakeUa = require('fake-useragent');
    
    // We need to generate some fake headers for some websites, which require headers before passing on the page.
    var headers = {
      'User-Agent': fakeUa()
    };
    request.get({ url: url, headers: headers }, function (e, r, body) {
        cb(!e && res && res.body && body && body.match(eval("/"+word+"/")) !== null)
      });
       
    }
    
    module.exports = checkOnpage;