// import json-server package
const jsonServer = require('json-server');
// create json server
const mediaPlayerServer = jsonServer.create();
// create a connection to db.json file
const router = jsonServer.router('db.json');
// setup middleware to handle request and response
const middleware = jsonServer.defaults();
// use this middleware.
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

const port= 5000;
mediaPlayerServer.listen(port,()=>{
    console.log(`Media player running at http://localhost:${port}`);
})