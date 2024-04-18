const express = require("express")
const mongoose = require("mongoose")
const { UserModel } = require("./models/user")
const app = express();
const dashRouter = require("./routes/dashboard");
const router = require("./routes/users");
const productrouter = require("./routes/products");
const orderRouter = require("./routes/order");
var cors = require('cors');
const path = require("path");
require("dotenv").config();

const bodyParser = require("body-parser");
router.use(bodyParser.json());


mongoose.connect(process.env.mongoURL)
    .then(() => console.log('Connected!'));

app.use(express.json());
app.use(cors())
app.use("/user", router)
app.use("/products", productrouter)
app.use("/order", orderRouter)
app.use("/dashboard", dashRouter)


app.use(express.static(path.join(__dirname, './frontend/dist')));
app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, "./frontend/dist/index.html"), function (err) {
        res.status(500).send(err, 'error hay bro')
    })
})
// app.get('/', (req, res) => {
//     app.use(express.static(path.resolve(__dirname, "frontend", "dist")));

//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
// })
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("server is running"))
