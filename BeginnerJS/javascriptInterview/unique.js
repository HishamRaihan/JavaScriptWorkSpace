function isUnique(str) {
  return new Set(str).size == str.length;
}
console.log(isUnique('hisham'));
console.log(isUnique('Hisham'));
console.log(isUnique('Raihan'));
console.log(isUnique('wow'));
