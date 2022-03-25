module.exports = async (data = {}) => {
	var booru = require('booru'),
		site = data.site ? data.site : false,
		newSite = forSite(site),
		query = data.query ? data.query : false,
		setting = data.set ? data.set : false;
	try {
		newSite.search(query, setting).then((newData) => {
			return newData;
		});
	} catch (e) {
		return e;
	};
};
