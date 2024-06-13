const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const auth_router = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const router = require("./routes/authRoutes");
const path = require("path");
const platform_router = require("./routes/platformRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());
router.use(cookieParser());
platform_router.use(express.json());
app.use(cors());
auth_router.use(cors());

app.use(express.static(path.join(__dirname, "../teach-easy/dist")));
app.use("/", auth_router);
app.use("/", platform_router);

const PORT = process.env.PORT || 8080;
const database = "mongodb+srv://seelennebel:ad13kg8401jf81.f9@ak-cluster.maesoyq.mongodb.net/?retryWrites=true&w=majority&appName=Ak-Cluster";

mongoose.connect(database)
.then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../teach-easy/dist", 'index.html'));
});