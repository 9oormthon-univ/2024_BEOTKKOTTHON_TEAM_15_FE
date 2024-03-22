import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardList from '../common/CardList';
import NoneNoticeCard from '../common/NoneNoticeCard';
import { getMyNotice } from '@/apis/notice';

const IssuedNoticeSection = () => {
	const [noticeDataList, setNoticeDataList] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getDataList = async () => {
			const result = await getMyNotice();
			setNoticeDataList(result);
			if(result.length != 0){
				setLoading(false); // 로딩 종료
			}
		};
		getDataList();
	}, []);
	return (
		<Main>
			{loading ? (
				<NoneNoticeCard text="아직 발행한 가정통신문이 없어요!" />
			) : (
				<CardList dataList={noticeDataList} />
			)}
		</Main>
	);
};

export default IssuedNoticeSection;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
