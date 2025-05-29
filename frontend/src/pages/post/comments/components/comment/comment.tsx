import styled from 'styled-components';
import { Icon } from '../../../../../components/icon/Icon';
import {
	PATH_CALENDAR,
	PATH_DELETE,
	PATH_USER,
	PATH_USER1,
} from '../../../../../constants/iconsPath';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, openModal, removeCommentAsync } from '../../../../../actions';
import { selectUserRole } from '../../../../../selectors';
import { ROLE } from '../../../../../constants/role';
import { AppDispatch } from '../../../../../store';

interface CommentContainerProps {
	className?: string;
	id: string;
	postId: string;
	author: string;
	content: string;
	publishedAt: string;
}

const CommentContainer = ({
	className,
	id,
	author,
	content,
	publishedAt,
	postId,
}: CommentContainerProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const userRole = useSelector(selectUserRole);

	const onCommentRemove = (id: string) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							path={PATH_USER}
							path1={PATH_USER1}
							size={25}
							margin="0 7px 0 0"
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon path={PATH_CALENDAR} size={25} margin="0 7px 0 0" />
						{new Date(publishedAt).toLocaleString('ru-RU')}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Icon
					isButton={true}
					onClick={() => onCommentRemove(id)}
					size={25}
					path={PATH_DELETE}
					margin="14px 0 0 10px;"
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;

	& .comment {
		width: 580px;
		margin: 10px auto;
		padding: 15px;

		font-size: 18px;
		border-radius: 10px;
		box-shadow: 0px 0px 36px 17px rgb(233 233 233 / 82%);
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;
