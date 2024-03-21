import React, { useState } from 'react';
import styled from 'styled-components';

type ImgProps = {
	text?: string;
	id: string;
	setImage?: any;
};

const ProfileImg = (props: ImgProps) => {
	const [uploadedImage, setUploadedImage] = useState<File | null>(null);
	const [previewImg, setPreviewImg] = useState('/img/BasicImg.png');

	const insertImg = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files || e.target.files.length === 0) {
			setPreviewImg('/img/BasicImg.png');
			return;
		}

		const file = e.target.files[0];
		setUploadedImage(file);
		props.setImage(file);

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
				<ImgInput
					type="file"
					accept="image/jpg, image/jpeg, image/png"
					id={props.id}
					onChange={(e) => insertImg(e)}
					style={{ display: 'none' }}
				/>
				<PreviewImg
					src={previewImg}
					onClick={() => {
						const inputElement = document.getElementById(props.id) as HTMLInputElement;
						if (inputElement) {
							inputElement.click();
						}
					}}
					alt="preview"
					style={{ cursor: 'pointer' }}
				/>
			</ImgSection>
			{props.text && <ImgLabel htmlFor="imageInput">{props.text}</ImgLabel>}
		</UploadWrapper>
	);
};

export default ProfileImg;

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
	width: 180px;
	height: 180px;
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
