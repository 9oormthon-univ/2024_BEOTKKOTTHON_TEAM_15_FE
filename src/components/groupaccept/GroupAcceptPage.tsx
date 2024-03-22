'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { answerToRequest, checkTeamRequestList } from '@/apis/group';
import { AcceptRequest } from '@/types/request';
import styled from 'styled-components';

const GroupAcceptPage = () => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams<{ id: string }>();
	const groupId = params.id;
	const roleCategory = ['전체', '멤버', '리더'];
	const [requestList, setRequestList] = useState<AcceptRequest[]>();
	const [selectedRole, setSelectedRole] = useState<string>('전체');

	const filteredRequestList = requestList?.filter((item) => {
		if (selectedRole === '전체') {
			return true;
		} else {
			return item.requestRole === selectedRole;
		}
	});

	const handleSelectBtn = (role: string) => {
		setSelectedRole(role);
	};

	const handleAcceptBtn = async (isAccept: boolean, memberId: number) => {
		try {
			const result = await answerToRequest(Number(groupId), Number(memberId), isAccept);
			alert('요청을 성공적으로 처리했습니다.');
		} catch (error) {
			console.error('요청 처리 중 오류가 발생했습니다:', error);
			alert('요청 처리 중 오류가 발생했습니다.');
		}
	};

	useEffect(() => {
		const getDataList = async () => {
			const result = await checkTeamRequestList(groupId);
			setRequestList(result);
		};
		getDataList();
	}, [groupId]);

	return (
		<Main>
			<BtnGroup>
				{roleCategory.map((role) => (
					<GroupSortBtn key={role} $active={selectedRole === role} onClick={() => handleSelectBtn(role)}>
						{role}
					</GroupSortBtn>
				))}
			</BtnGroup>
			<CardWrapper>
				{filteredRequestList?.map((request) => (
					<Data key={request.requestId}>
						<div className="user">{request.username}</div>
						<span>
							<Btn className="role">{request.requestRole == 'MEMBER' ? '멤버' : '리더'}</Btn>
							<Btn className="selectBtn" onClick={()=>{handleAcceptBtn(true,request.memberId)}}>수락</Btn>
							<Btn className="selectBtn" onClick={()=>{handleAcceptBtn(false,request.memberId)}}>거절</Btn>
						</span>
					</Data>
				))}
			</CardWrapper>
		</Main>
	);
};

export default GroupAcceptPage;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
`;
const CardWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const BtnGroup = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	overflow-y: scroll;
	gap: 1rem;
  margin-top: 2rem;
	margin-bottom: 1.3rem;
`;
const GroupSortBtn = styled.div<{ $active: boolean }>`
	background-color: ${(props) => (props.$active ? ' #4f7b59' : 'none')};
	color: ${(props) => (props.$active ? 'white' : '#4f7b59')};
	border: 1.5px solid #4f7b59;
	padding: 0.2rem 1.3rem;
	border-radius: 2rem;
	font-size: 1.2rem;
	cursor: pointer;
`;
const Data = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.user {
		font-size: 2rem;
		font-weight: 600;
	}
  .btngroup{
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .role{
    background-color: #4f7b59;
	color: white;
  }
	.selectBtn {
		cursor: pointer;
		border: 1px #4f7b59 solid;
		color: #4f7b59;
		background-color: none;
	}
`;
const Btn = styled.div`
	padding: 0.4rem 1.7rem;
	border-radius: 2rem;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
