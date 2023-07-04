const jwt = require('jsonwebtoken');

const JWT_SECRET = "lljsdfascdef#&$EJN!@@#JF$@"

const fetchuser = (req, res, next) => {
    //get the user from jwt token and id to jwt req obj 
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user
        next();
    } catch (error) {
        res.status(401).send({ error: "please authenticate using a valid token 2" })
    }
}

module.exports = fetchuser