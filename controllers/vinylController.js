const express = require("express");
const router = express.Router();

const Vinyl = require("../models/Vinyl.js");

router.get("/", async (req, res) => {
  const vinyls = await Vinyl.find({});
  res.json({
    status: 200,
    data: vinyls,
  });
});

//req.body is allowed because of the middleware functionality
router.post("/", async (req, res) => {
    const vinyl = req.body;
    await Vinyl.create({
        artists: vinyl.artists,
        album: vinyl.album
    });
    res.json({
        status:200,
        data: vinyl
    });
});

module.exports = router;
