from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
import yaml

app = Flask(__name__)
CORS(app)

@app.route("/login" , methods=['Get','POST','Delete'])
def login ():
    data = request.get_json()
    print(data)
    email = data ['email']
    password = data ['motdepasse']
    print(password)
    
    clien = MongoClient("mongodb+srv://zaynebsamaali:zayneb123@cluster0.hzdvpwq.mongodb.net/test")
    base= clien["Users"]
    collectionetu= base["comptesetudiants"]
    collectionprof= base["comptesprofesseurs"]
    collectionadmin = base["superadmin"]
    collectioncoordinateur = base["coordinateur"]
    usr1=collectionprof.find_one({"email":email,'password':password})
    usr2=collectionetu.find_one({"email":email,'password':password})
    usr3=collectionadmin.find_one({"email":email,'password':password})
    usr4=collectioncoordinateur.find_one({"email":email,'password':password})
    if usr1 is not None:
        print ("professeur  inscrit")
        return jsonify({ 'val':"valide",'role':'prof'})
    elif usr2 is not None:
    
        print ("etudiant inscrit")
        return jsonify({ 'val':"valide",'role':'etu'})
    elif usr3 is not None :
         print ("c'est l'admin")
         return jsonify({ 'val':"valide",'role':'admin'})
    elif usr4 is not None :
        print("c'est le coordinateur")
        return jsonify({ 'val':"valide",'role':'coor'})

    else:
        print ("user not found")
        return jsonify ({'val': 'nonvalide'})

@app.route("/signup" ,methods=['GET','POST','DELETE'])

def sign():
    data = request.get_json()
    print(data)
    
    username =data['nomprenom']
    email = data ['email']
    password = data ['password']
   
    client = MongoClient("mongodb+srv://zaynebsamaali:zayneb123@cluster0.hzdvpwq.mongodb.net/test")
    db = client["Users"]
    collectionetu = db["etudiants"]
    collectionprof= db["professeurs"]
    usr1=collectionprof.find_one({"email":email})
    
    usr2= collectionetu.find_one({"email":email})

    if usr1 is not None:
        print ("professeur  trouvé")
        tab=usr1['niveau']
        tabb=usr1['groupe']
        
        #coll = db["comptes-professeurs"]
        db.comptesprofesseurs.insert_one({'nom':username,'email':email,'password': password,'niveau':tab,'groupe':tabb})
        
        return jsonify({ 'val':"valide"})
    elif  usr2 is not None:
         print ("etudiant trouvé")
         niv = usr2['niveau']
         grp = usr2['groupe']
   
        
         #colll = db["comptes-etudiants"]
         db.comptesetudiants.insert_one({'nom':username,'email':email,'password': password,'niveau':niv,'groupe':grp})
         return jsonify({  'val' : "valide"})
         
    else :
        print ("user not found")
        return jsonify ({'val': 'nonvalide'})
