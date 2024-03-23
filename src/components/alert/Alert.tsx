'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BiSolidBellRing } from 'react-icons/bi';

const Alert = () => {
	return (
		<>
			<ListBox className="with-bottom">
				<div>{'구름톤 유니브 2기에 "필독📢" 공지가 발행되었습니다.'}</div>
				<BiSolidBellRing size="26px" className="margin-right" />
			</ListBox>
			<ListBox className="with-bottom">
				<div>구름톤 유니브 2기 가입이 승인되었습니다!</div>
				<BiSolidBellRing size="26px" className="margin-right" />
			</ListBox>
		</>
	);
};

export default Alert;

const ListBox = styled.div`
	display: flex;
	flex-direction: row;
	width: 90%;
	justify-content: space-between;
	padding: 3rem 0rem 2rem 0.7rem;
	font-size: 2rem;
	font-weight: 400;
	cursor: pointer;
	&.with-bottom {
		width: 98.2%;
		border-bottom: 2px solid rgba(240, 240, 240, 1);
	}
	div {
		margin-left: 2rem;
	}
	.margin-right {
		@keyframes shake {
			0%,
			100% {
				transform: rotate(0);
			}
			10%,
			30%,
			50%,
			70%,
			90% {
				transform: rotate(-10deg);
			}
			20%,
			40%,
			60%,
			80% {
				transform: rotate(10deg);
			}
		}
		animation: shake 2.5s ease-in-out infinite;
		margin-right: 2rem;
	}
`;
