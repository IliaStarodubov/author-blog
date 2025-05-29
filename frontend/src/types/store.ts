// src/types/store.ts

import { Post, Comment } from './models';

// Состояние пользователя
export interface UserState {
	id: string | null;
	login: string | null;
	roleId: number;
	session: string | null;
}

// Состояние постов
export interface PostState {
	posts: Post[];
	currentPost: Post | null;
}

// Состояние комментариев
export interface CommentState {
	comments: Comment[];
}

// Тип состояния для всего Redux Store
export interface RootState {
	user: UserState;
	posts: PostState;
	comments: CommentState;
}
