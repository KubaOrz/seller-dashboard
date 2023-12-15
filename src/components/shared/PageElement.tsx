import { FC, ReactNode } from 'react';
import { Navbar } from './Navbar';

export const PageElement: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={'h-screen flex flex-col'}>
			<Navbar />
			{children}
		</div>
	);
};
