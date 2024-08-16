const User = require("../models/userModel");

exports.createUser = async (req, res) => {
    try{
    const {userName, email, password} = req.body;
    const user = await User.create({userName, email, password});
    res.redirect ("/users");
    } catch (error){
        res.status(500).json({message: error.message});
    }

}

exports. getAllUsers = async (req, res) => {
    try{
        const users = await User.findAll(); // SELECT * FROM users
        res.status(200).render('user',{users: users, pageTitle: "All Users"});

    }catch (error){
        res.status(500).json({message: error.message});
    }
}

exports.getAddUserView = async (req, res) => {
    res.status(200).render('adduser', {pageTitle: "Add User"});
}
