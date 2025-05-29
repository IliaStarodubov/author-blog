import { request } from '../utils/request.ts';
import { AppDispatch } from '../store.ts';
import { addComment } from './addComment.ts';

export const addCommentAsync =
	(postId: string, content: string) => (dispatch: AppDispatch) => {
		request(`/posts/${postId}/comments`, 'POST', { content }).then((comment) => {
			dispatch(addComment(comment.data));
		});
	};
