'use client';

import React, { useState } from 'react';
import Dropdown from './Dropdown';
import styled from 'styled-components';

type DropDownProps = {
	time: string;
	setTime: React.Dispatch<React.SetStateAction<string>>;
};

const DatePicker = ({ time, setTime }: DropDownProps) => {
	const [day, setDay] = useState<number>(0);
	const [hour, setHour] = useState<number>(0);
	const [minute, setMinute] = useState<number>(0);

	// 각 드롭다운의 옵션을 생성하는 간단한 함수
	const generateOptions = (start: number, end: number): number[] => {
		const options = [];
		for (let i = start; i <= end; i++) {
			options.push(i);
		}
		return options;
	};

	const calculateTotalMinutes = (d: number, h: number, m: number): number => {
		return d * 24 * 60 + h * 60 + m;
	};

	const handleDayChange = (value: number) => {
		setDay(value);
		const newTime = calculateTotalMinutes(value, hour, minute).toString();
		setTime(newTime);
	};

	const handleHourChange = (value: number) => {
		setHour(value);
		const newTime = calculateTotalMinutes(day, value, minute).toString();
		setTime(newTime);
	};

	const handleMinuteChange = (value: number) => {
		setMinute(value);
		const newTime = calculateTotalMinutes(day, hour, value).toString();
		setTime(newTime);
	};

	return (
		<Wrapper>
			<Dropdown label="일" options={generateOptions(0, 7)} onChange={handleDayChange} />
			<Dropdown label="시간" options={generateOptions(0, 23)} onChange={handleHourChange} />
			<Dropdown label="분" options={generateOptions(0, 59)} onChange={handleMinuteChange} />
		</Wrapper>
	);
};

export default DatePicker;

const Wrapper = styled.div`
	display: flex;
	width: 88%;
	justify-content: space-evenly;
`;
