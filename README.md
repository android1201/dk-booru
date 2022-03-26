**DK-BOORU**
**INSTALLATION**
```
const Booru = require('dk-booru').booru,
   booru =  new Booru();
```
**SEARCH**
```
booru.search({
    site: 'safebooru',
    query: ['girl'],
    set: {
        limit: 3,
        random: true
    }
}).then(data => console.log(data));
```
**SITESEARCH**
```
Soon!
```
