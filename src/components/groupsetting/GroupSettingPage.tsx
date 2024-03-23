'use client';

import React from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';

const GroupSettingPage = () => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams<{ id: string }>();
	const groupId = params.id;
	return <div>GroupSettingPage</div>;
};

export default GroupSettingPage;
