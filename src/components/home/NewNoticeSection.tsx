import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardList from '../common/CardList';
import sampleDataList from '@/utils/MOCK_DATA.json';
import { getAllUnreadNoticeList } from '@/apis/notice';
import NoneNoticeCard from '../common/NoneNoticeCard';

const NewNoticeSection = () => {
	const [noticeDataList, setNoticeDataList] = useState([]);
	useEffect(() => {
		const getDataList = async () => {
			const result = await getAllUnreadNoticeList();
			setNoticeDataList(result);
		};
		getDataList();
	}, []);

	return (
		<Main>
			{noticeDataList ? <CardList dataList={noticeDataList} /> : <NoneNoticeCard text="새 가정통신문이 없어요!" />}
		</Main>
	);
};

export default NewNoticeSection;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
