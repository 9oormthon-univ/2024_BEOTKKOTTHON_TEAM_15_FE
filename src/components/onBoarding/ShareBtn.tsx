import React from 'react';
import { BiShareAlt } from 'react-icons/bi';
import styled from 'styled-components';

const ShareBtn = () => {
	const handleShareClick = React.useCallback(async () => {
		try {
			await navigator.clipboard.writeText('https://goormnotification.vercel.app/');
			alert('📜 링크 복사 완료 📜');
		} catch (e) {
			if (typeof e === 'object' && e instanceof Error) {
				if (e.name === 'AbortError') {
					// AbortError는 사용자가 공유 창을 닫은 경우에 발생합니다.
					// console.log('사용자가 공유 창을 닫았습니다.');
				}
			} else {
				// 다른 오류 처리
				alert('지원하지 않는 브라우저입니다.');
			}
		}
	}, []);

	return (
		<ShareBtn1 onClick={handleShareClick}>
			<BiShareAlt size="18px" />
		</ShareBtn1>
	);
};

export default ShareBtn;

const ShareBtn1 = styled.div`
	width: 30px;
	border-radius: 18.5px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin-top: 3px;
`;
