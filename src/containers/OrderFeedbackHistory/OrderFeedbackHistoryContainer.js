import React, { useState } from 'react';
import { connect } from "react-redux";
import OrderFeedbackHistory from "../../components/OrderFeedbackHistory";
import { userSelector } from "../../state/selectors/users";
import { getOrderHistory } from '../../state/actions/userActions';
import { orderHistorySelector } from '../../state/selectors/order';

const OrderFeedbackHistoryContainer = ({ history = [] }) => {

    const [hitStats, setToggle] = useState(true);

    return (
        <OrderFeedbackHistory 
            hitStats={hitStats}
            setToggle={setToggle}
            data={history}
        />
    );
};

const dispatchAction = (dispatch) => ({
    getOrderHistoryDispatchAction: dispatch(getOrderHistory())
});

export default connect (
    orderHistorySelector,
    dispatchAction
)(OrderFeedbackHistoryContainer);