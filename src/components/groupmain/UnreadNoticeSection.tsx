import React from 'react';
import styled from 'styled-components';
import sampleDataList from '@/utils/MOCK_DATA.json';
import CardList from '../common/CardList';

const UnreadNoticeSection = () => {
	return (
		<Main>
			{/* <NoneNoticeCard text='가정통신문이 없어요!'/> */}
			<CardList dataList={sampleDataList} />
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
