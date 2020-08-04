export const initialState = {
  characters: [],
  theme: 'light'
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTERS':
      return { ...state, characters: action.payload };
    case 'LIGHT_THEME':
      return { ...state, theme: 'light' };
    case 'DARK_THEME':
      return { ...state, theme: 'dark' };
    default: 
      return state;
  }
}
