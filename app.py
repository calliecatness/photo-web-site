""" photo web application """

from flask import Flask, render_template, jsonify
import jsonpickle

""" photo tile class """
class PhotoTile:

    def __init__(self):
        self.photo_tile_id = 0
        self.normal_url = ""
        self.hover_url = ""
        self.caption = ""


app = Flask(__name__)


@app.route('/api/photo-tiles', methods=['GET'])
def get_all_photo_tiles():

    photoTile = PhotoTile()
    photoTile.photo_tile_id = 1
    photoTile.normal_url = "static/images/hawaii_bw.jpg"
    photoTile.hover_url = "static/images/hawaii_color.jpg"
    photoTile.caption = "Hawaii"

    photoTile2 = PhotoTile()
    photoTile2.photo_tile_id = 2
    photoTile2.normal_url = "static/images/hawaii_bw.jpg"
    photoTile2.hover_url = "static/images/hawaii_color.jpg"
    photoTile2.caption = "Hawaii"

    photoTile3 = PhotoTile()
    photoTile3.photo_tile_id = 3
    photoTile3.normal_url = "static/images/hawaii_bw.jpg"
    photoTile3.hover_url = "static/images/hawaii_color.jpg"
    photoTile3.caption = "Hawaii"

    photoTile4 = PhotoTile()
    photoTile4.photo_tile_id = 4
    photoTile4.normal_url = "static/images/hawaii_bw.jpg"
    photoTile4.hover_url = "static/images/hawaii_color.jpg"
    photoTile4.caption = "Hawaii"

    return jsonpickle.encode([photoTile, photoTile2, photoTile3, photoTile4], unpicklable=False)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
