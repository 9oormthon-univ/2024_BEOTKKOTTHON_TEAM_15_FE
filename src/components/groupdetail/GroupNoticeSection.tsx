import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GroupCardList from './GroupCardList';
import { getTeamNotice } from '@/apis/notice';
import NoneNoticeCard from '../common/NoneNoticeCard';

const GroupNoticeSection = ({ groupId }: { groupId: string }) => {
	const [groupNoticeList, setGroupNoticeList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isZero, setIsZero] = useState(false);

	useEffect(() => {
		const getDataList = async () => {
			const result = await getTeamNotice(groupId);
			setGroupNoticeList(result);
			setLoading(false);
			if (result.length == 0) {
				setIsZero(true);
			}
		};
		getDataList();
	}, [groupId]);

	return (
		<Main>
			{!loading && isZero && <NoneNoticeCard text="가정통신문이 없어요!" />}
			{!loading && !isZero && <GroupCardList dataList={groupNoticeList} />}
			{loading ? <Loading src="/img/loadingSpinner.gif" alt="로딩" /> : <></>}
		</Main>
	);
};

export default GroupNoticeSection;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Loading = styled.img`
	width: 100px;
`;
