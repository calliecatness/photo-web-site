import { actionTypes } from '../action-types';

export const photoTilesReducer = (state = { photoTiles: [] }, action) => {
    switch (action.type) {
        case actionTypes.REFRESH_PHOTO_TILES_REQUEST:
            return state;
        case actionTypes.REFRESH_PHOTO_TILES:
            return Object.assign({}, state, { photoTiles: action.photoTiles });
        default:
            return state;
    }
};