const jwt = require ("express-jwt")

const isAuthenticated = jwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ["HS256"],
    requestProperty: "payload",
    getToken: (req) => {
        if (req?.headers?.authorization?.split(" ")[0] === "Bearer"){
            const authToken = req.headers.authorization.split(" ")[1]
            return authToken
        } else {
            return null
        }
    }
})

module.exports = isAuthenticated