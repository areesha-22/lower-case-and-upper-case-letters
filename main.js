"use strict";
// lower case
console.log("lowercase:", person_name.toLowerCase());
//uppercase
console.log("UPPERCASE:", person_name.toUpperCase());
//titelcase
console.log("titelcase:", person_name.replace(/\bw/g, c => c.toUpperCase()));
