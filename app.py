""" photo web application """

from flask import Flask, render_template, jsonify
import jsonpickle
import psycopg2

class PhotoTile:
    """ photo tile class """

    def __init__(self):
        self.photo_tile_id = 0
        self.normal_url = ""
        self.hover_url = ""
        self.caption = ""


app = Flask(__name__)


@app.route('/api/photo-tiles', methods=['GET'])
def get_all_photo_tiles():

    photo_tiles = []

    connArgs = [
        "dbname=photo_web_site",
        "user=photo_web_site",
        "password=demo123!"
    ]

    conn = psycopg2.connect(' '.join(connArgs))

    cur = conn.cursor()

    cur.execute("SELECT * FROM photo_tiles;")
    photo_tile_results = cur.fetchall()

    for photo_tile_result in photo_tile_results:
        photo_tile = PhotoTile()
        photo_tile.photo_tile_id = 1
        photo_tile.normal_url = "static/images/hawaii_bw.jpg"
        photo_tile.hover_url = "static/images/hawaii_color.jpg"
        photo_tile.caption = "Hawaii"
        photo_tiles.append(photo_tile)

    conn.commit()

    cur.close()
    conn.close()

    return jsonpickle.encode(photo_tiles, unpicklable=False)


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
