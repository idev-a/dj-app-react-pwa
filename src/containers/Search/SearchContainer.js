import React, { useCallback, useState, useEffect } from "react";
import { connect } from "react-redux";
import SearchComponent from "../../components/Search/SearchComponent";
import {
  getCategorizedListeners,
  searchListeners
} from "../../state/actions/searchActions";

const SearchContainer = ({
  categorizedListeners,
  searchResults,
  getCategorisedListenersDispatchAction,
  postSearchListenersDispatchAction
}) => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    getCategorisedListenersDispatchAction();
  }, [getCategorisedListenersDispatchAction]);

  useEffect(() => {
    if (searchValue.length > 0) {
      postSearchListenersDispatchAction(searchValue);
    }
  }, [postSearchListenersDispatchAction, searchValue]);

  const handleInputChange = useCallback(e => {
    setSearchValue(e.target.value);
  }, []);



  return (
    <SearchComponent
      searchValue={searchValue}
      searchResults={searchResults}
      onInputChange={handleInputChange}
      data={categorizedListeners}
    />
  );
};

const dispatchActions = dispatch => ({
  getCategorisedListenersDispatchAction: () =>
    dispatch(getCategorizedListeners()),
  postSearchListenersDispatchAction: searchQuery =>
    dispatch(searchListeners(searchQuery))
});

export default connect(
  state => ({
    categorizedListeners: state.search.categorizedListeners,
    searchResults: state.search.searchResults
  }),
  dispatchActions
)(SearchContainer);

// Please advise ends here
