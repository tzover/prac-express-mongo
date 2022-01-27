const express = require("express");
const dotenv = require("dotenv");
const imageRouter = require("./routes/images");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
connectDB();

const app = express();
app.use(express.json());
app.use("/api/images", imageRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(
        `App listening on port ${PORT}! with mode ${process.env.NODE_ENV}`
    );
});
