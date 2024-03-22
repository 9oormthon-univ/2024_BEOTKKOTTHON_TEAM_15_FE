import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserGroupList from './UserGroupList';
import { getAllMyTeamList } from '@/apis/team';
import NoneNoticeCard from '../common/NoneNoticeCard';

const GroupSection = () => {
	const [myGroupDataList, setMyGroupDataList] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getDataList = async () => {
			setLoading(true); // 로딩 시작
			const result = await getAllMyTeamList();
			setMyGroupDataList(result);
			if(result.length != 0){
				setLoading(false); // 로딩 종료
			}
		};
		getDataList();
	}, []);
	return (
		<Main>
			{loading ? (
				<NoneNoticeCard text="아직 생성된 그룹이 없어요!" />
			) : (
				<UserGroupList dataList={myGroupDataList} />
			)}
		</Main>
	);
};

export default GroupSection;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
