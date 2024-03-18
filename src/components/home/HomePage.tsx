'use client';

import React from 'react';
import styled from 'styled-components';
import NewNoticeSection from './NewNoticeSection';
import InfoSection from './InfoSection';
import IssuedNoticeSection from './IssuedNoticeSection';
import MyGroupStateSection from './MyGroupStateSection';
import Footer from './Footer';

const HomePage = () => {
	return (
		<Main>
			<Section>
				<SectionTitle>띵동! 가정통신문이 도착했어요</SectionTitle>
                <NewNoticeSection/>
			</Section>
			<Section>
                <InfoSection/>
			</Section>
			<Section>
				<SectionTitle>OOO님이 발행한 가정통신문</SectionTitle>
                <IssuedNoticeSection/>
			</Section>
			<Section>
				<SectionTitle>나의 그룹 현황</SectionTitle>
                <MyGroupStateSection/>
			</Section>
            <Footer/>
		</Main>
	);
};

export default HomePage;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    gap: 3.3rem;
`;

const Section = styled.div`
	width: 100%;
    height: fit-content;
`;

const SectionTitle = styled.div`
	font-weight: 600;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #28282A;
`;
