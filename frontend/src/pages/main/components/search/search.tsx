import styled from 'styled-components';
import { Input } from '../../../../components/input/input';
import { Icon } from '../../../../components/icon/Icon';
import { PATH_SEARCH } from '../../../../constants/iconsPath';
import { ChangeEventHandler } from 'react';

interface SearchContainerProps {
	className?: string;
	searchPhrase: string;
	onChange: ChangeEventHandler;
}

const SearchContainer = ({ className, onChange, searchPhrase }: SearchContainerProps) => {
	return (
		<div className={className}>
			<Input value={searchPhrase} onChange={onChange} placeholder="Поиск..." />
			<Icon path={PATH_SEARCH} size={30} margin="10px 0 0 0" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	width: 400px;
	margin: 36px auto 0;

	& > div {
		position: absolute;
		right: 10px;
	}

	& input {
		margin: 0;
	}
`;
