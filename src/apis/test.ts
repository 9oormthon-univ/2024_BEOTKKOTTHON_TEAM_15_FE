// 테스트 파일

import axios from 'axios';

interface LoginInfo {
	id: string;
	pw: string;
	fcm: string;
}

interface SignupInfo extends LoginInfo {
	name: string;
	id: string;
	pw: string;
	fcm: string;
}

export const signup = async (body: SignupInfo) => {
	try {
		const result = await axios.post(`/`, body);
		const token = result.data.token;
		localStorage.setItem('token', token);
		return result;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const login = async (body: LoginInfo) => {
	try {
		const result = await axios.post(`/`, body);
		const token = result.data.token;
		localStorage.setItem('token', token);
		return result;
	} catch (error) {
		console.log(error);
		return false;
	}
};
