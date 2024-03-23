import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NoneNoticeCard from '../common/NoneNoticeCard';
import GroupList from './GroupList';
import { getAllMyTeamList } from '@/apis/team';

const MyGroupStateSection = () => {
	const [myGroupDataList, setMyGroupDataList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isZero, setIsZero] = useState(false);

	useEffect(() => {
		const getDataList = async () => {
			setLoading(true); // 로딩 시작
			const result = await getAllMyTeamList();
			setMyGroupDataList(result);
			setLoading(false);
			if (result.length == 0) {
				setIsZero(true);
			}
		};
		getDataList();
	}, []);
	return (
		<Main>
			{!loading && isZero && <NoneNoticeCard text="아직 생성된 그룹이 없어요!" />}
			{!loading && !isZero && <GroupList dataList={myGroupDataList} />}
			{loading ? <Loading src="/img/loadingSpinner.gif" alt="로딩" /> : <></>}
		</Main>
	);
};

export default MyGroupStateSection;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 10rem;
`;

const Loading = styled.img`
	width: 100px;
`;
