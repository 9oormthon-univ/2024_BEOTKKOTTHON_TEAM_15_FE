import axios from 'axios';

const baseURL = 'https://dev.gooromnews.shop';

interface requestType {
	id: string;
	role: string;
}

export const requestGroup = async (body: requestType) => {
	const accessToken = localStorage.getItem('access');
	const result = await axios.post(
		`${baseURL}/teams/${body.id}?requestrole=${body.role}`,
		{},
		{
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		},
	);
	console.log(result.data.result);
	return result.data.result;
};
