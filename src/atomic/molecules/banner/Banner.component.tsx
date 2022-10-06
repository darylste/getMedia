import React from 'react';
import './Banner.styles.scss';

import Spacer from '../../atoms/spacer/Spacer.component';
import Text from '../../atoms/text/Text.component';

const Banner: React.FC = () => {
	return (
		<>
			<div className='banner'>
				<Text varient='h1'>What We Do</Text>
				<Spacer top='md'></Spacer>
				<div className='banner-content'>
					<div className='left'>
						<Spacer right='md'>
							<img className='hero-img' src='./team.svg' alt='team icon' />
						</Spacer>
					</div>
					<div className='right'>
						<Text varient='body'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
							id volutpat lacus laoreet non curabitur gravida. Nullam eget felis
							eget nunc lobortis. Sed risus ultricies tristique nulla aliquet
							enim tortor at auctor. In pellentesque massa placerat duis
							ultricies. Vitae tempus quam pellentesque nec nam aliquam sem. Eu
							augue ut lectus arcu. Euismod lacinia at quis risus sed.
						</Text>
						<Spacer top='xs' />
						<Text varient='body'>
							Ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut
							placerat orci nulla pellentesque dignissim enim sit amet. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Urna id
							volutpat lacus laoreet non curabitur gravida. Nullam eget felis
							eget nunc lobortis.
						</Text>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
