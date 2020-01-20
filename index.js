var kittens = ['Milo', 'Otis', 'Garfield']

function removeFirstKitten() {
  return kittens.slice(1)
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function appendKitten(name) {
  return kittens.concat(name)
}
function prependKitten(name) {
  return [name, ...kittens]
}


function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}