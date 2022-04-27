//Exercise #1 Sum all numbers in a range

function sumAll(arr) {
    var start = Math.min(arr[0], arr[1]);
    var end = Math.max(arr[0], arr[1]);
    var total = 0;

    for (var i=start; i<=end; i++) {
        total += i;
    }
    return total;
}

sumAll([15, 50]);

// Exercise #2 Seek and Destroy
function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    for(var i = 0; i <arr.length; i++){
      for(var j = 0; j < args.length; j++){
        if(arr[i] === args[j]){
          delete arr[i];
        }
      }
    }
  return arr.filter(Boolean);
  
    }
    
    destroyer([4, 5, 3, 1, 10, 3], 4, 2, 3);



    // Exercise #3 Pig Latin

    function translatePigLatin(str) {
   
        let consonantRegex = /^[^aeiou]+/;
      
        let myConsonants = str.match(consonantRegex);
      
        return myConsonants !== null ? str.replace(consonantRegex, '').concat(myConsonants).concat('ay') : str.concat('way')
        }
        
        translatePigLatin("Almost Friday and time to party");


