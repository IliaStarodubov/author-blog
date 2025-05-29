import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	width?: string;
}

const ButtonContainer = ({ children, className, ...props }: ButtonContainerProps) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	background-color: rgba(152, 14, 55, 0.4);
	color: rgba(256, 256, 256, 0.8);
	border: 0;
	border-radius: 15px;
	display: block;
	margin: auto;
	padding: 15px 45px;
	width: ${({ width = '100%' }) => width};
	font-size: 18px;
	cursor: pointer;
	opacity: 1;
	visibility: visible;
	-webkit-transition: all 0.3s ease;

	&:disabled {
		background-color: rgb(79 79 79 / 40%);

		&:hover {
			background: #cccccc;
		}
	}

	&:active {
		border-radius: 0px;
	}

	&:hover {
		background-color: rgba(94, 12, 44, 0.8);
	}
`;
