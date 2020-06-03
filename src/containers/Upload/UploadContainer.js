import React, { useEffect, useCallback } from 'react';
import { connect } from "react-redux";
import UploadComponent from './../../components/Upload/UploadComponent';
import { orderSelector } from "../../state/selectors/order";
import { getGenres } from "../../state/actions/preferencesActions";
import {
    updateTrackDetails,
} from "../../state/actions/orderActions";
import {
    getPaymentMethods,
} from "../../state/actions/userActions";

const UploadContainer = ({
    dispatchGetGenres,
    getPaymentMethodsDispatchAction,
    genres,
    dispatchTrackUpdate,
    tracks
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatchGetGenres();
        getPaymentMethodsDispatchAction();
    }, [dispatchGetGenres, getPaymentMethodsDispatchAction]);

    const setAddGenre = useCallback(
        (genre, index) => {
            dispatchTrackUpdate({ genreId: genre._id }, index);
        },
        [dispatchTrackUpdate]
    );

    const handleTrackUpdates = useCallback(
        (e, index) => {
            if (e.id) {
                dispatchTrackUpdate(
                    {
                        [e.id]: e.value,
                    },
                    index
                );
            } else if (
                e.target.id === "fileUpload" &&
                e.target.files &&
                e.target.files.length > 0
            ) {
                dispatchTrackUpdate({ fileUpload: e.target.files[0] }, index);
            } else {
                dispatchTrackUpdate(
                    {
                        [e.target.id]: e.target.value,
                    },
                    index
                );
            }
        },
        [dispatchTrackUpdate]
    );

    return (
        <UploadComponent
            genres={genres}
            setAddGenre={setAddGenre}
            tracks={tracks[0]}
            handleTrackChanges={handleTrackUpdates}
        />
    )
}

const dispatchAction = (dispatch) => ({
    dispatchGetGenres: () => dispatch(getGenres()),
    getPaymentMethodsDispatchAction: () => dispatch(getPaymentMethods()),
    dispatchTrackUpdate: (payload, index) =>
        dispatch(updateTrackDetails(payload, index)),
});

export default connect(
    orderSelector,
    dispatchAction
)(UploadContainer);