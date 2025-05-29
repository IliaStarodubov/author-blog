import { UserState } from '../reducers';

export const selectUserLogin = ({ user }: { user: UserState }) => user.login;
