'use client';

import React from 'react';
import styled from 'styled-components';
import UnreadNoticeSection from './UnreadNoticeSection';
import GroupSection from './GroupSection';
import { LuPlusCircle } from "react-icons/lu";
import { GoPeople } from "react-icons/go";

const GroupMainPage = () => {
	return (
		<Main>
			<Section>
                <BtnGroup>
                    <Btn><LuPlusCircle size='1.5rem'/>새 가정통신문 만들기</Btn>
                    <Btn><GoPeople id='people' size='1.5rem' />새 그룹 생성하기</Btn>
                </BtnGroup>
				<SectionTitle>{`{닉네임}`}님이 속해있는 그룹</SectionTitle>
				<GroupSection />
			</Section>
			<Section>
				<SectionTitle>읽지 않은 가정통신문</SectionTitle>
				<UnreadNoticeSection />
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

const BtnGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
`;

const Btn = styled.div`
	cursor: pointer;
    align-items: center;
	padding: 0.7rem 1.5rem;
	color: white;
	background-color: #4f7b59;
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 15px;
    display: flex;
    gap: 5px;
    #people{
        stroke-width: 1px;
    }
`;
