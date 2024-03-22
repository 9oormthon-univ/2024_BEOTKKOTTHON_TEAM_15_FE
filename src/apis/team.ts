import axios from 'axios';

const baseURL = 'https://dev.gooromnews.shop';

// 내가 가입한 팀목록 조회
export const getAllMyTeamList = async () => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}/teams`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
        console.log(response);
		return response.data.result;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 개별 팀 조회
export const getTeamInfo = async (teamId : string) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}/teams/${teamId}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
        console.log(response);
		return response.data.result;
	} catch (error) {
		console.log(error);
		return false;
	}
};

