import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../../components/input/input';
import { Button } from '../../components/button/button';
import { Navigate } from 'react-router-dom';
import { H2 } from '../../components/h2/h2';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants/role';
import { AuthFormError } from '../../components/authError/auth-form-error';
import { useResetForm } from '../../hooks';
import { request } from '../../utils/request.ts';

const regFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символов')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются буквы, цифры и знаки # % ',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символов')
		.max(25, 'Неверно заполнен пароль. Максимум 25 символов'),
	passcheck: yup
		.string()
		.oneOf([yup.ref('password'), undefined], 'Пароли не совпадают'),
});

const RegistrationCotainer = ({ className }: { className?: string }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	});

	const [serverError, setServerError] = useState<string | null>(null);
	const dispath = useDispatch();

	const roleId = useSelector(selectUserRole);

	useResetForm(reset);

	const onSubmit = ({ login, password }: { login: string; password: string }) => {
		request('/register', 'POST', { login, password }).then(({ error, user }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispath(setUser(user));
			sessionStorage.setItem('userData', JSON.stringify(user));
		});
	};

	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;
	const errorMasage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Регистрация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input type="text" placeholder="Логин..." {...register('login')} />
				<Input
					type="password"
					placeholder="Пароль..."
					{...register('password')}
				/>
				<Input
					type="password"
					placeholder="Повтор пароля..."
					{...register('passcheck')}
				/>
				<Button type="submit" disabled={!!formError}>
					Зарегистрироваться
				</Button>
				{errorMasage && <AuthFormError>{errorMasage}</AuthFormError>}
			</form>
		</div>
	);
};

export const Registration = styled(RegistrationCotainer)`
	display: flex;
	align-items: center;
	flex-direction: column;

	& > form {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		margin-top: 50px;
		width: 250px;
		opacity: 1;
		visibility: visible;
		-webkit-transition: all 0.3s ease;
	}
`;
