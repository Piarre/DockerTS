from flask import Flask
from redis import Redis, RedisError
import os
import socket

# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route("/")
def hello():
    try:
        # Increment on visit
        visites = redis.incr("increment")
        # If Redis has errorr
    except RedisError:
        visites = "<i>Error while connect to Redis, increment unaible</i>"

    html = "<h3>Hello {name}!</h3>" \
           "<b>Hostname :</b> {hostname}<br/>" \
           "<b>Visites :</b> {increment} <br/>" \
    return html.format(nom=os.getenv("NOM", "youtube"), hostname=socket.gethostname(), increment=increment)

# Run server on localhost
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)