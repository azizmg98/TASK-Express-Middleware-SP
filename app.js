const express = require("express");
const cors = require("cors");
const connectDb = require("./database");
const productsRoutes = require("./api/products/routes");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
connectDb();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.protocol, req.hostname, req.path);
});

// Routes
app.use("/products", productsRoutes);

app.listen(process.env.PORT || 5000);
