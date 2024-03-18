'use client';

import React from 'react';
import styled from 'styled-components';
import Btn from './Btn';
import Logo from '../common/Logo';
import { useRouter } from 'next/navigation';

const Landing = () => {
	return (
		<Wrapper>
			<TitleWrapper>
				<Logo />
				<Explain>우리의 더 효율적인 의사소통</Explain>
			</TitleWrapper>
			<BtnWrapper>
				<Btn routerName="login" text="로그인하기" />
				<Btn routerName="signup" text="회원가입하기" />
				<TermsWrapper>
					<div>서비스이용약관</div>
					<div>|</div>
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
	width: 90%;
`;

const Explain = styled.div`
	font-size: 2.5rem;
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
