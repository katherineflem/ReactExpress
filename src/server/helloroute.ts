import * as express from 'express';
//this is a route to get the api and output the world
const router = express.Router();// create router

//REQUEST ROUTES
router.get('/api/hello', (req, res, next) => { //you name the 
    res.json('You');

});

export default router;