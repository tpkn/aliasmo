# Aliasmo
Require NodeJs module using alias

:warning: Tested only on CommonJS system, and not too far in deep.


## API
```javascript
require('aliasmo')();

// or 

require('aliasmo')({ 
   "@root": ".",
   "@config": "./config.js",
   "@routes": "routes/",
   "@util": "modules/util"
});
```

## package.json
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
