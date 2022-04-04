import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
    padding:0;
    margin: 0;
    box-sizing:inherit ;
}
html{
    font-size: 62.5%;
    box-sizing: border-box;
//=================================
    scroll-behavior: smooth;
    @media only screen and (min-width:87.5em) {
        font-size:82.5%;
        
    }
    @media only screen and (max-width:87.5em) {
        font-size:68.75%;
        
    }
    @media only screen and (max-width:72.5em) {
        font-size:62.5%;
        
    }
    /* @media only screen and (max-width:53em) {
        font-size:62.5%;
        
    } */
    @media only screen and (max-width:35em) {
        font-size:50%;
        
    }
}


body{
    overflow-x: hidden;
// because the background color are same at full page
    background-color: ${({ theme }) => theme.primary};


font-family:'Biotif',Helvetica,Arial, Helvetica, sans-serif;
font-weight: 400;
line-height:1.6;
/* color:${({ theme }) => theme.textColor}; */

// why we need to set this at body??????????????????
transition: all .5s linear;
}

img{
    //do we have div for every img???? why width:100%;
width:100%;
display: block;
object-fit:cover;

}

a{
    color:inherit;
    text-decoration: none;
}

// why is this? do we need?
h1,h2,h3,h4{
    font-family:'Bogart', Helvetica, Arial, sans-serif;
    font-weight:500;
}


a,
button,
h6,
input,
li,
p{
    font-family: 'Biotif', Helvetica, Arial, sans-serif;
}

::selection{
    background:#e2e8ff ;
    color:#00199b
}

li{
    list-style: none;
}


/* #__next{
    display:grid;
    grid-template-columns: 1fr repeat() 1fr;


} */

`;

export default GlobalStyles;
