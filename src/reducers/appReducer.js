export const initialState = {
  characters: [],
  theme: 'light',
  page: 1,
  totalPages: 1,
  currentPage: null,
  results: true
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTERS':
      if(action.payload.length === 0) {
        return state;
      }
      return { ...state, characters: action.payload, currentPage: state.page };
    case 'LIGHT_THEME':
      return { ...state, theme: 'light' };
    case 'DARK_THEME':
      return { ...state, theme: 'dark' };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'NEXT_PAGE':
      if(state.characters.length < 20 || state.characters.length === 0 || !state.results) {
        return state;
      }
      return { ...state, page: state.page + 1 };
    case 'PREVIOUS_PAGE':
      if(state.page <= 1) return state;
      if(state.currentPage === state.page - 1) return { ...state, page: state.currentPage - 1 };
      return { ...state, page: state.page - 1 };
    default: 
      return state;
  }
}
