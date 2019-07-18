var kittens=["Milo","Otis","Garfield"];
function destructivelyAppendKitten(name){
  return kittens.push(name);
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten(name){
  c=[...kittens,name]
  return c
}
function prependKitten(name){
  c=[name,...kittens]
  return c
}