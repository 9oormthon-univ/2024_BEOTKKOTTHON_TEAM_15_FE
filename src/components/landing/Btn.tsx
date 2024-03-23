import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

type BtnProps = {
	text: string;
	routerName: string;
	color: string;
};

const Btn = (props: BtnProps) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/${props.routerName}`);
	};
	return (
		<Wrapper color={props.color} onClick={handleClick}>
			{props.text}
		</Wrapper>
	);
};

export default Btn;

const Wrapper = styled.div`
	min-width: 400px;
	border-radius: 30px;
	text-align: center;
	font-size: 1.5rem;
	padding: 1rem 2rem;
	background: ${(props) => props.color};
	color: white;
	cursor: pointer;
`;
