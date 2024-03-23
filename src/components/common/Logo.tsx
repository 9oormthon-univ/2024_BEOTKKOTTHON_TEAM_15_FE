import React from 'react';
import styled from 'styled-components';

const Logo = () => {
	return <Title alt={'Logo'} src={'/img/Group.png'} />;
};

export default Logo;

const Title = styled.img`
	width: 18%;
	min-width: 22rem;
	padding: 1rem 0rem;
`;
