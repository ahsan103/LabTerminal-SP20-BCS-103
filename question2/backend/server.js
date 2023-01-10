

const app = require('./app.js')
const cors = require('cors')
const mongoose = require('mongoose');
app.use(cors())

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


