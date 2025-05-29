export interface User {
	id: number;
	login: string;
	password: string;
	registeredAt: string;
	roleId: number;
}

export interface Role {
	id: number;
	name: string;
}

export interface Post {
	id: number;
	title: string;
	imageUrl: string;
	content: string;
	publishedAt: string;
}

export interface Comment {
	id: number;
	authorId: number;
	postId: number;
	content: string;
	publishedAt: string;
}
