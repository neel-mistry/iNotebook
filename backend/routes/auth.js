const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "lljsdfascdef#&$EJN!@@#JF$@"

// ROUTE 1: Create a user using: POST "api/auth/createuser". No login required 
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 1 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
    // If there is error, return bad req and errors
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {
            //Check whether email exists already
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ errors: "Sorry, a user with this email already exists" });
            }
            var salt = await bcrypt.genSaltSync(10);
            var secPass = await bcrypt.hash(req.body.password, salt)
            user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email
            })

            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET)
            res.json({ authToken })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error");
        }
    } else {
        return res.status(400).json({ errors: result.array() });
    }
})

// ROUTE 2: Create a user using: POST "api/auth/login". No login required 
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter password').exists()
], async (req, res) => {
    let success = false;
    // If there is error, return bad req and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: "Invalid credentials !user" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            success = false;
            return res.status(400).json({ success, errors: "Invalid credentials !password compare" });
        } else {
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET)
            success = true
            res.json({ success, authToken })
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3: Create a user using: POST "api/auth/getuser". Login required 
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router