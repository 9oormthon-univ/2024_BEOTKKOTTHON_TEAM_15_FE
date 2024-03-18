import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './homeinfo.css';
import { Autoplay, Pagination } from 'swiper/modules';

const settings = {
	spaceBetween: 20,
	navigation: {},
	scrollbar: { draggable: true, el: null },
	slidesPerView: 1,
};

const InfoSection = () => {
	return (
		<Main>
			<SwipeSection>
      <Swiper loop={true} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        }}className="mySwiper">
      <StyledSwiperSlide>Slide 1</StyledSwiperSlide>
					<StyledSwiperSlide>Slide 2</StyledSwiperSlide>
					<StyledSwiperSlide>Slide 3</StyledSwiperSlide>
					<StyledSwiperSlide>Slide 4</StyledSwiperSlide>
				</Swiper>
			</SwipeSection>
		</Main>
	);
};

export default InfoSection;

const Main = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 1.5rem;
`;

const SwipeSection = styled.div`
	width: 100%;
	max-height: fit-content;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
	width: 100%;
	max-width: 600px;
	height: 100px;
	background-color: white;
  margin-bottom: 3rem;
`;
