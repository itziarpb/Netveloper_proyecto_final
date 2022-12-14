from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nickname = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    bio = db.Column(db.String(80), unique=False, nullable=False)
    img = db.Column(db.String(80), unique=False, nullable=True)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
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

class Video(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    url = db.Column(db.String(120), unique=True, nullable=False)
    api_id = db.Column(db.Integer, unique=True, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    category = db.relationship(Category)
    
    def __repr__(self):
        return f'<Video {self.title}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
        }

class Likes(db.Model):
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

class Coments(db.Model):
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
