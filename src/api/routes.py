"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Category, Video, Like, PlayLater, Coment, Channel, PlayListItems
from api.utils import generate_sitemap, APIException
import requests # libreria para realizar peticiones youtube
import os  #libreria para trabajar con el sistema operativo

api = Blueprint('api', __name__)



@api.route('/prueba', methods=['POST'])
def get_prueba():
    
    API_KEY = os.getenv("YOUTUBE_API_KEY") # Recuperamos la apikey del fichero .env (importante que esté presente en el .env)

    id_list = request.json.get('id') # recuperamos el id de la playlist desde postman {"id": "xxxxxxxxxx"}

    response = requests.get(f'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id={id_list}&key={API_KEY}')

    data = response.json()
    # data['items'][0]['snippet']['channelId']
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

        lista = PlayListItems(playlistid=id_list, playlisttitle=title, thumbnails=url, channel_id=channel.id )
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
            video = Video(videoid=video_id, videotitle=video_title, videodescription=video_description, playlistitems_id=lista.id)
            db.session.add(video)
            db.session.commit()
      
      
    return jsonify({"message":"ok"}), 200






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