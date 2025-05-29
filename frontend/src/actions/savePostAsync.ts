import { setPostData } from './setPostData';
import { AppDispatch } from '../store.ts';
import { request } from '../utils/request.ts';

interface PostData {
	imageUrl: string;
	title: string;
	content: string;
}

export const savePostAsync =
	(id: string, newPostData: PostData) => (dispatch: AppDispatch) => {
		const saveRequest = id
			? request(`/posts/${id}`, 'PATCH', newPostData)
			: request('/posts', 'POST', newPostData);

		return saveRequest.then((updatedPost) => {
			dispatch(setPostData(updatedPost.data));

			return updatedPost.data;
		});
	};
