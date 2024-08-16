const express = require("express");

const UserController = require("../controllers/userController");

const router = express.Router();

router.get("/users",UserController.getAllUsers);
router.get("/users/add-user",UserController.getAddUserView);
router.post("/users/add-user",UserController.createUser);

module.exports = router;