// src/types/actions.ts

import { UserState } from './store';

// Типы экшенов для пользователя
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

// Тип экшена для установки пользователя
export interface SetUserAction {
	type: typeof SET_USER;
	payload: Partial<UserState>;
}

// Тип экшена для выхода
export interface LogoutAction {
	type: typeof LOGOUT;
}

// Объединение всех экшенов пользователя
export type UserActionTypes = SetUserAction | LogoutAction;
