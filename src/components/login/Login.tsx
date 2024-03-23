'use client';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Logo from '../common/Logo';
import { useRouter } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userDeviceAtom, userEmailAtom, userNameAtom } from '@/app/recoilContextProvider';
import { login } from '@/apis/login';

const Login = () => {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const [isSignupFailed, setIsSignupFailed] = useState(false);
	const deviceToken = useRecoilValue(userDeviceAtom);
	const setUserName = useSetRecoilState(userNameAtom);
	const setEmail = useSetRecoilState(userEmailAtom);
	const router = useRouter();

	const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
	};

	const handlePwChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPw(e.target.value);
	};

	const body = {
		email: id,
		password: pw,
		token: deviceToken,
	};

	const onClick = async () => {
		if (id === '') {
			alert('ID를 입력해주세요');
		} else if (pw === '') {
			alert('PW를 입력해주세요.');
		} else {
			const result = await login(body);
			if (result) {
				setUserName(result.data.result.username);
				setEmail(result.data.result.email);
				router.push('/home');
			} else {
				setId('');
				setPw('');
			}
		}
	};

	return (
		<Wrapper>
			<TitleWrapper>
				<Logo />
				<Explain>대학생들의 효율적인 의사소통을 위해</Explain>
			</TitleWrapper>
			<DivisionWrapper>
				<div>회원가입</div>
				<div>|</div>
				<div className="select">로그인</div>
			</DivisionWrapper>
			<SignupWrapper>
				<Input value={id} onChange={handleIdChange} placeholder="ID를 입력해주세요!" />
				<Input value={pw} onChange={handlePwChange} placeholder="PW를 입력해주세요!" type="password" />
			</SignupWrapper>
			<CheckWrapper>
				<LoginBtn onClick={onClick}>로그인</LoginBtn>
			</CheckWrapper>
		</Wrapper>
	);
};

export default Login;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-align: center;
	background-color: #fff5e0;
`;

const TitleWrapper = styled.div`
	width: 50%;
`;

const Explain = styled.div`
	font-size: 2rem;
	font-weight: bold;
	color: #8b5e3c;
`;

const SignupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;

const DivisionWrapper = styled.div`
	display: flex;
	gap: 1rem;
	font-size: 1.5rem;
	div {
		font-weight: bold;
		color: grey;
	}
	.select {
		color: black;
	}
`;

const Input = styled.input`
	width: 400px;
	padding: 1.4rem 2rem;
	font-size: 16px;
	border-radius: 30px;
	background-color: #f4e6c8;
	border: 1px solid #f4e6c8;
	outline: none;
`;

const CheckWrapper = styled.div`
	width: 350px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;

const LoginBtn = styled.div`
	width: 80px;
	text-align: center;
	padding: 1rem 1rem;
	border: 1px solid #4f7b59;
	border-radius: 2.5rem;
	font-size: 1.5rem;
	color: #4f7b59;
	&:hover {
		color: white;
		background-color: #4f7b59;
	}
	cursor: pointer;
`;
