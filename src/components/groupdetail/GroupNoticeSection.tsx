import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GroupCardList from './GroupCardList';
import { getTeamNotice } from '@/apis/notice';
import NoneNoticeCard from '../common/NoneNoticeCard';

const GroupNoticeSection = ({groupId}:{groupId:string}) => {
	const [groupNoticeList, setGroupNoticeList] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getDataList = async () => {
			setLoading(true); // 로딩 시작
			const result = await getTeamNotice(groupId);
			setGroupNoticeList(result);
			if(result.length != 0){
				setLoading(false); // 로딩 종료
			}
		};
		getDataList();
	}, [groupId]);

	return (
		<Main>
				{loading ? (
				<NoneNoticeCard text="가정통신문이 없어요!" />
			) : (
			<GroupCardList dataList={groupNoticeList} />
			)}
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
