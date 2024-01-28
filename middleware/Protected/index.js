const jwt  = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Token not provided' });
    }

    jwt.verify(token, 'Farooq0982j', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
        req.userId = decoded.id;
        next();
    });
};


module.exports = {
    verifyToken
}