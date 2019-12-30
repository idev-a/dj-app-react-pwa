import React, { Component } from 'react';
import ListenerPreferencesComponent from '../../components/ListenerPreferences/ListenerPreferencesComponent';

class ListenerPreferencesContainer extends Component {
    state = {
        hitRequestBox: false,
        proRequestBox: false,
        genresList: false,
        tagsList: false,
        genresAdded: [],
        tagsAdded: [],
        toggle: "closed",
        covered: ""
    };

    handleClickRequestBoxes = (e) => {
        const el = e.target;
        if (el.id === "hitRequestBox") {
            if (this.state.hitRequestBox === true) {
                this.setState({
                    hitRequestBox: false
                })
            } else {
                this.setState({
                    hitRequestBox: true
                })
            }
        } else {
            if (this.state.proRequestBox === true) {
                this.setState({
                    proRequestBox: false
                })
            } else {
                this.setState({
                    proRequestBox: true
                })
            }
        }
    }

    handleClickToggleAddList = (e, type) => {
        const el = e.target;
        if (type === "genres") {
            if (this.state.genresList === true) {
                this.setState({
                    genresList: false,
                    tagsList: false
                })
            } else {
                this.setState({
                    genresList: true,
                    tagsList: false
                })
            }
        } else {
            if (this.state.tagsList === true) {
                this.setState({
                    genresList: false,
                    tagsList: false
                })
            } else {
                this.setState({
                    genresList: false,
                    tagsList: true
                })
            }
        }
    }

    handleClickAddGenres = (e, genre) => {
        if (!this.state.genresAdded.includes(genre)) {
            const newList = this.state.genresAdded.concat(genre);
            this.setState({
                genresAdded: newList
            })
        } else {
            const newList = this.state.genresAdded.filter(index => index !== genre);
            this.setState({
                genresAdded: newList
            })
        }
    }

    handleClickAddTags = (e, tag) => {
        if (!this.state.tagsAdded.includes(tag)) {
            const newList = this.state.tagsAdded.concat(tag);
            this.setState({
                tagsAdded: newList
            })
        } else {
            const newList = this.state.tagsAdded.filter(index => index !== tag);
            this.setState({
                tagsAdded: newList
            })
        } 
    }

    handleClickMenuToggle = (e) => {
        if (this.state.toggle === "closed") {
            this.setState({
                toggle: "open",
                covered: "covered"
            })
        } else {
            this.setState({
                toggle: "closed",
                covered: ""
            })
        }
    }

    render() {
        return (
            <ListenerPreferencesComponent 
                handleClickRequestBoxes={this.handleClickRequestBoxes}
                handleClickToggleAddList={this.handleClickToggleAddList}
                handleClickAddGenres={this.handleClickAddGenres}
                handleClickAddTags={this.handleClickAddTags}
                handleClickMenuToggle={this.handleClickMenuToggle}
                hitRequestBox={this.state.hitRequestBox}
                proRequestBox={this.state.proRequestBox}
                genresList={this.state.genresList}
                tagsList={this.state.tagsList}
                genresAdded={this.state.genresAdded}
                tagsAdded={this.state.tagsAdded}
                toggle={this.state.toggle}
                covered={this.state.covered}
            />
        );
    }
}

export default ListenerPreferencesContainer;