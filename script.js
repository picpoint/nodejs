const cheerio = require('cheerio');
const request = require('request');
const bc = require('better-console');

// Дз №1

/*
request('https://www.rbc.ru/', (error, response, html) => {
	if (!error && response.statusCode == 200) {
		let $ = cheerio.load(html);
		let indicators = [];

		$('.indicators__item').each(function (i, element) {
			let name = $(this).find('.indicators__name').text().trim();
			let time = $(this).find('.indicators__date').text().trim();
			let sell = $(this).find('.indicators__sum').text().trim();
			let buy = $(this).find('.indicators__change').text().trim();
			indicators.push({time: time, name: name, sell: sell, buy: buy});
		});
		bc.table(indicators);

	}
});
*/


/*
request('https://yandex.ru/', (error, respose, html)=> {
	if (!error && respose.statusCode == 200) {
		let $ = cheerio.load(html);
		let count = 1;
		$('.list__item').each(function (i, element) {
			let nws = $(this).find('.home-link').text();
			console.log(`Новость № ${count++}  -  ${nws}`);
		});

	}
});
*/


/*
request('https://mail.ru/', (error, response, html) => {
	if (!error && response.statusCode == 200) {
		let $ = cheerio.load(html);

		$('.news-item_inline').each(function (i, element) {
			let ns = $(this).find('.i-inline').text();
			console.log(ns);
		});

	}
});
*/