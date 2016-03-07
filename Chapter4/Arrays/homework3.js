var main = function () {

  // Exercise 1 - Function to return average from a number array
  var exercise1 = function(arr) {
    var size = arr.length,
      sum = 0,
      i = 0;
    for (; i < size; i++) {
      sum += arr[i];
    }
    return sum/size;
  },

  // Exercise 2 - Function to return largest number from a number array
  exercise2 = function(arr) {
    var size = arr.length,
      i = 0,
      largest = Number.MIN_VALUE;

    for (; i < size; i++) {
      if ( arr[i] > largest ) {
        largest = arr[i];
      }
    }

    return largest;
  },

  // Exercise 3 - Function to return true if array contains at least 1 even
  exercise3 = function(arr) {
    var size = arr.length,
      i = 0;

    for (; i < size; i++) {
      if ( arr[i] % 2 === 0 ) {
        return true;
      }
    }

    return false;
  },

  // Exercise 4 - function to return true if every number is even in array
  exercise4 = function(arr) {
    var size = arr.length,
      i = 0;

    for (; i < size; i++) {
      if ( arr[i] % 2 !== 0 ) {
        return false;
      }
    }

    return true;
  },

  // Exercise 5 - function to check if a word contain in array
  arrayContains = function(arr, str) {
    var size = arr.length,
      i = 0;

    for (; i < size; i++ ) {
      if ( arr[i] === str ) {
        return true;
      }
    }
    return false;

  },

  // Exercise 6 - function to check if a word appear 2 times in array
  arrayContainsTwo = function(arr, str) {
    var size = arr.length,
      i = 0,
      count = 0;

    for (; i < size; i++ ) {
      if ( arr[i] === str ) {
        count++;
      }
      if (count === 2) {
        return true;
      }
    }
    return false;

  },

  arrayContainsThree = function(arr, str) {
    var size = arr.length,
      i = 0,
      count = 0;

    for (; i < size; i++ ) {
      if ( arr[i] === str ) {
        count++;
      }
      if (count === 3) {
        return true;
      }
    }
    return false;

  },

  arrayContainsNTimes = function (arr, str, times) {
    var size = arr.length,
      i = 0,
      count = 0;

    for (; i < size; i++ ) {
      if (arr[i] === str) {
        count++;
      }
    }

    if (count === times) {
      return true;
    } else {
      return false;
    }

  },

  addResult = function(arr){
    var $content = $("<div class=\"result\">"),
      i = 0,
      size = arr.length;

    for (; i < size; i++) {
      $content.append( $("<p>").text( arr[i] ) );
    }
    $(".container").append($content);

  },

  msg, msgArray, myArray;

  // Execute exercise 1
  myArray = [5,4,6,7,3,2,8,9,1];
  msgArray = [];
  msgArray.push("Exercise 1");
  msg = "The average of array : [" + myArray.toString();
  msg +="] is " + exercise1(myArray);
  msgArray.push(msg);
  addResult(msgArray);

  // Execute exercise 2
  msgArray = [];
  msgArray.push("Exercise 2");
  msg = "The largest number in array : [" + myArray.toString();
  msg +="] is " + exercise2(myArray);
  msgArray.push(msg);
  addResult(msgArray);

  // Execute exercise 3
  msgArray = [];
  msgArray.push("Exercise 3");
  msg = "Array: [" + myArray.toString();
  msg += "] contains least 1 even is: " + exercise3(myArray);
  msgArray.push(msg);
  myArray = [1,3,5,7,9];
  msg = "Array: [" + myArray.toString();
  msg += "] contains at least 1 even is: " + exercise3(myArray);
  msgArray.push(msg);
  addResult(msgArray);

  // Execute exercise 4
  myArray = [2,4,6,8,10];
  msgArray = [];
  msgArray.push("Exercise 4");
  msg = "Array : [" + myArray.toString();
  msg += "] contains all even number is: " + exercise4(myArray);
  msgArray.push(msg);
  myArray.push(7);
  msg = "Array: [" + myArray.toString();
  msg += "] contains all even number is: " + exercise4(myArray);
  msgArray.push(msg);
  addResult(msgArray);

  // Execute exercise 5
  myArray = ["hello", "world", "david"];
  msgArray = [];
  msgArray.push("Exercise 5");
  msg = "Array: [" + myArray.toString();
  msg += "] contains the word \"world\" is: " + arrayContains(myArray, "world");
  msgArray.push(msg);
  msg = "Array: [" + myArray.toString();
  msg += "] contains the word \"goodbye\" is: " + arrayContains(myArray, "goodbye");
  msgArray.push(msg);
  addResult(msgArray);

  // Execute exercise 6
  myArray = ["a", "b", "a", "c", "a"];
  msgArray = [];
  msgArray.push("Exercise 6");
  msgArray.push("Array: [" + myArray.toString() + "]");
  msg = "arrayContainsTwo: contains letter \"a\" at least twice: ";
  msg += arrayContainsTwo(myArray, "a");
  msgArray.push(msg);

  msg = "arrayContainsTwo: contains letter \"b\" at least twice: ";
  msg += arrayContainsTwo(myArray, "b");
  msgArray.push(msg);

  msg = "arrayContainsThree: contains letter \"a\" at least 3 times: ";
  msg += arrayContainsThree(myArray, "a");
  msgArray.push(msg);
  msg = "arrayContainsThree: contains letter \"c\" at least 3 times: ";
  msg +=arrayContainsThree(myArray, "c");
  msgArray.push(msg);

  msg = "arrayContainsNTimes: contains letter \"a\" at least 3 times: ";
  msg += arrayContainsNTimes(myArray, "a", 3);
  msgArray.push(msg);

  msg = "arrayContainsNTimes: contains letter \"a\" at least 2 times: ";
  msg += arrayContainsNTimes(myArray, "a", 2);
  msgArray.push(msg);

  msg = "arrayContainsNTimes: contains letter \"a\" at least 4 times: ";
  msg += arrayContainsNTimes(myArray, "a", 4);
  msgArray.push(msg);

  msg = "arrayContainsNTimes: contains letter \"b\" at least 2 times: ";
  msg += arrayContainsNTimes(myArray, "b", 2);
  msgArray.push(msg);

  msg = "arrayContainsNTimes: contains letter \"b\" at least 1 times: ";
  msg += arrayContainsNTimes(myArray, "b", 1);
  msgArray.push(msg);

  msg = "arrayContainsNTimes: contains letter \"c\" 0 times: ";
  msg += arrayContainsNTimes(myArray, "c", 0);
  msgArray.push(msg);

  msg = "arrayContainsNTimes: contains letter \"d\" 0 times: ";
  msg += arrayContainsNTimes(myArray, "d", 0);
  msgArray.push(msg);

  addResult(msgArray);

};

$(document).ready(main);
