import React from 'react';
import sampleDataList from '@/utils/MOCK_DATA2.json';
import styled from 'styled-components';
import UserGroupList from './UserGroupList';
import { groupSample } from '../home/MyGroupStateSection';

const GroupSection = () => {
	return (
		<Main>
			{/* <NoneNoticeCard text="아직 속한 그룹이 없어요!" /> */}
			<UserGroupList dataList={groupSample} />
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
