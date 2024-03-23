import axios from 'axios';

const baseURL = 'https://dev.gooromnews.shop';

interface alertType {
	noticeStatus: string;
}

export const alertStatus = async (body: alertType) => {
	const accessToken = localStorage.getItem('access');
	const result = await axios.put(`${baseURL}/notification`, body, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});

	return result.data.result;
};
