'use client';

import React from 'react';
import styled from 'styled-components';
import UnreadNoticeSection from './UnreadNoticeSection';
import GroupSection from './GroupSection';

const GroupMainPage = () => {
	return (
		<Main>

			<Section>
				<SectionTitle>{`{닉네임}`}님이 속해있는 그룹</SectionTitle>
                <GroupSection/>
			</Section>
			<Section>
				<SectionTitle>읽지 않은 가정통신문</SectionTitle>
                <UnreadNoticeSection/>
			</Section>
		</Main>
	);
};

export default GroupMainPage;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3rem;
`;
const Section = styled.div`
	width: 100%;
	height: fit-content;
`;

const SectionTitle = styled.div`
	font-weight: 600;
	font-size: 2rem;
	margin-bottom: 1rem;
	color: #28282a;
`;
