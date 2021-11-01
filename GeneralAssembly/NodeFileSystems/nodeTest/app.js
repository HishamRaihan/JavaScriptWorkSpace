const FS = require('fs')


// FS.readFile('calc.js', 'utf8', (e, data) => {
// 	if (e) console.error(e);
// 	console.log(data);
// });

// FS.writeFile('calc2.js', 'console.log("Hello Friends!")', function(error){
//   if(error) console.error(error);
//   console.log('Data Saved!');
// })
// FS.appendFile('calc.js', 'console.log("Hello Friends!")', function(error){
//   if(error) console.error(error);
//   console.log('Data Saved!');
// })
FS.unlink('calc2.js', function(error){
  if (error) console.error(error);
  console.log('Deleted');
})