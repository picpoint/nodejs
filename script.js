var cheerio = require('cheerio');    // подключаем билиотеку для работы выборкой селекторов на странице
var request = require('request');    // библиотека для работы и исходящими сетевыми запросами


/*
1) Создать программу для получения информации о последних новостях с выбранного вами сайта в
структурированном виде. Можно добавить открытие полной новости, постраничную навигацию и т.п.
*/

request('https://yandex.ru/', function (error, response, html) {    // делаем запрос на яндекс
	if (!error && response.statusCode == 200) {                       // если нет ошибки и ответ статуса 200
		var blockNews = cheerio.load(html);                             // загружаем весь хтмл страницы
		blockNews('.news__list').each(function (i, items) {             // ищем блок с классом .news__list и пробегаемся по всем элементам
			var nws = blockNews(this).find('.list__item').text() + '@';   // ищем класс .list__item и вытягиваем из него текст
			nws += '\n';                                                  // добавляем перевод строки
			console.log(i+1 + ' - ' + nws);                               // выводим i-е значение и сам текст
		})
	}
});




/*
2) Создать переводчик слов с английского на русский, который будет обрабатывать входящие GET
запросы и возвращать ответы, полученные через API Яндекс.Переводчика. Советую реализовать самому,
 вместо использования готовой библиотеки-переводчика (хотя это тоже решение, по факту).

Ссылка для получения ключа API Яндекс.Переводчика: http://api.yandex.ru/key/form.xml?service=trnsl
 Документация API Переводчика: http://api.yandex.ru/translate/doc/dg/reference/translate.xml

 Пример GET запроса к
API: https://translate.yandex.net/api/v1.5/trjson/translate?key={сюда-подставить-ключ}&lang=ru-en
*/

var https = require('https');
var urlutils = require('url');
var readline = require('readline');
var adress = 'https://translate.google.com/?hl=ru&tab=TT';
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


https.get(adress, function (res) {
	if (res.statusCode == 200) {
		rl.question('Введите слово на русском для перевода: ', function (answer) {
			var params = urlutils.parse(adress, true);
			delete params.search;
			params.query = {text: answer};
			var stringurl = urlutils.format(params);
			console.log(stringurl);
		});
	}
}).on('error', function (e) {
	console.log('ERROR -> ' + e.message);
});

