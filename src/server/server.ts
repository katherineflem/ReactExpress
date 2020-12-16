// import * as path from 'path';
import * as express from 'express';
import apiRouter from './helloroute'; //where "world" is coming from
//this is where all your routes conjoin 
const app = express(); //initiate express 

//USE THE MIDDLEWARE AND ROUTES
app.use(express.static('public'));//dont have to do the path join thing
app.use(apiRouter);

// APP LISTEN ON PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
