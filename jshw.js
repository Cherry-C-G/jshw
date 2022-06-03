// 1.We have an object storing salaries of our team
// letsalaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let value in salaries) {
  sum += salaries[value];
}


console.log(`Total salaries: ${sum}`)

// 2. Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2
// // before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// multiplyNumeric(menu);
// // after the call
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

function multiplyNumeric(obj) {
  for (let element in obj) {
    if (typeof obj[element] == 'number') {
      obj[element] *= 2;
    }
  }
}
// multiplyNumeric(obj);
// console.log(obj);

// 3.Write a function checkEmailId(str) that returns true if str contains '@' and ‘.’,
//  otherwise false. Make sure '@' must come before '.' and there must be some characters between '@' and '.'
//  The function must be case-insensitive:


//  function checkEmailId(str){
//       let str1 = 'aBc@def.g/\+';
// if (str1.test(str)) {
//     return true;
//  }else{
//      return false;
//  }
// }
// let test1 ="c1@hotmail.com"
// console.log(checkEmailId(test1));

// let test2="c1.hotmail@com"
// console.log(checkEmailId(test2));

function validateEmail(Value){      
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailPattern.test(Value); 
 } 

 let Value = 'abc@gamil.com';
 validateEmail(Value);
console.log(Value);


// 4.Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength
// –replaces the end of str with the ellipsis character "...", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te..."
// truncate("Hi everyone!", 20) = "Hi everyone!"
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

// 5.Let’s try 5 array operations.
// Create an array styles with items “James” and “Brennie”.
// Append “Robert” to the end
// Replace the value in the middle by “Calvin”. Your code for finding the middle value should work for any arrays with odd length.
// Remove the first value of the array and show it.
// Prepend Rose and Regal to the array.

// James, Brennie
// James, Brennie, Robert
// James, Calvin, Robert
// Calvin, Robert
// Rose, Regal, Calvin, Robert


let arr=['James, Brennie']
console.log(...arr);
arr.push("Robert");
console.log(...arr);

function replaceMid(arr, name){
    let size = arr.length;
    if (size %2 ==1){
        arr[size/2|0]=name;
    }
}
replaceMid(arr, "Calvin");
console.log(...arr);

arr.shift();
console.log(...arr);

arr.unshift("Rose","Regal");
console.log(arr.join(', '));


let styles = ["James, Brennie"];
styles.push("Robert");
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Calvin";
console.log(styles);
console.log( styles.shift() );
console.log(styles);
styles.unshift("Rose", "Regal");
console.log(styles);