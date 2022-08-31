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
    scroll-behavior: smooth;
    @media only screen and (max-width:53em) {
        font-size:62.5%;
    }
    @media only screen and (max-width:35em) {
        font-size:50%;
    }
}


body{
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.primary};
    min-width: 375px;
font-family:'Biotif',Helvetica,Arial, Helvetica, sans-serif;
font-weight: 400;
line-height:1.6;
transition: all .5s linear;
}

img{
width:100%;
display: block;
object-fit:cover;
}

a{
    color:inherit;
    text-decoration: none;
}

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

ul{
    list-style: none;
}


`;

export default GlobalStyles;
