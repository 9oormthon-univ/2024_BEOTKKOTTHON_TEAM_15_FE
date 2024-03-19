import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type SearchInputType = 'searchOnboardingInput' | 'searchHeaderInput';

interface useFormProps {
	initialValue: {
		[k in SearchInputType]: string;
	};
	searchKeyword?: string;
}

const useSearchForm = ({ initialValue, searchKeyword }: useFormProps) => {
	const router = useRouter();
	const [values, setValues] = useState(initialValue);

	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsFocused(false);
		const { name } = e.target;

		if (name === 'searchOnboardingInput' || name === 'searchHeaderInput') {
			if (values[name].length === 0) {
				alert('검색어를 입력해주세요');
				return;
			}
			setValues({ ...values, searchOnboardingInput: values[name], searchHeaderInput: '' });
			router.replace(`/group/search/?q=${values[name]}`);
		}
	};

	useEffect(() => {
		if (searchKeyword) setValues({ searchOnboardingInput: searchKeyword, searchHeaderInput: '' });
	}, [searchKeyword]);

	return { values, isFocused, handleChange, handleSearchSubmit, handleFocus, handleBlur };
};

export default useSearchForm;
