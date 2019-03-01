const initialState = {
  count: 0,
};

function addOne(state, action) {
  console.log('reducer says hi');
  const count = state.count + 1;

  return {
    ...state,
    count,
  };
}

function dropOne(state, action) {
  console.log('reducer says hi');
  const count = state.count - 1;

  return {
    ...state,
    count,
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return addOne(state, action);

    case 'decrement':
      return dropOne(state, action);

    default:
      return state;
  }
};
