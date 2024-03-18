import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NoticeCard from './NoticeCard';
import { SampleType } from '@/utils/constant';

const CardList = ({ dataList }: { dataList?: SampleType[] }) => {
	const [selectedDataSet, setSelectedDataSet] = useState(dataList);
	const [groupList, setGroupList] = useState(['전체']);
	const [selectedGroup, setSelectedGroup] = useState('전체');

	useEffect(() => {
		if (dataList) {
			const groups = dataList.map((item) => item.group);
			const uniqueGroups = Array.from(new Set(groups));
			setGroupList(['전체', ...uniqueGroups]);
		}
	}, [dataList]);

	const handleSelectBtn = (groupName: string) => {
		setSelectedGroup(groupName);
		if (groupName === '전체') {
			setSelectedDataSet(dataList); // 전체를 선택하면 모든 공지사항을 선택
		} else {
			const filteredData = dataList?.filter((item) => item.group === groupName);
			setSelectedDataSet(filteredData); // 선택된 그룹에 해당하는 공지사항만 선택
		}
	};

	return (
		<Main>
			<BtnGroup>
				{groupList.map((group) => (
					<GroupSortBtn key={group} $active={selectedGroup === group} onClick={() => handleSelectBtn(group)}>
						{group}
					</GroupSortBtn>
				))}
			</BtnGroup>
			<CardWrapper>
				{selectedDataSet && selectedDataSet.map((notice) => <NoticeCard key={notice.title} notice={notice} />)}
			</CardWrapper>
		</Main>
	);
};

export default CardList;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
`;
const CardWrapper = styled.div`
	width: 90%;
	display: grid;
	grid-template-columns: repeat(2, minmax(310px, 1fr));
	justify-content: center;
	padding: initial;
	height: fit-content;
`;
const BtnGroup = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	overflow-y: scroll;
	gap: 1rem;
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
