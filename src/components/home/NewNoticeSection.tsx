import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardList from '../common/CardList';
import { getAllUnreadNoticeList } from '@/apis/notice';
import NoneNoticeCard from '../common/NoneNoticeCard';

const NewNoticeSection = () => {
	const [noticeDataList, setNoticeDataList] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getDataList = async () => {
			const result = await getAllUnreadNoticeList();
			setNoticeDataList(result);
			if(result.length != 0){
				setLoading(false); // 로딩 종료
			}
			console.log(result);
		};
		getDataList();
	}, []);

	return (
		<Main>
			{loading ? (
				<NoneNoticeCard text="새 가정통신문이 없어요!" />
			) : (
				<CardList dataList={noticeDataList} />
			)}
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
