export function isbn13(str) {
  // Check whether the input is a string if not
  // return early
  if (typeof str !== "string") {
    alert("Wrong input");
    return;
  }

  //  RESEARCHES:
  // https://isbn-information.com/convert-isbn-10-to-isbn-13.html
  // https://isbn-information.com/the-10-digit-isbn.html

  // We use the String.split() method to convert the string
  // characters into an array where each character of the
  // string is an element in the new array
  // We convert the string to an array and store it in the
  // "arr" variable in order to be able to iterate over the
  // each of the elements/characters and make the math
  // computation needed to verify the validity of the isbn

  // We also initiate the total variable with a zero
  // The total variable is useful below to make the
  // total computation that will be used to be divided
  // by 10 or 11 as per the resource below on verifying isbns

  // RESEARCH MADE: The following two resources provide elaborate
  // instructions on the mathematics and steps to follow to
  // verify whether an isbn10 or isbn13 is a valid one or invalid
  // respectively
  // https://isbn-information.com/the-10-digit-isbn.html
  //  https://isbn-information.com/the-13-digit-isbn.html
  //
  const arr = str.split("");
  let total = 0;

  // The code inside this if statement only runs for isbn10
  // numbers. Hence it is only relevant when the length of the
  // array is 10 characters/elements long or less
  if (arr.length < 11) {
    // we check if the last digit (the check digit) is an "X"
    // if thats the case, then assign it the value of 10
    // it is therefore accessed at index 9 since it is zero-based
    // index. Inline with the resources on isbn10. If the last
    // check digit is an "X" then it represents the value 10
    // https://isbn-information.com/the-10-digit-isbn.html

    // We then assign the value of 10 to the last digit
    // before the loop through the digits and multiply
    // by the numbers that are denoted by "j" in the looping
    // function below (for loop). In line with the resource above
    // on verifying isbn10 numbers we loop through and and
    // multiply each element (i) with j where j starts at 10 and
    // the value of j is reduced by 1 on each iteration hence the
    // next iteration the i is multiplied by 9, then 8 and so on.
    if (arr[9] === "X") {
      arr[9] = 10;

      // We run the for loop as explained above where i
      // represents each element and j is the factor we multiply
      // with that starts with 10 and reduces by one on each
      // iteration as explained above
      for (let i = 0, j = 10; i < arr.length; i++, j--) {
        const currentMult = arr[i] * j;
        total += currentMult;
      }
    }

    // If the last digit does not include the value "X"
    // then no re-assignment is being made to the last check
    // digit. There we just run the loop where we multiply
    // i with j and each iteration and add to the total
    // variable
    for (let i = 0, j = 10; i < arr.length; i++, j--) {
      const currentMult = arr[i] * j;
      total += currentMult;
    }

    // Now checking the validity
    // We apply the modulus operator to the total to
    // check whether the remainer is zero if we divide the
    // total by the number 11.
    // If the remainder is zero, it means the isbn10 is a
    // valid isbn10 hence we follow through the next step
    // which is to convert it to an isbn13
    if (total % 11 === 0) {
      // Now converting the valid isbn 10 to isbn13
      // Attach the three numbers "9,7,8" to the beginning
      // of the array and use the spread syntax to spread the
      // digits from the initial array after the these three
      // digits that define an isbn13
      let updatedArr = [9, 7, 8, ...arr];

      // Now, we loop through the numbers 0 to 10 in order to
      // change the value of the checking digit (the last digit)
      // in order to be ensure that the new isbn13 is a valid one.
      // This is inline with the conversion instructions for
      // an isbn10 to isbn13 as per the resource below
      // https://isbn-information.com/convert-isbn-10-to-isbn-13.html
      for (let i = 0; i < 10; i++) {
        //now make the test for isbn13 like below and test each
        //of the last numbers to be the indexes

        //The last element in an ISBN13 is accessed through index
        // 12 since we start at 0 for zero-based indexes
        updatedArr[12] = i;
        const isValidOrNot = testingForISBN13(updatedArr);

        // If any of the numbers returns a "Valid" result
        // when tested for isbn13 validity when it is added
        // at the end as a checking digit then we return
        // the entire string as the new isbn13 in line with
        // the instructions for the task. We use the Array.join()
        // method here to convert the array to a string without
        // having any commas (",") in between each character
        if (isValidOrNot === "Valid") {
          return updatedArr.join("");
        }
      }
    } else {
      return "Invalid";
    }

    // The else statement below is run if the input string
    // provided by the user has more than 10 digits hence
    // potentially an isbn13. We call the testingForISBN13()
    // custom method we have created in order to test and
    // return whether it is a valid or invalid
  } else {
    const isValidOrNot = testingForISBN13(arr);
    return isValidOrNot;
  }
}

// ISBN13 TESTING FUNCTION

// We call this function to test for isbn13
// we pass in the array of string characters that we want to
// test as the argument
function testingForISBN13(arr) {
  // We define the total variable in order to be used
  // to make the addition in the looping function
  // below
  let total = 0;

  // We loop through the array and multiply by either 1 or 3
  // depending on whether the number is on the even or odd place
  // in the arrangment of the characters in the array

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      const currentMult = arr[i] * 1;
      total += currentMult;
    } else {
      const currentMult = arr[i] * 3;
      total += currentMult;
    }
  }

  // Now checking the validity of the ISBN13
  // We check for the validity by dividing the total
  // by the number 10
  if (total % 10 === 0) {
    return "Valid";
  } else {
    return "Invalid";
  }
}
