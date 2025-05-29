import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { PATH_SEND } from '../../../constants/iconsPath';
import { Comment } from './components/comment/comment';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole } from '../../../selectors';
import { addCommentAsync } from '../../../actions';
import { ROLE } from '../../../constants/role';
import { AppDispatch } from '../../../store';

const CommentsContainer = ({
	className,
	comments,
	postId,
}: {
	className?: string;
	comments: [];
	postId: string;
}) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch<AppDispatch>();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (postId: string, content: string) => {
		dispatch(addCommentAsync(postId, content));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						name="comment"
						value={newComment}
						placeholder="Комментарий..."
						onChange={({ target }) => setNewComment(target.value)}
					></textarea>
					<Icon
						isButton={true}
						onClick={() => onNewCommentAdd(postId, newComment)}
						size={25}
						path={PATH_SEND}
						margin="0 0 0 10px"
					/>
				</div>
			)}

			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						postId={postId}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 40px auto;

	& .new-comment {
		display: flex;
	}

	& textarea {
		margin: 0 0 20px;
		color: black;
		resize: none;
		padding: 15px;
		width: 545px;
		height: 229px;
		background-color: #f9f9f9;
		font-size: 18px;
		border-radius: 10px;
		border: none;
		box-shadow: 0px 0px 36px 17px rgb(233 233 233 / 82%);
	}
`;
