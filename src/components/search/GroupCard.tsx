import { requestGroup } from '@/apis/request';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

type CardProps = {
	onModal: React.MouseEventHandler<HTMLDivElement>;
	title: string;
	id: string;
	teamSize: number;
	profile: string;
};

const GroupCard = (props: CardProps) => {
	const request = async (role: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		let body = {
			id: props.id,
			role: role,
		};
		try {
			await requestGroup(body);
		} catch (error: any) {
			if (error.message.includes('400')) {
				alert('이미 소속된 그룹입니다❗️');
			} else {
				alert('알 수 없는 에러로 인해 요청이 실패되었습니다');
			}
			console.log(error.message);
			return;
		}
		await props.onModal(event);
	};
	return (
		<Main>
			<Card>
				<Row>
					<ProfileCircle>
						{props.profile == '__null__' ? (
							<ProfileImg src="/img/defaultGroupProfile.png" />
						) : (
							<ProfileImg src={props.profile} />
						)}
					</ProfileCircle>
					<Column>
						<div id="groupname">{props.title}</div>
						<Tag>+{props.teamSize}명이 함께해요</Tag>
					</Column>
				</Row>
				<BtnWrapper>
					<JoinBtn onClick={(e) => request('LEADER', e)}>리더로 참여하기</JoinBtn>
					<JoinBtn onClick={(e) => request('MEMBER', e)}>멤버로 참여하기</JoinBtn>
				</BtnWrapper>
			</Card>
		</Main>
	);
};

export default GroupCard;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
`;

const Card = styled.div`
	width: 100%;
	height: 7rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #fff5e0;
	border-radius: 20px;
	border: 3px solid #c9bca2;
	padding: 1.3rem 0rem;
	#groupname {
		font-weight: 600;
		width: 100%;
		overflow: scroll;
		font-size: 1.7rem;
		font-weight: 600;
	}
`;

const Row = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: start;
	margin-left: 2rem;
`;

const ProfileCircle = styled.div`
	width: 25%;
	aspect-ratio: 1 / 1;
	background-color: #b8b8b8;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProfileImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	color: #555555;
	margin-left: 2rem;
`;

const Tag = styled.div`
	background-color: #c9bca2;
	padding: 0.3rem 0.8rem;
	border-radius: 15px;
	width: fit-content;
	font-size: 1rem;
	font-weight: 400;
	margin-top: 0.5rem;
`;

const BtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	margin-right: 2rem;
`;

const JoinBtn = styled.div`
	width: 80px;
	text-align: center;
	padding: 0.5rem 2rem;
	border: 1px solid #4f7b59;
	border-radius: 2.5rem;
	font-size: 1.2rem;
	color: #4f7b59;
	&:hover {
		color: white;
		background-color: #4f7b59;
	}
`;
