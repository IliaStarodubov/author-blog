import { ACTION_TYPE, ActionType } from '../actions';
import { ROLE } from '../constants/role';
import { UserState } from '../types/store';

// export interface UserState {
// 	id: string | null;
// 	login: string | null;
// 	roleId: number;
// 	session: string | null;
// }

const initialState: UserState = {
	id: null,
	login: null,
	roleId: ROLE.GUEST,
	session: null,
};

export const userReducer = (state: UserState = initialState, action: ActionType) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.LOGOUT:
			return initialState;

		default:
			return state;
	}
};
