var animal = `dog`

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = `cat`
  return animal
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
}

myAnimal()
yourAnimal()

function add2(n) {
  n += 2
  return n
  // Feel free to move things around!
}
add2()

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}
// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk = funkyFunction()()
console.log(theFunk)
