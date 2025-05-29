import { ACTION_TYPE } from './actionType';

export const addComment = (comment: string) => ({
	type: ACTION_TYPE.ADD_COMMENT,
	payload: comment,
});
