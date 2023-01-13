  
import os
from flask_admin import Admin
from .models import db, User, Category, Video, Like, PlayLater, Coment,Channel, PlayListItems
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Category, db.session))
    admin.add_view(ModelView(Video, db.session))
    admin.add_view(ModelView(Like, db.session))
    admin.add_view(ModelView(PlayLater, db.session))
    admin.add_view(ModelView(Coment, db.session))
    admin.add_view(ModelView(Channel, db.session))
    admin.add_view(ModelView(PlayListItems, db.session))

    

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))