//MIDDLEWARE FOR ADMIN ACCESS:

const isAdmin = (req, res, next) => {
    if (req.payload.role === "admin"){
        next()
    } else {
        res.status(401).json({errorMessage: "You don't have permission to navigate to this route. Please login as administrator to continue."})
    }
}

module.exports = isAdmin