/*3. Write a function that takes a number (a) as argument
Split a into its individual digits and return them in an array.*/

function splitToDigit(a) {
    return (a + "").split("").map((i) => {
      return Number(i);
    });
  }
  
 