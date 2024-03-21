// 테스트 파일

import axios from 'axios';

const baseURL = 'http://beotkkotthon-env.eba-3tgmsdgp.ap-northeast-2.elasticbeanstalk.com';

interface LoginInfo {
	email: string;
	password: string;
	fcmToken: string;
}

interface SignupInfo extends LoginInfo {
	username: string;
}

export const signup = async (body: SignupInfo) => {
	try {
		const response = await axios.post(`${baseURL}/signup`, body);
		const { username, ...loginInfo } = body;
		const login = async (body: LoginInfo) => {
			try {
				const result = await axios.post(`/login`, body);
				const token = result.data.accessToken;
				localStorage.setItem('token', token);
				return result;
			} catch (error) {
				console.log(error);
				return false;
			}
		};
		const data = login(loginInfo);
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const login = async (body: LoginInfo) => {
	try {
		const result = await axios.post(`/login`, body);
		const token = result.data.accessToken;
		localStorage.setItem('access', token);
		console.log(result.data.data);
		return result;
	} catch (error) {
		console.log(error);
		return false;
	}
};
