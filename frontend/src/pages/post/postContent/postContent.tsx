import styled from 'styled-components';
import { H2 } from '../../../components/h2/h2';
import { Icon } from '../../../components/icon/Icon';
import { PATH_EDIT, PATH_EDIT1 } from '../../../constants/iconsPath';
import { SpecialPanel } from '../specialPanel/specialPanel';
import { useNavigate } from 'react-router-dom';

interface PostContentState {
	id: string;
	title?: string;
	imageUrl?: string | undefined;
	publishedAt?: string;
	content?: string;
}

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, publishedAt, content },
}: {
	className?: string;
	post: PostContentState;
}) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<img src={imageUrl || undefined} alt={title} />
			<H2>{title}</H2>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="-25px 0 15px 0"
				editButton={
					<Icon
						isButton={true}
						onClick={() => navigate(`/post/${id}/edit`)}
						size={25}
						path={PATH_EDIT}
						path1={PATH_EDIT1}
						margin="0 13px 0 0"
					/>
				}
			/>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		width: 400px;
		height: 250px;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;
