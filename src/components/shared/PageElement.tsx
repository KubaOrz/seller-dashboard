import { FC, ReactNode } from 'react';
import { Navbar } from './navbar/Navbar';

export const PageElement: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={'h-screen flex flex-col'}>
			<Navbar />
			<div className={'w-full m-1/4'}>{children}</div>
		</div>
	);
};
