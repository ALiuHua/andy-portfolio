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

3. context can also transfer ref variant.
4. sometimes that we may attached eventHandler multiples and not remove every time which can cause bug.
we can check this out by print added and remove to checking.
5. we want click the downArrow to scroll down, but the footer covered the icon. what can we do
to solve this? we use position to make footer height collpase.
6.
const scrollToViewHandler = () => {
    //to resolve the problem that we got fixed header cover the scroll view.
    // contentRef.current.scrollIntoView({ behavior: "smooth" });
    window.scroll(0, contentRef.current.offsetTop - 112);
  };
4. if we want to re-use some component but need to re-init some state when it's re-render(not re-mounte)
we normally need two handlers to make it. like one click handler when this handler happen we init state 
and other useEffect can handle following state change. in this project it's delay message loader. i try to 
make message loader self-iso at first but couldn't happen because i can't init state just useEffect
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
