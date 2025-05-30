import { ACTION_TYPE } from './actionType';

export const removeComment = (commentId: string) => ({
	type: ACTION_TYPE.REMOVE_COMMENT,
	payload: commentId,
});
