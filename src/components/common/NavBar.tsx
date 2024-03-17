import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RxPerson } from 'react-icons/rx';
import { PiFolder } from 'react-icons/pi';
import { HiOutlineHome } from 'react-icons/hi2';
import { TABS } from '@/utils/constant';

const NavBar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [tab, setTab] = useState(getInitialTab(pathname));

	useEffect(() => {
		window.scrollTo(0, 0);
		setTab(getInitialTab(pathname));
	}, [pathname]);

	const handleClick = (page: string) => () => {
		router.push(page);
	};

	return (
		<NavBox>
			<Tabs>
				<Tab $active={tab === TABS.GROUP} onClick={handleClick(`/group`)}>
					<PiFolder className='icon' id='group' cursor="pointer" size="2rem"/>
                    <div className='text'>GROUP</div>
				</Tab>
				<Tab $active={tab === TABS.HOME}  onClick={handleClick(`/home`)}>
					<HiOutlineHome className='icon' id='home' cursor="pointer" size="2rem"/>
                    <div className='text'>HOME</div>
				</Tab>
				<Tab $active={tab === TABS.MY_PAGE} onClick={handleClick(`/mypage`)}>
					<RxPerson className='icon' id='my' cursor="pointer" size="2rem" />
                    <div className='text'>MY</div>
				</Tab>
			</Tabs>
		</NavBox>
	);
};

export default NavBar;

// URL에 기반한 초기 탭 상태를 설정하는 함수
const getInitialTab = (pathname: string): number => {
	if (pathname.includes('group')) {
		return TABS.GROUP;
	} else if (pathname.includes('mypage')) {
		return TABS.MY_PAGE;
	} else {
		return TABS.HOME;
	}
};

const NavBox = styled.div`
	width: 100%;
	background-color: white;
	position: absolute;
	bottom: 0;
	z-index: 1;
	height: 5rem;
	box-shadow: 4px 4px 14px -1px rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Tabs = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 600px) {
		width: 600px;
	}

	@media (min-width: 1024px) {
		width: 600px;
	}
`;

const Tab = styled.div<{ $active: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
    font-size: 1.7rem;
    font-weight: 600;
	width: 30%;
    cursor: pointer;
    .text{
        margin-left: 0.5rem;
    }
    .icon{
        color: ${(props) => (props.$active ? '#F26868' : '#c6c6c6')};
    }
    #group{
        stroke-width: 5px;
    }
    #home{
        stroke-width: 2px;
    }
    #my{
        stroke-width: 0.5px;
    }
`;
