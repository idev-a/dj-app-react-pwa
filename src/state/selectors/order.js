export const orderSelector = ({ orderDetails }) => ({
    trackUrl: orderDetails.trackUrl,
    accountName: orderDetails.accountName,
    mediaType: orderDetails.mediaType,
    trackTitle: orderDetails.trackTitle,
    selectedFeedback: orderDetails.selectedFeedback,
})