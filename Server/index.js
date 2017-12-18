const express = require("express");
const app = express();
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const mainCtrl = require("./mainCtrl");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    db.run("select * from products").then(products => {
      if (!products.length) {
        db
          .init_table()
          .then(console.log)
          .catch(console.log);
      }
    });
    app.set("db", db);
  })
  .catch(console.log);

app.post("/api/product", mainCtrl.createProduct);
app.get("/api/products", mainCtrl.getProducts);
app.get("/api/products/:id", mainCtrl.getProductById);
app.put("/api/products/:id", mainCtrl.updateProduct);
app.delete("/api/products/:id", mainCtrl.deleteProduct);

app.listen(port, console.log(`:) I'm listening! :) on port ${port}`));
