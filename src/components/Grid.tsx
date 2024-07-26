import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks';
import { RootState } from '../redux/store/store';
import GridItem from './GridItem';
import { deletePhrase } from '../redux/reducers/phraseReducer';

interface Phrase {
    id: string;
    text: string;
    completed: boolean;
}

/**
 * A functional component that renders a grid of phrases using the `GridItem` component.
 * It retrieves phrases from the Redux store and provides a delete functionality for each phrase.
 *
 * @returns {JSX.Element} The rendered grid component.
 */
const Grid: React.FC = () => {
    const phrases = useAppSelector((state: RootState) => state.phrase.searchResults);
    const dispatch = useAppDispatch();

    const handleDelete = (id: string) => {
        dispatch(deletePhrase(id));
    };

    return (
        <div className="grid__wrapper">
            {phrases && phrases.map((item: Phrase) => (
                <GridItem
                    key={item.id}
                    id={item.id}
                    text={item.text}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default Grid;
