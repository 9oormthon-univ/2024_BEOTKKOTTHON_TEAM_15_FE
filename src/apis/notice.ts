import axios from 'axios';

const baseURL = 'https://dev.gooromnews.shop';

// 미확인 가정통신문 전체 목록 조회
export const getAllUnreadNoticeList = async () => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}/news`, {
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

// 내가 발행한 가정통신문 목록 조회
export const getMyNotice = async () => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}/mynews`, {
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

// 가정통신문 목록 전체 조회 (하단그룹 메인)
export const getAllNotice = async () => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}/teams/news`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
        console.log(response);
		return response.data.result.showNewsDtoList;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 팀별 가정통신문 조회
export const getTeamNotice = async (teamId : string) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}/teams/${teamId}/news`, {
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