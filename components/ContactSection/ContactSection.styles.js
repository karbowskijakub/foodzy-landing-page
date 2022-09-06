import { icons } from "react-icons"
import styled from "styled-components"
import {AiFillInstagram,AiFillTwitterSquare,AiFillFacebook,AiFillLinkedin} from 'react-icons/ai'
export const ContactWrapper = styled.div`
height:500px;
width:100%;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
background:#f0dfbc;
gap:6em;
`
export const FirstContact =styled.div`
max-width:500px;

text-align:left;
h1{

}
p{
    font-size:1em;
    line-height:1.5em;
}

`
export const SecondContact =styled.div`
line-height:2.2em;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
h2{
    margin-bottom:1.8em;
`

export const IconsContainer = styled.div`
font-size:2.5em;
cursor:pointer;

`

export const InstagramIcon =styled(AiFillInstagram)`
`;
export const TwitterIcon = styled(AiFillTwitterSquare)`
margin-right:0.3em;
`;
export const FacebookIcon = styled(AiFillFacebook)`
margin-right:0.3em;
`;
export const LinkedinIcon = styled(AiFillLinkedin)`
margin-right:0.3em;

`