const User = require('../models/user');
const userController = {};

//Retrieve all roles
userController.getUsers = function (req, res) {
    User.find({}).sort('-year').exec((err, users) => {
        if (err) return res.status(500).send({ message: 'Error returning data.' });

        if (!users) return res.status(404).send({ message: 'There are no users to show.' });

        return res.status(200).send({
            users,
            message: 'OK, Users shown correctly.'
        });
    });
    /*if (id.match(/^[0-9a-fA-F]{24}$/)) {
        const users = await User.find();
        res.json(users);
    }*/
   
}

//Create rol
userController.createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        position: req.body.position
    });
    await user.save();
    res.json({
        status: 'User saved'
    });
}

//Recover a single Role
userController.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    return res.status(200).send({
        user,
        message: 'OK, User shown correctly.'
    });
}

//Update Rol
userController.editUser = async (req, res) => {
    const { id } = req.params;
    const user = {
        username: req.body.username,
        password: req.body.password,
        position: req.body.position
    };
    await User.findByIdAndUpdate(id, { $set: user }, { new: true });
    return res.status(200).send({
        user,
        message: 'OK, User modify correctly.'
    });
}

//Delete rol
userController.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    return res.status(200).send({
        message: 'OK, User deleted correctly.'
    });
}

module.exports = userController;