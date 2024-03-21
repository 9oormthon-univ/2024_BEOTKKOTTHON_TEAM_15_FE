// 테스트 파일

import axios from 'axios';

const baseURL = 'http://beotkkotthon-env.eba-3tgmsdgp.ap-northeast-2.elasticbeanstalk.com';

interface FcmInfo {
	token: string;
}
interface LoginInfo {
	email: string;
	password: string;
	token: string;
}

interface SignupInfo extends LoginInfo {
	username: string;
}

export const signup = async (body: SignupInfo) => {
	try {
		const response = await axios.post(`${baseURL}/signup`, body);
		const { username, ...loginInfo } = body;
		const data = await login(loginInfo);
		return data;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const login = async (body: LoginInfo) => {
	try {
		const { token, ...loginInfo } = body;
		const result = await axios.post(`${baseURL}/login`, body);
		const accesstoken = result.data.result.accessToken;
		localStorage.setItem('access', accesstoken);
		const tokenBody = {
			token: token,
		};
		const data = await postFcm(tokenBody);
		return result;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const postFcm = async (tokenBody: FcmInfo) => {
	try {
		const accessToken = localStorage.getItem('access');
		console.log(accessToken);
		const response = await axios.post(`${baseURL}/notification`, tokenBody, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
