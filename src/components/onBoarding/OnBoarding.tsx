'use client';

import React from 'react';
import styled from 'styled-components';

const OnBoarding = () => {
	return (
		<Wrapper>
			<Container>
				<TextWrapper>
					<Text>가정통신문에 오신 것을 환영합니다!</Text>
					<Ask>OOO님은 가정통신문을 어떻게 활용하실 예정인가요?</Ask>
				</TextWrapper>
				<BtnWrapper>
					<Btn>리더</Btn>
					<Btn>멤버</Btn>
				</BtnWrapper>
			</Container>
			<Character alt={'ch'} src={'/img/PaperMan.png'} />
		</Wrapper>
	);
};

export default OnBoarding;

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
	padding: 10rem 35rem;
	gap: 10rem;
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

const BtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Btn = styled.div`
	padding: 4rem 10rem;
	border-radius: 12px;
	background-color: #f4e6c8;
	font-size: 2rem;
	border: 1px solid whitesmoke;
	cursor: pointer;
`;

const Character = styled.img`
	width: 28%;
	min-width: 300px;
	position: absolute;
	top: 13rem;
	right: 25rem;
`;
