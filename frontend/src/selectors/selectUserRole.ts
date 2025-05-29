import { UserState } from '../reducers';

export const selectUserRole = ({ user }: { user: UserState }) => user.roleId;
