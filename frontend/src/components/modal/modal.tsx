import styled from 'styled-components';
import { Button } from '../button/button';
import { useSelector } from 'react-redux';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';

const ModalContainer = ({ className }: { className?: string }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button width="150px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="150px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position: fixed;
	z-index: 20;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;

	& .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #00000080;
	}

	& .box {
		position: relative;
		width: 400px;
		text-align: center;
		margin: auto;
		z-index: 30;
		top: 50%;
		transform: translate(0, -50%);
		padding: 1px 20px 25px;
		background-color: #f9f9f9;
		font-size: 18px;
		border-radius: 10px;
		box-shadow: 0px 0px 36px 17px #ffffff40;
	}

	& .buttons {
		display: flex;
	}
`;
