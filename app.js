const express = require("express");

const app = express();


app.use('/add-product', (req, res, next) => {
    console.log("In add product middleware");
    res.send('<h1>Add Product</h1>');
  });
  
app.use('/', (req, res, next) => {
  console.log("In another middleware");
  res.send('<h1>Hello World</h1>');
});



app.listen(3001);
