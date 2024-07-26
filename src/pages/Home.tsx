import React from 'react';
import { TITLE } from '../constants/texts';
import useInputHandlers from '../hooks/useInputHandlers';
import Form from '../components/Form';
import Grid from '../components/Grid';

const Home: React.FC = () => {
    const {
        phrase,
        search,
        handleAddPhrase,
        handleSubmitPhrase,
        handleSearchWord,
    } = useInputHandlers();

    return (
        <div className="page__wrapper">
            <h1 className="home__main-title">{TITLE}</h1>
            <div className="home__forms">
                <Form
                    labelText="Phrase"
                    inputProps={{ type: 'text', placeholder: 'Enter a phrase', className: 'home__input', value: phrase }}
                    handleInput={handleAddPhrase}
                    handleSubmit={handleSubmitPhrase}
                    submit={true}
                />
                <Form
                    labelText="Search"
                    inputProps={{ type: 'text', placeholder: 'Search a phrase', className: 'home__input', value: search }}
                    handleInput={handleSearchWord}
                    submit={false}
                />
            </div>
            <Grid />
        </div>
    );
};

export default Home;
