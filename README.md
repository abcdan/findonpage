# onpage
Simple Node.js Library to check if something is on a webpage

# How to setup
1. `npm install onpage`
2. Then require the package by doing this `var onpage = require('onpage')`

# How to use
If you've required the package, as seen here above, then simply do this:
```
var onpage = require('onpage')

onpage(
    url = "the url of the page you want to check if a thing is on it",
    word ="the word/sentence it has to look for (case sensitve)"
)
```