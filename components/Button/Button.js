import styled from 'styled-components'


 export const Button = styled.div`
position:relative;
display:flex;
items-align:center;
justify-content:center;
cursor:pointer;
border-radius:5px;
padding:1em 2em;
background-color: #b45241;
color: #fff;
font-weight:bold;
font-size:15px;
margin-top:0.5em;
border:none;
overflow:hidden;
z-index:5;
max-width:177px;

&::before{
    content: '' ;
    position:absolute;
    top:0;
    left:0;
    right:-50px;
    border-bottom: 100px solid red;
    transform:translateX(-100%);
    transition:transform 0.5s linear;
    border-right:50px solid transparent;
    z-index:-1;
 
}
&:hover::before{
    transform: translateX(0);

}
`
