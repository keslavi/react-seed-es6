export const config = {
    'secret':'jeskavu'
   ,'databaseL': 'mongodb://localhost:27017/titlepawn2020'
   ,'databaseR': process.env.MONGODB_URI || 'zmongodb://heroku_gbd98pp3:f4lvig3oasidfoljg9r4l139cs@ds259609-a0.mlab.com:59609,ds259609-a1.mlab.com:59609/heroku_gbd98pp3?replicaSet=rs-ds259609'
   ,'mailAuth': {
     'username':'dev@evensteven.us',
     'password':'GrapeBird747'
   }
 }

 export default config;

 