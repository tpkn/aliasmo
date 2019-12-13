/*!
 * Aliasmo, http://tpkn.me/
 */
const fs = require('fs');
const path = require('path');
const Module = require('module');
const Require = Module.prototype.require;

module.exports = (aliases_list) => {
   try {

      let aliases;
      const package_json = path.join(path.dirname(require.main.filename), './package.json');

      if(aliases_list instanceof Object){
         aliases = aliases_list;
      }else{
         if(fs.existsSync(package_json)){
            aliases = require(package_json).aliases;
         }else{
            return
         }
      }

      Module.prototype.require = function(...args){
         if(args[0].indexOf('@') === 0){
            for(let alias in aliases){
               let alias_rule = new RegExp('^' + alias + '(/|$)');
               if(alias_rule.test(args[0])){
                  args[0] = path.resolve(args[0].replace(alias, aliases[alias]));
                  break
               }
            }
         }

         return Require.apply(this, args);
      }
      
   }catch(err){
      console.log(err);
   }
}
