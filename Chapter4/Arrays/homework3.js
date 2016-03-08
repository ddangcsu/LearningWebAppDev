// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
/*globals _:false */

var main = function () {
    "use strict";

    var msg;    // Temp variable to build result message
    var msgArray; // array of result messages
    var myArray; // array of test data

    // Exercise 1 - Function to return average from a number array
    function exercise1(arr) {
        var sum = 0;
        arr.forEach(function (item) {
            sum += item;
        });
        return sum / arr.length;
    }

    // Exercise 2 - Function to return largest number from a number array
    function exercise2(arr) {
        var largest = Number.MIN_VALUE;
        arr.forEach(function (item) {
            if (item > largest) {
                largest = item;
            }
        });
        return largest;
    }

    // Exercise 2 - Rewritten using underscore.js library
    function _exercise2(arr) {
        return (_.max(arr));
    }

    // Refactoring function to check if an item is even
    function isEven(elt) {
        return (elt % 2 === 0);
    }

    // Exercise 3 - Function to return true if array contains at least 1 even
    function exercise3(arr) {
        return arr.some(isEven);
    }

    // Exercise 3 - Rewritten using underscore.js library
    function _exercise3(arr) {
        return (_.some(arr, isEven));
    }

    // Exercise 4 - function to return true if every number is even in array
    function exercise4(arr) {
        return arr.every(isEven);
    }

    // Exercise 4 - Rewritten using underscore.js library
    function _exercise4(arr) {
        return (_.every(arr, isEven));
    }

    // Exercise 5 - function to check if a word contain in array
    function arrayContains(arr, str) {
        var result = arr.some(function (item) {
            return (item === str);
        });
        return result;
    }

    // Exercise 6 - function to check if a word appear 2 times in array
    function arrayContainsTwo(arr, str) {
        var count = 0;

        arr.forEach(function (item) {
            if (item === str) {
                count += 1;
            }
        });

        if (count >= 2) {
            return true;
        } else {
            return false;
        }
    }

    function arrayContainsThree(arr, str) {
        var count = 0;

        arr.forEach(function (item) {
            if (item === str) {
                count += 1;
            }
        });

        if (count >= 3) {
            return true;
        } else {
            return false;
        }
    }

    function arrayContainsNTimes(arr, str, times) {
        var count = 0;

        arr.forEach(function (item) {
            if (item === str) {
                count += 1;
            }
        });

        if (count >= times) {
            return true;
        } else {
            return false;
        }
    }

    function addResult(arr) {
        var $content = $("<div class=\"result\">");

        arr.forEach(function (item) {
            $content.append($("<p>").text(item));
        });
        $(".container").append($content);
    }

    /*
      The section below is the execution of all the functions against various
      array and append the result to the DOM with the help of jQuery
    */

    // Execute exercise 1
    myArray = [5, 4, 6, 7, 3, 2, 8, 9, 1];
    msgArray = [];
    msgArray.push("Exercise 1");
    msg = "The average of array : [" + myArray.toString();
    msg += "] is " + exercise1(myArray);
    msgArray.push(msg);
    addResult(msgArray);

    // Execute exercise 2
    msgArray = [];
    msgArray.push("Exercise 2");
    msg = "The largest number in array : [" + myArray.toString();
    msg += "] is " + exercise2(myArray);
    msgArray.push(msg);
    addResult(msgArray);

    // Execute exercise 3
    msgArray = [];
    msgArray.push("Exercise 3");
    msg = "Array: [" + myArray.toString();
    msg += "] contains least 1 even is: " + exercise3(myArray);
    msgArray.push(msg);
    myArray = [1, 3, 5, 7, 9];
    msg = "Array: [" + myArray.toString();
    msg += "] contains at least 1 even is: " + exercise3(myArray);
    msgArray.push(msg);
    addResult(msgArray);

    // Execute exercise 4
    myArray = [2, 4, 6, 8, 10];
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
    msg += arrayContainsThree(myArray, "c");
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

    msg = "arrayContainsNTimes: contains letter \"d\" 0 times: ";
    msg += arrayContainsNTimes(myArray, "d", 0);
    msgArray.push(msg);
    addResult(msgArray);

    // Execute exercise 2 re-written with underscore library
    msgArray = [];
    msgArray.push("Exercise 2 with Underscore");
    myArray = [5, 4, 6, 7, 3, 2, 8, 9, 1];
    msg = "Largest number in array: [" + myArray.toString() + "] is ";
    msg += _exercise2(myArray);
    msgArray.push(msg);
    addResult(msgArray);

    // Execute exercise 3 re-written with underscore library
    msgArray = [];
    msgArray.push("Exercise 3 with Underscore");
    myArray = [5, 4, 6, 7, 3, 2, 8, 9, 1];
    msg = "Array: [" + myArray.toString() + "] contains at least one even: ";
    msg += _exercise3(myArray);
    msgArray.push(msg);
    myArray = [1, 3, 5, 7, 9];
    msg = "Array: [" + myArray.toString() + "] contains at least one even: ";
    msg += _exercise3(myArray);
    msgArray.push(msg);
    addResult(msgArray);

    // Execute exercise 4 re-written with underscore library
    myArray = [2, 4, 6, 8, 10];
    msgArray = [];
    msgArray.push("Exercise 4 with Underscore");
    msg = "Array : [" + myArray.toString();
    msg += "] contains all even number is: " + _exercise4(myArray);
    msgArray.push(msg);
    myArray.push(7);
    msg = "Array: [" + myArray.toString();
    msg += "] contains all even number is: " + _exercise4(myArray);
    msgArray.push(msg);
    addResult(msgArray);

};

$(document).ready(main);
