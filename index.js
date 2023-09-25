import express from "express";
import bodyParser from "body-parser";
import productsRouter from "./src/routes/products.js";

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/products", productsRouter);
app.use('/images', express.static('images'));


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});