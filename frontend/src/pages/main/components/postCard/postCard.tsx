import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { PATH_CALENDAR, PATH_COMMENT } from '../../../../constants/iconsPath';
import { Link } from 'react-router-dom';

interface PostCardContainerProps {
	className?: string;
	id: string;
	title: string;
	publishedAt: string;
	commentsCount: [];
	imageUrl: string;
}

const PostCardContainer = ({
	className,
	id,
	title,
	publishedAt,
	commentsCount,
	imageUrl,
}: PostCardContainerProps) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon path={PATH_CALENDAR} size={25} margin="0 7px 0 0" />
							{new Date(publishedAt).toLocaleString('ru-RU')}
						</div>
						<div className="commments-count">
							<Icon path={PATH_COMMENT} size={25} margin="0 7px 0 0" />
							{commentsCount.length}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 330px;
	margin: 23px;
	box-shadow: 0px 0px 36px -8px rgba(0, 0, 0, 0.6);
	border-radius: 25px;

	& img {
		display: block;
		width: 330px;
		height: 230px;
		border-radius: 30px;
		padding: 15px;
	}

	& h4 {
		margin: 0 0 1px;
	}

	& .post-card-footer {
		padding: 0 15px 15px;
	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
		margin: 5px 0 0;
	}

	& .published-at {
		display: flex;
	}

	& .commments-count {
		display: flex;
	}
`;
