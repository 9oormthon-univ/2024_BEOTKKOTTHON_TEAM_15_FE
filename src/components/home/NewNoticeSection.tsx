import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardList from '../common/CardList';
import { getAllUnreadNoticeList } from '@/apis/notice';
import NoneNoticeCard from '../common/NoneNoticeCard';

const NewNoticeSection = () => {
	const [noticeDataList, setNoticeDataList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isZero, setIsZero] = useState(false);

	useEffect(() => {
		const getDataList = async () => {
			const result = await getAllUnreadNoticeList();
			setNoticeDataList(result);
			setLoading(false);
			if (result.length == 0) {
				setIsZero(true);
			}
			console.log(result);
		};
		getDataList();
	}, []);

	return (
		<Main>
			{!loading && isZero && <NoneNoticeCard text="새 가정통신문이 없어요!" />}
			{!loading && !isZero && <CardList dataList={noticeDataList} />}
			{loading ? <Loading src="/img/loadingSpinner.gif" alt="로딩" /> : <></>}
		</Main>
	);
};

export default NewNoticeSection;

const Main = styled.div`
	width: 100%;
	min-height: 20rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Loading = styled.img`
	width: 100px;
`;
