const userLeft = false
const userWatchingCatMeme = true

function watchCallBackTutorial(callBack, errorCallBack){
  if(userLeft){
    errorCallBack({
      name: 'User Left',
      message : 'Im Sad'
    })
  } else if(userWatchingCatMeme){
    errorCallBack({
      name: 'User Watching Cat Meme',
      message: 'Wayels butthole < Cat'
    })
  }else {
    callBack('Thumbs Up ma Brotha!')
  }
}
watchCallBackTutorial((message) => {
  console.log('Success: ' + message);
}, (error) => {
  console.log(error.name + ' ' + error.message);
})