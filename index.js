// Code your solution in this file.

// lowerCaseDrivers takes in an array as argument and converts each element in the array to lower-case non-destructively (i.e. using map)
function lowerCaseDrivers(arr) {
  return arr.map(function (element) {
    return element.toLowerCase();
  });
};

// nameToAttributes takes an array of drivers with their first and last name separated by a space, and returns an array of JS objects with firstName and lastName attributes
function nameToAttributes(arr) {
  return arr.map(function (element) {
    const elementFirstName = element.split(' ')[0];
    // splits string by space and grabs first element
    const elementLastName = element.split(' ')[1];
    // splits string by space and grabs second element
    return {
      firstName: elementFirstName,
      lastName: elementLastName
    };
  })
};

function attributesToPhrase(arr) {
  return arr.map(function (element) {
    return `${element.name} is from ${element.hometown}`;
  });
};
