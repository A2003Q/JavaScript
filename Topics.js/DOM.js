/*
DOM = Document Object Model

When the browser loads an HTML page, it transforms it into a JavaScript object.

This object is structured like a tree (parent → child → child…).

JavaScript can use this tree to:
✔ Read HTML
✔ Change HTML
✔ Add or remove elements
✔ Change style (CSS)
✔ React to user events (click, input…)

The DOM makes the webpage interactive.
The DOM (Document Object Model) was created and standardized by the W3C (World Wide Web Consortium).


       Question	                                                  Answer
Is DOM a copy of HTML?	                            ✔️ Yes, a live browser-created model
Does JS modify the original HTML file?	            ❌ No
If JS edits the DOM, do changes stay forever?	    ❌ Only until you reload
Is ID the only way to edit HTML?	                ❌ Many ways exist


 **Before the DOM existed:

Every browser (Netscape, Internet Explorer) had its own way of reading HTML.

JavaScript could not reliably edit web pages.

There was no standard way to access elements in a page.

So W3C created the DOM to:

Give one standard model for browsers

Allow JavaScript to read and modify web pages

Build dynamic and interactive websites

**The browser takes the HTML file and parses (reads) it.
While reading, it creates a JavaScript object model of the entire page.

This object model = the DOM.

**Every element becomes an object in JavaScript ,Each HTML element becomes a node object.
*The DOM organizes these objects in a hierarchy, like a family tree.
**document → root of the DOM.







*/