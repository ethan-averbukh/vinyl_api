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

//req.body is allowed because of the middleware functionality (express.json)
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

//Update selected document based on id of document
router.patch('/vinylUpdate/:id', async (req, res)=>{
    const updatedVinyl = await Vinyl.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json({
        status: 200,
        msg: `Selected Vinyl was updated: ${updatedVinyl}`
    })

})
// Delete selected vinyl based on id of document.
router.delete('/:id', async (req,res)=>{
    const deletedVinyl = await Vinyl.findByIdAndDelete(req.params.id);
    res.json({
        status: 200,
        msg: `Selected Vinyl was deleted: ${deletedVinyl}`
    })
})

module.exports = router;
