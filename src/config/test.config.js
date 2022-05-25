//doing this to allow comments in json

export const config = { 
    httpHost:'http://localhost', //for axios
    api: 'http://localhost/api',
    //api: 'http://localhost:5000/api',
    reduxLogger: false, 
    env: 'local',
    debug: false, //flag for developer debugging messages and components
}

export default config;
