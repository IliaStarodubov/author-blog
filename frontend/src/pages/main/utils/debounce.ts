import { Dispatch, SetStateAction } from 'react';

export const debounce = (fn: Dispatch<SetStateAction<boolean>>, delay: number) => {
	let timeoutId: number | undefined;

	return (...args: Parameters<typeof fn>) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(fn, delay, ...args);
	};
};
