import { actionTypes } from '../action-types';
import { PhotoTile } from '../models/photo-tile';

export const createRefreshPhotoTilesRequestAction = () => ({
    type: actionTypes.REFRESH_PHOTO_TILES_REQUEST
});

export const createRefreshPhotoTilesAction = photoTiles => ({
    type: actionTypes.REFRESH_PHOTO_TILES,
    photoTiles
});

export const refreshPhotoTiles = () => {

    return dispatch => {
        dispatch(createRefreshPhotoTilesRequestAction());
        fetch('/api/photo-tiles')
            .then(res => res.json())
            .then(photoTilesData => {
                dispatch(createRefreshPhotoTilesAction(
                    photoTilesData.map(photoTileData => {
                        const photoTile = new PhotoTile();
                        photoTile.id = photoTileData.photo_tile_id;
                        photoTile.normalUrl = photoTileData.normal_url;
                        photoTile.hoverUrl = photoTileData.hover_url;
                        photoTile.caption = photoTileData.caption;
                        return photoTile;
                    })
                )); 
            });

    };

};