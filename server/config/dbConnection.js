const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log("Yay connected to db !");
  })
  .catch((error) => {
    console.log("Error", error);
  });
