import React from 'react';
import styled from 'styled-components';

type BtnProps = {
	text: string;
};

const Btn = (props: BtnProps) => {
	return <Wrapper>{props.text}</Wrapper>;
};

export default Btn;

const Wrapper = styled.div`
	width: 50%;
	min-width: 300px;
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
