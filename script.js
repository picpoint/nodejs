const fs = require('fs');
const stdin = process.stdin;
const stdout = process.stdout;


// ф-ия считывания введённого значения пользователя, генерации случайного числа компьютера, записи результата
// выигрыша/проигрыша в файл


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


// ф-ия считывания текстового файла и подсчёта результата побед
function countWins() {
	let massresult = [];
	let str = '';
	let comp = 0;
	let user = 0;

	fs.readFile('result.txt', (err, data) => {
		if (err) {
			throw new Error(`!!! ERROR !!! ${err.message}`);
		} else {
			let arr = data.toString().split('\n');

			for (let i = 0; i < arr.length; i++) {
				str = arr[i];
				for (let j = 0; j < str.length; j++) {
					if (!isNaN(str[j]) && str[j] != ' ' && str[j] != '\n' && str[j] != '\r') {
						massresult.push(+str[j]);
					}
				}
			}

			for (let x = 0; x < massresult.length; x++) {
				if (x % 2 !== 0) {
					comp += massresult[x];
				} else {
					user += massresult[x];
				}
			}

			console.log(`Результаты: comp - ${comp}  user - ${user}`);

		}
	});
}

countWins();