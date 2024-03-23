'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { userNameAtom } from '@/app/recoilContextProvider';
import { useMediaQuery } from 'react-responsive';

const OnBoarding = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 590px)' });
	const userName = useRecoilValue(userNameAtom);
	const router = useRouter();

	const onLeader = () => {
		router.push('/onBoarding/leader');
	};

	const onMember = () => {
		router.push('/onBoarding/member');
	};
	return (
		<Wrapper>
			<Container>
				<TextWrapper>
					<Text>가정통신문에 오신 것을 환영합니다!</Text>
					<Ask>{userName}님은 가정통신문을 어떻게 활용하실 예정인가요?</Ask>
				</TextWrapper>
				<BtnWrapper>
					<Btn onClick={onLeader}>리더 👑</Btn>
					<Btn onClick={onMember}>멤버 🧑‍🤝‍🧑</Btn>
				</BtnWrapper>
			</Container>
			{isMobile ? '' : <Character alt={'ch'} src={'/img/PaperMan.png'} />}
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
	gap: 10rem;
	margin-top: 7%;
	margin-left: 20%;
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
	cursor: pointer;
	box-shadow: 1px 1px 0px 0px black;
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
