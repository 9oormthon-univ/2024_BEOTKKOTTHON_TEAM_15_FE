import React from 'react';
import styled from 'styled-components';
import ShareBtn from '../onBoarding/ShareBtn';
import { useRouter } from 'next/navigation';

interface ModalProps {
	homeUrl: string;
	pageUrl: string;
	text1: string;
	text2?: string;
	text3: string;
	share?: boolean;
}

const Modal = (props: ModalProps) => {
	const router = useRouter();

	const goHome = () => {
		router.push(props.homeUrl);
	};

	const goPage = () => {
		router.push(props.pageUrl);
	};

	return (
		<ModalWrapper>
			<ModalContainer>
				<Confirm>
					<div className="modal2">{props.text1}</div>
					<div className="modal2">{props.text2}</div>
					{props.share && (
						<ShareWrapper>
							<div className="link">goormnotification.vercel.app</div>
							<ShareBtn />
						</ShareWrapper>
					)}
				</Confirm>
				<ModalBtn>
					<Btn1 onClick={goHome}>확인</Btn1>
					<Btn2 onClick={goPage}>{props.text3}</Btn2>
				</ModalBtn>
			</ModalContainer>
		</ModalWrapper>
	);
};

export default Modal;

const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.77);
	z-index: 100;
`;

const ModalContainer = styled.div`
	width: 40rem;
	height: 20rem;
	border-radius: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	background-color: #f4e6c8;
	z-index: 2;
`;

const Confirm = styled.div`
	width: 80%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 4rem;
	text-align: center;
	gap: 0.5rem;

	.modal {
		font-size: 2rem;
		font-weight: 600;
	}
	.modal2 {
		font-size: 2rem;
		font-weight: 600;
	}
	.link {
		display: flex;
		font-size: 1.6rem;
	}
`;

const ModalBtn = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	border-top: 2px solid white;
`;

const Btn1 = styled.div`
	width: 100%;
	padding: 0.8rem 1.5rem;
	border-right: 2px solid white;
	cursor: pointer;
`;

const Btn2 = styled.div`
	width: 100%;
	padding: 0.8rem 1.5rem;
	cursor: pointer;
`;

const ShareWrapper = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.7rem 4rem;
	background-color: #c9bca2;
	border-radius: 2rem;
`;
