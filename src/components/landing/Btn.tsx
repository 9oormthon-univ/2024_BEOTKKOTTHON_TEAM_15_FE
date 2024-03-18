import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

type BtnProps = {
	text: string;
	routerName: string;
};

const Btn = (props: BtnProps) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/${props.routerName}`);
	};
	return <Wrapper onClick={handleClick}>{props.text}</Wrapper>;
};

export default Btn;

const Wrapper = styled.div`
	width: 55%;
	min-width: 280px;
	border-radius: 30px;
	text-align: center;
	border: 1px solid black;
	font-size: 2rem;
	padding: 1rem 2rem;
	&:hover {
		color: white;
		background-color: #8b5e3c;
		border: 1px solid #8b5e3c;
	}
`;
