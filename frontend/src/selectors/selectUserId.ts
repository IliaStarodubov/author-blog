import { UserState } from '../reducers';

export const selectUserId = ({ user }: { user: UserState }) => user.id;
