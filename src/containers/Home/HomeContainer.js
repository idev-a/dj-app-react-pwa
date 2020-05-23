import React, { useEffect } from 'react';
import HomeComponent from './../../components/Home/HomeComponent';
import { connect } from 'react-redux';
import {
    getUserDetails,
} from "../../state/actions/userActions";
import  { getActivities } from '../../state/actions/homeAction';
import { preferencsSelector } from "../../state/selectors/preferences";
import { homeSelector } from './../../state/selectors/home';

const HomeContainer = ({ getUserDetailsDispatchAction, getActivitiesDispatchAction, userDetails, activities }) => {

    
    useEffect(() => {
        Promise.all([
            getUserDetailsDispatchAction(),
            getActivitiesDispatchAction(),
        ]);
    }, [getUserDetailsDispatchAction, getActivitiesDispatchAction]);

    return (
        <HomeComponent 
            details={userDetails}
            activities={activities}
        />
    )
};

const dispatchAction = (dispatch) => ({
    getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
    getActivitiesDispatchAction: () => dispatch(getActivities()),
});

export default connect(
    (state) => ({
        ...preferencsSelector(state),
        ...homeSelector(state),
    }),
    dispatchAction
)( HomeContainer );