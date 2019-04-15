var BeepScript = require('beepscript');
var bs = new BeepScript();


/*
// это шаблон как работает программа, если раскоментить и запустить, будет простенькая мелодия
bs.beep(440, 1);                          //Play 400 Hz for 1 second
bs.sleep(1/2);                            //Sleep for 1/2 second
bs.beep('C#4', 1/4);                      //Play note C#4 for 1/4 second
bs.sleep(1);                             //Sleep for 1 second
bs.beep(500, 1/2);                        //Play 500 Hz for 1/2 seconds
bs.sleep(0.5);                            //Sleep for 0.5 seconds
bs.beep('Eb5', 2);

// здесь представлен пример выше но запись иная, чтоб не писать много команд bs.beep
bs.seq([                                 //Play a sequency of beeps and sleeps
  [440, 1],                            //A beep is an array with note or frequency and duration
  1/2,                                 //A sleep is a number
  ['C#4', 1/4],
  1,
  [500, 1/2],
  0.5,
  ['Eb5', 2]
])
*/


// здесь я рассписал обозначение гаммы для себя
/*
До	  C;  do [du:]
Ре	  D;  re [rei]
Ми	  E;  mi [mi:]
Фа	  F;  fa [fa:]
Соль	G;  sol [sɔl]
Ля	  A;  la [la:]
Си	  B;  si [si:]
*/

// здесь расписанно обозначение октав, нихких и высоких с бимолями и диезами
/*
C0 C#0 Db0 D0 D#0 Eb0 E0 F0 F#0 Gb0 G0 G#0 Ab0 A0 A#0 Bb0 B0
C1 C#1 Db1 D1 D#1 Eb1 E1 F1 F#1 Gb1 G1 G#1 Ab1 A1 A#1 Bb1 B1
C2 C#2 Db2 D2 D#2 Eb2 E2 F2 F#2 Gb2 G2 G#2 Ab2 A2 A#2 Bb2 B2
C3 C#3 Db3 D3 D#3 Eb3 E3 F3 F#3 Gb3 G3 G#3 Ab3 A3 A#3 Bb3 B3
C4 C#4 Db4 D4 D#4 Eb4 E4 F4 F#4 Gb4 G4 G#4 Ab4 A4 A#4 Bb4 B4
C5 C#5 Db5 D5 D#5 Eb5 E5 F5 F#5 Gb5 G5 G#5 Ab5 A5 A#5 Bb5 B5
C6 C#6 Db6 D6 D#6 Eb6 E6 F6 F#6 Gb6 G6 G#6 Ab6 A6 A#6 Bb6 B6
C7 C#7 Db7 D7 D#7 Eb7 E7 F7 F#7 Gb7 G7 G#7 Ab7 A7 A#7 Bb7 B7
C8 C#8 Db8 D8 D#8 Eb8 E8 F8 F#8 Gb8 G8 G#8 Ab8 A8 A#8 Bb8 B8
*/


/*
// здесь я уже написал одну известную мелодию, если догадаешься

bs.beep('C3', 1);
  bs.sleep(1/32);
bs.beep('G3', 1);
  bs.sleep(1/32);
bs.beep('G3', 1);
  bs.sleep(1/32);
bs.beep('D#3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D#3', 1/2);
  bs.sleep(1/32);
bs.beep('C3', 1);
  bs.sleep(1/32);
bs.beep('G3', 1);
  bs.sleep(1/32);
bs.beep('G3', 1);
  bs.sleep(1/32);
bs.beep('D#3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D#3', 1/2);
  bs.sleep(1/32);
bs.beep('C3', 1);
  bs.sleep(1/32);
bs.beep('G3', 1);
  bs.sleep(1/32);
bs.beep('G3', 1);
  bs.sleep(1/32);
bs.beep('D#3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D#3', 1/2);
  bs.sleep(1/32);
bs.beep('C3', 1);
  bs.sleep(1/32);
bs.beep('G3', 1);
  bs.sleep(1/32);
bs.beep('G3', 1);
  bs.sleep(1/32);
bs.beep('D#3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D3', 1);
  bs.sleep(1/32);
bs.beep('D#3', 2);
  bs.sleep(1/32);
*/




// здесь я рассписал азбуку морзе, её обозначение в русском алфавите
/*
MORZE

а	• —
б	— • • •
в	• — —
г	— — •
д	— • •
е	•
ё	•
ж	• • • —
з	— — • •
и	• •
й	• — — —
к	— • —
л	• — • •
м	— —
н	— •
о	— — —
п	• — — •
р	• — •
с	• • •
т	—
у	• • —
ф	• • — •
х	• • • •
ц	— • — •
ч	— — — •
ш	— — — —
щ	— — • —
ъ	— — • — —
ы	— • — —
ь	— • • —
э	• • — • •
ю	• • — —
я	• — • —

*/



var obj = {                               // делаем объект с ключами русскимим буквами, значениями ключей азбукой морзе
    'а': 	'1/2*1',                        // я обозначил 	"•" за короткий сигнал "1/2"  а "—" за длинный "1"
    'б':	'1*1/2*1/2*1/2',
	  'в':  '1/2*1*1',
    'г':  '1*1*1/2',
    'д':  '1*1/2*1/2',
    'е':  '1/2',
    'ё':	'1/2',
    'ж':	'1/2*1/2*1/2*1',
    'з':	'1*1*1/2*1/2',
    'и':  '1/2*1/2',
    'й':  '1/2*1*1*1',
    'к':	'1*1/2*1',
    'л':  '1/2*1*1/2*1/2',
    'м':  '1*1',
    'н':  '1*1/2',
    'о':	'1*1*1',
    'п':	'1/2*1*1*1/2',
    'р':  '1/2*1*1/2',
    'с':  '1/2*1/2*1/2',
    'т':  '1',
    'у':	'1/2*1/2*1',
    'ф':	'1/2*1/2*1*1/2',
    'х':  '1/2*1/2*1/2*1/2',
    'ц':	'1*1/2*1*1/2',
    'ч':	'1*1*1*1/2',
    'ш':  '1*1*1*1',
    'щ':	'1*1*1/2*1',
    'ъ':	'1*1*1/2*1*1',
    'ы':	'1*1/2*1*1',
    'ь':  '1*1/2*1/2*1',
    'э':  '1/2*1/2*1*1/2*1/2',
    'ю':  '1/2*1/2*1*1',
    'я':  '1/2*1*1/2*1'
};


function codingMorze(str, obj) {         // ф-ия принимает строку которую введёт пользователь и объект obj для нахождения соответсвующего кода
  var arr = str.split('');               // парсим строку на отдельные символы
  var mass = [];                         // пустой массив для дальшейшей записи значений

  for (var i = 0; i < arr.length; i++) { // циклом пробегаемся по массиву arr
    for (var key in obj) {               // при итерации на каждом элементе массива сверяем его в нашем объекте obj
      if (key == arr[i]) {               // если введённый символ соответствует ключу из объекта
        mass.push(obj[key]);             // пушим значение объекта в массив, там получается что то типа [[1*1/2*1*1*1/2], [1/2*1/2*1*1/2]]
      }
    }
  }

  for (var j = 0; j < mass.length; j++) { // пробегаемся по получившемуся массиву
    var result = mass[j].split('*');      // j-е значение я спличу по символу * (это если у меня будет на входе "привет мир")
    console.log(result);
    for (var k = 0; k < result.length; k++) { // пробегаюсь по каждому значению одиночного массива - 1 потом 1/2  потом 1/2 потом 1
      bs.beep(400, result[k]);             // на каждом шаге я это значение подставляю в команду bs.beep
			bs.sleep(1/2);
			//console.log(result[k]);
    }
  }
}

codingMorze('хело ворлд', obj);                     // вызываю ф-ию со значениями

bs.write('music.wav');                     // команда записывает полученный результат в файл music.wav