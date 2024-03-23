import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { TeamType } from '@/types/request';

interface CardType {
	title: string;
	time: string;
	imgUrl: string;
}

const AverageCard = (props: CardType) => {
	const router = useRouter();
	return (
		<Main>
			<Card>
				<ProfileCircle>
					<ProfileImg src={props.imgUrl} />
				</ProfileCircle>
				<Column>
					<div id="groupname">{props.title}</div>
					<div id="time">{props.time}</div>
				</Column>
			</Card>
		</Main>
	);
};

export default AverageCard;

const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
`;

const Card = styled.div`
	width: 190px;
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
	#groupname::-webkit-scrollbar {
		display: none;
	}
	#time {
		font-size: 2.2rem;
		font-weight: 600;
	}
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
