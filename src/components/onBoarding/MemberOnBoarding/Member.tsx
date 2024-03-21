'use client';

import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import GroupCard from './GroupCard';
import MemberModal from './MemberModal';
import { LuSearch } from 'react-icons/lu';

const Member = () => {
	const inputText = useRef<HTMLInputElement>(null);
	const [modal, setModal] = useState(false);

	const onModal = () => {
		setModal(true);
	};

	// 엔터키 눌렀을때
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			// Enter 키가 눌렸을 때 검색 함수 호출
		}
	};
	// 검색 아이콘 눌렀을때
	const handleClick = () => {
		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);
		}
		// 검색함수 호출
	};

	return (
		<Wrapper>
			{modal && <MemberModal />}
			<Container>
				<TextWrapper>
					<Text>OOO멤버님 환영합니다</Text>
					<Ask>OOO님이 속한 그룹은 어디인가요?</Ask>
				</TextWrapper>
				<SearchBox>
					<LuSearch size="2rem" color="#93613B" style={{ strokeWidth: 3 }} onClick={handleClick} />
					<SearchInput className="searchInputBox" ref={inputText} onKeyDown={handleKeyDown} />
				</SearchBox>
				<GroupCard onModal={onModal} />
			</Container>
			<Character alt={'ch'} src={'/img/PaperMan.png'} />
		</Wrapper>
	);
};

export default Member;

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	background: linear-gradient(to bottom, #93613b 50%, #fff5e0 50%);
`;

const Container = styled.div`
	width: 37rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 6rem;
	margin-top: 7%;
	margin-left: 15%;
	@media (max-width: 1200px) {
		margin-top: 13%;
		margin-left: 10%;
	}
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	color: white;
`;

const Text = styled.div`
	font-size: 2rem;
`;

const Ask = styled.div`
	font-size: 3rem;
`;

const Character = styled.img`
	width: 30%;
	min-width: 300px;
	position: absolute;
	top: 13rem;
	right: 25rem;
	@media (max-width: 1200px) {
		top: 20rem;
		right: 2rem;
	}
`;
const SearchBox = styled.div`
	height: 4rem;
	width: 100%;
	background-color: #fff5e0;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 1rem;
	margin-bottom: 2rem;
`;

const SearchInput = styled.input`
	width: 100%;
	height: 100%;
	font-size: 2rem;
	border: none;
	outline: none;
	padding-left: 1rem;
	background-color: transparent;
`;
