const users = {};
const jwtService = require('../services/jwt-service');
const User = require('../models/User');

// Get
users.read =  async (req, res) => {
    const users = await User.find().sort({ date: 'desc' });

    res.status(200).send({ message: 'Read Users Successfuly', data: users });
}

// Get By ID
users.readByID = async (req, res) => {
    const id = req.params.id;
    await User.findById(id, (err, users) => {
        if ( err ) {
            res.status(404).send({ message: 'ID user not found', data: null });
        } else {
            res.status(200).send({ message: 'Read Users By ID Successfuly', data: users });
        }
    });
}

// Create
users.create = async (req, res) => {

    const { name, email, password, confirm_password } = req.body;

	errors = [];
	if ( password != confirm_password ) {
		errors.push({ text: 'Password do not match '})
	}
	if ( password.length < 4 ) {
		errors.push({ text: 'Password must be at least 4 characters' });
	}
	if ( errors.length > 0 ) {
		res.status(400).send({ message: errors, data: null });		
	} else {
		const emailUser = await User.findOne({email: email});
		
		if ( emailUser ) {
			res.status(400).send({ message: 'The email is already in use', data: null});
		} else {
			const newUser = new User({ name, email, password});
			newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            newUser.password = '********************';
            const token = jwtService.createToken(newUser);
            
			res.status(200).send({ message: 'You are registered successfuly', data: {user: newUser, token: token} });
		}
	}
}

// Update
users.update = async (req, res) => {
    const id = req.params.id;
    let { name, email, password, confirm_password } = req.body;

	errors = [];
	if ( password != confirm_password ) {
		errors.push({ text: 'Password do not match '})
	}
	if ( password.length < 4 ) {
		errors.push({ text: 'Password must be at least 4 characters' });
	}
	if ( errors.length > 0 ) {
		res.status(400).send({ message: errors, data: null });		
	} else {
        const users = await User.findById(id);
        if ( users ) {
            const users = new User();
            password = await users.encryptPassword(password);
            await User.findByIdAndUpdate(id, { name, email, password});
            const userUpdated = await User.findById(id);
            userUpdated.password = '********************';
            
            res.status(200).send({ message: 'User Updated Successfuly', data: userUpdated });
        } else {
            res.status(404).send({ message: 'ID user not found', data: null });
        }

	}
}

// Delete
users.delete = async (req, res) => {
    const id = req.params.id;
    
    const users = await User.findByIdAndDelete(id);
    if ( !users ) {
        res.satus(404).send({ message: 'ID user not found', data: users });
    } else {
        users.password = '********************';
        res.status(200).send({ message: 'Deleted User Succesfuly', data: users });
    }
}

module.exports = users;