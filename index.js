const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Name){
    cats.push(Name)
}
function destructivelyPrependCat(Name){
    cats.unshift(Name);
}
function  destructivelyRemoveLastCat(Name){
    cats.pop();
}
function destructivelyRemoveFirstCat(Name){
    cats.shift();
}
function appendCat(Name){
    const copyofcats= [... cats]
    copyofcats.push(Name) 
    return copyofcats;
}
function  prependCat(Name){
    const copyofcats= [... cats]
    copyofcats.unshift(Name)
    return copyofcats;
}
function removeLastCat(Name){
    const copyofcats= [... cats]
    copyofcats.pop();
    return copyofcats;
}
function removeFirstCat(Name){
    const copyofcats= [... cats]
    copyofcats.shift();
    return copyofcats;
}