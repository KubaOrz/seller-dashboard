import { FC, ReactNode } from 'react';
import { Navbar } from './navbar/Navbar';

export const PageElement: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={'min-h-screen h-full flex flex-col bg-secondary-light dark:bg-secondary-dark text-text-dark dark:text-text-light'}>
			<Navbar />
			<div className={'w-full m-1/4'}>{children}</div>
		</div>
	);
};
