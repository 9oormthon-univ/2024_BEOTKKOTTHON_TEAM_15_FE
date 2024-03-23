'use client';

import { searchGroup } from '@/apis/search';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GroupCard from './GroupCard';

interface DataType {
	name: string;
	description: string;
	id: string;
	teamSize: number;
	imageUrl: string;
}

const SearchPage = () => {
	const [modal, setModal] = useState(false);
	const [searchDataList, setSearchDataList] = useState<DataType[]>([]);
	const params = useSearchParams();
	const keyword = params.get('q');
	const onModal = () => {
		setModal(true);
	};

	useEffect(() => {
		const getDataList = async () => {
			if (keyword) {
				const result = await searchGroup(keyword);
				setSearchDataList(result);
			}
		};
		getDataList();
		console
	}, [keyword]);

	return (
		<Main>
			<Title>{`'${keyword}'`} 검색 결과</Title>
			<CardSection>
				{searchDataList.map((result, idx) => (
					<GroupCard key={idx} onModal={onModal} title={result.name} id={result.id} teamSize={result.teamSize} profile={result.imageUrl} />
				))}
			</CardSection>
		</Main>
	);
};

export default SearchPage;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.div`
	font-weight: 600;
  width: 100%;
	font-size: 2rem;
	margin-bottom: 1rem;
	color: #28282a;
`;

const CardSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
