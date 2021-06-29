'use strict';
const router = require('express').Router();
const brandMock = require('../mocks/brands.json');

const brandRoute = () => {
    router.get('/', async(req, res) => {
        res.status(200).json(brandMock.get);
    });

    router.get('/:brand_id', async (req, res) => {
        res.status(200).json(brandMock.getById);
    });

    return router;
}

module.exports = brandRoute;