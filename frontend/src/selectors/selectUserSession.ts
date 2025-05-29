import { UserState } from '../types/store';

export const selectUserSession = ({ user }: { user: UserState }) => user.session;
