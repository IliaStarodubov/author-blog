import { SetStateAction, useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostContent } from './postContent/postContent';
import { Comments } from './comments/comments';
import { useMatch, useParams } from 'react-router-dom';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors';
import styled from 'styled-components';
import { PostForm } from './postForm/postForm';
import { Error } from '../../components/error/error';
import { PrivateContent } from '../../components/trivate-content/private-content';
import { ROLE } from '../../constants/role';
import { AppDispatch } from '../../store';

const PostContainer = ({ className }: { className?: string }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const dispatch = useDispatch<AppDispatch>();
	const params = useParams();
	const isCreating = useMatch('/post');
	const isEditing = useMatch('/post/:id/edit');
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		dispatch(loadPostAsync(params.id)).then(
			(postData: { error: SetStateAction<null> }) => {
				setError(postData.error);
				setIsLoading(false);
			},
		);
	}, [dispatch, params.id, isCreating]);

	if (isLoading) {
		return null;
	}

	const SpecificPostPage =
		isCreating || isEditing ? (
			<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
				<div className={className}>
					<PostForm post={post} />
				</div>
			</PrivateContent>
		) : (
			<div className={className}>
				<PostContent post={post} />
				<Comments comments={post.comments} postId={post.id} />
			</div>
		);

	return error ? <Error error={error} /> : SpecificPostPage;
};

export const Post = styled(PostContainer)`
	padding: 0 80px;
	margin: 40px 0;
`;
