'use client';

import { searchGroup } from '@/apis/search';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GroupCard from './GroupCard';
import Modal from '../common/Modal';

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
				{modal && (
				<Modal
					homeUrl="/home"
					pageUrl="/mypage"
					text1="참여 요청을 전송했습니다!"
					text2="리더가 수락하면 알림을 보내드릴게요"
					text3="마이페이지로 이동"
				/>
			)}
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
