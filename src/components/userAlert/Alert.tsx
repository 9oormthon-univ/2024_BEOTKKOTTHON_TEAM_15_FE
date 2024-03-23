'use client';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { BiSolidBellRing } from 'react-icons/bi';
import { getAllUnreadNoticeList } from '@/apis/notice';
import { useRouter } from 'next/navigation';
interface dataType {
	title: string;
	id: string;
	teamId: string;
}
const Alert = () => {
	const [noticeDataList, setNoticeDataList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isZero, setIsZero] = useState(false);
	const [dataList, setDataList] = useState<dataType[]>();
	const router = useRouter();
	useEffect(() => {
		const getDataList = async () => {
			const result = await getAllUnreadNoticeList();
			setNoticeDataList(result);
			setLoading(false);
			if (result.length == 0) {
				setIsZero(true);
			}
			console.log(result);
			setDataList(result);
		};
		getDataList();
	}, []);
	const handleClick = (props: dataType) => {
		router.push(`/notice?news=${props.id}&team=${props.teamId}`);
	};
	return (
		<>
			{' '}
			{loading ? <Loading src="/img/loadingSpinner.gif" alt="로딩" /> : <></>}{' '}
			{dataList &&
				dataList.slice(0, 9).map((data, idx) => (
					<ListBox key={idx} className="with-bottom" onClick={() => handleClick(data)}>
						{' '}
						<div>{data.title}</div> <BiSolidBellRing size="26px" className="margin-right" />{' '}
					</ListBox>
				))}{' '}
		</>
	);
};
export default Alert;
const ListBox = styled.div`
	display: flex;
	flex-direction: row;
	width: 90%;
	justify-content: space-between;
	padding: 3rem 0rem 2rem 0.7rem;
	font-size: 2rem;
	font-weight: 400;
	cursor: pointer;
	&.with-bottom {
		width: 98.2%;
		border-bottom: 2px solid rgba(240, 240, 240, 1);
	}
	div {
		margin-left: 2rem;
	}
	.margin-right {
		@keyframes shake {
			0%,
			100% {
				transform: rotate(0);
			}
			10%,
			30%,
			50%,
			70%,
			90% {
				transform: rotate(-10deg);
			}
			20%,
			40%,
			60%,
			80% {
				transform: rotate(10deg);
			}
		}
		animation: shake 2.5s ease-in-out infinite;
		margin-right: 2rem;
	}
`;
const Loading = styled.img`
	width: 100px;
`;
