"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Category, Video, Like, PlayLater, Coment, Channel, PlayListItems
from api.utils import generate_sitemap, APIException
#añadido para hacer el login
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity 


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

#POST PARA REGISTRARSE
@api.route('/user', methods=['POST'])
def register_user():  
    try:
        data = request.json
        user = User(username=data["username"], email=data["email"], password=data["password"])
        db.session.add(user)
        db.session.commit()
    except Exception as e:
        print(e)
        return jsonify({"message": "No se pudo registrar"}), 400
    return jsonify({"message": "Usuario registrado"}), 200

#POST PARA LOGIN
@api.route('/login', methods=['POST'])
def login():
    data = request.json
    
    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if user:
        token = create_access_token(identity=user.id)
        #return jsonify(data), 200 #devuelve el dato
        return jsonify({"access_token": token}), 200
    
    return jsonify({"message": "Email/contraseña incorrecta"}), 400

@api.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    return jsonify(user.serialize()), 200