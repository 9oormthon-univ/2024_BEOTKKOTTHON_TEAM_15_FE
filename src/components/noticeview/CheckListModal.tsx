import { CheckData } from '@/types/request'
import React from 'react'
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";

interface CheckListModalProps {
    onModal: React.Dispatch<React.SetStateAction<boolean>>;
    readData? : CheckData[];
    unreadData? : CheckData[];
}
const CheckListModal = (props: CheckListModalProps) => {
  return (
    <ModalWrapper>
    <ModalContainer>
        <Confirm>
        <ModalBtn>
            <IoMdClose size='3rem' onClick={()=>props.onModal(false)}/>
        </ModalBtn>
            <Column>
            <div className='title'>확인자</div>
            {props.readData?.map((data,i) => (
                    <div key={i}>{data.username}</div>
				))}
            </Column>
            <Column><div className='title'>미확인자</div>
            {props.unreadData?.map((data,i) => (
                    <div key={i}>{data.username}</div>
				))}</Column>
        </Confirm>
    </ModalContainer>
</ModalWrapper>
  )
}

export default CheckListModal

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
    height: 30rem;
    overflow-y: scroll;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	background-color: #D9D9D9;
    border-radius: 20px;
	z-index: 2;
`;

const Confirm = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	font-size: 2rem;
	text-align: center;
	gap: 0.5rem;
`;

const ModalBtn = styled.div`
	width: 90%;
	display: flex;
	justify-content: end;
	align-items: center;
	font-size: 2rem;
    height: 3rem;
    padding-top: 1rem;
`;

const NameSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: start;
`

const Column = styled.div`
	width: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin-bottom: 1rem;
    .title{
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
`
