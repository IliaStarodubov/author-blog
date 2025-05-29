import styled from 'styled-components';
import { PATH_CODE } from '../../../../constants/iconsPath';
import { Link } from 'react-router-dom';
import { Icon } from '../../../icon/Icon';

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
`;

const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

const LogoContainer = ({ className }: { className?: string }) => (
	<Link className={className} to="/">
		<Icon isButton={true} size={80} path={PATH_CODE} margin="0 10px 0 0" />
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчика</SmallText>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
`;
