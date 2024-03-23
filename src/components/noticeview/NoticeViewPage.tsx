'use client';

import { changeReadState, checkReadList, getNoticeDetail } from '@/apis/notice';
import { CheckData, ContentsType } from '@/types/request';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CheckListModal from './CheckListModal';

const NoticeViewPage = () => {
	const params = useSearchParams();
	const newsId = params.get('news');
	const teamId = params.get('team');
	const [data, setData] = useState<ContentsType>();
	const [readData, setReadData] = useState<CheckData[]>()
	const [unreadData, setUnreadData] = useState<CheckData[]>()
	const [modal, onModal] = useState(false)
	const router = useRouter();

	const formatContent = (content?: string) => {
		return content?.split(/\\n|\n/).map((line, index) => (
			<React.Fragment key={index}>
				{line}
				<br />
			</React.Fragment>
		));
	};

	const handleSubmit = async () => {
		try {
			if (newsId) {
				const result = await changeReadState(newsId);
				alert('공지 읽기 완료!');
				setTimeout(() => {
					router.refresh();
				}, 1000);
			}
		} catch (error) {
			console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
		}
	};

	useEffect(() => {
		const getDataList = async () => {
			if (teamId && newsId) {
				const result = await getNoticeDetail(teamId, newsId);
				console.log(result);
				setData(result);
			}
		};
		const getReadDataList = async () => {
			if (newsId) {
				const result = await checkReadList(newsId);
				console.log(result);
				const readMembers = result.filter((member: CheckData)=> member.checkStatus === 'READ');
				const unreadMembers = result.filter((member: CheckData) => member.checkStatus !== 'READ');
				setReadData(readMembers);
				setUnreadData(unreadMembers);
			}
		};
		getDataList();
		getReadDataList();
	}, [teamId, newsId]);

	return (
		<Main>
			{modal ? <CheckListModal onModal={onModal} readData={readData} unreadData={unreadData}/> : <></>}
			<Title>{data?.title}</Title>
			<Line />
			<Row>
				<Tag>
					<div className="tag membertag">Leader</div>
					<div id="text">{data?.writer}</div>
				</Tag>
				<Tag>
					<div className="tag membertag">남은 시간</div>
					<div id="time">00:45:46</div>
				</Tag>
				<Tag>
					<div className="tag leadertag" onClick={()=>{onModal(true)}}>확인</div>
					<div id="text">{data?.readMemberCount}명</div>
				</Tag>
				<Tag>
					<div className="tag leadertag" onClick={()=>{onModal(true)}}>미확인</div>
					<div id="text">{data?.notReadMemberCount}명</div>
				</Tag>
			</Row>
			<Line />
			<Section>
				<div>{formatContent(data?.content)}</div>
			</Section>
			<Section>
				{data && data.imageUrl1 && <Image src={data?.imageUrl1} alt="첨부 이미지1" />}
				{data && data.imageUrl2 && <Image src={data?.imageUrl2} alt="첨부 이미지2" />}
			</Section>
			<Submit>
				<SubmitBtn onClick={handleSubmit}>확인</SubmitBtn>
			</Submit>
		</Main>
	);
};

export default NoticeViewPage;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Section = styled.div`
	width: 100%;
	height: fit-content;
	padding: 2rem 0rem;
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 2rem;
	color: #28282a;
	padding: 2rem 0rem;
`;

const Line = styled.div`
	width: 100%;
	height: 2px;
	background-color: #c9bca2;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem 0rem;
	.tag {
		width: fit-content;
		padding: 0.5rem 1rem;
		font-size: 1.2rem;
		border-radius: 15px;
	}
	.membertag {
		border: 1px solid #4f7b59;
	}
	.leadertag {
		background-color: #4f7b59;
		border: 1px solid #4f7b59;
		color: white;
	}
	#text {
		font-weight: 600;
		font-size: 1.5rem;
	}
	#time {
		color: red;
		font-weight: 600;
		font-size: 1.5rem;
	}
`;

const Tag = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-right: 1rem;
`;

const Image = styled.img`
	width: 80%;
`;

const Submit = styled.div`
	display: flex;
	width: 80%;
	align-items: center;
	justify-content: end;
`;
const SubmitBtn = styled.div`
	width: fit-content;
	padding: 1rem 3rem;
	border-radius: 20px;
	background-color: #4f7b59;
	color: #fff5e0;
	font-size: 1.5rem;
`;
