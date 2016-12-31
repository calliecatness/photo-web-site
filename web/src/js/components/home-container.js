import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { refreshPhotoTiles } from '../actions/photo-tiles';
import { Home } from './home';

const mapStateToProps = (storeState) =>
    ({ photoTiles: storeState.photoTiles });

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ refreshPhotoTiles }, dispatch);


export const HomeContainer =
    connect(mapStateToProps, mapDispatchToProps)(Home);