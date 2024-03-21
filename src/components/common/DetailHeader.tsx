import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { usePathname, useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';

const DetailHeader = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [tab, setTab] = useState(getInitialTab(pathname));

	useEffect(() => {
		window.scrollTo(0, 0);
		setTab(getInitialTab(pathname));
	}, [pathname]);

	return (
		<HeaderBox>
			{tab === 'privacy' ? (
				<Content>
					<FaChevronLeft
						cursor="pointer"
						size="1.5rem"
						onClick={() => {
							router.back();
						}}
					/>
					<Text>개인정보처리방침</Text>
					<div></div>
				</Content>
			) : tab === 'service' ? (
				<Content>
					<FaChevronLeft
						cursor="pointer"
						size="1.5rem"
						onClick={() => {
							router.back();
						}}
					/>
					<Text>서비스 이용 약관</Text>
					<div></div>
				</Content>
			) : tab === 'post' ? (
				<Content>
					<FaChevronLeft
						cursor="pointer"
						size="1.5rem"
						onClick={() => {
							router.push(`/groups`);
						}}
					/>
					<Text>새 가정통신문 만들기</Text>
					<div></div>
				</Content>
			) : tab === 'new' ? (
				<Content>
					<FaChevronLeft
						cursor="pointer"
						size="1.5rem"
						onClick={() => {
							router.push(`/groups`);
						}}
					/>
					<Text>새 그룹 만들기</Text>
					<div></div>
				</Content>
			) : tab === 'modify' ? (
				<Content>
					<FaChevronLeft
						cursor="pointer"
						size="1.5rem"
						onClick={() => {
							router.push(`/mypage`);
						}}
					/>
					<Text>프로필수정</Text>
					<div></div>
				</Content>
			) : tab === 'mypage-setting' ? (
				<Content>
					<FaChevronLeft
						cursor="pointer"
						size="1.5rem"
						onClick={() => {
							router.push(`/mypage`);
						}}
					/>
					<Text>환경설정</Text>
					<div></div>
				</Content>
			) : tab === 'alert' ? (
				<Content>
					<FaChevronLeft
						cursor="pointer"
						size="1.5rem"
						onClick={() => {
							router.back();
						}}
					/>
					<Text>알림</Text>
					<div></div>
				</Content>
			) : tab === 'accept' ? (
				<Content>
					<FaChevronLeft
						cursor="pointer"
						size="1.5rem"
						onClick={() => {
							router.back();
						}}
					/>
					<Text>새 멤버, 새 리더 수락하기</Text>
					<div></div>
				</Content>
			) : tab === 'group-setting' ? (
				<Content>
					<FaChevronLeft
						cursor="pointer"
						size="1.5rem"
						onClick={() => {
							router.back();
						}}
					/>
					<Text>그룹 설정</Text>
					<div></div>
				</Content>
			) : (
				<></>
			)}
		</HeaderBox>
	);
};

export default DetailHeader;

const getInitialTab = (pathname: string): string => {
	if (pathname.includes('post')) {
		// 가정통신문 작성
		return 'post';
	} else if (pathname.includes('new')) {
		// 새 그룹 만들기
		return 'new';
	} else if (pathname.includes('mypage') && pathname.includes('modify')) {
		// 프로필 수정
		return 'modify';
	} else if (pathname.includes('mypage') && pathname.includes('setting')) {
		// 환경설정
		return 'mypage-setting';
	} else if (pathname.includes('alert')) {
		// 알림창
		return 'alert';
	} else if (pathname.includes('group') && pathname.includes('accept')) {
		// 수락페이지
		return 'accept';
	} else if (pathname.includes('group') && pathname.includes('setting')) {
		// 그룹설정 페이지
		return 'group-setting';
	} else if (pathname.includes('privacy')) {
		// 그룹설정 페이지
		return 'privacy';
	} else if (pathname.includes('service')) {
		// 그룹설정 페이지
		return 'service';
	} else {
		return '';
	}
};

const HeaderBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem;
	font-size: 2rem;
	font-weight: 600;
	padding: 1rem 3rem;
	background-color: white;
	height: 100%;
	box-shadow: 4px 4px 14px -0.5px rgba(0, 0, 0, 0.2);
`;

const Text = styled.div`
	margin-left: -2rem;
`;
