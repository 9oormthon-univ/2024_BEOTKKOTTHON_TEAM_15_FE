'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from './DatePick';
import UploadImg from '../common/UploadImg';
import Modal from '@/components/common/Modal';
import { useParams } from 'next/navigation';
import { postNotice } from '@/apis/notice';

const Post = () => {
	// 그룹 아이디 가져오기
	const params = useParams<{ id: string }>();
	const groupId = params.id;

	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [minute, setMinute] = useState<string>('');
	const [image1, setImage1] = useState<any>(null);
	const [image2, setImage2] = useState<any>(null);

	const [modal, setModal] = useState(false);

	const onModal = () => {
		setModal(true);
	};

	const handlePost = () => {
		const formData = new FormData();
		const images = [image1, image2];

		images.forEach((image) => {
			if (image !== null) {
				// 이미지가 null이 아닌 경우에만 실행
				formData.append('imageFiles', image);
			}
		});

		// 객체를 JSON 문자열로 변환하여 추가
		const dto = JSON.stringify({ title: title, content: content, minute: parseInt(minute) });

		// blob 함수를 감싸서 file객체 제외한 부분에 content-type 지정해주기
		const blob = new Blob([dto], { type: 'application/json' });
		formData.append('newsSaveRequestDto', blob);
		postNotice(formData, groupId);
		onModal();
	};

	return (
		<Wrapper>
			{modal && (
				<Modal homeUrl="/home" pageUrl="/groups" text1="가정통신문이 발행되었습니다!" text3="그룹페이지로 이동" />
			)}
			<TitleWrapper>
				<Title>가정통신문 제목</Title>
				<TitleInput placeholder="제목을 입력해주세요." onChange={(e) => setTitle(e.target.value)} />
			</TitleWrapper>
			<InfoWrapper>
				<Title>가정통신문 내용</Title>
				<InfoInput placeholder="내용을 입력해주세요." onChange={(e) => setContent(e.target.value)} />
			</InfoWrapper>
			<Title>이미지 업로드</Title>
			<UploadWrapper>
				<UploadImg id={'imageInput1'} setImage={setImage1} />
				<UploadImg id={'imageInput2'} setImage={setImage2} />
			</UploadWrapper>
			<DeadLineWrapper>
				<Title>열람기한</Title>
				<DatePicker time={minute} setTime={setMinute} />
			</DeadLineWrapper>
			<BtnWrapper>
				<Btn onClick={() => handlePost()}>작성하기</Btn>
			</BtnWrapper>
		</Wrapper>
	);
};

export default Post;

const Wrapper = styled.div`
	width: 100%;
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
	resize: none;
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
