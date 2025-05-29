import { H2 } from '../../components/h2/h2';
import { TableRow, UserRow } from './components';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PrivateContent } from '../../components/trivate-content/private-content';
import { ROLE } from '../../constants/role';
import { checkAccess } from '../../utils/checkAccess';
import { useSelector } from 'react-redux';
import { selectUserRole } from '../../selectors';
import { request } from '../../utils/request.ts';

const UsersContainer = ({ className }: { className?: string }) => {
	const [users, setUsers] = useState<[]>([]);
	const [roles, setRoles] = useState<[]>([]);
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const userRole = useSelector(selectUserRole);

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		Promise.all([request('/users'), request('/users/roles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}

				setUsers(usersRes.data);
				setRoles(rolesRes.data);
			},
		);
	}, [shouldUpdateUserList, userRole]);

	const onUserRemove = (userId: string) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return;
		}

		request(`/users/${userId}`, 'DELETE').then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList);
		});
	};

	return (
		<PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
			<div className={className}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className="login-column">Логин</div>
						<div className="registre-at-column">Дата регистрация</div>
						<div className="role-column">Роль</div>
					</TableRow>

					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles.filter(
								({ id: roleId }) => roleId !== ROLE.GUEST,
							)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</div>
		</PrivateContent>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	font-size: 18px;
`;
