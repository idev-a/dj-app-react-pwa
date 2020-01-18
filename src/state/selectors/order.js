export const orderSelector = ({ orderDetails, userDetails }) => ({
    accountName: orderDetails.accountName,
    tracks: orderDetails.tracks,
    isSaveCardDetails: orderDetails.saveCardDetails,
    isPremiumUser: userDetails.isPremiumUser,
});

export const orderHistorySelector = ({ orderDetails }) => ({
    history: orderDetails.orderHistory,
});