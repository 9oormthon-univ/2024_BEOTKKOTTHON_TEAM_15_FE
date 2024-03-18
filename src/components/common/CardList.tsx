import React from 'react';
import styled from 'styled-components';
import NoticeCard from './NoticeCard';
import { SampleType } from '@/utils/constant';

const CardList = ({ dataList }: { dataList?: SampleType[] }) => {
	return (
		<CardWrapper>{dataList && dataList.map((notice) => <NoticeCard key={notice.title} notice={notice} />)}</CardWrapper>
	);
};

export default CardList;

const CardWrapper = styled.div`
	width: 90%;
	display: grid;
	grid-template-columns: repeat(2, minmax(310px, 1fr));
	justify-content: center;
	padding: initial;
	height: fit-content;
`;
