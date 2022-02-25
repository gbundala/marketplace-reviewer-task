export function isbn13(str) {
  // Check whether the input is a string if not
  // return early
  if (typeof str !== "string") {
    alert("Wrong input");
    return;
  }

  //   TODO: INCLUDE RESEARCHES
  // https://isbn-information.com/convert-isbn-10-to-isbn-13.html
  // https://isbn-information.com/the-10-digit-isbn.html

  //
  const arr = str.split("");
  let total = 0;

  if (arr.length < 11) {
    //check if the last digit (the check digit) is an "X"
    //if thats the case, then assign it the value of 10
    //it is therefore accessed at index 9 since it is zero-based index
    if (arr[9] === "X") {
      arr[9] = 10;

      //see how best to refactor this
      for (let i = 0, j = 10; i < arr.length; i++, j--) {
        const currentMult = arr[i] * j;
        total += currentMult;
        console.log(arr[i]);
        console.log(total);
      }
    }

    for (let i = 0, j = 10; i < arr.length; i++, j--) {
      const currentMult = arr[i] * j;
      total += currentMult;
      console.log(arr[i]);
      console.log(total);
    }

    //Now checking the validity
    if (total % 11 === 0) {
      // Attach the three numbers at the beginning
      let updatedArr = [9, 7, 8, ...arr];
      for (let i = 0; i < 10; i++) {
        //now make the test for isbn13 like below and test each
        //of the last numbers to be the indexes

        //The last element in an ISBN13 is accessed through index 12
        updatedArr[12] = i;
        const isValidOrNot = testingForISBN13(updatedArr);
        if (isValidOrNot === "Valid") {
          return updatedArr.join("");
        }
      }
    } else {
      return "Invalid";
    }
  } else {
    const isValidOrNot = testingForISBN13(arr);
    return isValidOrNot;
  }
}

function testingForISBN13(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      const currentMult = arr[i] * 1;
      total += currentMult;
    } else {
      const currentMult = arr[i] * 3;
      total += currentMult;
    }
  }

  //Now checking the validity of the ISBN13
  if (total % 10 === 0) {
    return "Valid";
  } else {
    return "Invalid";
  }
}
