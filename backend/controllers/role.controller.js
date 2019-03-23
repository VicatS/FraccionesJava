const Rol = require ('../models/role');
const roleController = {};

//Retrieve all roles
roleController.getRoles = async (req, res) => {
    const roles = await Rol.find();
    res.json(roles);
}

//Create rol
roleController.createRole = async (req, res) => {
    const rol = new Rol({
        name: req.body.name,
        description: req.body.description
    });
    await rol.save();
    res.json({
        status: 'Rol saved'
    });
}

//Recover a single Role
roleController.getRole = async (req, res) => {
    const rol = await Rol.findById(req.params.id);
    return res.status(200).send({
        rol,
        message: 'OK, Rol shown correctly.'
    }); 
}

//Update Rol
roleController.editRole = async (req, res) => {
    const { id } = req.params;
    const rol = {
        name: req.body.name,
        description: req.body.description
    };
    await Rol.findByIdAndUpdate(id, {$set: rol}, { new: true});
    return res.status(200).send({
        rol,
        message: 'OK, Rol modify correctly.'
    }); 
}

//Delete rol
roleController.deleteRole = async (req, res) => {
    await Rol.findByIdAndRemove(req.params.id);
    return res.status(200).send({
        message: 'OK, Rol deleted correctly.'
    }); 
}

module.exports = roleController;