import React from 'react'
import { Service,Services,ServiceWrapper,AddedIcon } from './ServiceComponent.styles'
import Image from 'next/image'
const ServiceComponent = () => {
	return (
		<ServiceWrapper>
            <AddedIcon/>
			<Services>
				<Service>
                <Image src={require('../../assets/pizza-share.png')} objectFit='cover' quality={100} /> 
                <h2>Best Offer in Town</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at dui ut mauris lacinia pretium in at orci. Suspendisse potenti. Pellentesque dapibus suscipit est</p>
                </Service>
				<Service>
                <Image src={require('../../assets/delievery.png')} objectFit='cover' quality={100} /> 
                <h2>Fast Delievery</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at dui ut mauris lacinia pretium in at orci. Suspendisse potenti. Pellentesque dapibus suscipit est</p>
                </Service>
				<Service>
                <Image src={require('../../assets/pizza-sharing.png')} objectFit='cover' quality={100} /> 
                <h2>Quality Food</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at dui ut mauris lacinia pretium in at orci. Suspendisse potenti. Pellentesque dapibus suscipit est</p>
                </Service>
			</Services>
		</ServiceWrapper>
	)
}

export default ServiceComponent
