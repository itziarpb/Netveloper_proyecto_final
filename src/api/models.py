
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=True)
    bio = db.Column(db.String(80), unique=False, nullable=True)
    img = db.Column(db.String(80), unique=False, nullable=True)

    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username
        }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(120), unique=True, nullable=False)
    
    def __repr__(self):
        return f'<Category {self.category}>'

    def serialize(self):
        return {
            "id": self.id,
            "category": self.category,
        }

class Channel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    channelid = db.Column(db.String(120), unique=True, nullable=False)
    channelbanner = db.Column(db.String(120), unique=True, nullable=False)
    channeltitle = db.Column(db.String(80), unique=True, nullable=False)    

    def __repr__(self):
        return f'<Channel {self.channeltitle}>'

    def serialize(self):
        return {
            "id": self.id,
            "channelid": self.channelid,
            "channelbanner": self.channelbanner,
            "channeltitle": self.channeltitle
        }

class PlayListItems(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    playlistid = db.Column(db.String(120), unique=True, nullable=False)
    playlisttitle = db.Column(db.String(80), unique=True, nullable=False)
    #playlistdescription = db.Column(db.String(120), unique=True, nullable=False)
    #playlistposition = db.Column(db.Integer, unique=True, nullable=False)
    thumbnails = db.Column(db.String(120), unique=True, nullable=False)
    channel_id = db.Column(db.Integer, db.ForeignKey('channel.id'), nullable=False)
    #category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    #category = db.relationship('Category', backref='playlistitems' lazy=True)

    def __repr__(self):
        return f'<PlayListItems {self.playlisttitle}>'

    def serialize(self):
        return {
            "id": self.id,
            "playlistid": self.playlistid,
            "playlisttitle": self.playlisttitle,
        }
          

class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    videoid = db.Column(db.String(120), unique=True, nullable=False)
    videotitle = db.Column(db.String(80), unique=True, nullable=False)
    videodescription = db.Column(db.Text, unique=False, nullable=False)
    #playlistitems_id = db.Column(db.Integer, db.ForeignKey('play_list_items.id'), nullable=False)


    def __repr__(self):
        return f'<Video {self.videotitle}>'

    def serialize(self):
        return {
            "id": self.id,
            "video_id": self.videoid,
            "videotitle": self.videotitle,
            "videodescription": self.videodescription,
            #"playlistitems": self.play_list_items
           
        }


    



class Category(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(80), unique=True, nullable=False)
    
    def __repr__(self):
        return f'<Category {self.category}>'

    def serialize(self):
        return {
            "id": self.id,
            "category": self.category,
        }


#class Video(db.Model): (Te la dejo comentada, no se si usaremos algún parámetro de esta que creaste)
    #id = db.Column(db.Integer, primary_key=True)
    #title = db.Column(db.String(120), unique=True, nullable=False)
    #url = db.Column(db.String(120), unique=True, nullable=False)
    #api_id = db.Column(db.Integer, unique=True, nullable=False)
    #category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    #category = db.relationship(Category)
    
    #def __repr__(self):
        #return f'<Video {self.title}>'

    #def serialize(self):
        #return {
            #"id": self.id,
            #"title": self.title,
        #}

class Like(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    video_id = db.Column(db.Integer, db.ForeignKey('video.id'))
    user = db.relationship(User)
    video = db.relationship(Video)

    def serialize(self):
        return {
            "id": self.id,
            # serialize algo mas?
        }

class PlayLater(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    video_id = db.Column(db.Integer, db.ForeignKey('video.id'))
    user = db.relationship(User)
    video = db.relationship(Video)


    def serialize(self):
        return {
            "id": self.id,
            # serialize algo mas?
        }

class Coment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    coment = db.Column(db.String(120), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    video_id = db.Column(db.Integer, db.ForeignKey('video.id'))
    user = db.relationship(User)
    
    def __repr__(self):
        return f'<Coments {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "coment": self.coment,
        }
