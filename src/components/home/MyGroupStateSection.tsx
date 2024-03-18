import React from 'react';
import styled from 'styled-components';
import NoneNoticeCard from '../common/NoneNoticeCard';

const MyGroupStateSection = () => {
	return (
		<Main>
			<NoneNoticeCard text="생성된 그룹이 없습니다" />
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
`;
