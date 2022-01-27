const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    folder_path: {
        type: String,
        required: [true, "Please add a path"],
    },
    image_name: {
        type: String,
        required: [true, "Please add a path"],
    },
});

module.exports = mongoose.model("Image", ImageSchema);
