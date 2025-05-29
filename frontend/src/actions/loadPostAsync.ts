import { setPostData } from './setPostData';
import { request } from '../utils/request.ts';
import { AppDispatch } from '../store.ts';

export const loadPostAsync = (postId: string | undefined) => (dispatch: AppDispatch) =>
	request(`/posts/${postId}`).then((postData) => {
		if (postData.data) {
			dispatch(setPostData(postData.data));
		}

		return postData;
	});
