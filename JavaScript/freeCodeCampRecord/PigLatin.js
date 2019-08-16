// This is for
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
  let arr = str.split('');
  console.log(arr);
  let firstPart = [];
  let secondPart = [];
  let vowArr = ['a','e','i','o','u']
  if(vowArr.includes(arr[0])){
    return str+'way';
  }
  for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
    if (vowArr.includes(arr[i])) {
      console.log("break now! arr[i] is:",arr[i])
      for (let j=i;j<arr.length;j++) {
        secondPart.push(arr[j]);
      }
      console.log('2nd part is:',secondPart)
      break;
    }
    else {
      firstPart.push(arr[i])
      console.log("This is moved:",firstPart)
    }
  }
  let combineStr = secondPart.join('')+firstPart.join('')+"ay"
  console.log('result is:',combineStr);


  return combineStr;
}

// translatePigLatin("consonant");
// translatePigLatin("california")
translatePigLatin("algorithm")