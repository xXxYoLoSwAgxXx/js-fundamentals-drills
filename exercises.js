module.exports = {
/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
doubleArray: function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2) 
  }
  return result
},

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
sumArrays: function(arr1, arr2){
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    result += arr2[i];
  }
  return result;
},

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
stringCount: function(string) {
  return string.length;
},

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
arrayLength: function(array) {
  return array.length;
},

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
countAll: function(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
},

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
countStrings: function(arr) {
  let arrLengths = [];
  for (let i = 0; i < arr.length; i++) {
    arrLengths.push(arr[i].length);
    
  }
  return arrLengths;
},

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
countAllStrings: function(str) {
  let strLengthsResult = 0;
  for (let i = 0; i < str.length; i++) {
    strLengthsResult += str[i].length;
    
  }
  return strLengthsResult;
},

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
convertToArray: function(obj) {
  let objVal = [];
  for (let i = 0; i < Object.values(obj).length; i++) {
    objVal.push( Object.values(obj)[i] );
  }
  return objVal;
},

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
objectSize: function(obj) {
    return Object.values(obj).length;
},

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
createZeroFilledArray: function(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(0);
  }
  return arr;
},

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
poppedArray: function(arr) {
  return arr.slice(0, arr.length -1);
},

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
splitString: function(str) {
  var arr =[];
  arr = str.split('');
  return arr;
},

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
lengthOfLast: function(str) {
  return str[str.length -1].length;
},

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
sumBelowTen: function(arr) {
  var result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10){
      result += arr[i];
      
    }
    
  }
  return result;
  
},

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
moreThanTenLetters: function(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if(str[i].length > 10){
      arr.push(str[i]);
    }
    
  }
  return arr.length;
},

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
multiplyAll: function(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
    
  }
  return result;
},

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
sumAllPositive: function(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i] > 0){
      result += str[i];
    } 
  }
  return result;
},

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
stringCountBelowThree: function(arr) {
  console.log(arr);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length < 4){
      result.push(arr[i]);
    }
  }
  //console.log(result);
  return result.length;
},

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
countObjects: function(arr) {
  return arr.length;
},

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
getObjectKeys: function(obj) {
  let arr = [];
  for (let i = 0; i < Object.keys(obj).length; i++) {
    arr.push(Object.keys(obj)[i]);
  }
  return arr;
},

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
getObjectValues: function(obj) {
  let arr = [];
  for (let i = 0; i < Object.values(obj).length; i++) {
    arr.push(Object.values(obj)[i]);
  }
  return arr;
},

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
makeObject: function(key, value) {
  console.log(key);
  console.log(value);
  var obj = {}
  obj[key] = value;
  console.log(obj);
  return obj;

},

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
makeObjectReverse: function(value, key) {
    
},

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
tupleToObject: function() {

},

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
tupleToObjectReverse: function() {

},

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
strToKeys: function() {

},

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
getValues: function() {

},

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
getKeys: function() {

},

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
objectToArray: function() {

},

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
arrayToObject: function() {

},

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
arraysToObject: function() {

},

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
objectsToTuples: function() {

},

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
mapArrayValues: function() {

},

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
mapStringCounts: function() {

},

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
arrayToObjectNums: function() {

},

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
stringToKeys: function() {

},

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
charCountMap: function() {

},

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
frequencyMap: function() {

},

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
tupleConvertToObject: function() {

},


/*module.exports = {
  doubleArray: dub(),
  sumArrays: sumArrays, 
  stringCount: null,
  arrayLength: null,
  countAll: null,
  countStrings: null,
  countAllStrings: null,
  convertToArray: null,
  objectSize: null,
  createZeroFilledArray: null,
  poppedArray: null,
  splitString: null,
  lengthOfLast: null,
  sumBelowTen: null,
  moreThanTenLetters: null,
  multiplyAll: null,
  sumAllPositive: null,
  stringCountBelowThree: null,
  countObjects: null,
  getObjectKeys: null,
  getObjectValues: null,
  makeObject: null,
  makeObjectReverse: null,
  tupleToObject: null,
  tupleToObjectReverse: null,
  strToKeys: null,
  getValues: null,
  getKeys: null,
  objectToArray: null,
  arrayToObject: null,
  arraysToObject: null,
  objectsToTuples: null,
  mapArrayValues: null,
  mapStringCounts: null,
  arrayToObjectNums: null,
  stringToKeys: null,
  charCountMap: null,
  frequencyMap: null,
  tupleConvertToObject: null
  }*/
}