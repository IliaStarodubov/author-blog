import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Authorization } from './pages/authorization/authorization';
import { Registration } from './pages/regisration/registration';
import { Users } from './pages/users/users';
import { Post } from './pages/post/post';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { Modal } from './components/modal/modal';
import { Main } from './pages/main/main';
import { Error } from './components/error/error';
import { ERROR } from './constants/error';

const Page = styled.div`
	padding: 120px 0 20px;
`;

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1200px;
	min-height: 100%;
	margin: 0 auto;
	background-color: white;
`;

const Blog = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }));
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<Post />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post/:id/edit" element={<Post />} />
					<Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};

export default Blog;
