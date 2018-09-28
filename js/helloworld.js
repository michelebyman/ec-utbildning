console.log("Hello world!");
console.log(2*2);
var mynumber = 5;
console.log (mynumber);
console.log (mynumber -3);
console.log (mynumber *3)
var x = 5;
if (x === 3) {
console.log ("test");
}
else {
  console.log ("fel")
}

var i = 20;
while (i > 0) {
  console.log ("hello world");
  i--;
}

var i = 1;
var s = 0;
while (i < 10) {
  console.log(i);
  s += i;
  i += 2;
}
// console.log (s)


//ex 1
function isBetween(x, from, to) {
  return (x > from && x < to)
}
console.log(isBetween(10, 0, 20))
console.log(isBetween(10, 15, 20))
console.log(isBetween(100, 0, 20))

// ex 2
function isBetween(x, from, to) {
  if (x > from) {
    if (x < to)
    return true;
  }
  return false;
}
console.log(isBetween(10, 0, 20))
console.log(isBetween(10, 15, 20))
console.log(isBetween(100, 0, 20))

//ny function- range

function range(from, to) {
  var i;
  var a = [];
  for (i = from; i < to; i++) {
    a.push(i);
  }

  return a;
}

console.log('range');
console.log(range(2, 10)); // 2, 3, 4, ..., 9


//-ny fuktion- min

function min(a, b) {
  if (a < b) {
    return a;
  }

  return b;
}

console.log('min');
console.log(min(20, 10)); // 10
console.log(min(10, 20)); // 10

//-ny function --

function getFirstLetters(myString) {
  var words = myString.split(' ');

  var rv = [];
  var i;
  for (i = 0; i < words.length; i += 1) {
    var c = words[i].charAt(0);
    rv.push(c);
  }

  return rv;
}

console.log('getFirstLetters');
console.log(getFirstLetters('I love JavaScript'));
