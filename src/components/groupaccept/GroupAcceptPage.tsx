'use client'

import React from 'react';
import { useRouter, usePathname, useParams} from 'next/navigation';

const GroupAcceptPage = () => {
  const router = useRouter();
	const pathname = usePathname();
	const params = useParams<{ id: string}>();
	const groupId = params.id;
	console.log(groupId);
  return (
    <div>GroupAcceptPage</div>
  )
}

export default GroupAcceptPage