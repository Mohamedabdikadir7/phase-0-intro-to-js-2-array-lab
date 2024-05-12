// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
 
  cats.push(name); 
}

function destructivelyPrependCat(name) {
 
    cats.unshift(name); 
  }

  function destructivelyRemoveLastCat(name) {
 
    cats.pop(name); 
  }

  function destructivelyRemoveFirstCat(name) {
 
    cats.shift(name); 
  }

  function appendCat(name) {
  
    const newCats = [...cats, name];
  
  }

  function appendCat(name) {
  
    const newCats = [...cats, name];
    return newCats;
  }
  const newCats = [...cats, "Arnold", "Milo", "Otis", "Garfield"];

  function prependCat(name) {
 
    return [name, ...cats];
  }
  
  function removeLastCat() {
    // Create a new array containing all cats except the last one
    const newCats = cats.slice(0, -1);
    return newCats;
  }
  function removeFirstCat() {
    // Create a new array containing all cats except the last one
    const newCats = cats.slice(1);
    return newCats;
  }
  