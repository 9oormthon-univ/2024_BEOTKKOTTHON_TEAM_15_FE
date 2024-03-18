import { SampleType } from '@/utils/constant';
import React from 'react';
import styled from 'styled-components';
import { LuArrowRightCircle } from 'react-icons/lu';

const NoticeCard = ({ notice }: { notice: SampleType }) => {
	return (
		<Main>
			<Card>
				<Top id="top">
					<Title>{notice.title}</Title>
					<Span>
						<span className="tag">Leader</span>
						<span id="leader">{notice.leader}</span>
						<span className="tag">남은 시간</span>
						<span id="limit-time">00:45:30</span>
					</Span>
				</Top>
				<Middle></Middle>
				<Bottom>
					<CheckCount id="check">
						<div>확인 {notice.check}명</div>
						<div>미확인 {notice.no_check}명</div>
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
	transition: background-color 0.4s, border-color 0.4s;
	cursor: pointer;
	&:hover {
		background-color: #4f7b59;
		border: 3px solid #4f7b59;
		#top {
			opacity: 0;
			transition: opacity 0.2s;
		}
		#check {
			opacity: 1;
			transition: opacity 0.2s;
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
	margin-bottom: 1rem;
	width: 90%;
`;
const Span = styled.span`
	font-size: 1.2rem;
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
	width: 90%;
`;

const Bottom = styled.div`
	display: flex;
	align-items: end;
	width: 90%;
	justify-content: space-between;
`;
const CheckCount = styled.div`
	opacity: 0;
	font-weight: 600;
	font-size: 2.5rem;
	margin-bottom: 1rem;
  color:#FFF9EE;
`;
