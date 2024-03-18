import React, { useState } from 'react';
import styled from 'styled-components';

const UploadImg = () => {
	const [uploadedImage, setUploadedImage] = useState<File | null>(null);
	const [previewImg, setPreviewImg] = useState('/img/BasicImg.png');

	const insertImg = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files || e.target.files.length === 0) {
			setPreviewImg('/img/BasicImg.png');
			return;
		}

		const file = e.target.files[0];
		setUploadedImage(file);

		let reader = new FileReader();

		reader.onloadend = () => {
			const previewImgUrl = reader.result;
			if (typeof previewImgUrl === 'string') {
				setPreviewImg(previewImgUrl);
			}
		};

		reader.readAsDataURL(file);
	};

	return (
		<UploadWrapper>
			<ImgSection>
				<PreviewImg src={previewImg} />
				<ImgInput
					type="file"
					accept="image/jpg, image/jpeg, image/png"
					id="imageInput"
					onChange={(e) => insertImg(e)}
				/>
			</ImgSection>
			<ImgLabel htmlFor="imageInput">이미지 업로드</ImgLabel>
		</UploadWrapper>
	);
};

export default UploadImg;

const UploadWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ImgSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 190px;
	height: 190px;
	overflow: hidden;
	border-radius: 50%;
`;

const ImgLabel = styled.label`
	padding-bottom: 4%;
	font-weight: bold;
	font-size: 16px;
	color: #555555;
	display: inline-block;
	cursor: pointer;
`;

const ImgInput = styled.input`
	display: none;
`;

const PreviewImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
`;
