import styled from "styled-components";
import {TbGridDots} from 'react-icons/tb'

export const AddedIcon= styled(TbGridDots)`
position: absolute;
top:0.5em;
right:0.5em;
font-size:19em;
z-index:50;
color:#f0dfbc;
`

export const ServiceWrapper = styled.div`
position:relative;
height:600px;
width:100%;
background: #fff;
display:flex;
align-items:center;
justify-content:center;
`
export const Services = styled.div`
width:1400px;
height:500px;
display:flex;
flex-direction:row;
justify-content:space-around;

`

export const Service = styled.div`
max-width:300px;
height:200px;
font-size: 10px;
h2{
    font-size:2.5em;
    margin-top:0;
}
p{
    font-size:1.6em;
}
`
