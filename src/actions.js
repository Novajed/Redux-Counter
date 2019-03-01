export const increment = () => {
  console.log('addition fired');
  return {
    type: 'increment',
  };
};

export const decrement = () => {
  console.log('subtraction fired');
  return {
    type: 'decrement',
  };
};
