import React from 'react';
import ReactDOM from 'react-dom';
import keyMirror from 'key-mirror';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';

import { HomePhotoTile } from './components/home-photo-tile';
import { PhotoTile } from './models/photo-tile';

import "../css/site.scss";

const actionTypes = keyMirror({
    REFRESH_PHOTO_TILES_REQUEST: null,
    REFRESH_PHOTO_TILES: null
});

const createRefreshPhotoTilesRequestAction = () => ({
    type: actionTypes.REFRESH_PHOTO_TILES_REQUEST
});

const createRefreshPhotoTilesAction = photoTiles => ({
    type: actionTypes.REFRESH_PHOTO_TILES,
    photoTiles
});

const refreshPhotoTiles = () => {

    return dispatch => {

        dispatch(createRefreshPhotoTilesRequestAction());
        fetch('/api/photo-tiles')
            .then(res => res.json())
            .then(photoTilesData =>
                dispatch(createRefreshPhotoTilesAction(
                    photoTilesData.map(photoTileData => {
                        const photoTile = new PhotoTile();
                        photoTile.id = photoTileData.photo_tile_id;
                        photoTile.normalUrl = photoTileData.normal_url;
                        photoTile.hoverUrl = photoTileData.hover_url;
                        photoTile.caption = photoTileData.caption;
                        return photoTile;
                    }))));

    };

};

const reducer = (state = { photoTiles: [] }, action) => {
    switch (action.type) {
        case actionTypes.REFRESH_PHOTO_TILES_REQUEST:
            return state;
        case actionTypes.REFRESH_PHOTO_TILES:
            return Object.assign({}, state, { photoTiles: action.photoTiles });
        default:
            return state;
    }
};

const appStore = createStore(reducer, applyMiddleware(thunk));

const mapStateToProps = (storeState) =>
    ({ photoTiles: storeState.photoTiles });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ refreshPhotoTiles }, dispatch);

class App extends React.Component {

    propsTypes = {
        refreshPhotoTiles: React.PropTypes.func,
        photoTiles: React.PropTypes.arrayOf(
            React.PropTypes.instanceOf(PhotoTile)),
    }

    componentDidMount() {
        this.props.refreshPhotoTiles();
    }

    render() {

        return <div>
            {this.props.photoTiles
                .filter((photoTile, index) => index % 3 === 0)
                .map((photoTile, index) =>
                    <section key={index}>
                        {this.props.photoTiles
                            .slice(this.props.photoTiles.indexOf(photoTile), this.props.photoTiles.indexOf(photoTile)+3)
                            .map(photoTile =>
                                <HomePhotoTile
                                    key={photoTile.id}
                                    photoTile={photoTile} />
                        )}
                    </section>
            )}
        </div>;
    }

}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <AppContainer store={appStore} />,
    document.querySelector('main')
);

