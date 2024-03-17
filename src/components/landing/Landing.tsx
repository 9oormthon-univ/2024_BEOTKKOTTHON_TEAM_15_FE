'use client';

import React from 'react';
import styled from 'styled-components';
import Btn from './Btn';

const Landing = () => {
	return (
		<Wrapper>
			<TitleWrapper>
				<Title1 alt={'title'} src={'/img/Group.png'} />
				<Title2>우리의 더 효율적인 의사소통</Title2>
			</TitleWrapper>
			<BtnWrapper>
				<Btn text="로그인하기" />
				<Btn text="회원가입하기" />
				<TermsWrapper>
					<div>서비스이용약관</div>
					<div>개인정보처리방침</div>
				</TermsWrapper>
			</BtnWrapper>
		</Wrapper>
	);
};

export default Landing;

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-align: center;
	background-color: #fff5e0;
`;

const TitleWrapper = styled.div`
	width: 100%;
`;

const Title1 = styled.img`
	width: 30%;
	min-width: 330px;
	padding: 2rem;
`;

const Title2 = styled.div`
	font-size: 2.8rem;
	font-weight: bold;
`;

const BtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2.3rem;
`;

const TermsWrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	gap: 2rem;
`;
