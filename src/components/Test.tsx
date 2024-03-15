'use client';

import React, { useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getMessaging, onMessage, getToken } from 'firebase/messaging'
 
const Index = () => {
 
  const onMessageFCM = async () => {
    // 브라우저에 알림 권한 요청
    const permission = await Notification.requestPermission()
    if (permission !== 'granted') return 
 
    const firebaseApp = initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    })
 
    const messaging = getMessaging(firebaseApp)
 
    // 인증서 키 값
    getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_KEY_PAIR }).then((currentToken) => {
      if (currentToken) {
        // 정상적으로 토큰 발급 시 콘솔 출력
        console.log(currentToken)
      } else {
        console.log('No registration token available. Request permission to generate one.')
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err)
    })
 
    // 브라우저를 보고 있을 때에는 콘솔로 출력
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload)
    })
  }
 
  useEffect(() => {
    onMessageFCM()
  }, [])
 
  return (
    <div>
      <h1>FCM 테스트</h1>
    </div>
  )
}
 
export default Index