import { SampleType } from '@/utils/constant'
import React, { useState } from 'react'
import styled from 'styled-components'
import { FaChevronDown } from "react-icons/fa6";
import NoticeCard from '../common/NoticeCard';


const GroupCardList = ({ dataList }: { dataList?: SampleType[] }) => {
    const [selectedDataSet, setSelectedDataSet] = useState(dataList);
	const [visibleCount, setVisibleCount] = useState<number>(4);

    const handleShowMore = () => {
		setVisibleCount((prevCount) => prevCount + 4);
	};
  return (
    <Main>
    {/* <CardWrapper>
        {selectedDataSet &&
            selectedDataSet.slice(0, visibleCount).map((notice) => <NoticeCard key={notice.title} notice={notice} />)}
    </CardWrapper> */}
    <Bottom>
        {selectedDataSet && selectedDataSet.length > 4 && visibleCount < selectedDataSet.length && (
            <ShowMoreButton onClick={handleShowMore}>
                더보기
                <FaChevronDown size="1.2rem" color="white" />
            </ShowMoreButton>
        )}
    </Bottom>
</Main>
  )
}

export default GroupCardList


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
