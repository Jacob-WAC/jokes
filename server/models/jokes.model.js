const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [10, "needs to be ten characters or more"],
    },
    punchline: {
        type: String,
        minlength: [10, "needs to be ten characters or more"],
    },
});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;
