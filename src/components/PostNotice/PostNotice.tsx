'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from './DatePick';
import UploadImg from '../common/UploadImg';

const PostNotice = () => {
	const [title, setTitle] = useState<string>('');
	const [info, setInfo] = useState<string>('');
	const [time, setTime] = useState<string>('');

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
			<Title>이미지 업로드</Title>
			<UploadWrapper>
				<UploadImg id={'imageInput1'} />
				<UploadImg id={'imageInput2'} />
			</UploadWrapper>
			<DeadLineWrapper>
				<Title>열람기한</Title>
				<DatePicker time={time} setTime={setTime} />
			</DeadLineWrapper>
			<BtnWrapper>
				<Btn>작성하기</Btn>
			</BtnWrapper>
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
	font-size: 1.4rem;
	margin-left: 1rem;
	font-weight: 600;
	gap: 1rem;
`;

const TitleInput = styled.input`
	width: 83%;
	padding: 1rem 2.7rem;
	border-radius: 2rem;
	border: 1px solid #c9bca2;
	background-color: #fff5e0;
	outline: none;
	gap: 2rem;
`;

const InfoInput = styled.textarea`
	width: 83%;
	height: 100px;
	padding: 2rem 2.7rem;
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
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
`;

const UploadWrapper = styled.div`
	width: 93%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

const BtnWrapper = styled.div`
	width: 91%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	margin-top: 3rem;
`;

const Btn = styled.div`
	width: 60px;
	text-align: center;
	padding: 0.5rem 2rem;
	border: 1px solid #4f7b59;
	border-radius: 2.5rem;
	font-size: 1.5rem;
	color: #4f7b59;
	&:hover {
		color: white;
		background-color: #4f7b59;
	}
`;
