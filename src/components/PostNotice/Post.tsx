import { postNotice } from '@/apis/notice';

interface postType {
	modal: any;
	image1: any;
	image2: any;
	title: string;
	content: string;
	minute: string;
	id: string;
}

export function PostFunc(props: postType) {
	const formData = new FormData();
	formData.append('imageFile1', props.image1);
	formData.append('imageFile2', props.image2);

	// 객체를 JSON 문자열로 변환하여 추가
	const dto = JSON.stringify({ title: props.title, content: props.content, minute: parseInt(props.minute) });
	const blob = new Blob([dto], { type: 'application/json' });
	formData.append('newsSaveRequestDto', blob);
	postNotice(formData, props.id);
	props.modal();
}
