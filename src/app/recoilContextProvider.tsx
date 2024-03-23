'use client';

import { RecoilRoot, atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// 예시 아톰 나중에 수정
export const isLoginAtom = atom({
	key: 'isLogin',
	default: false,
	effects_UNSTABLE: [persistAtom],
});

export const userNameAtom = atom({
	key: 'userName',
	default: '',
	effects_UNSTABLE: [persistAtom],
});

export const userEmailAtom = atom({
	key: 'userEmail',
	default: '1234',
	effects_UNSTABLE: [persistAtom],
});

export const userPhotoAtom = atom({
	key: 'userPhoto',
	default: '',
	effects_UNSTABLE: [persistAtom],
});

export const userRoleAtom = atom({
	key: 'userRole',
	default: '',
	effects_UNSTABLE: [persistAtom],
});

export const userDeviceAtom = atom({
	key: 'userDevice',
	default: '',
	effects_UNSTABLE: [persistAtom],
});

export const userAlertAtom = atom({
	key: 'userAlert',
	default: 'ALLOW',
	effects_UNSTABLE: [persistAtom],
});

export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
	return <RecoilRoot>{children}</RecoilRoot>;
}
