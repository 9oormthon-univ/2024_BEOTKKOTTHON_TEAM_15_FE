import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Main>
			<div>이용문의 : Notice.official@gmail.com</div>
			<div>Copyright ⓒ가정통신문 All rights reserverd.</div>
		</Main>
	);
};

export default Footer;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  padding-top: 4rem;
  padding-bottom: 3rem;
`;
