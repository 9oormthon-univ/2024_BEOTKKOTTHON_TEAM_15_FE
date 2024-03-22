import React from 'react';
import sampleDataList from '@/utils/MOCK_DATA2.json';
import styled from 'styled-components';
import CardList from '../common/CardList';
import NoneNoticeCard from '../common/NoneNoticeCard';

const IssuedNoticeSection = () => {
	return (
		<Main>
			<NoneNoticeCard text='아직 발행한 가정통신문이 없어요!'/>
			{/* <CardList dataList={sampleDataList} /> */}
		</Main>
	);
};

export default IssuedNoticeSection;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
