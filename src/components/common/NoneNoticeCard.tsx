import React from 'react';
import styled from 'styled-components';

const NoneNoticeCard = ({ text }: { text?: string }) => {
	return (
		<Main>
			<Logo src="/img/nothingLogo.png" />
			<Text>{text}</Text>
		</Main>
	);
};

export default NoneNoticeCard;

const Main = styled.div`
	width: 100%;
	height: 30rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fff5e0;
	border-radius: 20px;
	border: 3px solid #c9bca2;
    gap: 0.5rem;
`;

const Logo = styled.img`
	height: 40%;
`;
const Text = styled.div`
	font-weight: 600;
	font-size: 1.8rem;
`;
