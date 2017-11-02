# A basic tutorial around Postgres + Express

A tutorial on how to connect these pieces together. To get the server and postgres instance, we'll use Heroku for the first time.

Quick Start Guide

1. Make an app on heroku and provision a postgres instance. You should be able to find the space to provision a postgres instance on the resources tab in the dashboard. (you may have to search for it)
2. In resources, click on your postgres instance and look for the manual credentials button.
3. In this repo, fill in config.js with the fields from step 2. The port will always be default 5432
```js
module.exports = {
    db: {
        host: '',
        port: 5432,
        user: '',
        password: '',
        database: '',
    }
}

```
4. After you have finished setting up the config run the following commands
```js
npm i
node seed.js
npm start
```
5. You can now access your API from localhost:3000


Future steps
- Deploy to heroku...
```js
heroku git:remote -a your-heroku-project-name
git push heroku master
``` 
- You can find more instructions on how to do this here: https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction and https://devcenter.heroku.com/articles/git
This should work out of the box!