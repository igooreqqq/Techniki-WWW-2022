const express = require("express");
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");
const {validateToken} = require('../middlewares/AuthMiddleware')
const {sign} = require('jsonwebtoken');

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        });
        res.json("succes");
    });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    //sprawdza czy user jest w bazie
    const user = await Users.findOne({ where: { username: username }})

    if (!user) res.json({error: "User doesn't exist"});
    else {
        bcrypt.compare(password, user.password).then(async (match) => {
            if (!match) res.json({error: "Wrong username or password"});
            else {
                const accessToken = sign({username: user.username, id: user.id}, 
                    "importantsecret"
                    );
                res.json({ token: accessToken, username: username, id: user.id });
            }
        });
    }
    
});

router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
});

module.exports = router;