import React from 'react';
import styled from 'styled-components';
import { LuSearch } from 'react-icons/lu';
import useSearchForm from '@/hooks/useSearchForm';

const SearchHeaderBar = ({ searchKeyword }: { searchKeyword?: string }) => {
	const { values, handleChange, handleSearchSubmit } = useSearchForm({
		initialValue: { searchOnboardingInput: '', searchHeaderInput: '' },
		searchKeyword,
	});
	return (
		<FormWrapper name="searchHeaderInput" onSubmit={handleSearchSubmit}>
			<Search>
				<LuSearch size="1.5rem" color="#C9BCA2" style={{ strokeWidth: 3 }} />
				<SearchHeaderInput
					name="searchHeaderInput"
					placeholder=""
					value={values.searchHeaderInput}
					onChange={handleChange}
					autoComplete="off"
				/>
			</Search>
		</FormWrapper>
	);
};

export default SearchHeaderBar;

const FormWrapper = styled.form`
	height: 50%;
	width: 60%;`;

const Search = styled.div`
	height: 100%;
	width: 100%;
	background-color: #fff5e0;
	border-radius: 15px;
	border: 1.5px solid #c9bca2;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 1rem;
`;

const SearchHeaderInput = styled.input`
	width: 100%;
	height: 100%;
	font-size: 1.4rem;
	border: none;
	outline: none;
	padding-left: 1rem;
    background-color:transparent;
`;
