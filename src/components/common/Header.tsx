import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LuBell } from 'react-icons/lu';
import { usePathname, useRouter } from 'next/navigation';
import SearchBar from './SearchBar';
import { TABS } from '@/utils/constant';

const Header = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [tab, setTab] = useState(getInitialTab(pathname));

    useEffect(() => {
		window.scrollTo(0, 0);
		setTab(getInitialTab(pathname));
	}, [pathname]);

	return (
		<HeaderBox>
			<Logo src="/img/Group.png" />
			{tab === TABS.HOME ? (
				<LuBell cursor="pointer" size="2rem" color="#93613B" />
			) : tab === TABS.GROUP ? (
				<SearchBar />
			) : (
                <LuBell cursor="pointer" size="2rem" color="#93613B" />
			)}
		</HeaderBox>
	);
};

export default Header;

const getInitialTab = (pathname: string): number => {
	if (pathname.includes('group')) {
		return TABS.GROUP;
	} else if (pathname.includes('mypage')) {
		return TABS.MY_PAGE;
	} else {
		return TABS.HOME;
	}
};

const HeaderBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 5rem;
	padding-top: 1rem;
`;

const Logo = styled.img`
	height: 40%;
`;
