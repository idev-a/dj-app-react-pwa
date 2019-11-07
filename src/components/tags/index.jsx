import React, {useState} from "react";
import {without} from "lodash";
import {Drawer} from "antd";
import genres from "../../containers/Preferences/genres";
import {TagIcon, X} from "../vectorComponents";

export const Tag = props => <div {...props} style={{
    borderRadius: 100,
    padding: '8px 16.4px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontSize: 12,
    background: props.bg || '#324A56',
    color: 'white',
    marginRight: 7,
    marginBottom: 7,
}} >
    <p style={{marginBottom: 0}}>{props.value}</p>
    {props.selected && <X />}
</div>

/* TODO normalize tags input */
export const TagsInput = props => {
    const [state, setState] = useState({visible: false,
        tags: [],
    });
    const onClose = () => setState({...state, visible: false})
    const showDrawer = () => {
        setState({
            ...state,
            visible: true,
        });
    }
    const selectedTags = <div style={{display: 'flex', flexWrap: 'wrap', margin: "18.5px 0" }}>
        {state.tags.map((genre, i) => <Tag
            value={genre}
            key={i}
            selected
            bg={!state.visible && '#D19C7B'}
            onClick={() => {
                setState({...state, tags: without(state.tags, genre)})
            }} />)}
    </div>
    return (
        <div style={{
            height: state.visible ? 550: 'auto',
            overflow: state.visible ?'hidden':"scroll",
            position: 'relative',
            borderRadius: 5,
            textAlign: 'center',
        }}>

            <button className={'field flex-field'} onClick={showDrawer}>
                Tap to see list
                <TagIcon/>
            </button>
            {!state.visible && selectedTags}
            <Drawer
                title="Tags list"
                // placement="bottom"
                closable={false}
                onClose={onClose}
                width={'100%'}
                visible={state.visible}
                getContainer={false}
                style={{ position: 'absolute', }}
                headerStyle={{display: 'none'}}
                bodyStyle={{ width: '100%'}}
                drawerStyle={{
                    background: '#1B3543',
                    color: 'white',
                    height: '100%',
                    top: '0 !important',
                    left: 0,

                }}
            >
                <div style={{display: 'flex', justifyContent: 'space-between', opacity: '.3', marginBottom: 25}}>
                    <p>Tap to Select</p>
                    <p onClick={onClose}>done</p>
                </div>
                <div>
                    {selectedTags}
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {genres.map((genre, i) => <Tag value={genre} key={i} onClick={() => {
                        if (!state.tags.includes(genre)){
                            setState({...state, tags: [...state.tags, genre]})
                        }
                    }} />)}
                </div>
            </Drawer>

        </div>
    )
}