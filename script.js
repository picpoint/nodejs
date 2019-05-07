const fs = require('fs');

const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

switch (command) {
	case 'list':
		list();
		break;

	case 'view':
		view(title, function (err, note) {
			if (err) {
				throw new Error('Error to view ... ');
			} else {
				console.log(`${note.title} ${note.content}`);
			}
		});
		break;

	case 'create':
		create(title, content, function (error) {
			if (error) {
				throw new Error('Error to create title ... ');
			} else {
				console.log('Note is create!!!');
			}
		});
		break;

	case 'remove':
		remove(title, function (error) {
			if (error) {
				throw new Error('NOT REMOVE NOTE');
			} else {
				console.log('note is remove');
			}
		});
		break;

	default:
		console.log('Unknow command ...');
		break;
}


function list () {
	fs.readFile('node.json', function (err, data) {
		if (err) {
			console.error('Error to reading file');
		} else {
			const notes = JSON.parse(data);
			notes.forEach(function (item, i, notes) {
				console.log(`${i + 1}. ${item.title}`);
			});
		}
	});
}


function view (title, done) {
	fs.readFile('node.json', function (err, data) {
		if (err) {
			console.error('Error to reading file');
		} else {
			const notes = JSON.parse(data);
			const note = notes.find(function (note) {
				if (note.title === title) {
					console.log(title);
				}
			});
		}
	});
}



function create (title, content, done) {
	fs.readFile('node.json', function (err, data) {
		if (err) {
			console.error('Error to reading file');
		} else {
			const notes = JSON.parse(data);
			notes.push({title, content});
			const json = JSON.stringify(notes);
			fs.writeFile('node.json', json, function (error) {
				if (error) {
					throw new Error('FAILED TO WRITE ...');
				} else {
					console.log('note is succesfully create');
				}
			});
		}
	});
}



function remove (title, done) {
	fs.readFile('node.json', function (err, data) {
		if (err) {
			console.error('Error to reading file');
		} else {
			let notes = JSON.parse(data);
			notes = notes.filter(function (note) {
				if (note.title !== title) {
					return note;
				}
			});
			const json = JSON.stringify(notes);
			fs.writeFile('node.json', json, function (error) {
				if (error) {
					throw new Error('FAILED TO REMOVE ...');
				} else {
					console.log('note is succesfully remove');
				}
			});
		}
	});
}