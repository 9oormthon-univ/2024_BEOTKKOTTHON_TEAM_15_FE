import axios from 'axios';

const baseURL = 'https://dev.gooromnews.shop';

interface postType {
	title: string;
	content: string;
	minute: string;
	id: string;
	image1?: File;
	image2?: File;
}

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
		return response.data.result;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 팀별 가정통신문 조회
export const getTeamNotice = async (teamId: string) => {
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
// 가정통신문 작성
export const postNotice = async (body: FormData, id: string) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.post(`${baseURL}/teams/${id}/news`, body, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'multipart-form-data',
			},
		});
	} catch (error) {
		console.log(error);
	}
};

// 가정통신문 상세 조회
export const getNoticeDetail = async (teamId: string, newsId: string) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}/teams/${teamId}/news/${newsId}`, {
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

export const changeReadState = async (newsId: string) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}/news/${newsId}`, {
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

// 가정통신문 확인/미확인 리스트
export const checkReadList = async (newsId: string) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}/news/${newsId}/checklist`, {
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