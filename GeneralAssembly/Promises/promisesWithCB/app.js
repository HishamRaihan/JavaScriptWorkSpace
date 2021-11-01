const login = (email, password, successCB, failureCB) => {
	setTimeout(() => {
		if (email && password) {
			successCB({
				id: Date.now(),
				name: 'hisham',
				email: 'hisham@gmail.com'
			});
		} else {
			failureCB('Email and password are required');
		}
	}, 1000);
};

const loadUserProfile = (user, successCB, failureCB) => {
  	setTimeout(() => {
      if(user){
        successCB({
          profileId: 'some id',
          img: 'http//image..'
        })
      }else{
        failureCB('User is Required')
      }
    }, 1000)
};

const loadProfilePost = (profile, successCB, failureCB) =>{
setTimeout(()=>{
if(profile){
  successCB([
    {
      id: 1,
      title: 'My Post'
    },
    {
      id: 2,
      title: 'My Other Post'
    }
  ])
}else{
  failureCB('Profile is Required')
}
},1000)
}

login('hisham@gmail.com', 'hisham123', user => {
		loadUserProfile(user, profile => {
			loadProfilePost( profile, posts => {
					console.log(posts);
				},err => {
					console.log(err);
				});
	}, err => {
		console.log(err);
	}, err => {
		console.log(err);
	})
})