import React from 'react';
import styled from 'styled-components';
import { Group } from '../home/GroupList';
import { useRouter } from 'next/navigation';

const UserGroupCard = ({ group }: { group: Group }) => {
	const router = useRouter();
	return (
		<Main onClick={()=>{router.push(`groups/group/${group.id}`)}}>
			<Card>
				<ProfileCircle>
					<ProfileImg src={group.profile} />
				</ProfileCircle>
				<Column>
					<div id="groupname">{group.group}</div>
					<Tag>+{group.count}명이 함께해요</Tag>
				</Column>
			</Card>
		</Main>
	);
};

export default UserGroupCard;

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
	max-width: 220px;
	height: 7rem;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background-color: #fff5e0;
	border-radius: 20px;
	border: 3px solid #c9bca2;
	padding: 1rem 0.1rem;
	cursor: pointer;
	#groupname {
		font-weight: 600;
		width: 100%;
		overflow: scroll;
        font-size: 1.3rem;
        font-weight: 600;
	}
`;

const ProfileCircle = styled.div`
    width: 25%;
    aspect-ratio: 1 / 1;
    background-color:#c9bca2;
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
