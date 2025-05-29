import styled from 'styled-components';

interface InputContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

const inputContainer: React.FC<InputContainerProps> = ({ className, ...props }) => {
	return <input className={className} {...props} />;
};
export const Input = styled(inputContainer)`
	border: 0;
	outline: none;
	box-shadow: none;
	line-height: 30px;
	background-color: white;
	color: black;
	margin: 0 0 10px;
	padding: 10px 15px;
	border-radius: 15px;
	border: 1px solid #a5a5a5;
	font-size: 17px;
	width: 100%;
`;
