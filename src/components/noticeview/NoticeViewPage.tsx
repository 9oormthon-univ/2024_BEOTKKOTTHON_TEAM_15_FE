'use client';

import React from 'react';
import styled from 'styled-components';

const NoticeViewPage = () => {
	return (
		<Main>
			<Title>{`{가정통신문 제목}`}</Title>
			<Line />
			<Row>
				<Tag>
					<div className="tag membertag">Leader</div>
					<div id="text">{`{공지 발행자명}`}</div>
				</Tag>
				<Tag>
					<div className="tag membertag">남은 시간</div>
					<div id="time">00:45:46</div>
				</Tag>
				<Tag>
					<div className="tag leadertag">확인</div>
					<div id="text">nn명</div>
				</Tag>
				<Tag>
					<div className="tag leadertag">미확인</div>
					<div id="text">nn명</div>
				</Tag>
			</Row>
      <Line />
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
