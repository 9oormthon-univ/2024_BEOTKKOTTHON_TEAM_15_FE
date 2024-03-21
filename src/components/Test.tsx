'use client';
// FCM 테스트 파일
import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';
import { useSetRecoilState } from 'recoil';
import { userDeviceAtom } from '@/app/recoilContextProvider';

const Index = () => {
	const setUserDevice = useSetRecoilState(userDeviceAtom);
	const onMessageFCM = async () => {
		// 브라우저에 알림 권한 요청
		const permission = await Notification.requestPermission();
		if (permission !== 'granted') return;

		const firebaseApp = initializeApp({
			apiKey: 'AIzaSyDHvnzUbvIsO9bpumeWV-9b3PdwmOmQJAQ',
			authDomain: 'newsletter-d876c.firebaseapp.com',
			projectId: 'newsletter-d876c',
			storageBucket: 'newsletter-d876c.appspot.com',
			messagingSenderId: '863624721528',
			appId: '1:863624721528:web:4401b268001460f2f2e98d',
			measurementId: 'G-VHRRQB5EHF',
		});

		const messaging = getMessaging(firebaseApp);

		// 인증서 키 값
		getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_KEY_PAIR })
			.then((currentToken) => {
				if (currentToken) {
					// 정상적으로 토큰 발급 시 콘솔 출력
					console.log(currentToken);
					setUserDevice(currentToken);
				} else {
					console.log('No registration token available. Request permission to generate one.');
				}
			})
			.catch((err) => {
				console.log('An error occurred while retrieving token. ', err);
			});

		// 브라우저를 보고 있을 때에는 콘솔로 출력
		onMessage(messaging, (payload) => {
			console.log('Message received. ', payload);
		});
	};

	useEffect(() => {
		onMessageFCM();
	}, []);

	return (
		<div>
			<h1>FCM 테스트</h1>
		</div>
	);
};

export default Index;
