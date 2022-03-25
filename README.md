**DK-BOORU**
**INSTALLATION**
```
const booru = require('dk-booru');
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
