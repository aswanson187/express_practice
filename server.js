const express = require("express");
const PORT = 3000;
const app = express();

//routes
const productsRouter = require("./routes/products");
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("hello!! :)");
});

app.listen(PORT, () => {
  console.log("Server started on port: ", PORT);
});
