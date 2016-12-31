""" photo web application """

import os
from datetime import datetime

import jsonpickle
import psycopg2
from flask import Flask, g

from models.photo_tile import PhotoTile

app = Flask(__name__)


def connect_db():
    return psycopg2.connect(os.environ['PHOTO_WEB_SITE_DB_CONN_STR'])


def get_db():
    """Open a new database connection if there is not one for the application context"""
    if not hasattr(g, 'db'):
        g.db = connect_db()
    return g.db


@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request"""
    if hasattr(g, 'db'):
        g.db.close()


@app.after_request
def add_header(response):
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Last-Modified'] = datetime.now()
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '-1'
    return response


@app.route('/api/photo-tiles', methods=['GET'])
def get_all_photo_tiles():

    photo_tiles = []

    with get_db() as conn:

        photo_tiles_cur = conn.cursor()
        photo_tiles_cur.execute("select id as photo_tile_id, caption, normal_url, hover_url from photo_tiles;")

        for photo_tile_result in photo_tiles_cur.fetchall():
            photo_tile = PhotoTile(*photo_tile_result)
            photo_tiles.append(photo_tile)

        photo_tiles_cur.close()

    return jsonpickle.encode(photo_tiles, unpicklable=False)


if __name__ == '__main__':
    app.run(debug=True)
