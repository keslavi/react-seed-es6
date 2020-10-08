# koa server for Todo application 

if you encounter problems compiling, you might have to globally uninstall and reinstall babel-cli.  version ^7 required

[https://www.codementor.io/@michaelumanah/how-to-set-up-babel-7-and-nodemon-with-node-js-pbj7cietc]

## supports:
- ES6 syntax via babel-cli v7+
- graphql
- jwt authentication and simple user logging  (but disabled for purposes of todo demo )


##mongodb  will need to be configured; see the /config file for more. currently just sitting there waiting.

## TODO Testing
for simplicity, the todo "database" consists of two json files:
- /data/options.json: holds the dropdown options
- /data/todo.json: holds the todo items. 

note that some companies don't implement full rest and perform updates, creates, deletes through a single POST. I'm coding towards that option in both the backend and the front end.

to test in postman or some restful tester, 

- open data/todo.json for viewing as it changes
- using localhost:/5000/api/todo as root endpoint, make the following requests:
-- List:        Get /   returns all items
-- Retrieve:    Get /2  returns todo item id 2
-- Update:      POST    Body= a single item from list or retrieve, change the subject line
-- Create       POST    Body= id=0, change other properties such as subject
-- Delete       POST    Body= using item from Create, add the property "delete": "delete"

you should see todos.json modify on the update statements.

