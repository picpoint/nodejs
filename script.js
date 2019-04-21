/*
Дз

1) Создать программу для получения информации о последних новостях с выбранного вами сайта в
структурированном виде. Можно добавить открытие полной новости, постраничную навигацию и т.п.

2) Создать переводчик слов с английского на русский, который будет обрабатывать входящие GET
запросы и возвращать ответы, полученные через API Яндекс.Переводчика. Советую реализовать самому,
вместо использования готовой библиотеки-переводчика (хотя это тоже решение, по факту).

Ссылка для получения ключа API Яндекс.Переводчика: http://api.yandex.ru/key/form.xml?service=trnsl
Документация API Переводчика: http://api.yandex.ru/translate/doc/dg/reference/translate.xml

Пример GET запроса к
API: https://translate.yandex.net/api/v1.5/trjson/translate?key={сюда-подставить-ключ}&lang=ru-en

Ну и если хотите что то своё — пожалуйста, но в рамках пройденного материала.
Если хотите что-то особое, но не можете придумать — напишите в комментариях, я придумаю задание
специально для вас.
*/

var cheerio = require('cheerio');
var request = require('request');

request('https://yandex.ru/', function (error, response, html) {
	var arr = [];
	if (!error && response.statusCode == 200) {
		var blockNews = cheerio.load(html);
		blockNews('.news__list').each(function (i, items) {
			var nws = blockNews(this).find('.list__item').text();
			nws += '\n';
			console.log(nws);
		})
	}
});

