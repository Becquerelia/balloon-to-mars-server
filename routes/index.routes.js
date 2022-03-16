const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//WEATHER ROUTES:
const weatherRoutes = require("./weather.routes")
router.use("/weather", weatherRoutes);

//GALLERY ROUTES:
const galleryRoutes = require("./gallery.routes")
router.use("/image-gallery", galleryRoutes);

//ASTRONOMICAL EVENTS ROUTES:
const eventsRoutes = require("./events.routes")
router.use("/astronomical-events", eventsRoutes);

module.exports = router;
