import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { PATH_CALENDAR, PATH_DELETE } from '../../../constants/iconsPath';
import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../actions';
import { useNavigate } from 'react-router-dom';
import { ROLE } from '../../../constants/role';
import { checkAccess } from '../../../utils/checkAccess';
import { selectUserRole } from '../../../selectors';
import { AppDispatch } from '../../../store';

interface SpecialPanelContainerProps {
	className?: string;
	id: string;
	publishedAt?: string;
	editButton?: ReactNode;
	margin?: string;
}

const SpecialPanelContainer = ({
	className,
	id,
	publishedAt,
	editButton,
}: SpecialPanelContainerProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const navigate = useNavigate();
	const userRole = useSelector(selectUserRole);

	const onPostRemove = (id: string) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(id)).then(() => {
						navigate('/');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], userRole);

	return (
		<div className={className}>
			<div className="published_at">
				{publishedAt && (
					<Icon path={PATH_CALENDAR} size={25} margin="0 7px 0 0" />
				)}
				{publishedAt && new Date(publishedAt).toLocaleString('ru-RU')}
			</div>
			{isAdmin && (
				<div className="buttons">
					{editButton}
					{publishedAt && (
						<Icon
							isButton={true}
							onClick={() => onPostRemove(id)}
							size={25}
							path={PATH_DELETE}
							margin="0 7px 0 0"
						/>
					)}
				</div>
			)}
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	margin: ${({ margin }) => margin};
	display: flex;
	justify-content: space-between;

	& .published_at {
		font-size: 18px;
		display: flex;
	}

	& .buttons {
		display: flex;
	}
`;
