export type ContentsType = {
	id: number;
	title: string;
	content: string;
	limitTime: string;
	writer: string;
	imageUrl1: string;
	imageUrl2: string;
	createdTime: string;
	modifiedTime: string;
	teamName: string;
	teamId: number,
	readMemberCount: number;
	notReadMemberCount: number;
	checkStatus: string;
};
export type TeamType = {
	id: number;
	name: string;
	description: string;
	teamSize: number;
	imageUrl: string;
	link: string;
	createdTime: string;
	modifiedTime: string;
	role: string;
	leaderCount: number;
	memberCount: number;
	showNewsDtoList: ContentsType[];
};
export type AcceptRequest = {
	requestId: number;
	requestRole: string;
	requestCreatedTime: string;
	memberId: number;
	email: string;
	username: string;
};
