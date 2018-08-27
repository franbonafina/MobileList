export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    load: libraryId
  };
};
