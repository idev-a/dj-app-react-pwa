import React, { useEffect, useCallback, useState } from 'react';
import { connect } from "react-redux";
import UploadComponent from './../../components/Upload/UploadComponent';
import { orderSelector } from "../../state/selectors/order";
import { getGenres, getStyles } from "../../state/actions/preferencesActions";
import {
    updateOrderData,
    updateTrackDetails,
} from "../../state/actions/orderActions";
import {
    getPaymentMethods,
} from "../../state/actions/userActions";

const UploadContainer = ({
    dispatchUpdate,
    dispatchGetGenres,
    getStylesDispatchAction,
    getPaymentMethodsDispatchAction,
    genres,
    styles,
    dispatchTrackUpdate,
    tracks
}) => {
    const [promoCode, setPromoCode] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatchGetGenres();
        getStylesDispatchAction();
        getPaymentMethodsDispatchAction();
    }, [dispatchGetGenres, getPaymentMethodsDispatchAction, getStylesDispatchAction]);

    const setAddGenre = useCallback(
        (genre, index) => {
            dispatchTrackUpdate({ genreId: genre._id }, index);
        },
        [dispatchTrackUpdate]
    );

    const setAddStyle = useCallback(
        (styles, index) => {
            dispatchTrackUpdate({ stylesId: styles._id }, index);
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

    const handleInputChange = useCallback(
        (e) => {
            let payload = {};
            if (e.target.id === "promoCode") {
                setPromoCode(e.target.value);
            } else {
                if (e.target.name === "saveCardDetails") {
                    payload = {
                        [e.target.name]: e.target.checked,
                    };
                } else {
                    payload = {
                        [e.target.id]: e.target.value,
                    };
                }
                dispatchUpdate(payload);
            }
        },
        [dispatchUpdate]
    );

    return (
        <UploadComponent
            genres={genres}
            styles={styles}
            promoCode={promoCode}
            setAddGenre={setAddGenre}
            setAddStyle={setAddStyle}
            tracks={tracks[0]}
            handleTrackChanges={handleTrackUpdates}
            onInputChange={handleInputChange}

        />
    )
}

const dispatchAction = (dispatch) => ({
    dispatchUpdate: (payload) => dispatch(updateOrderData(payload)),
    dispatchGetGenres: () => dispatch(getGenres()),
    getStylesDispatchAction: () => dispatch(getStyles()),
    getPaymentMethodsDispatchAction: () => dispatch(getPaymentMethods()),
    dispatchTrackUpdate: (payload, index) =>
        dispatch(updateTrackDetails(payload, index)),
});

export default connect(
    orderSelector,
    dispatchAction
)(UploadContainer);