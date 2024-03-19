import React from 'react';
import { Group } from './GroupList';
import styled from 'styled-components';

const HomeGroupCard = ({ group }: { group: Group }) => {
	return (
		<Main>
			<Card>
				<ProfileCircle>
					<ProfileImg src={group.profile} />
				</ProfileCircle>
				<div id="groupname">{group.group}</div>
				<Tag>+{group.count}</Tag>
			</Card>
		</Main>
	);
};

export default HomeGroupCard;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
`;

const Card = styled.div`
	width: 93%;
	height: 7rem;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background-color: #fff5e0;
	border-radius: 20px;
	border: 3px solid #c9bca2;
	padding: 1rem 0rem;
	font-size: 1.3rem;
    font-weight: 600; 
	cursor: pointer;
    #groupname{
        font-weight: 600; 
        width: 40%;
        overflow: scroll
    }
`;

const ProfileCircle = styled.div`
	height: 100%;
	aspect-ratio: 1 / 1;
	background-color: #a9a9a9;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProfileImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

const Tag = styled.div`
	background-color: #c9bca2;
	color: white;
	padding: 0.3rem 0.5rem;
	border-radius: 15px;
`;
