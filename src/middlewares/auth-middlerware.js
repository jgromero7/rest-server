const authMiddleware = {};

const jwtService = require('../services/jwt-service');

authMiddleware.isAuth = (req, res, next) => {
    if (!req.headers.authorization) {
        // 403 Access Denied
        return res.status(403).send({ message: 'Access Deneid'});
    }

    const token = req.headers.authorization;
    jwtService.decodeToken(token)
        .then(response => {
            req.user = response;
            next();
        })
        .catch(response => {
            res.status(response.status).send({message: response.message});
        });
}

module.exports = authMiddleware;