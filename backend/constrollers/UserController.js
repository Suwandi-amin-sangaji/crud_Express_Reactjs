import User from "../models/UserModel.js";


export const getUsers = async(req, res) => {
    try {
        const Response = await User.findAll();
        res.status(200).json(Response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserById = async(req, res) => {
    try {
        const Response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(Response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = async(req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({msg:"success Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async(req, res) => {
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"success Updates"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) => {
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"success Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}