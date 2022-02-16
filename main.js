
  "use strict";

 var str = prompt("Enter any string") ;

 var tag = prompt( "Enter tag name");


function wrapTages(someStr, selectedTag) {

     var newStr = `<${selectedTag}> ${someStr} </${selectedTag}>`
     
        return newStr
    }
     
var res = wrapTages(str,tag)
console.log(res)



