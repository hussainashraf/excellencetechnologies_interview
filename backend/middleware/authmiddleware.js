const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SCR;

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(401).send('Access Denied');
    }
    
    try {
        // Remove 'Bearer ' from the token if present
        const tokenString = token.startsWith('Bearer ') ? token.slice(7) : token;
        
        // Verify the token
        const decoded = jwt.verify(tokenString, JWT_SECRET);
        
        // Add the decoded user information to the request object
        req.user = decoded;
        
        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
};

module.exports = authMiddleware;