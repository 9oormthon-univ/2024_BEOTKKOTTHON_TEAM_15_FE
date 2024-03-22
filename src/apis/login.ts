// 테스트 파일

import axios from 'axios';

const baseURL = 'https://dev.gooromnews.shop';

interface LoginInfo {
	email: string;
	password: string;
	token?: string;
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
		const deviceToken = localStorage.getItem('device');
		const loginResponse = await axios.post(`${baseURL}/login`, body);
		const accesstoken = loginResponse.data.result.accessToken;
		localStorage.setItem('access', accesstoken);
		const tokenBody = {
			token: deviceToken,
		};
		try {
			const accessToken = localStorage.getItem('access');
			console.log(accessToken);
			const notificationResponse = await axios.post(`${baseURL}/notification`, tokenBody, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			});
			console.log('Notification Response:', notificationResponse.data);
		} catch (notificationError) {
			console.error('Notification Error:', notificationError);
		}
		return loginResponse;
	} catch (loginError) {
		console.log(loginError);
		return false;
	}
};

export const logOut = async () => {
	const accessToken = localStorage.getItem('access');
	const result = await axios.delete(`${baseURL}/logout`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
};

// export const postFcm = async (token: string) => {
// 	const accessToken = localStorage.getItem('access');
// 	const result = await axios.post(`${baseURL}/notification`, token, {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Authorization: `Bearer ${accessToken}`,
// 		},
// 	});
// 	return result;
// };
