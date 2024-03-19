import React from 'react';
import styled from 'styled-components';
import { Group } from '../home/GroupList';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import UserGroupCard from './UserGroupCard';


const settings = {
	spaceBetween: 10,
	scrollbar: { draggable: true, el: null },
	slidesPerView: 2.5,
};

const UserGroupList = ({ dataList }: { dataList: Group[] }) => {
	return (
		<Main>
			<SwipeSection>
            <Swiper {...settings} className="mySwiper">
					{dataList.map((group, i) => (
						<SwiperSlide key={i}>
							<UserGroupCard key={i} group={group} />
						</SwiperSlide>
					))}
				</Swiper>
			</SwipeSection>
		</Main>
	);
};

export default UserGroupList;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SwipeSection = styled.div`
	width: 100%;
	max-height: fit-content;
`;

