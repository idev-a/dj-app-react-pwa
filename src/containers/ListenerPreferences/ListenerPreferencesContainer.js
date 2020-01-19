import React, { Component } from "react";
import { connect } from "react-redux";
import ListenerPreferencesComponent from "../../components/ListenerPreferences/ListenerPreferencesComponent";
import { preferencsSelector } from "../../state/selectors/preferences";
import { getGenres, getTags } from "../../state/actions/preferencesActions";
import {
  updateSelectedGenres,
  updateSelectedTags,
} from "../../state/actions/preferencesActions";
import { postListenerPreferences } from "../../state/actions/userActions";

class ListenerPreferencesContainer extends Component {
  state = {
    hitRequestBox: false,
    proRequestBox: false,
    genresList: false,
    tagsList: false,
    genresAdded: [],
    tagsAdded: [],
    toggle: "closed",
    covered: "",
    gender: "Male",
    city: "",
    bio: "",
    sendMeText: "",
    price: "",
    dob: "",
    saveButtonIsShowing: true,
    menuIsOpen: false
  };

  componentDidMount() {
    const { getGenresDispatchAction, getTagsDispatchAction } = this.props;
    getGenresDispatchAction();
    getTagsDispatchAction();
  }

  handleClickRequestBoxes = (e) => {
    const el = e.target;
    if (el.id === "hitRequestBox") {
      this.setState({
        hitRequestBox: !this.state.hitRequestBox,
      });
    } else {
      this.setState({
        proRequestBox: !this.state.proRequestBox,
      });
    }
  };

  handlePostListernerPreferences = (navigateToPath) => {
    const {
      hitRequestBox,
      proRequestBox,
      city,
      gender,
      price,
      bio,
      sendMeText,
    } = this.state;
    const { selectedGenres, selectedTags } = this.props;
    const userFeedbackType = [];
    if (hitRequestBox) {
      userFeedbackType.push("HIT");
    }
    if (proRequestBox) {
      userFeedbackType.push("PRO");
    }
    const payload = {
      feedback_type: userFeedbackType,
      favourite_genres: selectedGenres.map((genre) => genre._id),
      listener_tags: selectedTags.map((tag) => tag._id),
      city,
      gender: gender.toLowerCase(),
      ...(proRequestBox && {
        price,
        bio,
        send_me: sendMeText,
      }),
    };
    this.props.postListenerPreferenceDispatchAction(payload, navigateToPath);
  };

  handleGenderChange = (gender) => {
    this.setState({
      gender,
    });
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleButtonClick = (navigateToDiscover) => {
    this.handlePostListernerPreferences(
      navigateToDiscover ? "/discover" : "/feedback"
    );
  };

  handleClickToggleAddList = (e, type) => {
    if (type === "genres") {
      this.setState({
        genresList: !this.state.genresList,
        tagsList: false,
      });
    } else {
      this.setState({
        genresList: false,
        tagsList: !this.state.tagsList,
      });
    }
  };

  handleClickAddGenres = (e, genreId) => {
    const { selectedGenres, updateSelectedGenresDispatchAction } = this.props;
    let updatedSelectedGenres = [...selectedGenres];
    if (!selectedGenres.includes(genreId)) {
      updatedSelectedGenres.push(genreId);
    } else {
      updatedSelectedGenres = updatedSelectedGenres.filter(
        ({ _id }) => _id !== genreId
      );
    }
    updateSelectedGenresDispatchAction(updatedSelectedGenres);
    this.setState({ genresList: !this.state.genresList });
  };

  handleClickAddTags = (e, tagId) => {
    const { selectedTags, updateSelectedTagsDispatchAction } = this.props;
    let updatedSelectedTags = [...selectedTags];
    if (!updatedSelectedTags.includes(tagId)) {
      updatedSelectedTags.push(tagId);
    } else {
      updatedSelectedTags = updatedSelectedTags.filter(
        ({ _id }) => _id !== tagId
      );
    }
    updateSelectedTagsDispatchAction(updatedSelectedTags);
    this.setState({ tagsList: !this.state.tagsList });
  };

  handleSaveFormData = (e) => {
    this.setState({ saveButtonIsShowing: false });
  }

  handleClickMenuToggle = (toggle) => {
    this.setState({ menuIsOpen: toggle });
  }

  render() {
    return (
      <ListenerPreferencesComponent
        city={this.state.city}
        gender={this.state.gender}
        price={this.state.price}
        bio={this.state.bio}
        sendMeText={this.state.sendMeText}
        dob={this.state.dob}
        handleClickRequestBoxes={this.handleClickRequestBoxes}
        handleClickToggleAddList={this.handleClickToggleAddList}
        handleClickAddGenres={this.handleClickAddGenres}
        handleClickAddTags={this.handleClickAddTags}
        hitRequestBox={this.state.hitRequestBox}
        proRequestBox={this.state.proRequestBox}
        genresList={this.state.genresList}
        tagsList={this.state.tagsList}
        genres={this.props.genres}
        tags={this.props.tags}
        genresAdded={this.props.selectedGenres}
        tagsAdded={this.props.selectedTags}
        toggle={this.state.toggle}
        onInputChange={this.onInputChange}
        handleGenderChange={this.handleGenderChange}
        handleButtonClick={this.handleButtonClick}
        saveButtonIsShowing={this.state.saveButtonIsShowing}
        handleSaveFormData={this.handleSaveFormData}
        menuIsOpen={this.state.menuIsOpen}
        handleClickMenuToggle={this.handleClickMenuToggle}
      />
    );
  }
}

const mapActions = (dispatch) => ({
  getGenresDispatchAction: () => dispatch(getGenres()),
  getTagsDispatchAction: () => dispatch(getTags()),
  updateSelectedGenresDispatchAction: (genres) =>
    dispatch(updateSelectedGenres(genres)),
  updateSelectedTagsDispatchAction: (tags) =>
    dispatch(updateSelectedTags(tags)),
  postListenerPreferenceDispatchAction: (payload, navigateToPath) =>
    dispatch(postListenerPreferences(payload, navigateToPath)),
});

export default connect(
  preferencsSelector,
  mapActions,
)(ListenerPreferencesContainer);
