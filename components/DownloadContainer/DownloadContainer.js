import React from 'react'
import { DownloadWrapper,DownloadInfo,Icons } from './DownloadContainer.styles'
import Image from 'next/image'
import { ImageStyle } from './DownloadContainer.styles'
const DownloadContainer = () => {
  return (
    <DownloadWrapper>
    <DownloadInfo>
<h2>Get Food With Foodzy</h2>
<h2>Download The App</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate in lacus sit amet tincidunt. Donec accumsan eget leo et posuere. Phasellus finibus ac sapien non varius.</p>
<Icons>
<ImageStyle src={require('../../assets/google-play.png')} alt='logo' width={240} height={80} />
<ImageStyle src={require('../../assets/app-store.png')} alt='logo' width={240} height={80} />
</Icons>
    </DownloadInfo>
    </DownloadWrapper>
  )
}

export default DownloadContainer