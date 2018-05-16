var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var element = ['foo'];

function addElementToBeginningOfArray(element, chocolateBars){
  return [chocolateBars, ...element];
}

function destructivelyAddElementToBeginningOfArray(element, chocolateBars){
  chocolateBars.unshift(element)
  return [chocolateBars]
}

function addElementToEndOfArray(){
  
}

function destructivelyAddElementToEndOfArray(){
  
}
