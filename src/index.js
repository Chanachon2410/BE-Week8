const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser'); 
const cors = require("cors");
const productRoute = require('./routes/product.route');
const categoriesRoute = require('./routes/categories.route');
const registerRoute = require('./routes/register.route');


app.use('/images', express.static('images'));
// CORS cross origin resource sharing
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Sawasdee");
});


// ใช้ productRoute เมื่อ request ขึ่นต้นด้วย /products
app.use("/products", productRoute);
app.use("/categories", categoriesRoute);
app.use("/register", registerRoute);

app.listen(port, () => {
    console.log("App stared at port: " + port);
});