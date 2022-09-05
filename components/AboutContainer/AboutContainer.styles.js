import styled from "styled-components";
import {TbGridDots} from 'react-icons/tb'

export const AddedIcon= styled(TbGridDots)`
position: absolute;
left:0.5em;
right:0.5em;
font-size:25em;
z-index:50;
color:#f0dfbc;
`
export const AboutWrapper = styled.div`
height:800px;
width:100%;

display:flex;
align-items:center;
justify-content:center;

`
export const AboutInfo = styled.div`
height:700px;
width:1200px;

display:flex;
align-items:center;
gap: 3em;


`
export const ImageContainer = styled.div`

`
export const InfoContainer = styled.div`
max-width:500px;
`