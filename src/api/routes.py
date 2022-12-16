"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Category, Video, Like, PlayLater, Coment
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

#TODOS LOS GETS
@api.route('/user', methods=['GET'])
def get_users():

    users = User.query.all()
    data = [user.serialize() for user in users]
    
    return jsonify(data), 200

@api.route('/category', methods=['GET'])
def get_categories():

    categories = Category.query.all()
    data = [category.serialize() for category in categories]
    
    return jsonify(data), 200

@api.route('/video', methods=['GET'])
def get_videos():

    videos = Video.query.all()
    data = [video.serialize() for video in videos]
    
    return jsonify(data), 200

@api.route('/like', methods=['GET'])
def get_likes():

    likes = Like.query.all()
    data = [like.serialize() for like in likes]
    
    return jsonify(data), 200

@api.route('/playLater', methods=['GET'])
def get_playLaters():

    playLaters = PlayLater.query.all()
    data = [playLater.serialize() for playLater in playLaters]
    
    return jsonify(data), 200

#TODOS LOS POST