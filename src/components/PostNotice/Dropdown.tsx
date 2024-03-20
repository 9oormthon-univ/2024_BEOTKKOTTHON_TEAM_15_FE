'use client';

import React from 'react';
import styled from 'styled-components';

interface DropdownProps {
	label: string;
	options: number[];
	onChange: (value: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onChange }) => {
	return (
		<Wrapper>
			<Drop onChange={(e) => onChange(parseInt(e.target.value, 10))}>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</Drop>
			<Label>{label} </Label>
		</Wrapper>
	);
};

export default Dropdown;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
`;

const Drop = styled.select`
	padding: 0.5rem 1rem;
	width: 90px;
	border-radius: 1.5rem;
	border: 1px solid #c9bca2;
	background-color: #fff5e0;
	outline: none;
	text-align: center;
`;

const Label = styled.label`
	font-size: 1.3rem;
`;
