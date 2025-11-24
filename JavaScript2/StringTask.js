let myname = "     Aisha       Qarout   ";

console.log("Trim:", myname.trim());
console.log("TrimStart:", myname.trimStart());
console.log("TrimEnd:", myname.trimEnd());
console.log("PadStart :",myname.padStart(30,"*"));
console.log("PadEnd :",myname.padEnd(30,"*"));
console.log("CharAt :",myname.charAt(8));
console.log("CharCodeAt :",myname.charCodeAt(8));
console.log("split :",myname.split(" ",8));
console.log("Length :",myname.length);
console.log("slice :",myname.slice(5,10));
console.log("substring :",myname.substring(5,10));
console.log("substr :",myname.substr(8,1));
console.log("replace :",myname.replace("A","Q"));
console.log("replaceAll :",myname.replaceAll("a","0"));
console.log("UpperCase :",myname.toLocaleUpperCase());
console.log("LowerCase :",myname.toLocaleLowerCase());
console.log("concat :",myname.concat("789"));
console.log("IndexOf :",myname.indexOf("A"));
console.log("LasIndexOf :",myname.lastIndexOf("a"));
console.log("search :",myname.search("t"));
console.log("match :", myname.match(/a/gi));

let matches = myname.matchAll(/a/gi);
console.log([...matches].map(m => m[0]));

console.log("includes :",myname.includes("Aisha"));
console.log("startsWith :",myname.startsWith("A"));
console.log("endsWith :",myname.endsWith("A"));


/*
Method	  Parameters	          Negative index	    Notes           
slice	  slice(start, end)	      ✅ yes	           End is exclusive
substring	substring(start, end)	❌ no	      End is exclusive, swaps start/end if needed
substr	   substr(start, length)	    ✅ yes	       Second parameter = length

*/


/*
Method	           Returns	                               Notes
match()  	       Array of matches / null	               Quick and simple
matchAll()	       Iterator of match objects	           Gives positions and more detailed info

Tip:

Use match() if you only need the matches.

Use matchAll() if you also need index positions of matches.

*/


/*

Method	    Returns	           Purpose	              Modifies original?
split() 	array	   Break string into substrings	       ❌ No
slice()	    string	   Extract substring by indexes	       ❌ No

*/
