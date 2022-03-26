/*********
 * Testing
 */
const data = require('./module.js'),
	booru = new data.booru();
booru.setSite({
	site: 'sb'
});
booru.search({
	query: ['girl']
}).then((r) => {
	console.log(r)
});
