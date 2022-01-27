const express = require("express");
const Image = require("../models/image");
const router = express.Router();

// params, query, body,
// query => (select, sort, page, limit)

router.get("/", async (req, res, next) => {
    console.log(req.query);
    const images = await Image.find();

    res.status(200).json({
        success: true,
        msg: "Get All data",
        data: images,
    });
});

router.get("/:id", (req, res, next) => {
    console.log(req.params);
    const image = Image.findById(req.params.id);
    // console.log(reqparams);

    res.status(200).json({
        success: true,
        msg: `Get a data ${req.params.id}`,
        data: image,
    });
});

router.get("/:id/:id2/test", (req, res, next) => {
    console.log(req.params);
    const reqparams = req.params;
    console.log(reqparams);

    res.status(200).json({
        success: true,
        msg: `Get a data ${req.params.id} & ${req.params.id2}`,
    });
});

router.post("/", async (req, res, next) => {
    console.log(req.body);
    const image = await Image.create(req.body);
    res.status(200).json({
        success: true,
        data: image,
    });
});

// app.put("/:id", (req, res, next) => {
//     res.status(200).json({
//         success: true,
//         msg: "Change a data",
//     });
// });
// app.delete("/", (req, res, next) => {
//     res.status(200).json({
//         success: true,
//         msg: "Delete a data",
//     });
// });

module.exports = router;
