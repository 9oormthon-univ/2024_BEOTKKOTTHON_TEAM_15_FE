'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import LeaderModal from './LeaderModal';
import ProfileImg from '@/components/common/ProfileImg';

const Leader = () => {
	const [modal, setModal] = useState(false);
	const router = useRouter();

	const onModal = () => {
		setModal(true);
	};

	return (
		<Wrapper>
			{modal && <LeaderModal />}
			<Container>
				<Title>그룹 생성을 위한 기본적인 정보를 입력해주세요.</Title>
				<ProfileImg id={'imageInput'} text={'이미지 업로드'} />
				<Information>
					<GroupName placeholder="그룹명을 입력해주세요. *(최대 20자)" />
					<GroupPurpose placeholder="그룹 생성 목적을 입력해주세요. *(최대 50자)" />
				</Information>
				<BtnWrapper>
					<JoinBtn onClick={onModal}>생성하기</JoinBtn>
				</BtnWrapper>
			</Container>
		</Wrapper>
	);
};

export default Leader;

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	background: linear-gradient(to bottom, #93613b 50%, #fff5e0 50%);
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

const Title = styled.div`
	margin-top: 8rem;
	font-size: 2.8rem;
	color: white;
	font-weight: bold;
`;

const Information = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

const GroupName = styled.input`
	width: 180%;
	border-radius: 1rem;
	background-color: #f4e6c8;
	padding: 1rem 7rem 1rem 2rem;
	border: none;
	outline: none;
	font-size: 1.5rem;
`;

const GroupPurpose = styled.input`
	width: 180%;
	border-radius: 1rem;
	background-color: #f4e6c8;
	padding: 1rem 7rem 1rem 2rem;
	border: none;
	outline: none;
	font-size: 1.5rem;
`;

const BtnWrapper = styled.div`
	width: 57rem;
	display: flex;
	justify-content: flex-end;
`;

const JoinBtn = styled.div`
	width: 60px;
	text-align: center;
	padding: 0.5rem 2rem;
	border: 1px solid #4f7b59;
	border-radius: 2.5rem;
	font-size: 1.5rem;
	color: #4f7b59;
	&:hover {
		color: white;
		background-color: #4f7b59;
	}
`;
