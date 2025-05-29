import styled from 'styled-components';
import { Logo } from './components/logo/Logo';
import { ControlPanel } from './components/cotrolPanel/ControlPanel';

const Discription = styled.div`
	font-style: italic;
`;

const HeaderContainer = ({ className }: { className?: string }) => (
	<header className={className}>
		<Logo />
		<Discription>
			Веб-технологии
			<br /> Написание кода
			<br /> Разбор ошибок
		</Discription>
		<ControlPanel />
	</header>
);

export const Header = styled(HeaderContainer)`
	display: flex;
	justify-content: space-between;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0px 26px 32px -8px rgba(34, 60, 80, 0.2);
	position: fixed;
	z-index: 10;
	width: 1200px;
	background-color: white;
`;
