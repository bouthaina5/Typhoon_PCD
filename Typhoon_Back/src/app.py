from flask import Flask,jsonify,request,redirect,url_for
from pymongo import MongoClient

from flask_cors import CORS
from flask_json import FlaskJSON

app=Flask(__name__)
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
        db.comptesprofesseurs.insert_one({'nom':username,'email':email,'password': password,'niveau':tab,'groupe':tabb})
        
        return jsonify({ 'val':"valide"})
    elif  usr2 is not None:
         print ("etudiant trouvé")
         niv = usr2['niveau']
         grp = usr2['groupe']
         db.comptesetudiants.insert_one({'nom':username,'email':email,'password': password,'niveau':niv,'groupe':grp})
         return jsonify({  'val' : "valide"})
             
    else :
        print ("user not found")
        return jsonify ({'val': 'nonvalide'})
@app.route("/modules",methods=['GET','POST','DELETE'])
def module():
      data = request.get_json()
      print(data)
      nom=data['nommodule']
      nbr=data['nbrheures']
      obj=data['objectifs']
      comp=data['compétences']
      niv = data['niveau']
      sem = data['semester']
      res= data['responsable']
      cli = MongoClient("mongodb+srv://zaynebsamaali:zayneb123@cluster0.hzdvpwq.mongodb.net/test")
      base=cli['Banques-Questions']
      #db=cli['Users']
      #collec=['comptesprofesseurs']
      #collec.find_one()
      coll=base['Modules']
      coll.insert_one({'nom':nom,'nombreheures':nbr,'objectifs':obj,'compétences':comp,'niveau':niv,'responsablemodule':res,'semester':sem})
      return('hhhh')

@app.route('/carte',methods=['GET','POST','DELETE'])
def creation():
    cli = MongoClient("mongodb+srv://zaynebsamaali:zayneb123@cluster0.hzdvpwq.mongodb.net/test")
    base=cli['Banques-Questions']
    coll=base['Modules']
    données=[]
    for document in coll.find():
        #print (document)
        del document['_id']
        print (document)
        
        
      
        données.append(document)
    return jsonify({'données':données})
@app.route('/addbanque',methods=['GET','POST'])
def banque():

    
    cli = MongoClient("mongodb+srv://zaynebsamaali:zayneb123@cluster0.hzdvpwq.mongodb.net/test")
    base=cli['Banques-Questions']
    coll=base['Modules']
    tab=[]
    for document in coll.find():
        nom = document['nom']
        print(nom)
        tab.append(nom)
    return jsonify({'module':tab})
@app.route('/addbanque2',methods=['GET','POST'])
def add():

    

    data = request.get_json()
    print(data)
     #cli = MongoClient("mongodb+srv://zaynebsamaali:zayneb123@cluster0.hzdvpwq.mongodb.net/test")
    #base=cli['Banques-Questions']
    return ('hhhhh')
@app.route('/ban',methods=['GET','POST'])
def xxx():
      data = request.get_json()
      print(data)
      x= data['modulename']
      clii = MongoClient("mongodb+srv://zaynebsamaali:zayneb123@cluster0.hzdvpwq.mongodb.net/test")
      basee=clii['Banques-Questions']
      coll=basee['Banques']
      tab=[]
      for document in coll.find({'nom':x}):
        del document['_id']
        print(document)

        tab.append(document)
      return jsonify({'données':tab})
@app.route('/ques',methods=['GET','POST'])
def yyy():
    data = request.get_json()
    print(data)
    
    y=data['banquename']
    cli= MongoClient("mongodb+srv://zaynebsamaali:zayneb123@cluster0.hzdvpwq.mongodb.net/test")
    base=cli['Banques-Questions']
    coll=base['Questions']
    tab=[]
    for document in coll.find({'nbbanque':y}):
        del document['_id']
        print(document)
        tab.append(document)
    return jsonify({'données':tab})
@app.route('/question',methods=['GET','POST'])
def jibquest():
     data = request.get_json()
     print(data)



    




      





        


   
if __name__ == "__main__":
    app.debug =True
    app.run(debug =True )







     
   

     
   
        
        
        

    


    
   


         


      

    






    






    
    
    

  


    
    
   
    
    

   
   
    
    
   
        
         
            
                

        
        
         
          
        
        
       
        
        
        
    


  
        



   
   
          

        
    








    



    
   
    
    
   
   
  
    

    
    
  
    
     
    
        
   

   
   
    

      

      
      
      
      

       

    
   

    
    
    
  
    
    


    
   
  

    
    
    
    
    

    
    
     

    


    
  
  
   

    
    
   

     
      
        


      

           
    
   
    
        



     
        
   

    
   
   
   
       

    
    
   


   

   

