import React from 'react';

import { HomePhotoTile } from '../components/home-photo-tile';
import { PhotoTile } from '../models/photo-tile';

export class Home extends React.Component {

    static propTypes = {
        refreshPhotoTiles: React.PropTypes.func,
        photoTiles: React.PropTypes.arrayOf(
            React.PropTypes.instanceOf(PhotoTile)),
    }

    componentDidMount() {
        this.props.refreshPhotoTiles();
    }

    render() {

        return <div className="photo-tile-grid">
            {this.props.photoTiles
                .filter((photoTile, index) => index % 3 === 0)
                .map((photoTile, index) =>
                    <div className="photo-tile-row" key={index}>
                        {this.props.photoTiles
                            .slice(
                                this.props.photoTiles.indexOf(photoTile), this.props.photoTiles.indexOf(photoTile)+3
                            )
                            .map(photoTile =>
                                <HomePhotoTile
                                    key={photoTile.id}
                                    photoTile={photoTile} />
                        )}
                    </div>
            )}
        </div>;
    }

}
