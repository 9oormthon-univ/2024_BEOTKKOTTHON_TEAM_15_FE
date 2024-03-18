'use client';

import StyledComponentsRegistry from '../lib/registry';
import styled from 'styled-components';
import NavBar from '@/components/common/NavBar';
import Header from '@/components/common/Header';

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<StyledComponentsRegistry>
			<Main>
				<MainBox>
					<Header />
					{children}
				</MainBox>
				<NavBar />
			</Main>
		</StyledComponentsRegistry>
	);
}

const Main = styled.div`
	width: 100%;
	min-height: 95vh;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #FFF9EE;
`;

const MainBox = styled.div`
	background-color: #fff9ee;
	width: 98%;
	min-height: 95vh;
	height: fit-content;
	font-family: Pretendard;
  padding-bottom: 6rem;
	@media (min-width: 0px) {
		html {
			font-size: 8px;
		}
	}

	@media (min-width: 600px) {
		html {
			font-size: 10px;
		}
		width: 600px;
	}

	@media (min-width: 1024px) {
		html {
			font-size: 10px;
		}
		width: 600px;
	}
`;
