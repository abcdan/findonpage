const find = require('../index')

// Declare the page and the string you want to look for.
let url = 'https://lngzl.nl'
let word = 'file.coffee'

// This isdepreciated in in version that came after 1.1.1, use the other ways as stated below.
/*find(url, word, (r) => {
    console.log(r)
})*/

// Make a simple requests, no random user agents.
find.normal(url, word, r => {
    console.log('Normal: ' + r)
})

// Fake, this one generates random user agents. Some websites require user agents and will block requests without them.
find.fake(url, word, r => {
    console.log('Fake: ' + r)
})

// Anticf, this one will try to bypass cloudflare their "I'm under attack" mode.
// This one can take up to 10 seconds when the page is under attack mode but will succeed in getting a result.
find.anticf(url, word, r => {
    console.log('AntiCF: ' + r)
})
