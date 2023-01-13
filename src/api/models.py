
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Channel(db.model):
    id = db.Column(db.Integer, primary_key=True)
    channelId = db.Column(db.String(120), unique=True, nullable=False)
    channelBanner = db.Column(db.String(120), unique=True, nullable=False)
    channelTitle = db.Column(db.String(80), unique=True, nullable=False)
    playList = 

    def __repr__(self):
        return f'<Channel {self.channelTitle}>'

    def serialize(self):
        return {
            "id": self.id,
            "channelId": self.channelId,
            "channelBanner": self.channelBanner,
            "channelTitle": self.channelTitle

        }

class PlayListItems(db.model):
    id = db.Column(db.Integer, primary_key=True)
    playListId = db.Column(db.String(120), unique=True, nullable=False)
    playListTitle = db.Column(db.String(80), unique=True, nullable=False)
    playListDescription = db.Column(db.String(120), unique=True, nullable=False)
    playListPosition = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return f'<PlayListItems {self.playListTitle}>'

    def serialize(self):
        return {
            "id": self.id,
            "playListId": self.playListId,
            "playListTitle": self.playListTitle,
            "playListDescription": self.playListDescription,
            "playListPosition": self.playListPosition
        }
          

class Video(db.model):
    id = db.Column(db.Integer, primary_key=True)
    videoId = db.Column(db.String(120), unique=True, nullable=False)
    videoTitle = db.Column(db.String(80), unique=True, nullable=False)
    videoDescription = db.Column(db.String(120), unique=True, nullable=False)
    videoPlayer = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f'<Video {self.videoTitle}>'

    def serialize(self):
        return {
            "id": self.id,
            "videoId": self.videoId,
            "videoTitle": self.videoTitle,
            "videoDescription": self.playvideoDescription,
            "videoPlayer": self.videoPlayer
        }


    

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
    category_youtube_id = db.Column(db.String(120), unique=True, nullable=False)
    
    def __repr__(self):
        return f'<Category {self.category}>'

    def serialize(self):
        return {
            "id": self.id,
            "category": self.category,
        }

class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    url = db.Column(db.String(120), unique=True, nullable=False)
    api_id = db.Column(db.Integer, unique=True, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)
    category = db.relationship(Category)
    
    def __repr__(self):
        return f'<Video {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
        }

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
    video = db.relationship(Video)
    
    def __repr__(self):
        return f'<Coments {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "coment": self.coment,
        }
