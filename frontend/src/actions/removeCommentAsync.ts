import { AppDispatch } from '../store.ts';
import { request } from '../utils/request.ts';
import { removeComment } from './removeComment.ts';

export const removeCommentAsync =
	(postId: string, id: string) => (dispatch: AppDispatch) => {
		request(`/posts/${postId}/comments/${id}`, 'DELETE').then(() => {
			dispatch(removeComment(id));
		});
	};
