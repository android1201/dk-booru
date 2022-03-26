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
**SETSITE**
```
booru.setSite({
    site: 'sb'
});
```
**BOORU SITES AND ALIASES**
1. e621.net
	* e6
	* e621
1. e926.net
	* e9
	* e926
1. hypnohub.net
	* hh
	* hypno
	* hypnohub
1. danbooru.donmai.us
	* db
	* dan
	* danbooru
1. konachan.com
	* kc
	* konac
	* kcom
1. konachan.net
	* kn
	* konan
	* knet
1. yande.re
	* yd
	* yand
	* yandere
1. gelbooru.com
	* gb
	* gel
	* gelbooru
1. rule34.xxx
	* r34
	* rule34
1. safebooru.org
	* sb
	* safe
	* safebooru
1. tbib.org
	* tb
	* tbib
	* big
1. xbooru.com
	* xb
	* xbooru
1. rule34.paheal.net
	* pa
	* paheal
1. derpibooru.org
	* dp
	* derp
	* derpi
	* derpibooru
1. realbooru.com
	* rb
	* realbooru
