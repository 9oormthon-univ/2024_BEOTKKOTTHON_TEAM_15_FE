import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './homeinfo.css';
import { Autoplay, Pagination } from 'swiper/modules';

const InfoSection = () => {
	return (
		<Main>
			<SwipeSection>
				<Swiper
					loop={true}
					slidesPerView={1}
          spaceBetween={50}
					pagination={true}
					modules={[Pagination, Autoplay]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					className="mySwiper"
				>
					<StyledSwiperSlide>
						<Logo src="/img/ADbanner.png" />
					</StyledSwiperSlide>
					<StyledSwiperSlide>
						<Logo src="/img/ADbanner2.png" />
					</StyledSwiperSlide>
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
	margin-bottom: 1rem;
`;

const SwipeSection = styled.div`
	width: 100%;
	max-height: fit-content;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
	width: 100%;
	height: auto;
	background-color: none;
	margin-bottom: 3rem;
	img {
		max-width: 100%;
		height: auto;
	}
`;

const Logo = styled.img``;
