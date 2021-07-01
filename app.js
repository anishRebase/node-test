'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const artistRoute = require('./routes/artist');
const adminArtistRoute = require('./routes/adminArtists');
const brandRoute = require('./routes/brands');

const checkToken = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization !== 'invalid') {
        next();
    }else if(req.headers.authorization && req.headers.authorization === 'invalid'){
        return res.status(403).json({
            message: 'You do not have necessary permissions for the resource'
        })
    } else {
        console.log('else condtion')
        return res.status(401).json(
            {
                "message": "No authorization token was found"
            }
        );
    };
};

app.all('*', checkToken);
app.use(cors());

app.get('/livecheck', (req, res) => res.status(200).json('Livecheck Working'));
app.use('/artists', artistRoute());
app.use('/brands', brandRoute());
app.use('/admin/artists', adminArtistRoute());

let port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`Tackll Service is running on port ${port}`);
});
