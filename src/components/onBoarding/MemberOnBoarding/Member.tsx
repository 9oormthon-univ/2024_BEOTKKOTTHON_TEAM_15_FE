'use client';

import React from 'react';
import styled from 'styled-components';
import GroupCard from './GroupCard';

const Member = () => {
	return (
		<Wrapper>
			<Container>
				<TextWrapper>
					<Text>OOO멤버님 환영합니다</Text>
					<Ask>OOO님이 속한 그룹은 어디인가요?</Ask>
				</TextWrapper>
				<div>ㅇㅇ</div>
				<GroupCard />
			</Container>
			<Character alt={'ch'} src={'/img/PaperMan.png'} />
		</Wrapper>
	);
};

export default Member;

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	background: linear-gradient(to bottom, #93613b 50%, #fff5e0 50%);
`;

const Container = styled.div`
	width: 37rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 10rem;
	margin-top: 7%;
	margin-left: 15%;
	@media (max-width: 1200px) {
		margin-top: 13%;
		margin-left: 10%;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	color: white;
`;

const Text = styled.div`
	font-size: 2rem;
`;

const Ask = styled.div`
	font-size: 3rem;
`;

const Character = styled.img`
	width: 30%;
	min-width: 300px;
	position: absolute;
	top: 13rem;
	right: 25rem;
	@media (max-width: 1200px) {
		top: 20rem;
		right: 2rem;
	}
`;
