// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

let array1 = [];

function newArray1(string, i) {
    for (let j = 0; j < i; j++) {
        // console.log(array.splice(0, 0, string));
        array1.push(string);
    }
    // return array
    console.log(array1);
}

newArray1('Holy', 3);


// -----------------------------------------------


function myFunction(str, i) {
    const result = [];

    for (let j = 0; j < i; j++) {
        result.push(str);
    }

    return result;
}

// -----------------------------------------------


const myFunction = (str, i) {
    return Array.from({ length: i }, function () {
        return str;
    });
}


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

let array2 = ['a', 'b', 'c', 'd'];

function revArray() {
    let yarra2 = array2.slice().reverse();
    // return yarra2;
    console.log(array2);
    console.log(yarra2);
}

revArray();

// -----------------------------------------------

function reverseArray(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.unshift(arr[i]);
    }
    return result;
}



// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

let arrayOriginal = ['', 1, 0, 'true']

function removeFalseys(array3) {
    let newArray = [];

    arrayOriginal.forEach(element => {
        console.log("Item before if check", element);
        if (element != '' || null || undefined || NaN || 0 || false) {
            console.log("Taking out item", element);
            newArray.push(element);
        }
    });

    console.log("newArray", newArray);
    return newArray;
}

removeFalseys(arrayOriginal);


// -----------------------------------------------


function removeFalseyValues(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}
// If statements are naturally testing for true conditions, be mindful to remember that.

// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object 
// composed of properties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------

const bigArray = [['name', 'Charlie'], ['color', 'brown'], ['age', '10']];

function makeObject(bigArray) {
    let newObject = Object.fromEntries(bigArray);
    console.log(newObject);
    return newObject;
};

makeObject(bigArray);



// -----------------------------------------------

const bigArray = [['name', 'Charlie'], ['color', 'brown'], ['age', '10']];

function createObj(arr) {
    const result = {};

    for (i = 0; i < arr.length; i++) {
        result[arr[i][0] = arr[i][1]];
    }
    return result;
}

// -----------------------------------------------



// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

originalArray = [1, 2, 3, 4, 5, 4, 3];

function removeDuplicates(originalArray) {
    const uniqueSet = new Set(originalArray);
    const backToArray = [...uniqueSet];
    console.log('backToArray', backToArray);
};

removeDuplicates(originalArray);


// -----------------------------------------------

function removeDuplicates(arr) {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i];
    }
    return Array.from(Object.values(obj));
}

// -----------------------------------------------

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// ---------------------
// Define a function that takes two arrays and returns true if they have 
// identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

idArray1 = [1, 2, 3, 4];
idArray2 = [4, 3, 2, 1];
idArray3 = [5, 6, 7, 8];
idArray4 = [4, 0, 1, 9];


function identicalArrays(firstArray, secondArray) {
    console.log(firstArray);
    console.log(secondArray);

    console.log(`I'm in the function.`);
    if (firstArray == secondArray) return true;
    if (firstArray == null || secondArray == null) return false;
    if (firstArray.length !== secondArray.length)
        return false;
    // var what = (firstArray.forEach((val, index) => val === secondArray[index]));
    // find something to compare regardless of order

    for (var i = 0; i < firstArray.length; ++i) {
        if (firstArray[i] !== secondArray[i]) return false;
    }

};

var result1 = identicalArrays(idArray1, idArray2);
console.log("Result 1", result1)
var result2 = identicalArrays(idArray3, idArray4);
console.log("Result 2", result2)



// -----------------------------------------------

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    arr1.sort(function (a, b) {
        return a - b;
    });
    arr2.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    // arr1.sort();
    // arr2.sort();
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
