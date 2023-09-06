const express = require('express');
const route = express.Router();
const controller=require('../controllers/compoundController');
const {validator}=require('../middleware/validation');
const {inputSchema,getSchema}=require('../middleware/schemas')

route.get('/compound',controller.getAllCompounds);
route.get('/compound/:id',controller.getCompound);
route.put('/compound/:id',validator(inputSchema),controller.updateCompound);
route.post('/compound',validator(inputSchema),controller.addCompound);
route.delete('/compound/:id',controller.deleteCompound);

module.exports=route;