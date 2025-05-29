import { request } from '../utils/request.ts';

export const removePostAsync = (id: string) => () => request(`/posts/${id}`, 'DELETE');
