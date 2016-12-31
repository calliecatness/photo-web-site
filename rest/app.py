"""Photo Web Application"""

import jsonpickle
from flask import Flask, g

from db import get_db
from models.photo_tile import PhotoTile

app = Flask(__name__)

@app.teardown_appcontext
def close_db(error):
    """Closes the database again at the end of the request."""
    if hasattr(g, 'db'):
        g.db.close()

@app.route('/api/photo-tiles', methods=['GET'])
def get_all_photo_tiles():
    """Gets all of the photo tiles."""

    photo_tiles = []

    with get_db() as conn:

        photo_tiles_cur = conn.cursor()
        photo_tiles_cur.execute("""
            select
                id as photo_tile_id,
                caption,
                normal_url,
                hover_url
            from
                photo_tiles;
        """)

        for photo_tile_result in photo_tiles_cur.fetchall():
            photo_tiles.append(PhotoTile(*photo_tile_result))

        photo_tiles_cur.close()

    return jsonpickle.encode(photo_tiles, unpicklable=False)


if __name__ == '__main__':
    app.run(debug=True)
