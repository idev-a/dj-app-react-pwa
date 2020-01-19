import React, { useState } from 'react';
import { connect } from "react-redux";
import OrderFeedbackHistory from "../../components/OrderFeedbackHistory";
import { getOrderHistory } from '../../state/actions/userActions';
import { orderHistorySelector } from '../../state/selectors/order';

const OrderFeedbackHistoryContainer = ({ history = [] }) => {

    const [hitStats, setToggle] = useState(true);
    const [menuIsOpen, handleClickMenuToggle] = useState(false);

    return (
        <OrderFeedbackHistory 
            hitStats={hitStats}
            setToggle={setToggle}
            data={history}
            menuIsOpen={menuIsOpen}
            handleClickMenuToggle={handleClickMenuToggle}
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