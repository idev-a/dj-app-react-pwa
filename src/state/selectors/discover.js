export const discoverSelector = (state) => ({
    tracks: state.discover.tracks,
    updatedCoin: state.discover.updatedCoin,
    userDetails: state.userDetails.user,
});
