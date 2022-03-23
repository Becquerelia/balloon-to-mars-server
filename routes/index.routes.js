const router = require("express").Router();
const isAuthenticated = require("../middleware/isAuthenticated")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//"AUTH" ROUTES:
const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes);

//"PROFILE" ROUTES:
const profileRoutes = require("./profile.routes")
router.use("/profile", isAuthenticated, profileRoutes);

//"OBSERVATORY" ROUTES:
const observatoryRoutes = require("./observatory.routes")
router.use("/observatory", observatoryRoutes);

//"GALLERY" ROUTES:
const galleryRoutes = require("./gallery.routes")
router.use("/image-gallery", galleryRoutes);

//"PIC OF THE DAY" ROUTES:
const picOfTheDayRoutes = require("./pic-day.routes")
router.use("/pic-of-the-day", picOfTheDayRoutes);

//"ASTRONOMICAL EVENTS" ROUTES:
const eventsRoutes = require("./events.routes")
router.use("/astronomical-events", eventsRoutes);

//"SEND EMAIL" ROUTES:
const sendEmailRoutes = require("./send-email.routes")
router.use("/send-email", sendEmailRoutes);

module.exports = router;
