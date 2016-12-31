"""Database Connection Library"""

import os
import psycopg2
from flask import g

def connect_db():
    """Connect to the database."""
    return psycopg2.connect(os.environ['PHOTO_WEB_SITE_DB_CONN_STR'])


def get_db():
    """Opens a new database connection if there is not one for the application context."""
    if not hasattr(g, 'db'):
        g.db = connect_db()
    return g.db
