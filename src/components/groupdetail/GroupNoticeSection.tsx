import React from 'react';
import styled from 'styled-components';
import sampleDataList from '@/utils/MOCK_DATA.json';
import GroupCardList from './GroupCardList';

const GroupNoticeSection = () => {
	return (
		<Main>
			{/* <NoneNoticeCard text='가정통신문이 없어요!'/> */}
			<GroupCardList dataList={sampleDataList} />
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
