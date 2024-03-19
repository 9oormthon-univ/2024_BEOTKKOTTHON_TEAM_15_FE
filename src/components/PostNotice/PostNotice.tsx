'use client';

import React from 'react';
import styled from 'styled-components';

const PostNotice = () => {
	return (
		<Wrapper>
			<TitleWrapper>
				<Title>가정통신문 제목</Title>
				<TitleInput placeholder="제목을 입력해주세요." />
			</TitleWrapper>
			<InfoWrapper>
				<Title>가정통신문 내용</Title>
				<InfoInput placeholder="내용을 입력해주세요." />
			</InfoWrapper>
			<DeadLineWrapper></DeadLineWrapper>
		</Wrapper>
	);
};

export default PostNotice;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 3rem 2rem;
	gap: 2rem;
`;

const TitleWrapper = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Title = styled.div`
	font-size: 1.5rem;
	margin-left: 1rem;
	font-weight: 600;
	gap: 2rem;
`;

const TitleInput = styled.input`
	width: 83%;
	padding: 1rem 2rem;
	border-radius: 2rem;
	border: 1px solid #c9bca2;
	background-color: #fff5e0;
	outline: none;
	gap: 2rem;
`;

const InfoInput = styled.textarea`
	width: 83%;
	height: 100px;
	padding: 2rem 2rem;
	border-radius: 2rem;
	border: 1px solid #c9bca2;
	background-color: #fff5e0;
	outline: none;
	gap: 2rem;
`;

const InfoWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const DeadLineWrapper = styled.div`
	width: 100%;
`;
