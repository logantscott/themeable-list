import reducer from './appReducer';

describe('app reducer', () => {
  it('sets characters with the SET_CHARACTERS action type', () => {
    const state = {
      characters: []
    };

    const action  = { 
      type: 'SET_CHARACTERS', 
      payload: [
        {
          id: 'abcd1234',
          name: 'Aang'
        },
        {
          id: '0987poiu',
          name: 'Appa'
        }
      ] };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      characters: [
        {
          id: 'abcd1234',
          name: 'Aang'
        },
        {
          id: '0987poiu',
          name: 'Appa'
        }
      ]
    });
  });
});
