const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaletteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    colors: [
        {
            one: {
                type: String,
                required: true,
            },
            two: {
                type: String,
                required: true,
            },
            three: {
                type: String,
                required: true,
            },
            four: {
                type: String,
                required: true,
            },
            five: {
                type: String,
                required: true,
            },
        },
    ],
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "users",
            },
        },
    ],
    saved: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "users",
            },
        },
    ],
});

module.exports = Palette = new mongoose.model("palettes", UserSchema);
