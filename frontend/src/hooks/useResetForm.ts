import { useEffect } from 'react';
import { useStore } from 'react-redux';

export const useResetForm = (reset: () => void) => {
	const store = useStore();

	useEffect(() => {
		let currentWasLogout = (store.getState() as { app: { wasLogout: boolean } }).app
			.wasLogout;

		return store.subscribe(() => {
			const previousWasLogout = currentWasLogout;

			// currentWasLogout = store.getState().app.wasLogout;
			currentWasLogout = (store.getState() as { app: { wasLogout: boolean } }).app
				.wasLogout;

			if (currentWasLogout !== previousWasLogout) {
				reset();
			}
		});
	}, [reset, store]);
};
