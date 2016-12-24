export class PhotoTile {

    constructor() {
        this._id = undefined;
        this._normalUrl = undefined;
        this._hoverUrl = undefined;
        this._caption = undefined;
    }

    get id() { return this._id; }
    set id(value) { this._id = value; }

    get normalUrl() { return this._normalUrl; }
    set normalUrl(value) { this._normalUrl = value; }

    get hoverUrl() { return this._hoverUrl; }
    set hoverUrl(value) { this._hoverUrl = value; }

    get caption() { return this._caption; }
    set caption(value) { this._caption = value; }
}