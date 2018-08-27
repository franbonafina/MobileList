export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.load;
    default:
      return state;
  }
};
