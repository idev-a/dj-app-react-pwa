export const orderSelector = ({ orderDetails }) => ({
    accountName: orderDetails.accountName,
    tracks: orderDetails.tracks,
    isSaveCardDetails: orderDetails.saveCardDetails,
})