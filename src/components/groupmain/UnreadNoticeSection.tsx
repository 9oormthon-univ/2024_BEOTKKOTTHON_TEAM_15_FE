import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import sampleDataList from '@/utils/MOCK_DATA.json';
import CardList from '../common/CardList';
import NoneNoticeCard from '../common/NoneNoticeCard';
import { getAllMyTeamList } from '@/apis/team';
import { getAllNotice } from '@/apis/notice';
import AllCardList from './AllCardList';

const UnreadNoticeSection = () => {
	const [noticeDataList, setNoticeDataList] = useState([]);
	const [myGroupDataList, setMyGroupDataList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getTeamDataList = async () => {
			setLoading(true); // 로딩 시작
			const result = await getAllMyTeamList();
			setMyGroupDataList(result);
			if(result.length != 0){
				setLoading(false); // 로딩 종료
			}
		};
		const getNoticeList = async () => {
			setLoading(true); // 로딩 시작
			const result = await getAllNotice();
			setNoticeDataList(result);
			if(result.length != 0){
				setLoading(false); // 로딩 종료
			}
		};
		getTeamDataList();
		getNoticeList();
	}, []);
	return (
		<Main>
			{loading ? (
				<NoneNoticeCard text="가정통신문이 없어요!!" />
			) : (
				<AllCardList dataList={noticeDataList} teamList={myGroupDataList} />
			)}
		</Main>
	);
};

export default UnreadNoticeSection;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
