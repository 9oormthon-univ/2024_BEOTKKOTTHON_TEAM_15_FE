export enum TABS {
	HOME,
	GROUP,
	MY_PAGE,
}

export interface SampleType {
	id: number;
	title: string;
	group: string;
	leader: string;
	limit_time: string;
	content: string;
	check: number;
	no_check: number;
}