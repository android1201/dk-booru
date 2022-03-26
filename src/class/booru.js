var booru = require('booru');
module.exports = class booru {
	constructor(data = {}) {
		var site = data.site ? data.site : false,
			query = data.query ? data.query : false,
			setting = data.set ? data.set : false;
		this.data = data;
	};
	setSite(data = {}) {
		try {
			if (this.data.site === false) {
				return Promise.reject('Site not found!');
			};
			this.data.site = data.site;
		} catch (e) {
			return e;
		};
	};
	search(data = {}) {
		try {
			return new Promise((resolve, reject) => {
				if (this.data.site === false) {
					return reject('Site not found!');
				};
				if (data.query === false) {
					return reject('Query not found!');
				};
				var newSite = booru.forSite(this.data.site);
				newSite.search(data.query, data.setting).then((newData) => {
					return resolve(newData);
				});
			});
		} catch (e) {
			return e;
		};
	};
};
