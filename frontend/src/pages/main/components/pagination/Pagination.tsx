import styled from 'styled-components';
import { Button } from '../../../../components/button/button';
import { Dispatch, SetStateAction } from 'react';

interface PaginationContainerProps {
	className?: string;
	setPage: Dispatch<SetStateAction<number>>;
	page: number;
	lastPage: number;
}

const PaginationContainer = ({
	className,
	setPage,
	page,
	lastPage,
}: PaginationContainerProps) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>
			<Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	padding: 0 36px 36px;

	& button {
		margin: 0 10px;
		padding: 9px;
	}

	& .current-page {
		border: 1px solid rgba(152, 14, 55, 0.4);
		width: 100%;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		border-radius: 15px;
		line-height: 35px;
	}
`;
