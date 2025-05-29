import { PostState } from '../reducers';

export const selectPost = ({ post }: { post: PostState }) => post;
