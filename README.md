# findonpage
Simple Node.js Library to check if something is on a webpage

# How to setup
1. `npm install findonpage`
2. Then require the package by doing this `const find = require('findonpage')`

# How to use
If you've required the package, as seen here above, you'll have to decide which type of find you want to use.
Here's the list:
* normal, this one simply makes a request and check if it's on the page.
* fake, this one will use a random user agent. Some websites require a user agent and this one will use a random one.
* anticf, this one will try to bypass Cloudflare their "under attack" pages.

After you've decided which one you want to use you can use the following snippets to use them:
#### Normal
```js
// Make a simple requests, no random user agents.
find.normal(url, word, r => {
    console.log('Normal: ' + r)
})
```

#### Fake
```js
// Fake, this one generates random user agents. Some websites require user agents and will block requests without them.
find.fake(url, word, r => {
    console.log('Fake: ' + r)
})
```

### AntiCF
```js
// Anticf, this one will try to bypass cloudflare their "I'm under attack" mode.
// This one can take up to 10 seconds when the page is under attack mode but will succeed in getting a result.
find.anticf(url, word, r => {
    console.log('AntiCF: ' + r)
})
```

This will return `type: true/false `in the console, you can now use the true/false to do other cool stuff!

# Credits
Thanks CMDJojo for helping me making this small package
