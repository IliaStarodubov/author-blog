import { useSelector } from 'react-redux';
import { Error } from '../error/error';
import { selectUserRole } from '../../selectors';
import { ERROR } from '../../constants/error';
import { checkAccess } from '../../utils/checkAccess';
import { ReactNode } from 'react';
interface PrivateContentProps {
	children: ReactNode;
	access: [number];
	serverError: string | null;
}

export const PrivateContent = ({
	children,
	access,
	serverError = null,
}: PrivateContentProps) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};
