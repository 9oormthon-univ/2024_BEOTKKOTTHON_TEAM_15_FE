import { ContentsType, TeamType } from '@/types/request';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa6';
import NoticeCard from '../common/NoticeCard';
import NoneNoticeCard from '../common/NoneNoticeCard';

const AllCardList = ({ dataList, teamList }: { dataList?: ContentsType[]; teamList: TeamType[] }) => {
	const [selectedDataSet, setSelectedDataSet] = useState(dataList);
	const [groupList, setGroupList] = useState<string[]>(['전체']);
	const [selectedGroup, setSelectedGroup] = useState<string>('전체');
	const [visibleCount, setVisibleCount] = useState<number>(4);

	useEffect(() => {
		// 팀 이름 배열 생성
		if (teamList) {
			const groups = teamList.map((team) => team.name);
			const uniqueGroups = Array.from(new Set(groups));
			setGroupList(['전체', ...uniqueGroups]);
		}
	}, [teamList]);

	const handleSelectBtn = (groupName: string) => {
		setSelectedGroup(groupName);
		if (groupName === '전체') {
			setSelectedDataSet(dataList || []);
		} else {
			const filteredData = dataList?.filter((item) => item.teamName === groupName);
			setSelectedDataSet(filteredData || []);
		}
		setVisibleCount(4);
	};

	const handleShowMore = () => {
		setVisibleCount((prevCount) => prevCount + 4);
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
			{selectedDataSet ? (
				<>
					<CardWrapper>
						{selectedDataSet &&
							selectedDataSet.slice(0, visibleCount).map((notice) => <NoticeCard key={notice.title} notice={notice} />)}
					</CardWrapper>
					<Bottom>
						{selectedDataSet && selectedDataSet.length > 4 && visibleCount < selectedDataSet.length && (
							<ShowMoreButton onClick={handleShowMore}>
								더보기
								<FaChevronDown size="1.2rem" color="white" />
							</ShowMoreButton>
						)}
					</Bottom>
				</>
			) : (
				<NoneNoticeCard text="가정통신문이 없어요!" />
			)}
		</Main>
	);
};

export default AllCardList;

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
const Bottom = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: end;
`;
const ShowMoreButton = styled.div`
	background-color: #4f7b59;
	color: white;
	padding: 0.4rem 1.3rem;
	border-radius: 2rem;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	gap: 0.2rem;
`;
