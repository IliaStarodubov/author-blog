import { ReactNode } from 'react';
import styled from 'styled-components';

interface H2ContainerProps {
	className?: string;
	children?: ReactNode;
}

const H2Container = ({ className, children }: H2ContainerProps) => (
	<h2 className={className}>{children}</h2>
);

export const H2 = styled(H2Container)`
	margin: 40px;
	text-align: center;
`;
