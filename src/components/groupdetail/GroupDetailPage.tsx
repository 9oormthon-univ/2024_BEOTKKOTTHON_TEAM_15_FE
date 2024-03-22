'use client';

import React from 'react';
import styled from 'styled-components';
import GroupNoticeSection from './GroupNoticeSection';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { LuPlusCircle } from 'react-icons/lu';

const GroupDetailPage = () => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams<{ id: string }>();
	const groupId = params.id;
	console.log(groupId);
	return (
		<Main>
			<GroupProfile>
				<ProfileCircle>
					<ProfileImg src="/img/nothingLogo.png" />
				</ProfileCircle>
				<Right>
					<Row>
						<Title>구름톤 유니브 2기</Title>
						<span className="tag">리더 20명</span>
						<span className="tag">멤버 30명</span>
					</Row>
					<Info>
						ooo님은 구름톤 유니브 2기의 <span id="roletext">리더</span>입니다.
					</Info>
					<BtnGroup>
						<Btn
							onClick={() => {
								router.push(`${pathname}/post`);
							}}
						>
							<LuPlusCircle size="1.5rem" />새 가정통신문 만들기
						</Btn>
						<Btn
							onClick={() => {
								router.push(`${pathname}/accept`);
							}}
						>
							새 멤버 수락하기
						</Btn>
						<Btn
							onClick={() => {
								router.push(`${pathname}/setting`);
							}}
						>
							그룹 설정
						</Btn>
					</BtnGroup>
				</Right>
			</GroupProfile>
			<Section>
				<SectionTitle>구름톤 유니브 2기의 최근 가정통신문</SectionTitle>
				<GroupNoticeSection />
			</Section>
		</Main>
	);
};

export default GroupDetailPage;

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
const GroupProfile = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;
	margin-top: 2rem;
`;

const ProfileCircle = styled.div`
	width: 25%;
	aspect-ratio: 1 / 1;
	background-color: #c9bca2;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 4px 10px -5px rgba(0, 0, 0, 0.8);
`;

const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
`;
const Right = styled.div`
	margin-left: 2.3rem;
`;
const Row = styled.div`
	display: flex;
	align-items: center;
	.tag {
		height: fit-content;
		background-color: #c9bca2;
		color: #555555;
		padding: 0.4rem 1rem;
		border-radius: 15px;
		margin-right: 0.6rem;
		font-size: 1.2rem;
	}
`;
const Title = styled.div`
	font-weight: 600;
	font-size: 2.3rem;
	color: #28282a;
	margin-right: 1rem;
`;

const SectionTitle = styled.div`
	font-weight: 600;
	font-size: 2rem;
	margin-bottom: 1rem;
	color: #28282a;
`;
const Info = styled.div`
	font-weight: 600;
	font-size: 1.5rem;
	margin-top: 1rem;
	margin-bottom: 2rem;
	color: #28282a;
	#roletext {
		color: #4f7b59;
	}
`;
const BtnGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
	margin-top: 1rem;
`;

const Btn = styled.div`
	cursor: pointer;
	align-items: center;
	padding: 1rem 1.5rem;
	color: white;
	background-color: #4f7b59;
	font-size: 1.3rem;
	font-weight: 500;
	border-radius: 20px;
	display: flex;
	gap: 5px;
	#people {
		stroke-width: 1px;
	}
`;
