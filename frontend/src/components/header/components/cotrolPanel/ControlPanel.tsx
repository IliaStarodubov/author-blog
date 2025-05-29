import styled from 'styled-components';
import { Icon } from '../../../icon/Icon';
import {
	PATH_ARROW,
	PATH_ARROW1,
	PATH_LOGOUT,
	PATH_LOGOUT2,
	PATH_NOTE,
	PATH_NOTE1,
	PATH_NOTE2,
	PATH_PEOPLE,
} from '../../../../constants/iconsPath';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../button/button';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserLogin, selectUserRole } from '../../../../selectors';
import { ROLE } from '../../../../constants/role';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils/checkAccess';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 20px;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }: { className?: string }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Link to="/login">
						<Button>Войти</Button>
					</Link>
				) : (
					<>
						<UserName>{login}</UserName>

						<Icon
							onClick={onLogout}
							path={PATH_LOGOUT}
							path1={PATH_LOGOUT2}
							margin="8px 0 0 9px"
						/>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<Icon
					isButton={true}
					onClick={() => navigate(-1)}
					path={PATH_ARROW}
					path1={PATH_ARROW1}
					margin="8px 0 0 9px"
				/>

				{isAdmin && (
					<>
						<Link to="/post">
							<Icon
								isButton={true}
								path={PATH_NOTE}
								path1={PATH_NOTE1}
								path2={PATH_NOTE2}
								size={30}
								margin="8px 0 0 9px"
							/>
						</Link>

						<Link to="/users">
							<Icon
								isButton={true}
								path={PATH_PEOPLE}
								margin="8px 0 0 9px"
							/>
						</Link>
					</>
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
