import React from 'react';
import { connect } from "react-redux";
import OnboardComponent from './../../components/Onboard/OnboardComponent';
import { preferencsSelector } from "../../state/selectors/preferences";
import { getGenres, getTags, getStyles } from "../../state/actions/preferencesActions";
import { getUserDetails, postListenerPreferences } from "../../state/actions/userActions";
import isEmpty from "lodash/isEmpty";
import moment from "moment";
import {
    updateSelectedGenres,
    updateSelectedTags,
    updateSelectedStyles,
} from "../../state/actions/preferencesActions";
import { toast } from "react-toastify";

class OnboardingContainer extends React.Component {
    state = {
        genresList: false,
        tagsList: false,
        stylesList: false,
        toggle: "closed",
        covered: "",
        gender: "",
        city: "",
        bio: "",
        headline: "",
        price: "",
        dob: "",
        saveButtonIsShowing: true,
        menuIsOpen: false,
        loadUserData: false,
        disabled: false,
    };

    componentDidMount() {
        const {
            getGenresDispatchAction,
            getTagsDispatchAction,
            getUserDetailsDispatchAction,
            getStylesDispatchAction,
        } = this.props;
        getGenresDispatchAction();
        getTagsDispatchAction();
        getStylesDispatchAction();
        getUserDetailsDispatchAction();
    }

    componentDidUpdate() {
        if (
            this.props.userDetails &&
            !isEmpty(this.props.userDetails) &&
            !this.state.loadUserData &&
            this.props.genres.length > 0 &&
            this.props.tags.length > 0
        ) {
            const {
                favourite_genres = [],
                listener_tags = [],
                favourite_styles= [],
            } = this.props.userDetails;
            const selectedGenres = this.props.genres.filter((g) =>
                favourite_genres.includes(g._id)
            );
            const selectedTags = this.props.tags.filter((g) =>
                listener_tags.includes(g._id)
            );
            const selectedStyles = this.props.styles.filter((g) =>
            favourite_styles.includes(g._id)
            );
            this.props.updateSelectedGenresDispatchAction(selectedGenres);
            this.props.updateSelectedTagsDispatchAction(selectedTags);
            this.props.updateSelectedStylesDispatchAction(selectedStyles)

            this.setState({
                gender: this.props.userDetails.gender || "",
                city: this.props.userDetails.city || "",
                bio: this.props.userDetails.bio || "",
                headline: this.props.userDetails.headline || "",
                price: this.props.userDetails.price || "",
                dob:
                    moment(this.props.userDetails.date_of_birth, "YYYY-MM-DD").format(
                        "MM-DD-YYYY"
                    ) || "",
                loadUserData: true,
            });
        }
    }

    onInputChange = (e) => {
        if (e.id === "location") {
            this.setState({
                city: e.city,
            });
        } else {
            this.setState({
                [e.target.id]: e.target.value,
            });
        }
    };

    handleGenderChange = (e) => {
        this.setState({
          gender: e.target.value
        });
      };

    handleClickAddGenres = (genre, removeGenreFlag) => {
        const { selectedGenres, updateSelectedGenresDispatchAction } = this.props;
        let updatedSelectedGenres = [...selectedGenres];
        if (!removeGenreFlag) {
            updatedSelectedGenres.push(genre);
        } else {
            updatedSelectedGenres = updatedSelectedGenres.filter(
                ({ _id }) => _id !== genre._id
            );
        }
        updateSelectedGenresDispatchAction(updatedSelectedGenres);
        if (!removeGenreFlag) {
            this.setState({
                genresList: !this.state.genresList,
            });
        }
    };

    handleClickAddTags = (tag, removeTagFlag) => {
        const { selectedTags, updateSelectedTagsDispatchAction } = this.props;
        let updatedSelectedTags = [...selectedTags];

        if (!removeTagFlag) {
            updatedSelectedTags.push(tag);
        } else {
            updatedSelectedTags = updatedSelectedTags.filter(
                ({ _id }) => _id !== tag._id
            );
        }
        updateSelectedTagsDispatchAction(updatedSelectedTags);
        if (!removeTagFlag) {
            this.setState({ tagsList: !this.state.tagsList });
        }
    };

    handleClickAddStyles = (styles, removeStyleFlag) => {
        const { selectedStyles, updateSelectedStylesDispatchAction } = this.props;
        let updatedSelectedStyles = [...selectedStyles];

        if (!removeStyleFlag) {
            updatedSelectedStyles.push(styles);
        } else {
            updatedSelectedStyles = updatedSelectedStyles.filter(
                ({ _id }) => _id !== styles._id
            );
        }
        updateSelectedStylesDispatchAction(updatedSelectedStyles);
        if (!removeStyleFlag) {
            this.setState({ stylesList: !this.state.stylesList });
        }
    };


    validateFormData = (payload) => {
        const dateIsValid = moment(this.state.dob, "MM-DD-YYYY").isBefore(moment());
        const isFormError = [payload].some((value) => {
            if (value.city.length < 1) {
                toast.error("Enter city");
                return true;
            }
            if (value.gender.length < 1) {
                toast.error("Select a gender");
                return true;
            }
            if (!dateIsValid) {
                toast.error("Enter a valid Date of Birth");
                return true;
            }
            if (this.props.selectedGenres.length < 1) {
                toast.error("Select a genre");
                return true;
            }
            if (this.props.selectedTags.length < 1) {
                toast.error("Select a tag");
                return true;
            }

            return false;
        });

        return isFormError;
    };

    handlePostListernerPreferences = () => {
        const {
            city,
            gender,
        } = this.state;
        const { selectedGenres, selectedTags, selectedStyles } = this.props;
        const userFeedbackType = [];
        userFeedbackType.push("HIT");
        const payload = {
            feedback_type: userFeedbackType,
            favourite_genres: selectedGenres.map((genre) => genre._id),
            listener_tags: selectedTags.map((tag) => tag._id),
            favourite_styles: selectedStyles.map((style) => style._id),
            city,
            date_of_birth: moment(this.state.dob, "MM-DD-YYYY").format("YYYY-MM-DD"),
            gender: gender.toLowerCase(),
        };
        const isFormError = this.validateFormData(payload);
        if (!isFormError) {
            this.props.postListenerPreferenceDispatchAction(payload);
            this.setState({ saveButtonIsShowing: false, disabled: true });
        }
    };

    render() {
        return (
            <OnboardComponent
                city={this.state.city}
                dob={this.state.dob}
                gender={this.state.gender}
                onInputChange={this.onInputChange}
                handleGenderChange={this.handleGenderChange}
                genresList={this.state.genresList}
                tagsList={this.state.tagsList}
                genres={this.props.genres}
                tags={this.props.tags}
                styles={this.props.styles}
                genresAdded={this.props.selectedGenres}
                tagsAdded={this.props.selectedTags}
                stylesAdded={this.props.selectedStyles}
                handleClickAddGenres={this.handleClickAddGenres}
                handleClickAddStyles={this.handleClickAddStyles}
                handleClickAddTags={this.handleClickAddTags}
                handleButtonClick={this.handlePostListernerPreferences}
            />
        )
    }
}

const mapActions = (dispatch) => ({
    getGenresDispatchAction: () => dispatch(getGenres()),
    getTagsDispatchAction: () => dispatch(getTags()),
    getStylesDispatchAction: () => dispatch(getStyles()),
    getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
    updateSelectedGenresDispatchAction: (genres) =>
        dispatch(updateSelectedGenres(genres)),
    updateSelectedTagsDispatchAction: (tags) =>
        dispatch(updateSelectedTags(tags)),
    updateSelectedStylesDispatchAction: (styles) =>
    dispatch(updateSelectedStyles(styles)),
    postListenerPreferenceDispatchAction: (payload, navigateToPath) =>
        dispatch(postListenerPreferences(payload, navigateToPath)),
});

export default connect(
    preferencsSelector,
    mapActions
)(OnboardingContainer);