import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Phrase {
  id: string;
  text: string;
  completed: boolean;
}

interface PhraseState {
  phrases: Phrase[];
  searchResults: Phrase[];
}

const initialState: PhraseState = {
  phrases: [],
  searchResults: [],
};

const phraseSlice = createSlice({
  name: 'phrases',
  initialState,
  reducers: {
    addPhrase: (state, action: PayloadAction<string>) => {
      const newPhrase = { id: uuidv4(), text: action.payload, completed: false };
      state.phrases.push(newPhrase);
      state.searchResults = state.phrases;
    },
    deletePhrase: (state, action: PayloadAction<string>) => {
      state.phrases = state.phrases.filter(phrase => phrase.id !== action.payload);
      state.searchResults = state.searchResults.filter(phrase => phrase.id !== action.payload);
    },
    searchPhrase: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchResults = searchTerm
        ? state.phrases.filter(phrase =>
          phrase.text.toLowerCase().includes(searchTerm)
        )
        : state.phrases;
    },
  },
});

export const { addPhrase, deletePhrase, searchPhrase } = phraseSlice.actions;

export default phraseSlice.reducer;
