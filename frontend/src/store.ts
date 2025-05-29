import { configureStore } from '@reduxjs/toolkit';
import {
	appReducer,
	postReducer,
	postsReducer,
	userReducer,
	usersReducer,
} from './reducers';

export const store = configureStore({
	reducer: {
		app: appReducer,
		user: userReducer,
		users: usersReducer,
		post: postReducer,
		posts: postsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
