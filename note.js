/*
1.
create GlobalStyles and should be inseted as self close tag  <GlobalStyles />

2. 
very import and werid bug i have run into.
 @  got an error as below：
 Full Error: Error: Element type is invalid: expected a string (for built-in components)
 or a class/function (for composite components) but got: undefined. You likely forgot to
 export your component from the file it's defined in, or you might have mixed up default
 and named imports.

 @ because i just      import {Link} from "next/link"   but  the correct versio 
 should be             import Link from "next/link"


 @@  we extend style based on another component using styled-components we should pass className as props.




 //:not   :nth-child   :last-child  are all target to the element base on it's parent element


==================================Q&A==========================================
1. why we need to set scrool-behaviour:smooth at html
2.// Toggle icon size is control by font-size and html tag by media query. but it seems like i can onyl
//control size at html instead of in this component?????

Simple:

 div > p
affects only direct children.

 div p
affects grandchildren, grandgrandchildren etc. as well. (Won't make a difference in your example)

The child selector isn't supported by IE6.








*/
