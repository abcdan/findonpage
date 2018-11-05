# findonpage
Simple Node.js Library to check if something is on a webpage

# How to setup
1. `npm install findonpage`
2. Then require the package by doing this `var findonpage = require('findonpage')`

# How to use
If you've required the package, as seen here above, then simply do this:
```
var findonpage = require('findonpage')

findonpage("url","word/sentence", (data) => {
    console.log(data) // false/true
})
```

This will return true/false in the console, you can now use the true/false to do other cool stuff!

# Credits
Thanks CMDJojo for helping me making this small package