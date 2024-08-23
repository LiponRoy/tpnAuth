'use client';
import { useSession } from 'next-auth/react';

export default function UserInfo() {
	const { data: session } = useSession();

	return (
		<div className="grid place-items-center h-screen">
			<div>
				<div className=" text-slate-600 font-semibold text-2xl">
					Profile Info
				</div>
				<div className=" w-80 h-[2px] bg-orange-deep"></div>
				<div className="text-2xl pt-1">
					Name: <span className="font-bold pl-1">{session?.user?.name}</span>
				</div>
				<div className="text-2xl pt-1">
					Email: <span className="font-bold pl-1">{session?.user?.email}</span>
				</div>
			</div>
		</div>
	);
}
