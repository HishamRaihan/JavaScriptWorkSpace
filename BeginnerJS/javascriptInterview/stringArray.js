function alternativeCase(string) {
  let output = "";
  for (var i = 0; i < string.length; i++) {
    if (i % 2 != 0) {
      output += string[i].toUpperCase();
    }
    else {
      output += string[i].toLowerCase();
    }
  }
  return output;
}
console.log(alternativeCase(['t','o','d','a','y']));
