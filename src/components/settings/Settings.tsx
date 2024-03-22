'use client';

import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';
import { BiBell } from 'react-icons/bi';
import { BiBellOff } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { logOut } from '@/apis/login';

const Settings = () => {
	const [alert, setAlert] = useState(true);
	const router = useRouter();

	const handleLogout = () => {
		logOut();
		router.push('/');
	};

	const onOffAlert = () => {
		if (alert) {
			setAlert(false);
		} else {
			setAlert(true);
		}
	};
	return (
		<ArticleWrapper>
			<ListBox className="with-bottom" onClick={onOffAlert}>
				<div>웹 푸시 알람 설정</div>
				{alert ? <BiBell size="26px" /> : <BiBellOff size="26px" />}
			</ListBox>
			<ListBox onClick={() => router.push('/service')}>
				<div>서비스 이용약관</div>
				<FiChevronRight size="26px" />
			</ListBox>
			<ListBox onClick={() => router.push('/privacy')}>
				<div>개인정보 처리방침</div>
				<FiChevronRight size="26px" />
			</ListBox>
			<ListBox>
				<div>서비스 이용 문의</div>
				<FiChevronRight size="26px" />
			</ListBox>
			<ListBox onClick={handleLogout}>
				<div>로그아웃</div>
				<FiChevronRight size="26px" />
			</ListBox>
			<ListBox>
				<div>탈퇴하기</div>
				<HiOutlineArrowRightOnRectangle size="26px" />
			</ListBox>
		</ArticleWrapper>
	);
};

export default Settings;

const ArticleWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
`;

const ListBox = styled.div`
	display: flex;
	flex-direction: row;
	width: 90%;
	justify-content: space-between;
	padding: 2rem 0rem 2rem 1rem;
	font-size: 2rem;
	font-weight: 400;
	&.with-bottom {
		border-bottom: 1px solid rgba(240, 240, 240, 1);
	}
`;
