import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LuBell } from 'react-icons/lu';
import { FiSettings } from "react-icons/fi";
import { usePathname, useRouter } from 'next/navigation';
import { TABS } from '@/utils/constant';
import SearchHeaderBar from './SearchHeaderBar';

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
				<SearchHeaderBar />
			) : (
				<LogoGroup>
					<FiSettings cursor="pointer" size="2rem" color="#93613B"/>
					<LuBell cursor="pointer" size="2rem" color="#93613B" />
				</LogoGroup>
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

const LogoGroup = styled.div`
	display : flex;
	width: fit-content;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
`