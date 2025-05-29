import { ACTION_TYPE } from '../actions';

export interface AppState {
	wasLogout?: boolean;
	modal: {
		isOpen?: boolean;
		text?: string;
		onConfirm?: () => void;
		onCancel?: () => void;
	};
}

const initialState: AppState = {
	wasLogout: false,
	modal: {
		isOpen: false,
		text: '',
		onConfirm: () => {}, // в идеале функий в стейте быть не должно
		onCancel: () => {},
	},
};

// Тип для действия LOGOUT
interface LogoutAction {
	type: typeof ACTION_TYPE.LOGOUT;
}

// Объединяем все возможные типы действий
type AppActionTypes = LogoutAction;

export const appReducer = (
	state: AppState = initialState,
	action: AppActionTypes,
): AppState => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};
		case ACTION_TYPE.OPEN_MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					...action.payload,
					isOpen: true,
				},
			};

		case ACTION_TYPE.CLOSE_MODAL:
			return initialState;
		default:
			return state;
	}
};
