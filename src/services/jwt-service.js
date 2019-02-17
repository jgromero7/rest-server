const jwtService = {};
const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/config');

jwtService.createToken = (user) => {
    const payload = {
        sub: user._id,
        iat: moment().unix(), //Create token
        exp: moment().add(1, 'days').unix(), // Expirate token
    }

    return jwt.encode(payload, config.SECRET_TOKEN);
}

jwtService.decodeToken = (token) => {
    const decode = new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN);
            
            if ( payload.exp < moment().unix() ) {
                reject({
                    status: 401,
                    message: 'The token to expirate'
                });
            }

            resolve(payload.sub);

        }catch (err) {
            reject({
                status: 400,
                message: 'Invalid Token'
            })
        }
    });

    return decode;
}

module.exports = jwtService;