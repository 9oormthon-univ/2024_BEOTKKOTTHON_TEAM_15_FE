import axios from 'axios';

const baseURL = 'https://dev.gooromnews.shop';

interface searchProps {
	name: string;
}

export const searchGroup = async (word: string) => {
	const result = await axios.get<searchProps>(`${baseURL}/teams?name=${word}`);
	console.log(result.data);
	return result.data;
};
