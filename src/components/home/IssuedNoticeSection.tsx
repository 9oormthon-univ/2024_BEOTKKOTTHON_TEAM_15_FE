import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardList from '../common/CardList';
import NoneNoticeCard from '../common/NoneNoticeCard';
import { getMyNotice } from '@/apis/notice';

const IssuedNoticeSection = () => {
	const [noticeDataList, setNoticeDataList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isZero, setIsZero] = useState(false);

	useEffect(() => {
		const getDataList = async () => {
			const result = await getMyNotice();
			setNoticeDataList(result);
			setLoading(false);
			if (result.length == 0) {
				setIsZero(true);
			}
		};
		getDataList();
	}, []);
	return (
		<Main>
			{!loading && isZero && <NoneNoticeCard text="아직 발행한 가정통신문이 없어요!" />}
			{!loading && !isZero && <CardList dataList={noticeDataList} />}
			{loading ? <Loading src="/img/loadingSpinner.gif" alt="로딩" /> : <></>}
		</Main>
	);
};

export default IssuedNoticeSection;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 20rem;
`;

const Loading = styled.img`
	width: 100px;
`;
