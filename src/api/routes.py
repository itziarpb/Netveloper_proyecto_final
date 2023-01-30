"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from datetime import timedelta
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Video, Like, PlayLater, Coment, Channel, PlayListItems, Category
from api.utils import generate_sitemap, APIException
import requests # libreria para realizar peticiones youtube
import os  #libreria para trabajar con el sistema operativo
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity #añadido para hacer el login



api = Blueprint('api', __name__)




#POST PARA INTRODUCIR LOS DATOS A LA BASE DE DATOS A TRAVES DE POSTMAN O SIMILAR
@api.route('/addinfo', methods=['POST'])
def get_addinfo():
    
    API_KEY = os.getenv("YOUTUBE_API_KEY") # Recuperamos la apikey del fichero .env (importante que esté presente en el .env)

    id_list = request.json.get('id') # recuperamos el id de la playlist desde postman {"id": "xxxxxxxxxx"}
    category_tag = request.json.get('category') #Opcion uno creada por Jose :recuperamos la categoria de la playlist
    category = Category.query.filter_by(category=category_tag).first()
    if not category:
        category = Category(category=category_tag)
        db.session.add(category)
        db.session.commit()

    response = requests.get(f'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id={id_list}&key={API_KEY}')


    data = response.json()
    # data['items'][0]['snippet']['channelId'] (otra variante para el código de debajo)
    channel_id = data.get('items')[0].get('snippet').get('channelId')
    
    # Buscamos toda la informacion del channel en youtube
    channel_response = requests.get(f'https://youtube.googleapis.com/youtube/v3/channels?part=brandingSettings&id={channel_id}&key={API_KEY}')
    channel_data = channel_response.json()
    channel_title = channel_data.get('items')[0].get('brandingSettings').get('channel').get('title')    
    channel_image = channel_data.get('items')[0].get('brandingSettings').get('image').get('bannerExternalUrl')
    
    
   

    # Buscar en nuestra base de datos si exite un channel con ese id, si no existe ningun lo creamos de lo contrario no creamos nuevamente el channel
    channel = Channel.query.filter_by(channelid=channel_id).first()
    if not channel:
        channel = Channel(channelid=channel_id, channelbanner=channel_image, channeltitle=channel_title)
        db.session.add(channel)
        db.session.commit()

    

    # Buscamos en nuestra base de datos si existe la playlist
    lista = PlayListItems.query.filter_by(playlistid=id_list).first()

    if not lista:
        title = data.get('items')[0].get('snippet').get('title') # titulo de la playlist
        url = data.get('items')[0].get('snippet').get('thumbnails').get('medium').get('url') # url de la imagen de la playlist
        
        lista = PlayListItems(playlistid=id_list, playlisttitle=title, thumbnails=url, channel_id=channel.id, category_id=category.id )
        db.session.add(lista)
        db.session.commit()

    # Buscamos en youtube todos los videos de una lista
    response_videos = requests.get(f'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=id&playlistId={id_list}&key={API_KEY}')
    data_videos = response_videos.json()

    list_of_videos = data_videos.get('items') # array de videos
    
    for element in list_of_videos:
        video_id = element.get('snippet').get('resourceId').get('videoId')
        video_title = element.get('snippet').get('title')
        video_description = element.get('snippet').get('description')

        # Buscamos en la base de datos si existe el video
        video=Video.query.filter_by(videoid=video_id).first()

        if not video:
            video = Video(videoid=video_id, videotitle=video_title, videodescription=video_description, playlistitems_id=lista.id, category_id=category.id)
            db.session.add(video)
            db.session.commit()
      
      
    return jsonify({"message":"ok"}), 200


#POST PARA LOGIN
@api.route('/login', methods=['POST'])
def login():
    data = request.json
    
    user = User.query.filter_by(email=data['email'], password=data['password']).first()
    if user:
        #expires = datetime.timedelta(minutes=600)
        token = create_access_token(identity=user.id ) #fresh= False expires_delta=datetime.timedelta(minutes=5)
        #return jsonify(data), 200 #devuelve el dato
        return jsonify({"access_token": token}), 200
    
    return jsonify({"message": "Email/contraseña incorrecta"}), 400

#GET RESTRINGIDO DEL USUARIO
@api.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    return jsonify(user.serialize()), 200

#GET DE LOS CANALES PARA EL JUMBOTRON
@api.route('/channel', methods=['GET'])
def get_channels():

    channels = Channel.query.all()
    data = [channel.serialize() for channel in channels]
    
    return jsonify(data), 200

#GET DE LAS CATEGORIAS PARA LOS CARRUSELES
@api.route('/category', methods=['GET'])

def get_category():

    categories = Category.query.all()
    data = [category.serialize() for category in categories]
    
    return jsonify(data), 200

#GET DE LAS PLAYLIST
@api.route('/playlists', methods=['GET'])
def get_playlists():

    playlists = PlayListItems.query.all()
    data = [playlist.serialize() for playlist in playlists]
    
    return jsonify(data), 200

#GET DE LOS VIDEOS
@api.route('/video', methods=['GET'])
def get_videos():

    videos = Video.query.all()
    data = [video.serialize() for video in videos]
    
    return jsonify(data), 200


@api.route('/playlist/<int:id>', methods=['GET'])
def get_videosbyplaylist(id):

    videos = Video.query.filter_by(playlistitems_id=id)
    data = [video.serialize() for video in videos]
    
    return jsonify(data), 200


@api.route('/like', methods=['POST'])
@jwt_required()
def like_video():
    data = request.json
    userid = get_jwt_identity()
    like = Like(video_id=data["video_id"], user_id=userid)
    db.session.add(like)
    db.session.commit()


@api.route('/like/<id>', methods=['GET'])
@jwt_required()
def get_likes(id):
    userid = get_jwt_identity()
    like = Like.query.filter_by(user_id=userid, video_id=id).first()
    
    return jsonify(like.serialize() if like else None), 200

@api.route('/playLater/<id>', methods=['GET'])
@jwt_required()
def get_playLaters(id):
    userid = get_jwt_identity()
    playLater = PlayLater.query.filter_by(user_id=userid, video_id=id).first()    

@api.route('/like', methods=['GET'])
@jwt_required()
def get_likes():
    userid = get_jwt_identity()
    likes = Like.query.filter_by(user_id=userid)
    data = [like.serialize() for like in likes]
    
    return jsonify(data), 200

    

#GET RESTRINGIDO DE LOS VIDEOS PARA VER MAS TARDE
@api.route('/playLater', methods=['GET'])
@jwt_required()
def get_playLaters():
    userid = get_jwt_identity()
    playLaters = PlayLater.query.filter_by(user_id=userid)
    data = [playLater.serialize() for playLater in playLaters]
    
    return jsonify(playLater.serialize() if playLater else None), 200


@api.route('/playLater/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_character(id):
    try:
        user_id = get_jwt_identity()
        me = PlayLater.query.filter_by(id=id).first()
        db.session.delete(me)
        db.session.commit()
        message = {"message": "Video eliminado de play later"}
    except Exception as e:
        message = {"message": "El video no se encuentra en favoritos"}

    return jsonify(message)

@api.route('/playLater', methods=['POST'])
@jwt_required()
def save_playLater():
    data = request.json
    userid = get_jwt_identity()
    playLater = PlayLater(video_id=data["video_id"], user_id=userid)
    db.session.add(playLater)
    db.session.commit()

    return jsonify({"mensaje": "guardado para más tarde correctamente"})

@api.route('/playLater', methods=['DELETE'])
@jwt_required()
def delete_playLater():
    data = request.json
    userid = get_jwt_identity()
    playLater = PlayLater(video_id=data["video_id"], user_id=userid)
    db.session.delete(playLater)
    db.session.commit()

    return jsonify({"mensaje": "borrado de ver más tarde correctamente"})

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




