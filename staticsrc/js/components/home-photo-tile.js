import React from 'react';

import { PhotoTile } from '../models/photo-tile';

export class HomePhotoTile extends React.Component {

    static propTypes = {
        photoTile: React.PropTypes.instanceOf(PhotoTile)
    };

    constructor(props) {
        super(props);

        this.state = {
            classNames: ['photo-tile']
        };
    }

    selectPhoto = () => {
        this.setState({
            classNames: this.state.classNames.concat('photo-selected')
        });
    };

    render() {

        return <div data-photo-tile-id={this.props.photoTile.id} className={this.state.classNames.join(' ')} onClick={this.selectPhoto}>
            <img className="photo-normal" src={this.props.photoTile.normalUrl}
                alt={this.props.photoTile.caption} />
            <img className="photo-hover" src={this.props.photoTile.hoverUrl} 
                alt={this.props.photoTile.caption} />
            <h2>{this.props.photoTile.caption}</h2>
        </div>;
    }

}