import styled from "styled-components";
import Image from "next/image";
import {TbGridDots} from 'react-icons/tb';

export const AddedIcon= styled(TbGridDots)`
position: absolute;
bottom: -0.5em;
right:0.8em;
z-index:-5;
font-size:35em;
color:#f0dfbc;
`

export const ImageStyle= styled(Image)`
&:hover{
    cursor:pointer;
}
`

export const DownloadWrapper = styled.div`
position:relative;
height:500px;
width:100%;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
`
export const DownloadInfo = styled.div`
height:300px;
max-width:500px;
h2{
   margin-top:0;
   line-height:0.5em;
}
p{
    margin-top:2em;
    font-size:1em;
}
`
export const Icons =styled.div`
`