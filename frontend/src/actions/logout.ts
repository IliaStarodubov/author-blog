import { ACTION_TYPE } from './actionType';
import { request } from '../utils/request.ts';

export const logout = () => {
	request('api/logout', 'POST');

	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
