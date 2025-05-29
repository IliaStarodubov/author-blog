import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { PATH_DELETE, PATH_SAVE, PATH_SAVE1 } from '../../../../constants/iconsPath';
import { TableRow } from '../tableRow/tableRow';
import { useState } from 'react';
import { request } from '../../../../utils/request.ts';

interface UserRowContainerProps {
	className?: string;
	login: string;
	registeredAt: string;
	roleId: number;
	roles: never[];
	id: string;
	onUserRemove: () => void;
}

const UserRowContainer = ({
	className,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	id,
	onUserRemove,
}: UserRowContainerProps) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

	const onRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedRoleId(Number(event.target.value));
	};

	const isSaveBntDisabled = selectedRoleId === initialRoleId;

	const onRoleSave = (userId: string, newUserRoleId: number) => {
		request(`/users/${userId}`, 'PATCH', { roleId: newUserRoleId }).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registre-at-column">
					{new Date(registeredAt).toLocaleString('ru-RU')}
				</div>
				<div className="role-column">
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Icon
						isButton={true}
						disabled={isSaveBntDisabled}
						onClick={() => onRoleSave(id, selectedRoleId)}
						path={PATH_SAVE}
						path1={PATH_SAVE1}
						margin="8px 0 0 9px"
					/>
				</div>
			</TableRow>
			<Icon
				isButton={true}
				onClick={onUserRemove}
				path={PATH_DELETE}
				margin="8px 0 0 9px"
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	margin-top: 10px;

	& .role-column {
		display: flex;
	}

	& select {
		font-size: 15px;
		background: white;
		color: black;
		margin: 5px;
	}
`;
