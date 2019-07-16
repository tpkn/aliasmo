# Aliasmo [![npm Package](https://img.shields.io/npm/v/aliasmo.svg)](https://www.npmjs.org/package/aliasmo)
Require NodeJs modules using alias

:warning: Tested only on CommonJS system, and not too far in deep.


## API
```javascript
require('aliasmo')();

// or without modifying package.json file

require('aliasmo')({ 
   "@root": ".",
   "@config": "./config.js",
   "@routes": "routes/",
   "@util": "modules/util"
});
```

### package.json
```json
{
   "name": "app",
   "version": "0.0.1",
   "main": "app.js",
   "aliases": {
      "@root": ".",
      "@config": "./config.js",
      "@routes": "routes/",
      "@util": "modules/util"
   },
   "dependencies": {
      
   }
}
```
