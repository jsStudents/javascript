/*
Array searching
 */


const array = ["Try", "to", "find", "me", "!"];

// -includes()- method. It returns true if an array includes a certain value, otherwise it returns false
console.log(array.includes("find")); // true

/*find() method, which returns the first element it finds in the array, that satisfies the provided callback function.
 If no element meets the condition, undefined is returned.
 */
const projects = [{name: "To-Do App", lang: "JS"}, {name: "Website", lang: "HTML"}];
console.log(projects.find(e => e.lang === "JS")); // {name: "To-Do App", lang: "JS"}

/* -findIndex()- method is similar to the previous one: it also accepts a callback function, but instead it returns
the index of the first element in the array that satisfies it. Otherwise, it returns -1.
 */
console.log(projects.findIndex(e => e.lang === "HTML")); // 1
console.log(projects.findIndex(e => e.lang === "C")); // -1

/*indexOf() method returns the first index of an element that equals a certain value. If the element does not exist in
the array, the method returns -1.
 */
const languages = ["HTML", "CSS", "JS", "Python", "JS"];

console.log(languages.indexOf("JS")); // 2
console.log(languages.indexOf("English")); // -1

/*
lastIndexOf() method, that searches the array in the opposite direction. It returns the last index of an element
 */
console.log(languages.lastIndexOf("JS")); // 4
console.log(languages.lastIndexOf("JS", 3)); // 2
console.log(languages.lastIndexOf("JS", 1)); // -1