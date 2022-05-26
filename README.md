
# react-seed-es6+ 
straight javascript seed starter project with redux, notifications, middleware in place

## current features

 

- api error handling and notification for errors

- block ui screen during http calls

- tasks displays both redux-saga and redux-promise

- mirror sends requests on a round trip to display error handling

- proxy handling to prevent CORS issues (see package.json proxy)

- notification popups via toastify ()


## IDE Dependancies
 

if using visual studio code, install the latest version, then install the extension: 
 
- ES7 React/Redux/-  GraphQL/React-Native snippetsds

[https://scotch.io/tutorials/the-best-react-extension-for-vs-code](https://scotch.io/tutorials/the-best-react-extension-for-vs-code)

- Jest: with this vs code will automatically run tests on files that change

 ## proxy configuration in Dev


in package.json, there is a proxy setting to reduce CORS issues during development. 


## backend


by default the project comes with the following backends that have a simple ToDo app:

 
- /server-koa: arguably better than express, support asynchronous calls. If you're more used to .Net this will probably be a pleasant surprise
    to run: in terminal, navigate to folder then:
    > npm i
    > npm start

    although it's bypassed for this example, note the following features:
    -- jwt auth capabilities with api for register, reset pass
    -- graphql path
    -- mongodb initialation wired in (requires install or connection link to mongodb)

- /server/net-server: (pending completion) run and install for the front end to reach an api 

### Backend Testing: 
 use the following postman public link to test the api independantly of front end:
 https://www.getpostman.com/collections/6a24df4d7cc7984ac429
  

## jest unit testing

In vs code install extension "jest", VS code will now automatically run tests and show in bottom left notificatin bar.

in windows command prompt, also run >npm run test to see colorized commentary of tests

tests are next to files as *.test.tsx

for a quick sample, in home.test.tsx, change the value in "it ('has a header')" from true to false

For more complex examples that use the redux store and mockups, look at todo*.test.tsx

## todo/requested features
- private routes based on user role

### library highlights

- axios
- lodash (array and null handling)
- moment (better date handling)
- sass (adds support for scss files)
- react-toastify (adds notification pop ups)
- redux
- redux-promise (redux middleware for simple api calls)
- redux-saga (middleware for more complex api calls or data massaging)
- react-hook-form
- yup 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
