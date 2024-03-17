import React from 'react';
import styled from 'styled-components';

const Logo = () => {
	return <Title alt={'Logo'} src={'/img/Landing.png'} />;
};

export default Logo;

const Title = styled.img`
	width: 35%;
	min-width: 32rem;
	padding: 2rem 0rem;
`;
