import React, { useState } from 'react';
import styled from 'styled-components';
import HomeGroupCard from './HomeGroupCard';

export interface Group {
	id: number;
	group: string;
	profile: string;
	count: number;
}

const GroupList = ({ dataList }: { dataList: Group[] }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const postsPerPage = 4;
	const startIndex = currentPage * postsPerPage;
	const visibleCard = dataList.slice(startIndex, startIndex + postsPerPage);
	const totalPages = Math.ceil(dataList.length / postsPerPage);

	const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
        console.log(totalPages);
    };
    
    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

	return (
		<Main>
			<BtnGroup>
				<Btn onClick={goToPreviousPage} disabled={currentPage === 0}>
					&lt;
				</Btn>
				<Btn onClick={goToNextPage} disabled={currentPage === totalPages - 1}>
					&gt;
				</Btn>
			</BtnGroup>
			<CardWrapper>
				{visibleCard.map((group, i) => (
					<HomeGroupCard key={i} group={group} />
				))}
			</CardWrapper>
		</Main>
	);
};

export default GroupList;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const CardWrapper = styled.div`
	width: 90%;
	display: grid;
	grid-template-columns: repeat(2, minmax(310px, 1fr));
	justify-content: center;
	height: fit-content;
`;

const BtnGroup = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 1rem;
    margin-top: -3rem;
    margin-bottom: 2rem;
`;

const Btn = styled.button`
	font-size: 1.2rem;
    font-weight: 600;
    width: 2rem;
    height: 2rem;
	cursor: pointer;
	border: none;
	border-radius: 50%;
	color: white;
	background-color: #c9bca2;
	&:disabled {
		background-color: #f4e6c8;
		color: #fff5e0;
		cursor: default;
	}
`;
