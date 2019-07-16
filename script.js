const fs = require('fs');
const stdin = process.stdin;
const stdout = process.stdout;


function guessNumber() {
	let comp = 0;
	let user = 0;

	let resultComp = '';
	let resultUser = '';

	stdout.write('Введите 1 или 2 => ');

	stdin.on('data', function (dataUser) {
		console.log(`Вы ввели ${dataUser}`);

		let numb = Math.floor(Math.random() * 10);

		if (numb < 5) {
			comp = 1;
			console.log(`Компьютер загадал ${comp}`);
		} else {
			comp = 2;
			console.log(`Компьютер загадал ${comp}`);
		}

		if (dataUser == comp) {
			resultUser = 1;
			resultComp = 0;
			console.log('Вы выиграли !!!');
		} else {
			resultUser = 0;
			resultComp = 1;
			console.log('Вы програли ...');
		}

		try {
			fs.appendFileSync('result.txt', `Computer: ${resultComp} --- User: ${resultUser} \n`);
		} catch (err) {
			console.log(err.message);
		}

		process.exit();
	});

}

guessNumber();