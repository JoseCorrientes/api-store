const express = require("express");

const prueba = require("../components/prueba/prueba.routes");
const getProductType = require("../components/productType/getProductType/getProductType.routes");
const addProductType = require("../components/productType/addProductType/addProductType.routes");
const deleteProductType = require("../components/productType/deleteProductType/deleteProductType.routes");

const getAuthor = require("../components/author/getAuthor/getAuthor.routes");
const addAuthor = require("../components/author/addAuthor/addAuthor.routes");
const deleteAuthor = require("../components/author/deleteAuthor/deleteAuthor.routes");

const getPublisher = require("../components/publisher/getPublisher/getPublisher.routes");
const addPublisher = require("../components/publisher/addPublisher/addPublisher.routes");
const deletePublisher = require("../components/publisher/deletePublisher/deletePublisher.routes.js");

const routes = (app)=>{
    app.use('/', prueba);
    
    app.use('/getProductType', getProductType);
    app.use('/addProductType', addProductType);
    app.use('/deleteProductType', deleteProductType);

    app.use('/getAuthor', getAuthor);
    app.use('/addAuthor', addAuthor);
    app.use('/deleteAuthor', deleteAuthor);

    app.use('/getPublisher', getPublisher);
    app.use('/addPublisher', addPublisher);
    app.use('/deletePublisher', deletePublisher);
}

module.exports = routes;
