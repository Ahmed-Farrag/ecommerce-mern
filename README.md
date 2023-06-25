> npm init --y
> npm i express --save

- create server.js:
  require express
  and create app from express
  and listen to port
  create simple route to check
  up app by nodemon => nodemon server
  or handle it in package.js => "script":{"dev":"nodemon server.js"} and write >npm run dev

- create config.env and add: >npm i dotenv
  PORT=8000
  NODE_ENV=development
  in server => require dotenv and config, use it

- create gitIgnore file:
  node_modules/
  config.env

- make logger to hhtp req by meddleware : morgan علشان يفيدني وانا شغال اشوف الحالة بتعتي

  1.npm i morgan
  2.require it
  3.call it as middleware before routes in development mode

- mongoDB Atlas & compass
  1.create cluster in atlas
  2.go to collection in cluster and create one
  3.go to database access => add new user and create username, password and in db user privileges => read and write to any db - then take username, password and db_user in config.env
  4.go to network access => 0.0.0.0/0
  4.connect to cluster by mongo compase to link and past it in compas connection

- connect app with mongodb by mongoose in config/databse.js
  npm i mongoose
  require
  connect with db and take link from mongo atlas => connect by application and put link in env

- create schema, create model and create route - in models/categoryModel.js
- make middelware for parsing

- make CRUD Operation for Categories
