'use strict';
const router = require('express').Router();
const adminArtistMock = require('../mocks/adminArtists.json');

const adminArtistRoute = () => {
    router.get('/', async(req, res) => {
        res.status(200).json(adminArtistMock.get);
    });

    router.get('/:id', async (req, res) => {
        if(req.params.id === 'unavailable'){
            res.status(404).json({
                message: 'Artist not found'
            });
        }else{
            res.status(200).json(adminArtistMock.getById);
        }
    });

    router.post('/', async (req, res) => {
        res.status(201).json(adminArtistMock.post);
    });

    router.patch('/:id', async (req, res) => {
        if(req.params.id === 'unavailable'){
            res.status(404).json({
                message: 'Artist not found'
            });
        }else{
            res.status(202).json(adminArtistMock.getById);
        }
    });

    router.delete('/:id', async (req, res) => {
        if(req.params.id === 'unavailable'){
            res.status(404).json({
                message: 'Artist not found'
            });
        }else{
            res.status(200).json(adminArtistMock.getById);
        }
    });

    return router;
}

module.exports = adminArtistRoute;