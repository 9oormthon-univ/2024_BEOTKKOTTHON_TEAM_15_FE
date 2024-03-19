'use client';
import { useRecoilValue } from 'recoil';
import { isLoginAtom } from '@/app/recoilContextProvider';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import UploadImg from '../common/UploadImg';

const MyPage = () => {
	const isLogin = useRecoilValue(isLoginAtom);
	const [modalOpen, setModalOpen] = useState(false);
	const route = useRouter();

	return (
		<>
			<Wrapper>
				<ProfileWrapper>
					<UploadImg text={'이미지 변경'} />
					<Name>[닉네임]</Name>
					<Email>cjy3458@naver.com</Email>
				</ProfileWrapper>
				<Line />
				<DocWrapper>
					<Title>가정통신문</Title>
					<Notice>N건의 미열람 가정통신문이 있어요.</Notice>
				</DocWrapper>
			</Wrapper>
		</>
	);
};

export default MyPage;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 3rem 1rem;
	gap: 1.5rem;
`;

const Name = styled.div`
	font-size: 2.5rem;
	font-weight: 500;
`;

const Email = styled.div`
	text-align: center;
	background-color: #f4e6c8;
	padding: 1rem 8rem;
	border-radius: 2rem;
	color: #c9bca2;
	font-size: 1.5rem;
`;

const Line = styled.div`
	background-color: #93613b;
	height: 0.5rem;
	width: 100%;
	margin-top: 2rem;
`;

const DocWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 5rem;
	gap: 2rem;
`;

const Title = styled.div`
	font-size: 2.2rem;
	font-weight: 600;
`;

const Notice = styled.div`
	width: 81%;
	border: 1px solid #c9bca2;
	padding: 1rem 3rem;
	border-radius: 1rem;
	font-size: 1.5rem;
`;
