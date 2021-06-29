'use strict';
const router = require('express').Router();
const adminArtistMock = require('../mocks/adminArtists.json');

const adminArtistRoute = () => {
    router.get('/', async(req, res) => {
        res.status(200).json(adminArtistMock.get);
    });

    router.get('/:id', async (req, res) => {
        res.status(200).json(adminArtistMock.getById);
    });

    router.post('/', async (req, res) => {
        res.status(201).json(adminArtistMock.post);
    });

    return router;
}

module.exports = adminArtistRoute;