import React from 'react'
import { AboutWrapper, AboutInfo ,ImageContainer, InfoContainer, AddedIcon} from './AboutContainer.styles'
import Image from 'next/image'
import { Button } from '../Button/Button'
const AboutContainer = () => {
	return (
		<AboutWrapper>
            <AddedIcon/>
			<AboutInfo>
                <ImageContainer>
            <Image src={require('../../assets/mockup.png')} alt='logo' width={600} height={612} />
            </ImageContainer>
            <InfoContainer>
            <h1>Best Offer Town</h1>
            <p>Pellentesque ullamcorper dolor diam, quis viverra mi pretium ut. Quisque nisi nisl, rutrum sed metus mollis, molestie viverra nibh. Fusce bibendum diam sit amet nibh aliquam, quis scelerisque eros pellentesque. Donec viverra commodo ligula non aliquet. Aenean scelerisque elementum sapien sed suscipit.</p>
            <Button>Explore More</Button>
            </InfoContainer>
            </AboutInfo>
		</AboutWrapper>
	)
}

export default AboutContainer
