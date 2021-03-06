from app import app  # noqa
from app.models import db, Users  # Ratings, Categories, Comment, Lessons
# from app.models import Topics, Versions

# from app.util import assets  # noqa


# This is used for debug only
# type `flask shell` at the venv prompt, and python will start with
# app, db, User, Rating etc. already imported


@app.shell_context_processor
def make_shell_context():
    return {
        'db': db,
        'Users': Users,
        # 'Ratings': Ratings,
        # 'Categories': Categories,
        # 'Comment': Comment,
        # 'Lessons': Lessons,
        # 'Topics': Topics,
        # 'Versions': Versions,
    }
