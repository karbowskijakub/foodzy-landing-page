import React from 'react'
import { ContactWrapper, FirstContact, SecondContact,IconsContainer,TwitterIcon,InstagramIcon,FacebookIcon,LinkedinIcon } from './ContactSection.styles'
import Link from 'next/link'
const ContactSection = () => {
	return (
		<ContactWrapper>
			<FirstContact>
				<h1>Foodzy</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique massa nec nulla mollis, dictum
					fermentum urna porttitor.
				</p>
<IconsContainer>
    <TwitterIcon/>
    <LinkedinIcon/>
    <FacebookIcon/>
    <InstagramIcon/>
</IconsContainer>
			</FirstContact>
			<SecondContact>
				<h2>Links</h2>
				<Link href='/'>Overview</Link>
				<Link href='/'>Social Media</Link>
				<Link href='/'>Contact</Link>
			</SecondContact>
            <SecondContact>
			<h2>Company</h2>
			<Link href='/'>Overview</Link>
			<Link href='/'>Social Media</Link>
			<Link href='/'>Contact</Link>
			</SecondContact>
		</ContactWrapper>
	)
}

export default ContactSection
