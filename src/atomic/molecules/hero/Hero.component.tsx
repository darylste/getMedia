import React from 'react';
import './Hero.styles.scss';

import Text from '../../atoms/text/Text.component';
import Search from '../../atoms/search/Search.component';
import Spacer from '../../atoms/spacer/Spacer.component';

const Hero: React.FC = () => {
	return (
		<>
			<Spacer top='sm' bottom='md' left='md' right='md'>
				<section className='hero'>
					<div className='left'>
						<Text varient='h1'>Find your favourites with GetMedia</Text>

						<Spacer top='xs' bottom='xs'>
							<Text varient='body'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
								id volutpat lacus laoreet non curabitur gravida. Nullam eget
								felis eget nunc lobortis. Sed risus ultricies tristique nulla
								aliquet enim tortor at auctor. In pellentesque massa placerat
								duis ultricies. Vitae tempus quam pellentesque nec nam aliquam
								sem. Eu augue ut lectus arcu. Euismod lacinia at quis risus sed.
								Ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce
								ut placerat orci nulla pellentesque dignissim enim sit amet.
							</Text>
						</Spacer>
						<Search />
					</div>
					<div className='right'>
						<img className='hero-img' src='/music.svg' alt='' />
					</div>
				</section>
			</Spacer>
		</>
	);
};

export default Hero;
