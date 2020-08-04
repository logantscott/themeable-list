export const initialState = {
  characters: [],
  theme: 'light',
  page: null,
  totalPages: 1,
  currentPage: null
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTERS':
      if(action.payload.length === 0) {
        return { ...state, page: state.page - 1 };
      }
      return { ...state, characters: action.payload, currentPage: state.page };
    case 'LIGHT_THEME':
      return { ...state, theme: 'light' };
    case 'DARK_THEME':
      return { ...state, theme: 'dark' };
    case 'NEXT_PAGE':
      if(state.characters.length < 20) {
        return state;
      }
      return { ...state, page: state.page + 1 };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'PREVIOUS_PAGE':
      if(state.page <= 1) return state;
      return { ...state, page: state.page - 1 };
    // case 'TOTAL_PAGES':
    //   return { ...state, totalPages: action.payload };
    default: 
      return state;
  }
}
