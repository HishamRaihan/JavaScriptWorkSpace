const login = (email, password) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email && password) {
				resolve({
					id: Date.now(),
					name: 'hisham',
					email: 'hisham@gmail.com'
				});
			} else {
				reject('Email and password are required');
			}
		}, 1000);
	});

const loadUserProfile = (user) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if (user) {
				resolve({
					profileId: 'some id',
					img: 'http//image..'
				});
			} else {
				reject('User is Required');
			}
		}, 1000);
	});

const loadProfilePost = (profile) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if (profile) {
				resolve([
					{
						id: 1,
						title: 'My Post'
					},
					{
						id: 2,
						title: 'My Other Post'
					}
				]);
			} else {
				reject('Profile is Required');
			}
		}, 1000);
	});

  // every then call returns a new promise that either resolves or rejects after the cb executes
login('hisham@gmail.com', 'hisham123')
	.then(user => loadProfilePost(user))
	.then(profile => loadProfilePost(profile))
	.then(post => console.log(post))
  // error handler catches all the errors and logs the respective error message
	.catch(err => console.log(err))

  