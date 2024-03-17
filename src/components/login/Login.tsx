import { useState } from 'react';
import '@styles/commonStyle.css';
import { kakaoURL } from './loginInfo';
import styled from 'styled-components';

const Login = ({ where }: { where: string }) => {
	const handleLogin = () => {
		if (typeof window !== 'undefined') {
			window.location.href = kakaoURL;
		}
	};

	// let content: string = '카카오로 로그인하여 시작하기';

	return (
		<>
			<LoginSection>
				{/* <img className="loginBanner" alt={'loginBanner'} src={'/img/loginBanner.png'}></img> */}
				<img src={'/img/kakao.png'} alt={'loginBtn'} className="kakao" onClick={handleLogin} />
			</LoginSection>
		</>
	);
};

export default Login;

const LoginSection = styled.div`
	margin-top: 5rem;
	width: 100%;
	height: 45rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.loginBanner {
		width: 30rem;
		height: 17rem;
	}
	.kakao {
		border-radius: 5px;
		width: 75%;
	}
`;

const ContentCss = styled.div`
	font-size: 2.2rem;
	font-weight: 900;
	text-align: center;
	line-height: 22px;
	letter-spacing: -0.408px;
	height: 6rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 2rem;
`;
