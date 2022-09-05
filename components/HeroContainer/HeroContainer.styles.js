import styled from 'styled-components'

export const HeroWrapper = styled.div`

display:flex;
align-items:center;
justify-content: space-around;
width:100%;
height:100vh;
`;


export const InformationsWrapper = styled.div`
width:1000px;
height:500px;
background-color: rgb(255, 251, 241, 0.5);
z-index:5;
border-radius:15px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding:1em 4em;
backdrop-filter: blur(10px);
h6{
 margin-bottom:0;
font-size: 1.5em;
    color:rgb(254, 115, 92);
}
h2{
    margin-top:0;
  font-size:3em;
}
h1{
    font-size:4em;
}
p{
    font-size:1.2em;
}

`

export const Button = styled.div`
position:relative;
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


