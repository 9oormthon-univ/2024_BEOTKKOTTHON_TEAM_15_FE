import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NoneNoticeCard from '../common/NoneNoticeCard';
import { getAllMyTeamList } from '@/apis/team';
import { getAllNotice } from '@/apis/notice';
import AllCardList from './AllCardList';

const UnreadNoticeSection = () => {
	const [noticeDataList, setNoticeDataList] = useState([]);
	const [myGroupDataList, setMyGroupDataList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isZero, setIsZero] = useState(false);

	useEffect(() => {
		const getTeamDataList = async () => {
			setLoading(true); // 로딩 시작
			const result = await getAllMyTeamList();
			setMyGroupDataList(result);
			setLoading(false);
			if (result.length == 0) {
				setIsZero(true);
			}
		};
		const getNoticeList = async () => {
			setLoading(true); // 로딩 시작
			const result = await getAllNotice();
			setNoticeDataList(result);
			setLoading(false);
			if (result.length == 0) {
				setIsZero(true);
			}
		};
		getTeamDataList();
		getNoticeList();
	}, []);
	return (
		<Main>
			{!loading && isZero && <NoneNoticeCard text="가정통신문이 없어요!!" />}
			{!loading && !isZero && <AllCardList dataList={noticeDataList} teamList={myGroupDataList} />}
			{loading ? <Loading src="/img/loadingSpinner.gif" alt="로딩" /> : <></>}
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
	min-height: 20rem;
`;

const Loading = styled.img`
	width: 100px;
`;
