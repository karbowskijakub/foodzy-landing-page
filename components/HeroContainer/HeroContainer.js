import Image from 'next/image'
import { HeroWrapper, InformationsWrapper } from './HeroContainer.styles'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './HeroContainer.styles'

const HeroContainer = () => {
	return (
		<>
			<HeroWrapper>
				<Image src={require('../../assets/background.png')} layout='fill'  quality={100} />
				<Image src={require('../../assets/onBg.png')} alt='logo' layout='fill' objectFit='cover' quality={100} />

				<motion.div
					initial={{ scale: 0 }}
					animate={{ rotate: 360, scale: 1 }}
					transition={{
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}>
					<Image src={require('../../assets/phone.png')} alt='logo' width={500} height={612} />
				</motion.div>
				<motion.div
					className='box'
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.8,
						delay: 0.5,
						ease: [0, 0.71, 0.2, 1.01],
					}}>
					<InformationsWrapper>
						<h6>F o o d z y</h6>
						<h2>Get Your Food In</h2>
						<h1>Foodzy</h1>
						<p>
						Foodzy is a Polish quick-commerce start-up founded in Warsaw in 2022. It is an on-demand courier service that purchases, picks up, and delivers products ordered through its mobile app.
						</p>
						<Button >Download App</Button>
					</InformationsWrapper>
				</motion.div>
			</HeroWrapper>
		</>
	)
}

export default HeroContainer
