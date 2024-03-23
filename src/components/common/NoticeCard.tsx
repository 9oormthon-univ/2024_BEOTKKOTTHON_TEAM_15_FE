import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LuArrowRightCircle } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
import { ContentsType } from '@/types/request';

// 현재 시간
const getCurrentTime = () => {
	return new Date();
};
// 남은 시간
const getRemainingTime = (limitTime: string) => {
	const now = getCurrentTime();
	const limit = new Date(limitTime);
	const timeDifference = limit.getTime() - now.getTime();

	if (timeDifference <= 0) {
		return '시간 마감';
	} else {
		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
		return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
	}
};

const NoticeCard = ({ notice }: { notice: ContentsType }) => {
	const router = useRouter();
	const [remainingTime, setRemainingTime] = useState(getRemainingTime(notice.limitTime));

	const formatContent = (content: string) => {
		return content?.split(/\\n|\n/).map((line, index) => (
			<React.Fragment key={index}>
				{line}
				<br />
			</React.Fragment>
		));
	};

	useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(getRemainingTime(notice.limitTime));
        }, 1000);

        return () => clearInterval(timer);
    }, [notice.limitTime]);

	return (
		<Main>
			<Card
				onClick={() => {
					router.push(`/notice?news=${notice.id}&team=${notice.teamId}`);
				}}
			>
				<Top id="top">
					<Title>{notice.title}</Title>
					<Span>
						<span className="tag">Leader</span>
						<span id="leader">{notice.writer}</span>
						<span className="tag">남은 시간</span>
						<span id="limit-time">{remainingTime}</span>
					</Span>
				</Top>
				<Middle id="middle">
					<Content>{formatContent(notice.content)}</Content>
					<Mosaic />
				</Middle>
				<Bottom>
					<CheckCount id="check">
						<div>확인 {notice.readMemberCount}명</div>
						<div>미확인 {notice.notReadMemberCount}명</div>
					</CheckCount>
					<LuArrowRightCircle id="" size="2rem" color="#c9bca2" />
				</Bottom>
			</Card>
		</Main>
	);
};

export default NoticeCard;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
`;

const Card = styled.div`
	width: 93%;
	height: 30rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: #fff5e0;
	border-radius: 20px;
	border: 3px solid #c9bca2;
	padding: 2rem 0rem;
	cursor: pointer;
	/* transition: background-color 0.4s, border-color 0.4s; */
	cursor: pointer;
	&:hover {
		background-color: #4f7b59;
		border: 3px solid #4f7b59;
		#top,
		#middle {
			opacity: 0;
		}
		#check {
			opacity: 1;
			transition: opacity 0.3s;
		}
	}
`;

const Top = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Title = styled.div`
	font-weight: 600;
	font-size: 2rem;
	margin-bottom: 1.2rem;
	width: 90%;
`;
const Span = styled.span`
	font-size: 1rem;
	font-weight: 600;
	width: 90%;
	.tag {
		background-color: #c9bca2;
		color: #555555;
		padding: 0.5rem 1rem;
		border-radius: 15px;
		margin-right: 0.6rem;
	}
	#leader {
		margin-right: 1rem;
	}
	#limit-time {
		color: #e04d47;
	}
`;

const Middle = styled.div`
	width: 100%;
	font-size: 1.2rem;
	font-weight: 400;
	margin-top: 1rem;
	height: 18rem;
	display: flex;
	justify-content: center;
	overflow: hidden;
	position: relative;
`;
const Content = styled.div`
	width: 90%;
`;
const Mosaic = styled.div`
	position: absolute;
	background: linear-gradient(182deg, rgba(255, 255, 255, 0) 3.97%, #fff5e0 95.42%);
	z-index: 2;
	top: 0;
	width: 100%;
	height: 100%;
`;

const Bottom = styled.div`
	display: flex;
	align-items: end;
	width: 90%;
	justify-content: flex-end;
	position: relative;
	padding-top: 0.2rem;
`;

const CheckCount = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	opacity: 0;
	font-weight: 600;
	font-size: 2.5rem;
	position: absolute;
	z-index: 2;
	color: #fff9ee;
`;
