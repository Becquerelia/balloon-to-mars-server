//MIDDLEWARE FOR USER ACCESS:
const isLoggedIn = (req, res, next) => {
    if (req.payload.role === "user") {
      next()
    } else {
        res.status(401).json({errorMessage: "You don't have permission to navigate to this route. Please login to continue."})
    }
  }
  
  module.exports = isLoggedIn