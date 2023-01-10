

const app = require('./app.js')

const mongoose = require('mongoose');


mongoose
  .connect("mongodb://localhost:27017/sp20-bcs-103")
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(4000, () => {
  console.log("server is running on port 4000");
});


