const userLeft = true;
const userWatchingCatMeme = false;

function watchPromiseTutorial() {
	return new Promise((resolve, reject) => {
		if (userLeft) {
			reject({
				name: 'User Left',
				message: 'Im Sad'
			});
		} else if (userWatchingCatMeme) {
			reject({
				name: 'User Watching Wayel Memes',
				message: 'Wayels butthole < Cat'
			});
		} else {
			resolve('Thumbs Up ma Brotha!');
		}
	});
}

watchPromiseTutorial()
	.then((message) => {
		console.log('Success: ' + message);
	})
	.catch((error) => {
		console.log(error.name + ' ' + error.message);
	});
console.log('Anything');