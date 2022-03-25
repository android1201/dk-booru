module.exports = async (data = {}) => {
	var booru = require('booru'),
		site = data.site ? data.site : false,
		query = data.query ? data.query : false,
		setting = data.set ? data.set : false;
	try {
		booru.search(site, query, setting).then((newData) => {
			return newData;
		});
	} catch (e) {
		return e;
	};
};