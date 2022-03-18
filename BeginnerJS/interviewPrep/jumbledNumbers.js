process.stdin.resume();
process.stdin.setEncoding('utf8');

var stdin = '';
process.stdin.on('data', function (chunk) {
  stdin += chunk;
}).on('end', function () {
  var lines = stdin.trim().split('\n');
  for (var i = 0; i < lines.length; i++) {
    process.stdout.write(lines[i]);
  }
});

function jumble(str) {
  let number = '';
  // making the numbers into individual array
  let zero = ['z', 'e', 'r', 'o']
  let one = ['o', 'n', 'e']
  let two = ['t', 'w', 'o']
  let three = ['t', 'h', 'r', 'e', 'e']
  let four = ['f', 'o', 'u', 'r']
  let five = ['f', 'i', 'v', 'e']
  let six = ['s', 'i', 'x']
  let seven = ['s', 'e', 'v', 'e', 'n']
  let eight = ['e', 'i', 'g', 'h', 't']
  let nine = ['n', 'i', 'n', 'e']

  while (str.length !== 0) {
    if (contains(str, zero)) {
      str = removes(str, zero)
      number += '0'
      continue
    } else if (contains(str, one)) {
      str = removes(str, one)
      number += '1'
      continue
    } else if (contains(str, two)) {
      str = removes(str, two)
      number + '2'
      continue
    } else if (contains(str, three)) {
      str = removes(str, three)
      number += '3'
      continue
    } else if (contains(str, four)) {
      str = removes(str, four)
      number += '4'
      continue
    } else if (contains(str, five)) {
      str = removes(str, five)
      number += '5'
      continue
    } else if (contains(str, six)) {
      str = removes(str, six)
      number += '6'
      continue
    } else if (contains(str, seven)) {
      str = removes(str, seven)
      number += '7'
      continue
    } else if (contains(str, eight)) {
      str = removes(str, eight)
      number += '8'
      continue
    } else if (contains(str, nine)) {
      str = removes(str, nine)
      number += '9'
      continue
    }
  }
  return number
}

function contains(str, arr) {
  for (let i = 0; i < arr.length; i++) {//spelling the word loop
    for (let j = 0; j < str.length; j++) {//jumbled string loop
      if (!str.includes(arr[i])) {

        return false// letter does not exist
      } else {
        // we have found a letter
        break;
      }
    }
  }
  return true
}


function removes(str, arr) {
  for (let i = 0; i < arr.length; i++) {
    str = str.replace(arr[i], '')
  }
  return str
}

console.log(jumble('zeonineshefitngrrheieonenevetsvxeioe'))

// 