import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './lib/registry';
import RecoidContextProvider from './recoilContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '가정통신문',
	description: 'Goorm Univ 2th - 벚꽃톤 가정통신문',
	authors: [{ name: '벚꽃톤 가정통신문' }],
	creator: '가정통신문',
	publisher: '가정통신문',
	keywords: ['가정통신문', '벚꽃톤', '구름톤', 'goorm', 'kakao', '공지', '대학생', '동아리', '알림'],
	icons: {
		icon: '/img/icon.png',
	},
	openGraph: {
		title: '가정통신문',
		description: '대학생들의 효율적인 의사소통',
		url: 'https://goormnotification.vercel.app/',
		siteName: '가정통신문',
		images: [
			{
				url: 'https://goormnotification.vercel.app/img/og_img.png',
			},
		],
		type: 'website',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<StyledComponentsRegistry>
					<RecoidContextProvider>{children}</RecoidContextProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
