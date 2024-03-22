import { requestGroup } from '@/apis/request';
import React from 'react';
import styled from 'styled-components';

type CardProps = {
	onModal: React.MouseEventHandler<HTMLDivElement>;
	title: string;
	des: string;
	id: string;
};

const GroupCard = (props: CardProps) => {
	const request = async (role: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		let body = {
			id: props.id,
			role: role,
		};
		await requestGroup(body);
		await props.onModal(event);
	};
	return (
		<Wrapper>
			<ProfileImg alt="groupProfile" src="/img/goorm.png" />
			<GroupWrapper>
				<GroupTitle>{props.title}</GroupTitle>
				<GroupLeader>{props.des}</GroupLeader>
			</GroupWrapper>
			<BtnWrapper>
				<JoinBtn onClick={(e) => request('LEADER', e)}>리더로 참여하기</JoinBtn>
				<JoinBtn onClick={(e) => request('MEMBER', e)}>멤버로 참여하기</JoinBtn>
			</BtnWrapper>
		</Wrapper>
	);
};

export default GroupCard;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 40px;
	padding: 2rem 0rem;
	border-radius: 1.5rem;
	background-color: #fff5e0;
	box-shadow: 1px 4px 8px 0px rgba(0, 0, 0, 0.25);
	gap: 2rem;
`;

const ProfileImg = styled.img`
	width: 18%;
	border-radius: 50%;
`;

const GroupWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 0.5rem;
`;

const GroupTitle = styled.div`
	font-size: 1.5rem;
	font-weight: 600;
`;

const GroupLeader = styled.div`
	font-size: 1.2rem;
	font-weight: 400;
`;

const BtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
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
