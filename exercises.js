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

// ---------------------
// Define a function that takes two arrays and returns true if they have 
// identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------

Array1 = [1, 2, 3, 4];
Array2 = [4, 3, 2, 1];
Array3 = [5, 6, 7, 8];
Array4 = [4, 0, 1, 9];


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

compareArrays(Array1, Array2);
compareArrays(Array3, Array4);







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
