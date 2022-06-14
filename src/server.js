'use strict';
const json = require('../data.json')
const express = require('express');
// single Instance or singletons
const app = express(); 

const PORT = process.env.PORT || 3002;

app.get('/',(req,res) =>{
  res.status(200).send('Welcome Fellow Students');
});

app.get('/api',(req,res)=>{
  res.status(200).send(json)
})


function start(){
  app.listen(PORT, ()=> console.log(`I\M listening on port ${PORT} dude`))
}


module.exports = {app,start};
//  same as {
//   app: app,
//   start: start;
// }