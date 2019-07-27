const cheerio = require('cheerio');
const request = require('request');
let arr = [];

request('https://www.rbc.ru/', (err, response, html) => {
	if (!err && response.statusCode == 200) {
		let $ = cheerio.load(html);
		$('.indicators__item').each(function (i, element) {
			let name = $(this).find('.indicators__name').text().trim();
			arr.push(name);
		});
	}
});

module.exports = arr;