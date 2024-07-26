import { useState, useEffect } from 'react';
import { useAppDispatch } from '../redux/reduxHooks';
import { addPhrase, searchPhrase } from '../redux/reducers/phraseReducer';
import { useDebounce } from "@uidotdev/usehooks";


const useInputHandlers = () => {
    const [phrase, setPhrase] = useState('');
    const [search, setSearch] = useState('');
    const debouncedSearchTerm = useDebounce(search, 300);

    const dispatch = useAppDispatch();


    useEffect(() => {
        if (debouncedSearchTerm) {
            dispatch(searchPhrase(debouncedSearchTerm));
        } else {
            dispatch(searchPhrase(''));
        }
    }, [debouncedSearchTerm, dispatch]);

    const handleAddPhrase = (e: React.ChangeEvent<HTMLInputElement>) => {
        const trimmedPhrase = e.target.value.trimStart().toLocaleLowerCase();
        setPhrase(trimmedPhrase);
    };

    const handleSubmitPhrase = () => {
        const trimPhrase = phrase.trim();
        if (trimPhrase) {
            dispatch(addPhrase(trimPhrase));
            setPhrase('');
        }
    };

    const handleSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
        const trimSearch = e.target.value.trimStart().toLocaleLowerCase();
        setSearch(trimSearch);
    };

    return {
        phrase,
        search,
        handleAddPhrase,
        handleSubmitPhrase,
        handleSearchWord,
    };
};

export default useInputHandlers;
