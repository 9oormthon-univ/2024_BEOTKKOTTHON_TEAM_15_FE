'use client';
import { useRecoilValue } from 'recoil';
import { isLoginAtom, userEmailAtom, userNameAtom } from '@/app/recoilContextProvider';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import UploadImg from '../common/ProfileImg';
import ProfileImg from '../common/ProfileImg';
import AverageCard from './AverageCard';

const MyPage = () => {
	const isLogin = useRecoilValue(isLoginAtom);
	const [modalOpen, setModalOpen] = useState(false);
	const route = useRouter();
	const userName = useRecoilValue(userNameAtom);
	const userEmail = useRecoilValue(userEmailAtom);
	const [image, setImage] = useState();
	return (
		<>
			<Wrapper>
				<ProfileWrapper>
					<ProfileImg id={'imageInput'} text={'이미지 변경'} setImage={setImage} />
					<Name>{userName}</Name>
					<Email>{userEmail}</Email>
				</ProfileWrapper>
				<Line />
				<DocWrapper>
					<Title>가정통신문</Title>
					<Notice>2건의 미열람 가정통신문이 있어요.</Notice>
				</DocWrapper>
				<DocWrapper>
					<Title>{userName}님의 공지 평균 열람 시간</Title>
					<CardWrapper>
						<AverageCard title="전체" time="6분 14초" imgUrl="/img/nothingLogo.png" />
						<AverageCard title="구름톤 유니브 2기" time="14분 2초" imgUrl="/img/goorm.png" />
					</CardWrapper>
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
	background-color: #f4e6c8;
	height: 0.3rem;
	width: 100%;
	margin-bottom: 2rem;
`;

const DocWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding-left: 5rem;
	gap: 2rem;
	margin-bottom: 1.5rem;
`;

const Title = styled.div`
	font-size: 1.7rem;
	font-weight: 600;
`;

const Notice = styled.div`
	width: 81%;
	border: 1px solid #c9bca2;
	padding: 1rem 3rem;
	border-radius: 1rem;
	font-size: 1.5rem;
`;

const CardWrapper = styled.div`
	width: 100%;
	display: flex;
	gap: 1rem;
`;
