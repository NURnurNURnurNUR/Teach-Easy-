const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const auth_router = require("./routes/authRoutes");


const app = express();
app.use(cors());

app.use(express.json());
app.use("/", auth_router);

const PORT = process.env.PORT || 8080;
const database = "mongodb+srv://seelennebel:ad13kg8401jf81.f9@ak-cluster.maesoyq.mongodb.net/?retryWrites=true&w=majority&appName=Ak-Cluster";

mongoose.connect(database)
.then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
});