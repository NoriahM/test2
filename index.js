const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

//const adminRouter = require("./routes/admin");

const PORT = 3000;
const app = express();
const DB="mongodb+srv://Noriah:test1234@cluster0.zizvslh.mongodb.net/?retryWrites=true&w=majority"

const authRouter = require("./routes/auth.js");
const userRouter = require("./routes/user.js");
// middleware
app.use(express.json());
app.use(authRouter);
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(adminRouter);
//app.use(productRouter);
app.use('/api/signup',userRouter);




// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});

