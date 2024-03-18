import React from 'react';
import styled from 'styled-components';
import NoneNoticeCard from '../common/NoneNoticeCard';
import CardList from '../common/CardList';
import sampleDataList from '@/utils/MOCK_DATA.json';

const NewNoticeSection = () => {
	return (
		<Main>
			{/* <NoneNoticeCard text='새 가정통신문이 없어요!'/> */}
			<CardList dataList={sampleDataList} />
		</Main>
	);
};

export default NewNoticeSection;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
