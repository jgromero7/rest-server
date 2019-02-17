const auth = {};
const jwtService = require('../services/jwt-service');
const User = require('../models/User');

auth.signIn = async(req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({email: email});
	if ( !user ) {
		return res.status(404).send({ message: 'User not found'});
	} else {
		const match = await user.matchPassword(password);
		if ( !match ) {
			return res.status(400).send({ message: 'Incorrect Password' });
		}else{
            user.password = '********************'
            res.status(200).send({ message: 'Login Successfuly', data: {user: user, token: jwtService.createToken(user)} });
		}
	}
}

auth.signOut = (req, res) => {
    res.send({message: 'SinIn'});
}

module.exports = auth;