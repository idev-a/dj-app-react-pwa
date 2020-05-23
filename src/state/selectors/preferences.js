export const preferencsSelector = (state) => ({
  genres: state.preferences.genres,
  tags: state.preferences.tags,
  styles: state.preferences.styles,
  selectedGenres: state.preferences.selectedGenres,
  selectedTags: state.preferences.selectedTags,
  selectedStyles: state.preferences.selectedStyles,
  userDetails: state.userDetails.user,
});
